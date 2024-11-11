import React from "react";
import LostFoundBanner from "./Banner";
import LostFoundDescription from "./Description";
import Buttons from "./Buttons";

const LostFoundAdm = () => {
  return (
    <>
      <LostFoundBanner />
      <LostFoundDescription text="Era um pequeno chaveiro de couro, desgastado pelo tempo, mas carregado de memórias. Pendurado nele, um pingente em forma de coração, presente da avó em um aniversário distante, era o que tornava aquele simples objeto tão especial. Um dia, ao voltar para casa, percebi que ele não estava mais lá. Revirei os bolsos, procurei no carro, revisitei cada lugar por onde havia passado naquele dia, mas nada. Era como se o chaveiro tivesse simplesmente desaparecido, levado pelo vento ou escondido em algum canto inalcançável. A cada busca frustrada, a sensação de perda aumentava. Não era apenas um chaveiro; era uma lembrança física de alguém que já não estava mais aqui." />
      <Buttons />
    </>
  );
};

export default LostFoundAdm;
