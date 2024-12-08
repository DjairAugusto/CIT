import React, { useState } from "react";
export default function LostFoundDescription({ text: initialText }) {
  const [text, setText] = useState(initialText);
  const [length, setLength] = useState(initialText.length);
  const [value, setValue] = useState("0");
  const inputValue = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };
  const inputChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setLength(newText.length);
  };
  return (
    <section className="mx-16 mt-4 flex gap-8 h-full">
      <div className="w-2/3 h-full flex flex-col gap-16 flex-1 items-center pt-28">
        <h1 className="text-4xl">Detalhes</h1>
        <textarea
          rows={10}
          className="outline-none border-none w-full h-full"
          value={text}
          onChange={inputChange}
          autoFocus
        />
      </div>
      <div className="mt-20 inline-block w-1/3 bg-gray-100 p-10">
        <div className="w-full pb-4 flex flex-col">
          <h3 className="font-bold">Local Encontrado</h3>
          <p className="">Onde o objeto foi encotrado:</p>
          <input
            type="text"
            placeholder="Digite aqui"
            className="bg-gray-100 remove-clock-icon outline-none border-none"
          />
        </div>
        <div className="w-2/4 pb-4">
          <h3 className="font-bold">Horário</h3>
          <p className="">Que horas o objeto foi encotrado:</p>
          <input
            type="time"
            className="bg-gray-100 remove-clock-icon mx-2 outline-none border-none"
          />
        </div>
        <div className="w-2/4 inline-block">
          <h3 className="font-bold">Data</h3>
          <p className="gap-y-2">Quando o objeto foi encotrado:</p>
          <input
            type="date"
            className="bg-gray-100 remove-clock-icon mx-2 outline-none border-none"
          />
        </div>
      </div>
    </section>
  );
}
