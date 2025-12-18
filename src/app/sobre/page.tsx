import type { Metadata } from "next";

import { Reveal } from "@/components/Reveal";

const milestones = [
  {
    year: "1998",
    title: "Primeiras colmeias",
    description:
      "A família Costa inicia a produção de mel artesanal preservando matas nativas na Serra da Mantiqueira.",
  },
  {
    year: "2010",
    title: "Certificação orgânica",
    description:
      "Apiários homologados e rastreados, garantindo práticas sustentáveis e manejo sem insumos químicos.",
  },
  {
    year: "2021",
    title: "Experiências imersivas",
    description:
      "Criação de roteiros educativos e turismo sustentável conectando visitantes ao ciclo das abelhas.",
  },
];

export const metadata: Metadata = {
  title: "Nossa História",
  description:
    "História da Apiários dos Sonhos, compromissos com apicultura regenerativa e experiências com abelhas.",
};

export default function SobrePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-night text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(203,172,255,0.18),transparent_55%)]" />

      <section className="relative border-b border-white/5 px-6 py-24">
        <div className="mx-auto max-w-4xl space-y-6">
          <Reveal className="inline-flex items-center gap-2 rounded-full border border-lavender/40 bg-night/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-lavender">
            Manifesto vivo
          </Reveal>
          <Reveal className="space-y-6">
            <h1 className="text-4xl font-semibold text-cream md:text-5xl">
              Nossa jornada com as abelhas
            </h1>
            <p className="text-base leading-relaxed text-cream/75">
              A Apiários dos Sonhos nasceu com o propósito de proteger
              polinizadores e oferecer alimentos vivos, íntegros e cheios de
              energia. Trabalhamos com apicultores parceiros, pesquisadores e
              comunidades para garantir ecossistemas saudáveis e floradas
              vibrantes o ano todo.
            </p>
            <p className="text-base leading-relaxed text-cream/75">
              Monitoramos cada etapa da colheita e utilizamos técnicas de baixa
              intervenção para preservar enzimas, aromas e propriedades
              terapêuticas. Cada safra revela um terroir único e celebra o
              cuidado com o território.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-12">
          <Reveal className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-honey md:text-3xl">
              Marcos do nosso trabalho
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-cream/70 md:mx-0">
              Construímos uma história pautada por regeneração, ciência e
              experiências que aproximam pessoas do universo das abelhas.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {milestones.map((milestone, index) => (
              <Reveal
                key={milestone.year}
                delay={index * 120}
                className="rounded-3xl border border-white/8 bg-night/70 p-6 text-left shadow-neon"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-lavender">
                  {milestone.year}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-cream">
                  {milestone.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  {milestone.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-linear-to-r from-night via-night-strong to-night px-6 py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <Reveal className="space-y-4">
            <h2 className="text-2xl font-semibold text-cream md:text-3xl">
              Compromissos socioambientais
            </h2>
            <p className="text-sm text-cream/70">
              Cada decisão é guiada pelo bem-estar das abelhas, das pessoas e
              dos biomas que nos acolhem.
            </p>
          </Reveal>
          <Reveal
            delay={120}
            className="grid gap-4 text-sm text-cream/75 md:grid-cols-3"
          >
            <div className="rounded-2xl border border-white/10 bg-night/80 p-6">
              <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-honey/80">
                Impacto positivo
              </span>
              <p className="mt-3 leading-relaxed">
                Investimos 5% da receita anual em projetos de reflorestamento,
                educação ambiental e proteção de abelhas nativas.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-night/80 p-6">
              <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-honey/80">
                Manejo respeitoso
              </span>
              <p className="mt-3 leading-relaxed">
                Seguimos protocolos de bem-estar com manejo sem antibióticos,
                colheitas cuidadosas e repovoamento equilibrado das colmeias.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-night/80 p-6">
              <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-honey/80">
                Circularidade
              </span>
              <p className="mt-3 leading-relaxed">
                Reutilizamos embalagens retornáveis, priorizamos fornecedores
                locais e acompanhamos a jornada do produto até o consumidor
                final.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
