import React, { Children, createElement } from 'react';
import PropTypes from 'prop-types';
import { ObjectSchema } from 'yup';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const CustomForm = ({ schema, onSubmit, children, formReset = true, defaultValues }) => {
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = methods;

  async function formHandleSubmit(form) {
    await onSubmit(form);
    if (formReset) {
      reset();
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(formHandleSubmit)}>
        {Children.map(children, (child) =>
          child.props.id
            ? createElement(child.type, {
                ...{
                  ...child.props,
                  ...(child.props.isControl ? { control } : { ...register(child.props.id) }),
                  errors,
                  key: child.props.id,
                },
              })
            : child,
        )}
      </form>
    </FormProvider>
  );
};

CustomForm.propTypes = {
  schema: PropTypes.instanceOf(ObjectSchema).isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  formReset: PropTypes.bool,
  defaultValues: PropTypes.object,
};

export default CustomForm;
