import React from 'react';

interface FileUploadProps {
  label: string;
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const FileUpload: React.FC<FileUploadProps> = ({ label, file, setFile }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const inputId = `file-${label.replace(/\s+/g, '')}`;

  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="file-upload">
        <p>Arraste o arquivo ou clique para selecionar</p>
        <input
          id={inputId}
          type="file"
          accept=".pdf"
          className="file-input"
          onChange={handleChange}
        />
        <label htmlFor={inputId} className="upload-button">
          Selecionar Arquivo
        </label>
        {file && <p className="file-name">Arquivo selecionado: {file.name}</p>}
      </div>
    </div>
  );
};

export default FileUpload;
