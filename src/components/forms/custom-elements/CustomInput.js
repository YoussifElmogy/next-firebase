import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { get, isUndefined } from 'lodash';

import CustomFormLabel from './CustomFormLabel';
import CustomTextField from './CustomTextField';
import CustomErrorMessage from './CustomErrorMessage';

const CustomInput = forwardRef(
  ({ id, label, variant = 'outlined', errors, step, accept, ...rest }, ref) => {
    return (
      <>
        <CustomFormLabel htmlFor={id}>{label}</CustomFormLabel>
        <CustomTextField
          id={id}
          variant={variant}
          fullWidth
          error={!isUndefined(get(errors, id))}
          {...rest}
          inputProps={{
            ref,
            step,
            accept,
          }}
        />
        {errors && <CustomErrorMessage errors={errors} name={id} />}
      </>
    );
  },
);

CustomInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  rest: PropTypes.object,
  errors: PropTypes.object,
  step: PropTypes.string,
  accept: PropTypes.string,
};

export default CustomInput;
