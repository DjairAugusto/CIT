import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';

const LostAndFound = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold" style={{ color: '#42D0B3' }}>VILA PISANI</h1>
        <p className="text-gray-500">PERFIL PRINCIPAL</p>
        <p className="text-gray-500">Bloco B, Apartamento 302</p>
      </header>

      <div className="flex flex-col items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Achados e Perdidos</h2>
        <div className="flex items-center w-full max-w-md gap-2">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
            style={{ borderColor: '#42D0B3' }}
          />
          <button className="p-2 rounded-full shadow-md" style={{ backgroundColor: '#42D0B3', color: 'white' }}>
            <Search size={20} color="white" />
          </button>
          <button className="p-2 rounded-full shadow-md" style={{ backgroundColor: '#42D0B3', color: 'white' }}>
            <Filter size={20} color="white" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
            <img
              src="https://via.placeholder.com/150"
              alt="Relógio Tommy Hilfiger"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700">Relógio Tommy Hilfiger</h3>
            <Link to="/detalhes" className="hover:underline" style={{ color: '#42D0B3' }}>Ver Detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostAndFound;