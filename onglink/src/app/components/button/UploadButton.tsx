'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

type UploadButtonProps = {
  onFileSelect?: (file: File) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: string;
  label?: React.ReactNode;
  title?: string;
};

function UploadButton({
  onFileSelect,
  onClick,
  variant = 'primary',
  label,
}: UploadButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(event);
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect?.(file);
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      } else {
        setPreviewUrl(null);
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <Button title="" variant={variant} onClick={handleClick}>
        {label}
      </Button>

      
    </div>
  );
}


export default UploadButton;