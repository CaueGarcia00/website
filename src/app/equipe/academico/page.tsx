import React from "react";
import dados from "../dataMembros";
import Image from 'next/image'

type Membro = {
  nome: string;
  cargo: string;
  posicao: string;
  imagem: string;
};

type Dados = {
  [key: string]: Membro[];
};

const academico: React.FC = () => {
  const secretariosSec = dados["da"];

  return (
    <div className="mb-20">
      <h2 className="text-4xl font-bold text-center my-14 underline">
        Diretoria Acadêmica
      </h2>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {secretariosSec.map((secretario, index) => (
          <div
            key={index}
            // The conditional class that caused the centering has been removed.
            className="overflow-hidden flex flex-col items-center"
          >
            <Image
              src={`/time/academico/${secretario.imagem}`}
              className="border-4 border-blue-custom rounded-md"
              alt={secretario.nome}
              width={260}
              height={260}
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-1">{secretario.nome}</h3>
              <p className="text-lg">{secretario.cargo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default academico;