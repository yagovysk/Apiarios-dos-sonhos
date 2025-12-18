import type { Metadata } from "next";

import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Apiários dos Sonhos para pedidos especiais, parcerias de varejo e visitas imersivas.",
};

const channels = [
  {
    title: "Atendimento",
    details: [
      "WhatsApp: (11) 98765-4321",
      "Telefone: (11) 3232-4545",
      "E-mail: atendimento@apiariosdossonhos.com",
    ],
  },
  {
    title: "Visitas guiadas",
    details: [
      "Sábados, às 10h e 15h",
      "Estrada das Flores, km 12 — Serra da Mantiqueira",
      "Reservas com 48h de antecedência",
    ],
  },
];

export default function ContatoPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-night text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,180,0,0.15),transparent_60%)]" />

      <section className="relative border-b border-white/5 px-6 py-24">
        <div className="mx-auto max-w-4xl space-y-6">
          <Reveal className="inline-flex items-center gap-2 rounded-full border border-honey/40 bg-night/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-honey">
            Conexão direta
          </Reveal>
          <Reveal className="space-y-6">
            <h1 className="text-4xl font-semibold text-cream md:text-5xl">
              Converse com nossa equipe
            </h1>
            <p className="text-base leading-relaxed text-cream/75">
              Pedidos personalizados, parcerias comerciais, experiências
              imersivas e press trips — estamos aqui para cocriar ao seu lado.
              Escolha um canal direto ou envie sua mensagem pelo formulário.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-24 md:flex-row">
        <Reveal className="flex-1 space-y-6 rounded-3xl border border-white/10 bg-night/75 p-8 shadow-neon">
          <h2 className="text-lg font-semibold text-cream">
            Canais de atendimento
          </h2>
          {channels.map((channel) => (
            <div key={channel.title} className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-lavender/80">
                {channel.title}
              </h3>
              <ul className="space-y-2 text-sm text-cream/75">
                {channel.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="rounded-2xl border border-white/10 bg-night/80 p-5 text-sm text-cream/70">
            Preferimos contatos antecipados para garantir agenda de experiências
            e a disponibilidade das safras sazonais.
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="flex-1 space-y-5 rounded-3xl border border-white/10 bg-night/75 p-8 shadow-neon"
        >
          <form className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-cream">
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Como devemos te chamar?"
                className="w-full rounded-2xl border border-white/10 bg-night/60 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-honey focus:outline-none focus:ring-2 focus:ring-honey/40"
                required
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-cream"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="contato@empresa.com"
                  className="w-full rounded-2xl border border-white/10 bg-night/60 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-honey focus:outline-none focus:ring-2 focus:ring-honey/40"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-cream"
                >
                  Telefone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(11) 0000-0000"
                  className="w-full rounded-2xl border border-white/10 bg-night/60 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-honey focus:outline-none focus:ring-2 focus:ring-honey/40"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-cream"
              >
                Como podemos ajudar?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Conte mais sobre o seu pedido, evento ou parceria."
                className="w-full rounded-2xl border border-white/10 bg-night/60 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-honey focus:outline-none focus:ring-2 focus:ring-honey/40"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-linear-to-r from-honey via-lavender to-honey px-6 py-3 text-sm font-semibold text-night shadow-neon transition hover:shadow-neon-strong"
            >
              Enviar mensagem
            </button>
            <p className="text-xs text-cream/50">
              Ao enviar o formulário você concorda com a nossa política de
              privacidade e uso dos dados para retorno do contato.
            </p>
          </form>
        </Reveal>
      </section>
    </div>
  );
}
