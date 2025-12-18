"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Product = {
  name: string;
  description: string;
  benefits: string[];
  image: string;
  category: string;
};

type ProductCarouselProps = {
  products: Product[];
};

export function ProductCarousel({ products }: ProductCarouselProps) {
  const categories = useMemo(() => {
    const unique = new Set<string>(["Todos"]);
    products.forEach((product) => {
      unique.add(product.category);
    });
    return Array.from(unique);
  }, [products]);

  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [query, setQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Todos" || product.category === selectedCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery) ||
        product.benefits.some((benefit) =>
          benefit.toLowerCase().includes(normalizedQuery)
        );

      return matchesCategory && matchesQuery;
    });
  }, [products, query, selectedCategory]);

  const slides = useMemo(() => {
    const chunkSize = 3;
    const grouped: Product[][] = [];
    filteredProducts.forEach((product, index) => {
      if (index % chunkSize === 0) {
        grouped.push([product]);
      } else {
        grouped[grouped.length - 1]?.push(product);
      }
    });
    return grouped;
  }, [filteredProducts]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (slides.length === 0) {
        return 0;
      }
      return (prev - 1 + slides.length) % slides.length;
    });
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (slides.length === 0) {
        return 0;
      }
      return (prev + 1) % slides.length;
    });
  }, [slides.length]);

  const focusSearch = useCallback(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const clampedIndex = slides.length === 0 ? 0 : currentIndex % slides.length;
  const showEmptyState = filteredProducts.length === 0;

  useEffect(() => {
    if (slides.length <= 1 || isHovered) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => {
        if (slides.length === 0) {
          return 0;
        }
        return (prev + 1) % slides.length;
      });
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [isHovered, slides.length]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-3xl border border-honey/40 bg-night/70 p-6 shadow-neon md:flex-row md:items-center md:justify-between">
        <div className="relative flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
          <button
            type="button"
            onClick={() => setDropdownOpen((value) => !value)}
            className="inline-flex items-center gap-2 rounded-full border border-honey/50 bg-night/80 px-4 py-2 text-sm font-semibold text-cream transition hover:border-honey hover:text-honey"
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-honey shadow-neon" />
            {selectedCategory}
            <svg
              className="h-4 w-4 text-honey"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.084l3.71-3.853a.75.75 0 111.08 1.04l-4.24 4.403a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {dropdownOpen ? (
            <ul
              role="listbox"
              className="absolute left-0 top-12 z-30 w-52 overflow-hidden rounded-2xl border border-honey/40 bg-night/95 p-2 text-sm shadow-neon"
            >
              {categories.map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    role="option"
                    onClick={() => {
                      setSelectedCategory(category);
                      setDropdownOpen(false);
                      setCurrentIndex(0);
                    }}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-cream transition hover:bg-night-strong/60 hover:text-honey"
                    aria-selected={selectedCategory === category}
                  >
                    {category}
                    {selectedCategory === category ? (
                      <svg
                        className="h-4 w-4 text-honey"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 00-1.408-1.418l-6.125 6.08-2.47-2.45a1 1 0 00-1.409 1.418l3.176 3.15a1 1 0 001.409 0l6.826-6.78z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : null}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              ref={searchInputRef}
              type="search"
              placeholder="Pesquisar produtos"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setCurrentIndex(0);
              }}
              className="w-52 rounded-full border border-honey/40 bg-night/80 px-4 py-2 text-sm text-cream placeholder:text-cream/40 focus:border-honey focus:outline-none focus:ring-2 focus:ring-honey/40"
            />
            <span
              className="pointer-events-none absolute inset-y-0 right-10 hidden items-center text-cream/40 sm:flex"
              aria-hidden
            >
              /
            </span>
          </div>
          <button
            type="button"
            onClick={focusSearch}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-lavender/50 bg-night/80 text-lavender shadow-neon transition hover:border-honey hover:text-honey"
            aria-label="Pesquisar produtos"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path d="M8.5 3a5.5 5.5 0 013.913 9.388l3.099 3.099a.75.75 0 11-1.06 1.06l-3.1-3.098A5.5 5.5 0 118.5 3zm0 1.5a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          </button>
        </div>
      </div>

      {showEmptyState ? (
        <div className="rounded-3xl border border-honey/30 bg-night/70 p-10 text-center text-sm text-cream/70">
          Nenhum produto encontrado para a busca atual. Ajuste a categoria ou as
          palavras-chave.
        </div>
      ) : (
        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-night/80 p-6 shadow-neon"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${clampedIndex * 100}%)` }}
          >
            {slides.map((group, slideIndex) => (
              <div key={`slide-${slideIndex}`} className="w-full shrink-0 px-1">
                <div className="grid gap-6 md:grid-cols-3">
                  {group.map((product) => (
                    <article
                      key={`${product.name}-${product.category}`}
                      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-honey/35 bg-[linear-gradient(160deg,rgba(246,180,0,0.16),rgba(6,2,13,0.88))] p-6 shadow-neon transition duration-300 hover:-translate-y-2 hover:border-honey hover:shadow-neon-strong"
                    >
                      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle,rgba(200,166,255,0.22),transparent_70%)] opacity-0 transition group-hover:opacity-100" />
                      <div className="relative flex items-start justify-between">
                        <span className="rounded-full border border-honey/50 bg-night/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-honey">
                          {product.category}
                        </span>
                        <span className="rounded-full border border-lavender/40 bg-night/70 px-3 py-1 text-xs font-semibold text-lavender">
                          Lançamento
                        </span>
                      </div>
                      <div className="relative mx-auto mt-6 flex h-28 w-28 items-center justify-center rounded-full border border-honey/40 bg-night/80 shadow-neon drop-shadow-neon">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={120}
                          height={120}
                          className="h-20 w-20 object-contain"
                        />
                      </div>
                      <div className="relative mt-6 space-y-4 text-cream/80">
                        <h3 className="text-xl font-semibold text-honey drop-shadow-neon">
                          {product.name}
                        </h3>
                        <p className="text-sm leading-relaxed text-cream/75">
                          {product.description}
                        </p>
                        <ul className="space-y-2 text-sm">
                          {product.benefits.map((benefit) => (
                            <li
                              key={benefit}
                              className="flex items-start gap-2"
                            >
                              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-linear-to-r from-honey to-lavender shadow-neon" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative mt-6 flex items-center justify-between">
                        <Link
                          href="/#contato"
                          className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-honey via-lavender to-honey px-4 py-2 text-sm font-semibold text-night shadow-neon transition group-hover:shadow-neon-strong"
                        >
                          Quero provar
                          <span aria-hidden>↗</span>
                        </Link>
                        <button
                          type="button"
                          onClick={focusSearch}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-lavender/50 bg-night/70 text-lavender transition hover:border-honey hover:text-honey"
                          aria-label="Pesquisar produtos relacionados"
                        >
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path d="M8.5 3a5.5 5.5 0 013.913 9.388l3.099 3.099a.75.75 0 11-1.06 1.06l-3.1-3.098A5.5 5.5 0 118.5 3zm0 1.5a4 4 0 100 8 4 4 0 000-8z" />
                          </svg>
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {slides.length > 1 ? (
            <>
              <button
                type="button"
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-honey/40 bg-night/80/80 p-3 text-honey shadow-neon transition hover:border-honey hover:bg-night-strong/80 hover:text-cream focus:outline-none focus:ring-2 focus:ring-honey/40"
                aria-label="Ver produtos anteriores"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M12.78 4.22a.75.75 0 010 1.06L8.06 10l4.72 4.72a.75.75 0 11-1.06 1.06l-5.25-5.25a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-lavender/40 bg-night/80/80 p-3 text-lavender shadow-neon transition hover:border-honey hover:bg-night-strong/80 hover:text-honey focus:outline-none focus:ring-2 focus:ring-honey/40"
                aria-label="Ver próximos produtos"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M7.22 4.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L11.94 10 7.22 5.28a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </>
          ) : null}

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={goToPrev}
              className="inline-flex items-center gap-2 rounded-full border border-honey/50 bg-night/80 px-4 py-2 text-sm font-semibold text-honey transition hover:border-honey hover:text-cream disabled:opacity-40"
              disabled={slides.length <= 1}
            >
              <span aria-hidden>←</span>
              Anterior
            </button>
            <div className="flex items-center gap-2">
              {slides.map((group, index) => (
                <span
                  key={`dot-${group[0]?.name ?? index}-${index}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === clampedIndex
                      ? "bg-honey shadow-neon"
                      : "bg-white/10"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goToNext}
              className="inline-flex items-center gap-2 rounded-full border border-lavender/50 bg-night/80 px-4 py-2 text-sm font-semibold text-lavender transition hover:border-honey hover:text-honey disabled:opacity-40"
              disabled={slides.length <= 1}
            >
              Próximo
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
