// /app/components/formulario/FileUpload.tsx
'use client';
import React, { useEffect, useState } from 'react';

interface FileUploadProps {
  label: string;
  accept: string; // Tipo de arquivo permitido, ex: ".pdf,.docx"
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const FileUpload: React.FC<FileUploadProps> = ({ label, accept, file, setFile }) => {
  const [preview, setPreview] = useState<{ name: string; sizeKB: number } | null>(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    setPreview({ name: file.name, sizeKB: file.size / 1024 });
  }, [file]);

  const inputId = `file-${label.replace(/\s+/g, '')}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    setFile(selected);
  };

  return (
    <div className="mb-4">
      <p className="font-medium mb-2">{label}</p>
      <div className="border rounded p-3">
        <input
          id={inputId}
          type="file"
          accept={accept}
          className="hidden"
          onChange={handleChange}
        />
        <label
          htmlFor={inputId}
          className="cursor-pointer inline-block px-3 py-2 bg-blue-500 text-white rounded"
        >
          Selecionar Arquivo
        </label>

        {preview && (
          <div className="mt-3">
            <p className="text-sm mb-1">Arquivo selecionado:</p>
            <p className="text-sm">{preview.name}</p>
            <p className="text-xs text-gray-500">Tamanho: {preview.sizeKB.toFixed(2)} KB</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
