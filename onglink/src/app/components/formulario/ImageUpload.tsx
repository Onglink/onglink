'use client';
import React, { useEffect, useState } from 'react';

interface ImageUploadProps {
  label: string;
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ label, image, setImage }) => {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!image) {
      setPreview(null);
      return;
    }

    // Cria URL para preview
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    // Revoga a URL quando a imagem mudar ou componente desmontar
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [image]);

  const inputId = `img-${label.replace(/\s+/g, '')}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    if (selected) setImage(selected);
  };

  return (
    <div className="mb-4">
      <p className="font-medium mb-2">{label}</p>
      <div className="border rounded p-3">
        <input
          id={inputId}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
        <label
          htmlFor={inputId}
          className="cursor-pointer inline-block px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Selecionar Imagem
        </label>

        {preview && (
          <div className="mt-3">
            <p className="text-sm mb-1">Preview:</p>
            <img src={preview} alt="preview" className="max-w-xs rounded shadow" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
