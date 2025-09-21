import React from 'react';

interface StepButtonProps {
  active: boolean;
  label: string;
  onClick: () => void;
}

const StepButton: React.FC<StepButtonProps> = ({ active, label, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full border-2 ${
        active ? 'bg-green-400 text-white' : 'bg-white text-black'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default StepButton;
