import React from "react";

interface StepButtonProps {
  step: string;               // id da aba (ex: "basico", "endereco")
  label: string;              // texto exibido
  isActive: boolean;          // se o botão está ativo
  onClick: (step: string) => void; // troca de aba
}

const StepButton: React.FC<StepButtonProps> = ({ step, label, isActive, onClick }) => {
  return (
    <div className="border-2 rounded-full bg-green-400 p-4">
      <button
        className={`nav-button ${isActive ? "active" : ""}`}
        onClick={() => onClick(step)}
      >
        {label}
      </button>
    </div>
  );
};

export default StepButton;
