import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/test/ui/popover";
import { Card, CardContent } from "@/components/test/ui/card";
import { Button } from "@/components/test/ui/button";
import { cn } from "@/lib/utils";

interface Term {
  title: string;
  definition: string;
}

const terms: Term[] = [
  {
    title: "Adjudicação",
    definition: "Ato que atribui formalmente o objeto da licitação ao vencedor, declarando-o apto a ser contratado.",
  },
  {
    title: "API",
    definition: "Application Programming Interface - Conjunto de definições e protocolos usado no desenvolvimento e na integração de software de aplicações.",
  },
  {
    title: "Autorização de Empenho",
    definition: "Ato administrativo que precede o empenho, autorizando a reserva da dotação orçamentária para aquela despesa.",
  },
  {
    title: "CGM",
    definition: "Cadastro Geral do Município - Registro centralizado de pessoas físicas e jurídicas que possuem relação com o município.",
  },
  {
    title: "Dispensa",
    definition: "Contratação direta sem licitação, em casos previstos em lei, como para compras de pequeno valor ou em situações de emergência.",
  },
  {
    title: "Empenho",
    definition: "Reserva de uma parte do orçamento para garantir o pagamento de um compromisso assumido pela administração pública.",
  },
  {
    title: "Homologação",
    definition: "Ato pelo qual a autoridade superior confirma o resultado da licitação, validando todas as etapas do procedimento.",
  },
  {
    title: "Licitação",
    definition: "Procedimento administrativo obrigatório para que a administração pública contrate bens e serviços, garantindo a isonomia e a melhor proposta.",
  },
  {
    title: "Orçamento",
    definition: "Planejamento que prevê as receitas e fixa as despesas, verificando a disponibilidade de recursos antes de iniciar uma compra.",
  },
  {
    title: "Ordem de Compra",
    definition: "Documento oficial enviado ao fornecedor autorizando a entrega do material ou a prestação do serviço solicitado.",
  },
  {
    title: "PNCP",
    definition: "O Portal Nacional de Contratações Públicas (PNCP) é o sítio eletrônico oficial destinado à divulgação centralizada e obrigatória dos atos exigidos pela Lei nº 14.133/2021 (Nova Lei de Licitações), servindo como uma ferramenta central de transparência e eficiência nas compras públicas de todo o país.",
  },
  {
    title: "Processo de compras",
    definition: "Conjunto de etapas administrativas que visam a aquisição de bens ou a contratação de serviços por um órgão público.",
  },
].sort((a, b) => a.title.localeCompare(b.title));

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const GlossaryCards = () => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const filteredTerms = selectedLetter
    ? terms.filter((term) =>
        term.title.toUpperCase().startsWith(selectedLetter)
      )
    : terms;

  return (
    <div className="space-y-8">
      {/* Alphabet Filter */}
      <div className="flex flex-wrap justify-center gap-2 p-4 bg-muted/30 rounded-xl border border-border/50 shadow-sm">
        <Button
          variant={selectedLetter === null ? "default" : "ghost"}
          size="sm"
          onClick={() => setSelectedLetter(null)}
          className="font-bold min-w-[60px]"
        >
          Todos
        </Button>
        {alphabet.map((letter) => {
          const hasTerms = terms.some((t) => t.title.toUpperCase().startsWith(letter));
          return (
            <Button
              key={letter}
              variant={selectedLetter === letter ? "default" : "ghost"}
              size="sm"
              disabled={!hasTerms}
              onClick={() => setSelectedLetter(letter)}
              className={cn(
                "w-10 h-10 font-bold",
                !hasTerms && "opacity-30 cursor-not-allowed"
              )}
            >
              {letter}
            </Button>
          );
        })}
      </div>

      {/* Grid of Terms */}
      {filteredTerms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {filteredTerms.map((term) => (
            <Popover key={term.title}>
              <PopoverTrigger asChild>
                <button className="text-left transition-all hover:scale-[1.02] focus:outline-none" type="button">
                  <div className="rounded-lg text-card-foreground h-full border border-border transition-all duration-300 cursor-pointer bg-card hover:bg-muted shadow-sm hover:shadow-lg">
                    <div className="p-6 flex items-center justify-center min-h-[100px]">
                      <h3 className="text-lg font-bold text-center">
                        {term.title}
                      </h3>
                    </div>
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[500px] p-6">
                <div className="space-y-3">
                  <h4 className="font-bold border-b pb-3 text-lg">{term.title}</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {term.definition}
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-muted/20 rounded-lg border-2 border-dashed">
          <p className="text-muted-foreground">Nenhum termo encontrado com a letra <span className="font-bold text-foreground">"{selectedLetter}"</span>.</p>
          <Button 
            variant="link" 
            onClick={() => setSelectedLetter(null)}
            className="mt-2"
          >
            Ver todos os termos
          </Button>
        </div>
      )}
    </div>
  );
};

export default GlossaryCards;
