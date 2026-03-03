import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

type ScrollOptions = {
  offset?: number;
  duration?: number;
};

export function scrollToTarget(
  target: string | HTMLElement,
  options: ScrollOptions = {},
) {
  if (typeof window === "undefined") return;

  const offset = options.offset ?? 0;
  const duration = options.duration ?? 0.65;
  const lenis = window.__lenis;

  if (lenis) {
    lenis.scrollTo(target, { offset, duration });
    return;
  }

  const element =
    typeof target === "string"
      ? document.querySelector<HTMLElement>(target)
      : target;

  if (!element) return;

  const y = element.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}