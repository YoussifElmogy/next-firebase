import React from 'react';
import PropTypes from 'prop-types';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';

const SubmitButton = ({ isLoading, text, ...rest }) => {
  const { t } = useTranslation();
  return (
    <LoadingButton type="submit" variant="contained" loading={isLoading} {...rest}>
      {text || t('common.submit')}
    </LoadingButton>
  );
};

SubmitButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  text: PropTypes.string,
  rest: PropTypes.object,
};

export default SubmitButton;
