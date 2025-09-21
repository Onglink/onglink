import React from 'react';

interface RadioOption {
  label: string;
  value: string;
}

interface FormRadioGroupProps {
  label: string;
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const FormRadioGroup: React.FC<FormRadioGroupProps> = ({
  label,
  name,
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="form-group mb-3">
      <p className="font-semibold mb-2">{label}</p>
      <div className="flex gap-4">
        {options.map(option => (
          <div key={option.value} className="flex items-center">
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              className="mr-1"
            />
            <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormRadioGroup;
