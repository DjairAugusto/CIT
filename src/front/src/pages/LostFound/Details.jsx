import React from "react";
import { MapPin, Calendar, Clock } from "lucide-react";

const List = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        {/* Imagem Principal */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Relógio Tommy Hilfiger"
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Seção de Detalhes */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-[#42D0B3] mb-4 border-b border-gray-200 pb-2">
            Detalhes
          </h2>

          <div className="flex gap-4 mb-6">
            {/* Texto Descritivo */}
            <p className="text-gray-700 flex-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              pellentesque orci id diam elementum rutrum. Maecenas fermentum
              lectus quis neque rhoncus, in scelerisque odio condimentum.
              Vestibulum arcu felis, facilisis eget dui sit amet, imperdiet
              scelerisque sapien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            {/* Local Encontrado */}
            <div className="flex items-start gap-3">
              <MapPin className="text-[#42D0B3] w-6 h-6" />
              <div>
                <h3 className="font-semibold">Local Encontrado</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* Data */}
            <div className="flex items-start gap-3">
              <Calendar className="text-[#42D0B3] w-6 h-6" />
              <div>
                <h3 className="font-semibold">Data</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* Horário */}
            <div className="flex items-start gap-3">
              <Clock className="text-[#42D0B3] w-6 h-6" />
              <div>
                <h3 className="font-semibold">Horário</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
