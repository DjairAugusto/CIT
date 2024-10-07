import React, { useState } from 'react';

const InputSelect = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <label htmlFor="vehicle-select" className="mb-2 text-lg">Selecione o Tipo de Veículo:</label>
      <select
        id="vehicle-select"
        value={value}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="" disabled>Selecione...</option>
        <option value="carro">Carro</option>
        <option value="moto">Moto</option>
        <option value="outro">Outro</option>
      </select>
    </div>
  );
};

export default InputSelect;