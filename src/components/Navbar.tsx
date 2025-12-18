"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { href: "/#produtos", label: "Produtos" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#diferenciais", label: "Diferenciais" },
  { href: "/#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-linear-to-b from-night/90 via-night/70 to-transparent backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold text-honey hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honey/70"
          onClick={close}
        >
          <span className="relative h-11 w-11 overflow-hidden rounded-full border border-honey/40 bg-night shadow-neon hover:shadow-neon-strong">
            <Image
              src="/logo-mobile.png"
              alt="Apiários dos Sonhos"
              fill
              className="object-contain"
            />
          </span>
          Apiários dos Sonhos
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-cream lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition duration-200 hover:text-honey hover:underline"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contato"
            className="rounded-full bg-linear-to-r from-honey via-lavender to-honey px-5 py-2 text-sm font-semibold text-night shadow-neon hover:shadow-neon-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honey/70"
          >
            Veja nosso catálogo
          </Link>
        </nav>

        <button
          type="button"
          onClick={toggle}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-honey/40 bg-night text-cream shadow-neon hover:shadow-neon-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honey/70 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Abrir menu</span>
          <span className="flex h-5 w-6 flex-col items-center justify-between">
            <span
              className={`block h-0.5 w-full origin-center rounded-full bg-current transition duration-300 ease-out ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full origin-center rounded-full bg-current transition duration-300 ease-out ${
                open ? "scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full origin-center rounded-full bg-current transition duration-300 ease-out ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"}`}
        aria-hidden={!open}
      >
        <div className="min-h-0 bg-night/95 px-6 pb-6">
          <nav className="flex flex-col gap-4 text-base font-medium text-cream">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-lg px-2 py-2 transition hover:bg-night-strong/40 hover:text-honey"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contato"
              onClick={close}
              className="rounded-full bg-linear-to-r from-honey via-lavender to-honey px-5 py-3 text-center font-semibold text-night shadow-neon hover:shadow-neon-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honey/70"
            >
              Veja nosso catálogo
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
