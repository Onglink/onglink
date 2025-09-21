import React from 'react';

interface FileUploadProps {
  label: string;
  file: File | null;
  onFileChange: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ label, file, onFileChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    onFileChange(selectedFile);
  };

  return (
    <div className="form-group mb-3">
      <p className="font-semibold mb-2">{label}</p>
      <div className="file-upload border p-4 rounded">
        <input
          type="file"
          accept=".pdf"
          onChange={handleChange}
          className="mb-2"
        />
        {file && <p>Arquivo selecionado: {file.name}</p>}
      </div>
    </div>
  );
};

export default FileUpload;
