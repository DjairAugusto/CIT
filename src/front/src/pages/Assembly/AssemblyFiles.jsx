import React, { useState } from "react";

const AssemblyFiles = () => {
  const [fileInputs, setFileInputs] = useState([{ id: 0, file: null }]); 

  const handleAddInput = () => {
    setFileInputs([...fileInputs, { id: fileInputs.length, file: null }]);
  };

  const handleFileChange = (id, event) => {
    const selectedFile = event.target.files[0];
    setFileInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, file: selectedFile } : input
      )
    );
  };

  return (
    <section className="flex text-center pt-8 flex-col gap-4">
      <div>
        <h1 className="text-5xl">Título</h1>
        <input
          className="border border-gray-300 rounded-md p-2 mt-4"
          type="date"
          aria-label="Select a date"
        />
      </div>
      <div className="relative w-1/3 border-b-2 border-black border-solid mx-auto mb-4"></div>
      {fileInputs.map((input) => (
        <div key={input.id} className="flex flex-col items-center gap-2 w-full">
          <div className="flex justify-center h-20 w-full">
            <input
              className="hidden"
              id={`input-file${input.id}`}
              name={`input-file${input.id}`}
              type="file"
              aria-label={`Upload file ${input.id}`}
              onChange={(e) => handleFileChange(input.id, e)}
            />
            <label
              htmlFor={`input-file${input.id}`}
              className="text-3xl w-1/3 h-full flex items-center justify-center bg-gray-200 border-2 border-black border-solid rounded-md cursor-pointer hover:bg-gray-300 focus:ring-2 focus:ring-blue-500"
            >
              Adicionar arquivo
            </label>
          </div>
          {input.file && (
            <p className="text-gray-600">{input.file.name}</p>
          )}
        </div>
      ))}
      <div className="flex justify-center h-20 w-full">
        <button
          onClick={handleAddInput}
          className="text-3xl w-1/3 h-full flex items-center justify-center bg-gray-200 border-2 border-black border-solid rounded-md cursor-pointer hover:bg-gray-300 focus:ring-2 focus:ring-blue-500"
        >
          +
        </button>
      </div>
    </section>
  );
};

export default AssemblyFiles;
