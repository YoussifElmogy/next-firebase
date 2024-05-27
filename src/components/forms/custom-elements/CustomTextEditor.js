import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';
import { Box } from '@mui/material';

import CustomFormLabel from './CustomFormLabel';
import CustomErrorMessage from './CustomErrorMessage';
import './CustomTextEditor.css';

const CustomTextEditor = ({ id, label, errors, control, defaultValue }) => {
  const {
    field: { onChange },
  } = useController({
    name: id,
    control,
    defaultValue,
  });

  return (
    <>
      <CustomFormLabel htmlFor={id}>{label}</CustomFormLabel>
      <Box
        sx={{
          border: 1,
          borderRadius: 1,
          borderColor: (theme) =>
            `${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#dee3e9'}`,
        }}
      >
        <ReactQuill
          defaultValue={defaultValue}
          id={id}
          onChange={(content) => onChange(content)}
          modules={{
            toolbar: [
              ['bold', 'italic', 'underline'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link'],
              ['clean'],
            ],
            clipboard: {
              // toggle to add extra line breaks when pasting HTML:
              matchVisual: false,
            },
          }}
        />
      </Box>
      {errors && <CustomErrorMessage errors={errors} name={id} />}
    </>
  );
};

CustomTextEditor.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.object,
  control: PropTypes.object,
  defaultValue: PropTypes.string.isRequired,
};

export default CustomTextEditor;
