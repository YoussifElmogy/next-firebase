import React from 'react';
import { Controller } from 'react-hook-form';

import { styled } from '@mui/material/styles';
import { Select } from '@mui/material';
import { isUndefined, isNull, get } from 'lodash';

import PropTypes from 'prop-types';

import CustomFormLabel from './CustomFormLabel';
import CustomErrorMessage from './CustomErrorMessage';

const CustomSelectComponent = styled((props) => <Select {...props} />)(({ theme }) => ({
  '& .MuiSelect-select': {
    color: '#767e89',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: `${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#dee3e9'}`,
  },
  '& .MuiSelect-select::-webkit-input-placeholder': {
    color: '#767e89',
    opacity: '1',
  },
}));

const CustomSelect = ({ id, label, control, children, errors, defaultValue, externalOnChange }) => (
  <>
    <CustomFormLabel htmlFor={id}>{label}</CustomFormLabel>
    <Controller
      control={control}
      name={id}
      defaultValue={defaultValue}
      render={({ field: { ref, onChange, value, ...field } }) => (
        <CustomSelectComponent
          fullWidth
          id={id}
          inputRef={ref}
          error={!isUndefined(get(errors, id))}
          onChange={(...args) => {
            if (externalOnChange) {
              externalOnChange(...args);
            }
            onChange(...args);
          }}
          value={isUndefined(value) || isNull(value) ? '' : value}
          {...field}
        >
          {children}
        </CustomSelectComponent>
      )}
    />
    {errors && <CustomErrorMessage errors={errors} name={id} />}
  </>
);

CustomSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.object,
  children: PropTypes.node,
  errors: PropTypes.object,
  defaultValue: PropTypes.any,
  externalOnChange: PropTypes.func,
};

export default CustomSelect;
