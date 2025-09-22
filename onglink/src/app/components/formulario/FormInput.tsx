'use client';
import React from 'react';
import { FormikProps } from 'formik';

interface FormInputProps {
  formik: FormikProps<any>;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({ formik, name, label, type = 'text', placeholder }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-1 font-medium">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="w-full border rounded p-2 border-black"
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className="text-red-500 text-sm mt-1">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default FormInput;
