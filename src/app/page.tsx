import Image from "next/image";
import Link from "next/link";

import { ProductCarousel } from "@/components/ProductCarousel";
import { Reveal } from "@/components/Reveal";

type Product = {
  name: string;
  description: string;
  benefits: string[];
  image: string;
  category: string;
};

type Highlight = {
  number: string;
  suffix: string;
  label: string;
};

type Differentiator = {
  title: string;
  text: string;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const products: Product[] = [
  {
    name: "Mel Florada Silvestre do Cerrado",
    description:
      "Sabor dourado e floral, ideal para cafés especiais e receitas que pedem um toque de delicadeza com identidade brasiliense.",
    benefits: [
      "Antioxidantes naturais",
      "Florada rastreada entre Serra do Cipó e Cerrado do DF",
      "Filtrado a frio para preservar enzimas",
    ],
    image: "/logo sem barra.png",
    category: "Méis Monoflorais",
  },
  {
    name: "Mel de Assa-Peixe Orgânico",
    description:
      "Colheita sazonal com notas herbais e cítricas, perfeito para chás e harmonizações com queijos.",
    benefits: [
      "Certificação orgânica",
      "Baixo índice glicêmico",
      "Produção em pequenos lotes",
    ],
    image: "/logo normal.png",
    category: "Méis Monoflorais",
  },
  {
    name: "Kit Degustação Gourmet",
    description:
      "Três méis premium com guia sensorial e sugestões de pairing para experiências memoráveis.",
    benefits: [
      "Curadoria exclusiva Apiários dos Sonhos",
      "Inclui cartões de harmonização",
      "Ideal para presente corporativo",
    ],
    image: "/logo normal.png",
    category: "Experiências Sensoriais",
  },
  {
    name: "Vivência Apicultor por Um Dia",
    description:
      "Imersão guiada no apiário com aula prática, degustação e kit personalizado.",
    benefits: [
      "Recepção com hidromel artesanal",
      "Sessão de fotos com traje apícola",
      "Certificado de participação",
    ],
    image: "/logo sem barra.png",
    category: "Experiências Sensoriais",
  },
  {
    name: "Própolis Premium Verde",
    description:
      "Extração a frio com alto teor de artepillin C, indicado para protocolos de imunidade.",
    benefits: [
      "Altíssima concentração de bioflavonoides",
      "Controle laboratorial em cada lote",
      "Base alcoólica orgânica",
    ],
    image: "/logo-mobile.png",
    category: "Bem-Estar",
  },
  {
    name: "Geleia Real Fresca",
    description:
      "Superalimento refrigerado com cadeia de frio monitorada do apiário até a sua casa.",
    benefits: [
      "Rica em vitaminas do complexo B",
      "Embalagem de vidro âmbar",
      "Inclui colher dosadora em bambu",
    ],
    image: "/logo normal.png",
    category: "Bem-Estar",
  },
  {
    name: "Mel de Aroeira do Cerrado",
    description:
      "Mel bruto de aroeira com notas amadeiradas, colhido nas colmeias de Vicente Pires para combinar com cafés filtrados e culinária autoral.",
    benefits: [
      "Florada de aroeira 100% rastreada",
      "Entrega rápida em Brasília DF",
      "Ideal para receitas funcionais",
    ],
    image: "/logo sem barra.png",
    category: "Méis Monoflorais",
  },
  {
    name: "Mel Cipó-Uva do Cerrado",
    description:
      "Mel cipó-uva com perfil floral e toque frutado, destaque na Feira do Produtor de Vicente Pires e queridinho dos sommeliers de mel.",
    benefits: [
      "Colmeias posicionadas em matas preservadas",
      "Textura aveludada e baixo teor de umidade",
      "Ficha sensorial exclusiva acompanha o kit",
    ],
    image: "/logo normal.png",
    category: "Méis Monoflorais",
  },
];

const highlights: Highlight[] = [
  { number: "12", suffix: "+", label: "Anos cuidando de abelhas" },
  { number: "18", suffix: "K", label: "Clientes adoçados" },
  { number: "25", suffix: "+", label: "Produtos exclusivos" },
  { number: "100", suffix: "%", label: "Mel cru, sem aditivos" },
];

const differentiators: Differentiator[] = [
  {
    title: "Produção Sustentável",
    text: "Nossos apiários respeitam o tempo das abelhas e preservam a biodiversidade local.",
  },
  {
    title: "Rastreamento Total",
    text: "Você acompanha a origem do seu mel em cada lote, do campo ao pote.",
  },
  {
    title: "Experiências Imersivas",
    text: "Visitas guiadas, degustações harmonizadas e workshops para apaixonados por mel.",
  },
  {
    title: "Qualidade Certificada",
    text: "Controle laboratorial e selo de inspeção garantem pureza e segurança alimentar.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Helena M.",
    role: "Chef confeiteira",
    quote:
      "O mel Apiários dos Sonhos elevou minha carta de sobremesas. A complexidade dos sabores é impressionante.",
  },
  {
    name: "Daniel S.",
    role: "Barista e sommelier de café",
    quote:
      "As notas florais do mel de ipê amarelo harmonizam perfeitamente com cafés especiais. Indispensável.",
  },
  {
    name: "Camila F.",
    role: "Nutricionista",
    quote:
      "Confio na procedência e recomendo para meus pacientes. Qualidade e respeito às abelhas em cada pote.",
  },
];

export default function Home() {
  return (
    <div id="topo" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(200,166,255,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_60%,rgba(246,180,0,0.22),transparent_60%)]" />
      </div>

      <section className="relative isolate px-6 pb-32 pt-24 sm:pb-40 sm:pt-36">
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top,rgba(246,180,0,0.22)_0%,transparent_65%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-honey/30 bg-night/60 px-4 py-2 text-sm font-semibold text-honey shadow-neon">
              <span className="h-2 w-2 rounded-full bg-honey-soft" />
              Mel artesanal premium do Cerrado brasiliense
            </span>
            <h1 className="max-w-2xl text-balance text-4xl font-semibold leading-tight text-cream sm:text-5xl">
              Adoçamos Brasília DF com mel de origem controlada, mel de aroeira
              e experiências imersivas em apicultura.
            </h1>
            <p className="max-w-xl text-lg text-cream/80">
              Apiários dos Sonhos combina tradição familiar, inovação sensorial
              e cuidado com cada abelha. Estamos presentes na Feira do Produtor
              de Vicente Pires com méis exclusivos do Cerrado, própolis e
              vivências para conectar paladar e natureza.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#produtos"
                className="rounded-full bg-linear-to-r from-honey via-lavender to-honey px-6 py-3 text-base font-semibold text-night shadow-neon transition hover:shadow-neon-strong"
              >
                Conhecer produtos
              </Link>
              <Link
                href="#contato"
                className="rounded-full border border-honey/50 px-6 py-3 text-base font-semibold text-cream transition hover:border-honey hover:bg-night-strong"
              >
                Agendar degustação
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-honey/35 bg-[linear-gradient(150deg,rgba(246,180,0,0.18),rgba(6,2,13,0.85))] p-4 text-center shadow-neon"
                >
                  <p className="text-3xl font-bold text-honey drop-shadow-neon">
                    {item.number}
                    <span className="text-2xl">{item.suffix}</span>
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-cream/70">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl glass-panel p-8 text-center">
              <div className="absolute -top-12 left-1/2 w-32 -translate-x-1/2 drop-shadow-neon">
                <Image
                  src="/logo normal.png"
                  alt="Logotipo Apiários dos Sonhos"
                  width={320}
                  height={200}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
              <div className="mt-20 space-y-4">
                <h2 className="text-2xl font-semibold text-cream">
                  Produção boutique de mel
                </h2>
                <p className="text-sm leading-relaxed text-cream/75">
                  Criamos micro-lotes sazonais com floradas selecionadas e
                  colheita artesanal. Cada pote traz notas sensoriais únicas,
                  guiadas por apicultores especialistas.
                </p>
                <div className="grid gap-3 text-left text-sm text-cream/70">
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-honey" />
                    Certificação de boas práticas apícolas
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-lavender" />
                    Embalagens recicláveis com proteção UV
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-honey-soft" />
                    Envio refrigerado para preservar aromas
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="produtos"
        className="relative z-10 overflow-hidden px-6 py-24 bg-linear-to-b from-night via-night-strong/80 to-night"
      >
        <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(246,180,0,0.28),transparent_65%)]" />
        <div className="pointer-events-none absolute -bottom-24 left-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(200,166,255,0.32),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-honey">
              Coleção Apiários Boutique
            </p>
            <h2 className="mt-4 bg-linear-to-r from-honey via-lavender to-cream bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
              Produtos artesanais com assinatura sensorial exclusiva
            </h2>
            <p className="mt-4 text-lg text-cream/75">
              Cada lote é extraído a frio e preserva enzimas, pólen e aromas
              naturais. Mel de aroeira, mel cipó-uva do Cerrado e outras
              raridades chegam fresquinhas para Brasília DF. Escolha o sabor que
              combina com sua rotina ou presenteie com experiências
              inesquecíveis.
            </p>
          </Reveal>
          <Reveal className="mt-16">
            <ProductCarousel products={products} />
          </Reveal>
        </div>
      </section>

      <section id="diferenciais" className="relative px-6 py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-[radial-gradient(circle,rgba(200,166,255,0.18),transparent_55%)]" />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:items-center">
            <Reveal className="space-y-6">
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-lavender">
                Muito além do mel
              </span>
              <h2 className="text-3xl font-semibold text-cream sm:text-4xl">
                Cuidamos de cada colmeia como parte da família
              </h2>
              <p className="text-lg text-cream/75">
                Compromisso com sustentabilidade, tecnologia e encanto
                sensorial. Acompanhamos a jornada das abelhas, respeitamos o
                tempo da natureza e garantimos transparência em todo o processo.
              </p>
              <Link
                href="#sobre"
                className="inline-flex items-center gap-2 text-sm font-semibold text-honey hover:drop-shadow-neon"
              >
                Conheça nossa história
                <span aria-hidden>↗</span>
              </Link>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {differentiators.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 110}
                  className="rounded-3xl border border-honey/25 bg-[linear-gradient(160deg,rgba(246,180,0,0.12),rgba(18,9,38,0.92))] p-6 shadow-neon hover:shadow-neon-strong"
                >
                  <h3 className="text-lg font-semibold text-honey">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream/70">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1fr]">
            <Reveal className="glass-panel relative overflow-hidden rounded-3xl p-8">
              <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(246,180,0,0.25),transparent_60%)]" />
              <div className="absolute -right-16 top-8 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(200,166,255,0.28),transparent_65%)]" />
              <div className="relative space-y-6">
                <h2 className="text-3xl font-semibold text-cream">
                  Do cuidado familiar ao reconhecimento nacional
                </h2>
                <p className="text-sm leading-relaxed text-cream/75">
                  Fundada por três gerações de apicultores, Apiários dos Sonhos
                  nasceu com a missão de encantar paladares e proteger
                  ecossistemas. Investimos em tecnologia verde, manejo
                  regenerativo e capacitação de apicultores parceiros.
                </p>
                <p className="text-sm leading-relaxed text-cream/70">
                  Nossas colmeias ficam em reservas protegidas, onde flora
                  nativa floresce o ano inteiro. Cada safra é analisada em
                  laboratório e certificada, garantindo pureza, textura sedosa e
                  aroma exuberante.
                </p>
                <div className="grid gap-4 text-sm text-cream/70 sm:grid-cols-2">
                  <div className="rounded-2xl border border-honey/30 bg-night/60 p-4">
                    <p className="text-2xl font-semibold text-honey">
                      +2.500
                      <span className="text-base text-cream/70">
                        {" "}
                        colmeias cuidando da natureza
                      </span>
                    </p>
                  </div>
                  <div className="rounded-2xl border border-lavender/40 bg-night/60 p-4">
                    <p className="text-2xl font-semibold text-lavender">
                      98%
                      <span className="text-base text-cream/70">
                        {" "}
                        clientes que indicam
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal className="grid gap-6 text-sm text-cream/75">
              <div className="rounded-3xl border border-honey/30 bg-[linear-gradient(140deg,rgba(246,180,0,0.16),rgba(6,2,13,0.92))] p-8">
                <h3 className="text-xl font-semibold text-honey">
                  Experiências sensoriais
                </h3>
                <p className="mt-3 leading-relaxed">
                  Degustações orientadas, harmonizações com queijos, cafés e
                  chás especiais. Atendemos grupos exclusivos em nosso apiário
                  escola com programação personalizada.
                </p>
              </div>
              <div className="rounded-3xl border border-lavender/35 bg-[linear-gradient(140deg,rgba(200,166,255,0.2),rgba(6,2,13,0.88))] p-8">
                <h3 className="text-xl font-semibold text-honey">
                  Projetos educacionais
                </h3>
                <p className="mt-3 leading-relaxed">
                  Levamos a magia das abelhas para escolas, empresas e eventos.
                  Oficinas práticas, jogos sensoriais e vivências para
                  conscientizar sobre polinizadores.
                </p>
              </div>
              <Link
                href="#contato"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-honey via-lavender to-honey px-6 py-3 text-base font-semibold text-night shadow-neon transition hover:shadow-neon-strong"
              >
                Quero viver essa experiência
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="mel-em-brasilia"
        className="relative overflow-hidden px-6 py-24 bg-linear-to-b from-night via-night-strong/70 to-night"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle,rgba(246,180,0,0.24),transparent_60%)]" />
        <div className="pointer-events-none absolute -bottom-24 right-12 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(200,166,255,0.28),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <Reveal className="space-y-6">
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-honey">
                Mel artesanal em Brasília DF
              </span>
              <h2 className="text-3xl font-semibold text-cream sm:text-4xl">
                Mel de aroeira, mel cipó-uva e experiências apícolas no coração
                de Vicente Pires
              </h2>
              <p className="text-lg text-cream/75">
                Produzimos e entregamos mel cru direto dos nossos apiários no
                Cerrado. Visite o box da Apiários dos Sonhos na Feira do
                Produtor de Vicente Pires ou agende delivery para Brasília DF,
                Águas Claras e região. Todo pote é rastreado, livre de
                aquecimento e acompanhado de nota sensorial.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#produtos"
                  className="rounded-full bg-linear-to-r from-honey via-lavender to-honey px-6 py-3 text-base font-semibold text-night shadow-neon transition hover:shadow-neon-strong"
                >
                  Conferir estoque atual
                </Link>
                <Link
                  href="#contato"
                  className="rounded-full border border-honey/50 px-6 py-3 text-base font-semibold text-cream transition hover:border-honey hover:bg-night-strong"
                >
                  Falar com o time comercial
                </Link>
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal className="h-full rounded-3xl border border-honey/35 bg-[linear-gradient(150deg,rgba(246,180,0,0.16),rgba(6,2,13,0.9))] p-6">
                <h3 className="text-lg font-semibold text-honey">
                  Onde estamos
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-cream/75">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-honey" />
                    Feira do Produtor de Vicente Pires, Box 12
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-honey" />
                    Atendimento presencial e degustações guiadas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-honey" />
                    Delivery no mesmo dia para Brasília DF
                  </li>
                </ul>
                <Link
                  href="https://maps.app.goo.gl/8xXhP7P4vVicentePires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-lavender hover:text-honey"
                >
                  Ver rota no mapa
                  <span aria-hidden>↗</span>
                </Link>
              </Reveal>
              <Reveal
                delay={120}
                className="h-full rounded-3xl border border-lavender/35 bg-[linear-gradient(160deg,rgba(200,166,255,0.2),rgba(6,2,13,0.92))] p-6"
              >
                <h3 className="text-lg font-semibold text-honey">
                  Destaques buscados
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-cream/75">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-lavender" />
                    Mel de aroeira com laudo laboratorial e sabor intenso
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-lavender" />
                    Mel cipó-uva do Cerrado com notas frutadas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-lavender" />
                    Programas educativos para escolas e empresas no DF
                  </li>
                </ul>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-cream/50">
                  Atendimento: terça a sábado | 08h às 18h
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-cream sm:text-4xl">
              Opiniões de quem se apaixonou pelo mel
            </h2>
            <p className="mt-4 text-lg text-cream/75">
              Clientes, chefs e especialistas compartilham como Apiários dos
              Sonhos transformou sua relação com o mel.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal
                key={item.name}
                delay={index * 140}
                className="relative overflow-hidden rounded-3xl border border-lavender/30 bg-[linear-gradient(150deg,rgba(200,166,255,0.18),rgba(6,2,13,0.92))] p-8 shadow-neon"
              >
                <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(246,180,0,0.25),transparent_60%)]" />
                <blockquote className="relative text-sm leading-relaxed text-cream/80">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="relative mt-6 border-t border-white/10 pt-4 text-sm text-honey">
                  <p className="font-semibold text-cream">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-cream/60">
                    {item.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="relative overflow-hidden px-6 pt-40 pb-32 bg-linear-to-b from-night via-night-strong/85 to-night"
      >
        <div className="pointer-events-none absolute -top-24 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(246,180,0,0.24),transparent_60%)]" />
        <div className="pointer-events-none absolute -bottom-16 right-12 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(200,166,255,0.28),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="space-y-6">
              <h2 className="text-3xl font-semibold text-cream sm:text-4xl">
                Vamos criar memórias doces?
              </h2>
              <p className="text-lg text-cream/75">
                Fale com nossa equipe para encomendas especiais, eventos
                corporativos, casamentos ou visitas guiadas ao apiário.
                Atendemos na Feira do Produtor de Vicente Pires e respondemos
                solicitações digitais em até 24h úteis.
              </p>
              <div className="space-y-4 text-sm text-cream/70">
                <p>
                  <span className="font-semibold text-honey">WhatsApp:</span>{" "}
                  <Link
                    href="https://wa.me/5561999990000"
                    className="hover:drop-shadow-neon"
                  >
                    +55 (61) 99999-0000
                  </Link>
                </p>
                <p>
                  <span className="font-semibold text-honey">E-mail:</span>{" "}
                  <Link
                    href="mailto:contato@apiariosdossonhos.com.br"
                    className="hover:drop-shadow-neon"
                  >
                    contato@apiariosdossonhos.com.br
                  </Link>
                </p>
                <p>
                  <span className="font-semibold text-honey">Endereço:</span>{" "}
                  Feira do Produtor, Box 12 - Vicente Pires, Brasília - DF
                </p>
              </div>
              <div className="flex items-center gap-6 text-sm text-cream/60">
                <div>
                  <p className="text-xl font-semibold text-honey drop-shadow-neon">
                    Terça a Sexta
                  </p>
                  <p>08h às 18h</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-honey drop-shadow-neon">
                    Sábados
                  </p>
                  <p>08h às 14h</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-night/80 p-8 shadow-neon">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(200,166,255,0.25),transparent_60%)]" />
              <div className="relative space-y-6">
                <h3 className="text-2xl font-semibold text-cream">
                  Conte seus planos
                </h3>
                <p className="text-sm text-cream/75">
                  Preencha o formulário e retornaremos com sugestões
                  personalizadas de produtos e experiências.
                </p>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-xs uppercase tracking-[0.3em] text-cream/60"
                    >
                      Nome completo
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      className="mt-2 w-full rounded-xl border border-white/10 bg-night/70 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-honey focus:outline-none focus:ring-2 focus:ring-honey/40"
                      placeholder="Como podemos te chamar?"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-[0.3em] text-cream/60"
                      >
                        E-mail
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-2 w-full rounded-xl border border-white/10 bg-night/70 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-honey focus:outline-none focus:ring-2 focus:ring-honey/40"
                        placeholder="voce@empresa.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telefone"
                        className="block text-xs uppercase tracking-[0.3em] text-cream/60"
                      >
                        Telefone
                      </label>
                      <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-night/70 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-honey focus:outline-none focus:ring-2 focus:ring-honey/40"
                        placeholder="(31) 99999-9999"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="mensagem"
                      className="block text-xs uppercase tracking-[0.3em] text-cream/60"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-night/70 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-honey focus:outline-none focus:ring-2 focus:ring-honey/40"
                      placeholder="Conte sobre seu evento, presente corporativo ou pedido especial."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-linear-to-r from-honey via-lavender to-honey px-6 py-3 text-base font-semibold text-night shadow-neon transition hover:shadow-neon-strong"
                  >
                    Enviar mensagem
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
