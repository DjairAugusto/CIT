import React, { useState } from "react";

const CommonAreaBanner = () => {
  const [imageSrc, setImageSrc] = useState("");

  const showImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col text-center justify-center mt-2">
      <div className="w-full h-96 overflow-hidden relative">
        <img
          src={imageSrc}
          className="background-image object-cover"
        />
        <label className="overlay-button absolute inset-0">
        <input
          className="hidden"
          type="file"
          onChange={showImage}
          name="input-file"
        />{" "}
        Carregar Imagem
      </label>
      </div>

    </div>
  );
};

export default CommonAreaBanner;
