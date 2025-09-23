import React from 'react';

interface StepButtonProps {
  active: boolean;
  label: string;
  onClick: () => void;
}

const StepButton: React.FC<StepButtonProps> = ({ active, label, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-4 border-2 m-1 ${
        active ? 'bg-green-400 text-white border-2 border-black' : 'bg-blue-400 text-black'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default StepButton;
