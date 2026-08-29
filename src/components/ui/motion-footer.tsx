"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp, Heart, Rocket, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Register ScrollTrigger safely for React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. THEME-ADAPTIVE INLINE STYLES
// -------------------------------------------------------------------------
const STYLES = `
.cinematic-footer-wrapper {
  font-family: var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;

  /* Dynamic Variables using standard shadcn / tailwind v4 tokens */
  --pill-bg-1: color-mix(in oklab, var(--foreground) 4%, transparent);
  --pill-bg-2: color-mix(in oklab, var(--foreground) 1%, transparent);
  --pill-shadow: color-mix(in oklab, var(--background) 50%, transparent);
  --pill-highlight: color-mix(in oklab, var(--foreground) 12%, transparent);
  --pill-inset-shadow: color-mix(in oklab, var(--background) 80%, transparent);
  --pill-border: color-mix(in oklab, var(--foreground) 10%, transparent);

  --pill-bg-1-hover: color-mix(in oklab, var(--foreground) 10%, transparent);
  --pill-bg-2-hover: color-mix(in oklab, var(--foreground) 3%, transparent);
  --pill-border-hover: color-mix(in oklab, var(--foreground) 24%, transparent);
  --pill-shadow-hover: color-mix(in oklab, var(--background) 70%, transparent);
  --pill-highlight-hover: color-mix(in oklab, var(--foreground) 22%, transparent);
}

@keyframes footer-breathe {
  0%   { transform: translate(-50%, -50%) scale(1);   opacity: 0.55; }
  100% { transform: translate(-50%, -50%) scale(1.12); opacity: 1; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1);   filter: drop-shadow(0 0 5px color-mix(in oklab, var(--destructive) 50%, transparent)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 10px color-mix(in oklab, var(--destructive) 80%, transparent)); }
  30%      { transform: scale(1); }
}

.animate-footer-breathe        { animation: footer-breathe 8s ease-in-out infinite alternate; }
.animate-footer-scroll-marquee { animation: footer-scroll-marquee 40s linear infinite; }
.animate-footer-heartbeat      { animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite; }

/* Theme-adaptive grid background */
.footer-bg-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, color-mix(in oklab, var(--foreground) 4%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklab, var(--foreground) 4%, transparent) 1px, transparent 1px);
  -webkit-mask-image: linear-gradient(to bottom, transparent, #000 30%, #000 70%, transparent);
          mask-image: linear-gradient(to bottom, transparent, #000 30%, #000 70%, transparent);
}

/* Theme-adaptive aurora glow */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    color-mix(in oklab, var(--primary) 22%, transparent) 0%,
    color-mix(in oklab, var(--secondary) 18%, transparent) 42%,
    transparent 72%
  );
}

/* Glass pill theming */
.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow:
    0 10px 30px -10px var(--pill-shadow),
    inset 0 1px 1px var(--pill-highlight),
    inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  -webkit-backdrop-filter: blur(16px);
          backdrop-filter: blur(16px);
  transition: background 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow:
    0 20px 40px -10px var(--pill-shadow-hover),
    inset 0 1px 1px var(--pill-highlight-hover);
  color: var(--foreground);
}

/* Giant background text */
.footer-giant-bg-text {
  font-size: clamp(6rem, 26vw, 22rem);
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in oklab, var(--foreground) 8%, transparent);
  background: linear-gradient(180deg, color-mix(in oklab, var(--foreground) 14%, transparent) 0%, transparent 62%);
  -webkit-background-clip: text;
          background-clip: text;
}

/* Metallic text glow */
.footer-text-glow {
  background: linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklab, var(--foreground) 42%, transparent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
          background-clip: text;
  filter: drop-shadow(0 0 20px color-mix(in oklab, var(--foreground) 16%, transparent));
}

@media (prefers-reduced-motion: reduce) {
  .animate-footer-breathe,
  .animate-footer-scroll-marquee,
  .animate-footer-heartbeat {
    animation: none !important;
  }
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE (zero extra dependency)
// -------------------------------------------------------------------------
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      const element = localRef.current;
      if (!element) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (window.matchMedia("(hover: none)").matches) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(element, {
            x: x * 0.4,
            y: y * 0.4,
            rotationX: -y * 0.15,
            rotationY: x * 0.15,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as EventListener);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as EventListener);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          localRef.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef)
            (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. MAIN COMPONENT
// -------------------------------------------------------------------------
const MARQUEE_WORDS = [
  "Yapay Zeka Mühendisliği",
  "Ölçeklenebilir Sistemler",
  "Yüksek Performanslı Uygulamalar",
  "Dijital Altyapı",
  "Ürün Odaklı Ekipler",
];

const MarqueeItem = () => (
  <div className="flex shrink-0 items-center gap-12 px-6">
    {MARQUEE_WORDS.map((word, i) => (
      <React.Fragment key={word}>
        <span>{word}</span>
        <span className={i % 2 === 0 ? "text-primary/70" : "text-secondary/70"}>✦</span>
      </React.Fragment>
    ))}
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // No fancy scroll work when the user prefers reduced motion – everything
    // is already visible via CSS defaults, so we simply bail out.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const revealTargets = [headingRef.current, linksRef.current].filter(Boolean);

      // Start hidden – if GSAP never runs, the CSS keeps them visible.
      gsap.set(revealTargets, { autoAlpha: 0, y: 48 });
      gsap.set(giantTextRef.current, { autoAlpha: 0.35, yPercent: 12, scale: 0.86 });

      // Giant background text – gentle scrubbed parallax.
      gsap.to(giantTextRef.current, {
        autoAlpha: 1,
        yPercent: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 90%",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Content reveal – plays once when the footer enters the viewport and stays.
      gsap.to(revealTargets, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 78%",
          once: true,
        },
      });
    }, wrapper);

    // Recalculate trigger positions once webfonts / layout settle.
    const refresh = () => ScrollTrigger.refresh();
    const raf = requestAnimationFrame(refresh);
    if (document.fonts?.ready) document.fonts.ready.then(refresh).catch(() => {});
    window.addEventListener("load", refresh);

    // Hard safety net: never leave the content invisible.
    const safety = window.setTimeout(() => {
      gsap.to([headingRef.current, linksRef.current, giantTextRef.current], {
        autoAlpha: 1,
        y: 0,
        yPercent: 0,
        scale: 1,
        duration: 0.4,
        overwrite: "auto",
      });
    }, 2500);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", refresh);
      window.clearTimeout(safety);
      ctx.revert();
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div ref={wrapperRef} className="relative w-full">
        <footer className="cinematic-footer-wrapper relative flex min-h-[max(100svh,640px)] w-full flex-col justify-between overflow-hidden bg-background text-foreground">
          {/* Ambient light + grid background */}
          <div className="footer-aurora pointer-events-none absolute left-1/2 top-1/2 z-0 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px]" />
          <div className="footer-bg-grid pointer-events-none absolute inset-0 z-0" />

          {/* Giant background wordmark */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text pointer-events-none absolute -bottom-[4vh] left-1/2 z-0 -translate-x-1/2 select-none whitespace-nowrap"
          >
            VIRELIX
          </div>

          {/* 1. Diagonal marquee */}
          <div className="absolute left-0 top-12 z-10 w-full -rotate-2 scale-110 overflow-hidden border-y border-border/50 bg-background/60 py-4 shadow-2xl backdrop-blur-md">
            <div className="flex w-max animate-footer-scroll-marquee text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground md:text-sm">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* 2. Center content */}
          <div className="relative z-10 mx-auto mt-20 flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6">
            <h2
              ref={headingRef}
              className="footer-text-glow mb-12 text-center text-5xl font-black tracking-tighter md:text-8xl"
            >
              Başlamaya hazır mısınız?
            </h2>

            <div ref={linksRef} className="flex w-full flex-col items-center gap-6">
              {/* Primary CTAs */}
              <div className="flex w-full flex-wrap justify-center gap-4">
                <MagneticButton
                  as="a"
                  href="/iletisime-gec"
                  className="footer-glass-pill group flex items-center gap-3 rounded-full px-10 py-5 text-sm font-bold text-foreground md:text-base"
                >
                  <Rocket className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground" />
                  Projeni Başlat
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="/why-us"
                  className="footer-glass-pill group flex items-center gap-3 rounded-full px-10 py-5 text-sm font-bold text-foreground md:text-base"
                >
                  <Sparkles className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground" />
                  Neden Virelix?
                </MagneticButton>
              </div>

              {/* Secondary links */}
              <div className="mt-2 flex w-full flex-wrap justify-center gap-3 md:gap-6">
                <MagneticButton
                  as="a"
                  href="/gizlilik-politikasi"
                  className="footer-glass-pill rounded-full px-6 py-3 text-xs font-medium text-muted-foreground hover:text-foreground md:text-sm"
                >
                  Gizlilik Politikası
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="/kullanim-kosullari"
                  className="footer-glass-pill rounded-full px-6 py-3 text-xs font-medium text-muted-foreground hover:text-foreground md:text-sm"
                >
                  Kullanım Şartları
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="/iletisime-gec"
                  className="footer-glass-pill rounded-full px-6 py-3 text-xs font-medium text-muted-foreground hover:text-foreground md:text-sm"
                >
                  Destek
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* 3. Bottom bar */}
          <div className="relative z-20 flex w-full flex-col items-center justify-between gap-6 px-6 pb-8 md:flex-row md:px-12">
            <div className="order-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground md:order-1 md:text-xs">
              © {new Date().getFullYear()} Virelix AI. Tüm hakları saklıdır.
            </div>

            <div className="footer-glass-pill order-1 flex cursor-default items-center gap-2 rounded-full border-border/50 px-6 py-3 md:order-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground md:text-xs">
                Tutkuyla
              </span>
              <Heart className="h-4 w-4 animate-footer-heartbeat fill-current text-destructive" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground md:text-xs">
                üretildi
              </span>
              <span className="ml-1 text-xs font-black tracking-normal text-foreground md:text-sm">
                Virelix
              </span>
            </div>

            <MagneticButton
              as="button"
              onClick={scrollToTop}
              aria-label="Sayfanın başına dön"
              className="footer-glass-pill group order-3 flex h-12 w-12 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
            >
              <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1.5" />
            </MagneticButton>
          </div>
        </footer>
      </div>
    </>
  );
}
