import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';
import { Autocomplete, TextField, Box } from '@mui/material';
import { isUndefined } from 'lodash';

import CustomFormLabel from './CustomFormLabel';
import CustomErrorMessage from './CustomErrorMessage';

const CustomAutoComplete = ({ control, id, defaultValue, multiple, options, label, errors }) => {
  const {
    field: { ref, onChange, ...field },
  } = useController({ control, name: id, defaultValue });
  return (
    <>
      <CustomFormLabel htmlFor={id}>{label}</CustomFormLabel>
      <Autocomplete
        multiple={multiple}
        fullWidth
        id={id}
        options={options}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box {...props} key={option.value} component="li">
            {option.label}
          </Box>
        )}
        defaultValue={defaultValue}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField error={!isUndefined(errors[id])} {...params} size="small" aria-label={id} />
        )}
        ref={ref}
        onChange={(_, val) => onChange(val)}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        {...field}
      />
      {errors && <CustomErrorMessage errors={errors} name={id} />}
    </>
  );
};

CustomAutoComplete.propTypes = {
  control: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  defaultValue: PropTypes.any,
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.object,
};

export default CustomAutoComplete;
