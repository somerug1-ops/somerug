"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { site } from "@/data/site";

const MASK_GRADIENT = "linear-gradient(to bottom, transparent 0%, #000 30%)";

export function Hero() {
  const targetRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const fadeUp = (delay: number) => ({
    initial: !shouldReduceMotion ? { opacity: 0, y: 26 } : undefined,
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  });

  return (
    <section
      ref={targetRef}
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 origin-bottom scale-[2.1] sm:scale-[1.35] lg:scale-100"
        style={{
          maskImage: MASK_GRADIENT,
          WebkitMaskImage: MASK_GRADIENT,
          ...(shouldReduceMotion ? {} : { y: bgY, opacity: bgOpacity }),
        }}
      >
        <Image
          src="/img/orbit-wide.jpg"
          alt=""
          width={2400}
          height={990}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-24 pb-20 lg:px-10 lg:pb-28"
        style={shouldReduceMotion ? undefined : { y: textY, opacity: textOpacity }}
      >
        <motion.h1
          {...fadeUp(0.1)}
          className="wordmark text-[clamp(2.6rem,9vw,7.5rem)] text-white"
        >
          {site.name}
        </motion.h1>

        <motion.div
          {...fadeUp(0.28)}
          className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-[34ch] text-lg leading-relaxed text-ink/85 sm:text-xl">
            {site.tagline}
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-ink px-7 py-3.5 font-medium text-base text-black transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:ring-2 hover:ring-white/20 hover:ring-offset-2 hover:ring-offset-base active:scale-[0.96]"
          >
            <span>{site.cta}</span>
            <ArrowRight
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
