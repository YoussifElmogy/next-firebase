import { useEffect, useState } from 'react';
import { useHttpHook } from '../../../hooks';

export default function useCategory(categoryId) {
  const { sendRequest, isLoading } = useHttpHook();
  const [category, setCategory] = useState();

  useEffect(() => {
    const fetchCategory = () =>
      sendRequest({
        url: `category/GetCategoryById/${categoryId}`,
      });

    (async () => {
      const response = await fetchCategory();
      if (response.tr) {
        const { id, ...rest } = response.tr;
        Object.assign(response, rest);
      }
      setCategory(response);
    })();
  }, []);

  return {
    isLoading,
    category,
  };
}
