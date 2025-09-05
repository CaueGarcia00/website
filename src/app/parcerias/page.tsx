"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileDown } from "lucide-react";

export default function PartnershipPage() {
  // Função para baixar o arquivo PDF
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "/Regras para a competição de campanha de arrecadação SenaMUN e casa Hope.pdf"; // Coloque o caminho do arquivo PDF aqui
    link.download =
      "Regras para a competição de campanha de arrecadação SenaMUN e casa Hope.pdf"; // Nome do arquivo que será baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Parceria</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardContent className="flex flex-col h-96 items-center justify-between p-6">
            <Image
              src="/logo-senamun.svg"
              alt="SenaMUN"
              width={250}
              height={250}
            />
            <h2 className="text-2xl font-semibold mt-4">SenaMUN</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center h-96 justify-between p-6">
            <Image
              src="/correntebem.jpg"
              alt="Corrente do Bem"
              width={200}
              height={200}
            />
            <h2 className="text-2xl font-semibold mt-4">Corrente do Bem</h2>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Introdução a Competição
          </h2>
          <p className="text-muted-foreground text-justify">
            Com grande alegria, o SenaMUN anuncia uma parceria especial com a
            Casa Hope para uma nobre causa. Durante nossa próxima conferência,
            lançaremos uma competição de arrecadação de alimentos não perecíveis
            em benefício das crianças atendidas pela Casa Hope, instituição que
            oferece suporte vital a jovens em tratamento contra o câncer. Nosso
            objetivo é mobilizar os participantes do SenaMUN para que, juntos,
            possamos fazer a diferença na vida dessas crianças e suas famílias.
            O comitê que arrecadar a maior quantidade de doações será premiado,
            incentivando a todos a participarem de forma ativa e solidária. Esta
            campanha reflete o compromisso do SenaMUN com ações humanitárias,
            unindo forças para transformar solidariedade em ações concretas.
            Vamos nos engajar e contribuir para uma causa que toca profundamente
            nossas vidas. Juntos, podemos construir um futuro mais solidário e
            esperançoso! Acompanhe e participe dessa ação!
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col items-center justify-center p-6">
          <h2 
          className="text-2xl font-semibold mb-4 text-[#0000EE]">
            <a href="https://www.canva.com/design/DAGo3IZa2S0/NpwwXD7OK3zuF2ZItHNVDg/view?utm_content=DAGo3IZa2S0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h888188b6db">
              Conheça mais e Ajude!
            </a>
          </h2>
        </CardContent>
      </Card>
    </div>
  );
}
