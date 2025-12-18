"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  once?: boolean;
  delay?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "ref">;

export function Reveal<T extends ElementType = "div">(props: RevealProps<T>) {
  const { as, children, className, once = false, delay = 0, ...rest } = props;
  const Component = (as || "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) {
              observer.disconnect();
            }
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  return (
    <Component
      ref={ref}
      data-visible={visible ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        "translate-y-10 opacity-0 scale-[0.98] transition-all duration-700 ease-out",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 data-[visible=true]:scale-100",
        "data-[visible=false]:translate-y-10 data-[visible=false]:scale-[0.98] data-[visible=false]:opacity-0",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...(rest as ComponentPropsWithoutRef<T>)}
    >
      {children}
    </Component>
  );
}
