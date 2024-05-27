import { useEffect, useState } from "react";

import axiosInstance, { ApiErrors, ApiMethods } from "../services/api.service";

const useHttpHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [controller, setController] = useState();

  useEffect(
    () => () => {
      if (controller && controller instanceof AbortController) {
        controller.abort();
      }
    },
    [controller]
  );

  const sendRequest = async ({
    url = "/",
    method = ApiMethods.GET,
    headers = {},
    body = {},
    isFormData = false,
    showAlertOnError = true,
    params = {},
  }) => {
    // reset error
    setError(undefined);

    // define a controller for this request
    const requestController = new AbortController();
    setController(requestController);

    // original headers passed to functions
    const apiHeaders = headers;
    apiHeaders.backOffice = true;

    // handling form data
    const formData = new FormData();
    if (isFormData) {
      apiHeaders["Content-Type"] = "multipart/form-data";
      Object.keys(body).forEach((key) => {
        formData.append(key, body[key]);
      });
    }

    let response;
    try {
      setIsLoading(true);
      response = await axiosInstance({
        url,
        method,
        headers: apiHeaders,
        data: isFormData ? formData : body,
        signal: requestController.signal,
        params,
      });
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
        if (showAlertOnError) alert.error(err.response.data.message);
      }
      if (
        err.response?.status === ApiErrors.UNAUTHORIZED &&
        !url.includes("auth/log-in")
      ) {
        dispatch(logout());
      } else {
        throw err;
      }
    } finally {
      if (!requestController?.signal?.aborted) setIsLoading(false);
    }

    return response;
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttpHook;
