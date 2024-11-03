import React, { useState } from 'react';

const FileInput = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M16.88 9h-4V2H6.88v2H4.88V2A1.87 1.87 0 003.01.13 1.87 1.87 0 001.14 2v16a1.87 1.87 0 001.87 1.87h16a1.87 1.87 0 001.87-1.87V10h-4V9zM10.88 10h-2V4h2v6zm4 0h-2V4h2v6z" />
        </svg>
        <span className="mt-2 text-base leading-normal">Selecione um arquivo</span>
        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>
      {file && <p className="mt-4">Arquivo selecionado: {file.name}</p>}
    </div>
  );
};

export default FileInput;
