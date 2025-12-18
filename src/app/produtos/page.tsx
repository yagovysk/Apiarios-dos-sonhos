import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";

const productFamilies = [
  {
    title: "Méis Monoflorais",
    description:
      "Floradas únicas como laranjeira, assa-peixe e eucalipto em colheitas de pequenos lotes.",
    items: [
      "Mel Flor de Laranjeira",
      "Mel Silvestre da Mantiqueira",
      "Mel de Assa-Peixe Orgânico",
    ],
  },
  {
    title: "Linha Bem-Estar",
    description:
      "Própolis, geleia real e pólen fresco selecionados por apiterapeutas parceiros.",
    items: [
      "Própolis Verde Premium",
      "Geleia Real Viva",
      "Pólen Desidratado de Alta Pureza",
    ],
  },
  {
    title: "Presentes & Experiências",
    description:
      "Curadoria de kits degustação, caixas personalizadas e vivências imersivas no apiário.",
    items: [
      "Kit Degustação Apiários dos Sonhos",
      "Caixa Presente Harmonização",
      "Vivência Apicultor Por Um Dia",
    ],
  },
];

export const metadata: Metadata = {
  title: "Catálogo de Produtos",
  description:
    "Linha completa Apiários dos Sonhos com méis monoflorais, própolis, gifting e experiências guiadas.",
};

export default function ProdutosPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-night text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,180,0,0.15),transparent_55%)]" />

      <section className="relative border-b border-white/5 px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-6">
          <Reveal className="inline-flex items-center gap-2 rounded-full border border-honey/40 bg-night-strong/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-honey">
            Curadoria exclusiva
          </Reveal>
          <Reveal className="space-y-4">
            <h1 className="text-4xl font-semibold text-cream md:text-5xl">
              Catálogo Apiários dos Sonhos
            </h1>
            <p className="max-w-2xl text-base text-cream/75">
              Trabalhamos com safras sazonais, análises sensoriais e lotes
              limitados para garantir mel, própolis e experiências com
              identidade única. Consulte disponibilidade e reserve com
              antecedência.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-cream/70">
              <span className="rounded-full border border-lavender/40 bg-night/70 px-3 py-2">
                Safras rastreadas
              </span>
              <span className="rounded-full border border-honey/40 bg-night/70 px-3 py-2">
                Produção artesanal
              </span>
              <span className="rounded-full border border-honey/40 bg-night/70 px-3 py-2">
                Embalagens premium
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2">
            {productFamilies.map((family, index) => (
              <Reveal
                key={family.title}
                delay={index * 120}
                className="rounded-3xl border border-white/8 bg-night/70 p-8 shadow-neon"
              >
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-honey">
                    {family.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-cream/75">
                    {family.description}
                  </p>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-cream/70">
                  {family.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-linear-to-r from-honey to-lavender" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 rounded-3xl border border-white/10 bg-night/80 p-8 shadow-neon">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3 max-w-2xl">
                <h3 className="text-2xl font-semibold text-cream">
                  Produção sob medida
                </h3>
                <p className="text-sm text-cream/75">
                  Desenvolvemos linhas exclusivas para empórios naturais,
                  restaurantes, cafeterias e gifting corporativo. Conte com
                  consultoria de harmonização, criação de storytelling e
                  rotulagem personalizada.
                </p>
              </div>
              <Link
                href="/#contato"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-honey via-lavender to-honey px-6 py-3 text-sm font-semibold text-night shadow-neon transition hover:shadow-neon-strong"
              >
                Falar com especialistas
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
