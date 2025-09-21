'use client';
import React from 'react';
import { FormikProps } from 'formik';

interface Option {
  label: string;
  value: string;
}

interface FormRadioGroupProps {
  formik: FormikProps<any>;
  name: string;
  label: string;
  options: Option[];
}

const FormRadioGroup: React.FC<FormRadioGroupProps> = ({ formik, name, label, options }) => {
  return (
    <div className="mb-4">
      <p className="block mb-2 font-medium">{label}</p>
      <div className="flex space-x-4">
        {options.map(opt => (
          <label key={opt.value} className="flex items-center space-x-1">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={formik.values[name] === opt.value}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mr-1"
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
      {formik.touched[name] && formik.errors[name] && (
        <div className="text-red-500 text-sm mt-1">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default FormRadioGroup;
