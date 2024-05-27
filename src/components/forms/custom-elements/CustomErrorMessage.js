import React from 'react';

import { ErrorMessage } from '@hookform/error-message';

import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const CustomErrorMessage = ({ errors, name }) => (
  <ErrorMessage
    errors={errors}
    name={name}
    render={({ message }) => (
      <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
        {message}
      </Typography>
    )}
  />
);

CustomErrorMessage.propTypes = {
  errors: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default CustomErrorMessage;
