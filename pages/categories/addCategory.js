import React, { useEffect, useState } from "react";
import { Box, Card } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useAddCategorySchema from "./_hooks/useAddCategorySchema";
import PageContainer from "@/components/container/PageContainer";
import CustomInput from "@/components/forms/custom-elements/CustomInput";
import CustomSwitch from "@/components/forms/custom-elements/CustomSwitch";
import { useHttpHook } from "@/hooks";
import { ApiMethods } from "@/services/api.service";
import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import CustomErrorMessage from "@/components/forms/custom-elements/CustomErrorMessage";

const AddCategory = () => {
  const { sendRequest, isLoading } = useHttpHook();
  const addCategorySchema = useAddCategorySchema();
  const { t } = useTranslation();
  useEffect(() => {}, []);

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(addCategorySchema),
    defaultValues: {
      sort: null,
      flag: "",
    },
  });

  const onSubmit = async (form) => {
    console.log({ form });
    try {
      await sendRequest({
        url: "category/CreateCategory",
        method: ApiMethods.POST,
        body: {
          ...form,
        },
      });
      alert.success(t("categories.addSuccessfully"));
      reset();
    } catch {
      console.log("error");
    }
  };

  return (
    <Box>
      <PageContainer
        title={t("categories.addCategory")}
        description={t("categories.addCategoryDesc")}
      >
        <Card>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="flag"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <ReactFlagsSelect
                    selected={value}
                    onSelect={(code) => onChange(code)}
                    placeholder="Select Country"
                    searchable
                    countries={["IL"]}
                    blacklistCountries
                    error={!!error}
                  />
                  {error && <CustomErrorMessage errors={errors} name="flag" />}
                </>
              )}
            />
            <CustomInput
              id="name"
              label={t("categories.categoryName")}
              errors={errors}
              {...register("name")}
            />
            <CustomInput
              id="description"
              label={t("categories.categoryDescription")}
              errors={errors}
              {...register("description")}
            />
            <CustomInput
              id="metaDescription"
              label={t("common.metaDescription")}
              errors={errors}
              {...register("metaDescription")}
            />
            <CustomInput
              id="sort"
              type="number"
              errors={errors}
              {...register("sort")}
              label={t("categories.categorySort")}
            />
            <CustomInput
              id="email"
              label={t("users.userEmail")}
              errors={errors}
              {...register("email")}
              autoComplete="current-email"
            />
            <CustomInput
              id="password"
              label={t("users.userPassword")}
              errors={errors}
              type="password"
              {...register("password")}
              autoComplete="current-password"
            />
            <CustomSwitch
              control={control}
              id="isActive"
              label={t("categories.categoryIsActive")}
            />
            <Box sx={{ mt: 2 }}>
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isLoading}
              >
                {t("common.submit")}
              </LoadingButton>
            </Box>
          </form>
        </Card>
      </PageContainer>
    </Box>
  );
};

export default AddCategory;
