import React from 'react';

interface StepButtonProps {
  active: boolean;
  label: string;
  onClick: () => void;
}

const StepButton: React.FC<StepButtonProps> = ({ active, label, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-4 m-1 ${
        active ? 'bg-[#024b14bf] text-white font-bold' : 'bg-[#04a52cbf] hover:bg-[#024b14bf] text-white font-bold'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default StepButton;
