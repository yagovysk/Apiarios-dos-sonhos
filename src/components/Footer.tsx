import Link from "next/link";

const footerLinks = [
  {
    title: "Institucional",
    links: [
      { href: "/#sobre", label: "Nossa história" },
      { href: "/#diferenciais", label: "Compromissos" },
      { href: "/#produtos", label: "Catálogo" },
    ],
  },
  {
    title: "Contato",
    links: [
      { href: "tel:+550000000000", label: "+55 (00) 0000-0000" },
      {
        href: "mailto:contato@apiariosdossonhos.com",
        label: "contato@apiariosdossonhos.com",
      },
      { href: "/#contato", label: "Enviar mensagem" },
    ],
  },
  {
    title: "Redes",
    links: [
      { href: "https://www.instagram.com/", label: "Instagram" },
      { href: "https://www.facebook.com/", label: "Facebook" },
      { href: "https://wa.me/55", label: "WhatsApp" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32 bg-night py-12 text-cream">
      <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-honey to-transparent opacity-80" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,233,138,0.15),transparent_55%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm">
          <h3 className="text-2xl font-semibold text-honey drop-shadow-neon">
            Apiários dos Sonhos
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-cream/80">
            Mel 100% artesanal, direto do apiário para a sua mesa. Produzido com
            cuidado, respeito às abelhas e compromisso com a natureza.
          </p>
          <p className="mt-6 text-xs uppercase tracking-widest text-lavender/80">
            CNPJ 00.000.000/0001-00
          </p>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-10 md:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-honey">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-cream/80">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition hover:text-honey hover:drop-shadow-neon"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 border-t border-cream/10" />
      <p className="mx-auto mt-6 max-w-6xl px-6 text-xs text-cream/60">
        © {new Date().getFullYear()} Apiários dos Sonhos. Produzido com carinho
        e respeito ao planeta.
      </p>
    </footer>
  );
}
