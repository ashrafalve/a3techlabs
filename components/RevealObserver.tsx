"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal="init"]'),
    );

    if (nodes.length === 0) return;

    const reveal = (el: HTMLElement) =>
      el.setAttribute("data-reveal", "shown");

    if (!("IntersectionObserver" in window)) {
      nodes.forEach(reveal);
      return;
    }

    document.documentElement.dataset.anim = "on";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    const pending: HTMLElement[] = [];
    const limit = window.innerHeight * 0.92;

    for (const node of nodes) {
      if (node.getBoundingClientRect().top < limit) {
        reveal(node);
      } else {
        node.setAttribute("data-reveal", "pending");
        pending.push(node);
      }
    }

    pending.forEach((node) => observer.observe(node));

    let frame = 0;
    const check = () => {
      frame = 0;
      const edge = window.innerHeight * 0.92;
      for (const node of pending) {
        if (
          node.getAttribute("data-reveal") === "pending" &&
          node.getBoundingClientRect().top < edge
        ) {
          reveal(node);
          observer.unobserve(node);
        }
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(check);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
