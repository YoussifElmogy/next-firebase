import React from 'react';

import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { styled } from '@mui/material/styles';
import { Switch, FormControlLabel } from '@mui/material';

const CustomSwitchComponent = styled((props) => <Switch {...props} />)(({ theme }) => ({
  '&.MuiSwitch-root': {
    width: '68px',
    height: '49px',
  },
  '&  .MuiButtonBase-root': {
    top: '6px',
    left: '6px',
  },
  '&  .MuiButtonBase-root.Mui-checked .MuiSwitch-thumb': {
    backgroundColor: 'primary.main',
  },
  '& .MuiSwitch-thumb': {
    width: '18px',
    height: '18px',
    borderRadius: '6px',
  },

  '& .MuiSwitch-track': {
    backgroundColor: `${
      theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.09)' : 'rgba(73,82,88,0.12)'
    }`,
    opacity: 1,
    borderRadius: '5px',
  },
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        backgroundColor: 'primary',
        opacity: 0.18,
      },
    },
  },
}));

const CustomSwitch = ({ id, label, control, externalOnChange, ...rest }) => (
  <FormControlLabel
    sx={{ userSelect: 'none' }}
    // control={<CustomSwitchComponent id={id} inputRef={ref} {...rest} />}
    control={
      <Controller
        control={control}
        name={id}
        render={({ field: { value, ref, onChange, ...field } }) => (
          <CustomSwitchComponent
            {...field}
            onChange={(...args) => {
              onChange(...args);
              if (externalOnChange) externalOnChange(...args);
            }}
            inputRef={ref}
            checked={!!value}
          />
        )}
        {...rest}
      />
    }
    label={label}
  />
);

CustomSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.object,
  externalOnChange: PropTypes.func,
};

export default CustomSwitch;
