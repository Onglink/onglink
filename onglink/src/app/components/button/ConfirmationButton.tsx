'use client';

import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';

type ConfirmationButtonProps = {
  onConfirm?: () => void;
  isFileReady?: boolean;
  label?: string;
};

const ConfirmationButton = ({ onConfirm, label = 'Enviar', isFileReady }: ConfirmationButtonProps) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleClick = () => {
    if (!isFileReady) return; //ignona o clique se não houver arquivo
    if (onConfirm) onConfirm();
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000); // fecha mensagem após 3s
  };

  return (
    <div className="mt-3">
      <Button variant="primary" onClick={handleClick} disabled={!isFileReady}
>        {label}
      </Button>

      {showConfirmation && (
        <Alert variant="success" className="mt-2">
          Documento enviado com sucesso!
        </Alert>
      )}
    </div>
  );
};

export default ConfirmationButton;