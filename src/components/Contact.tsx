"use client";

import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-16 overflow-hidden border-t border-line"
    >
      <Image
        src="/img/terminator.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-left-bottom opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-base via-base/70 to-base" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-32 text-center lg:px-10 lg:py-48">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            {site.contact.eyebrow}
          </p>
          <h2 className="mx-auto mt-6 max-w-[16ch] text-[clamp(1.9rem,5vw,3.6rem)] leading-[1.08] tracking-tight text-ink">
            {site.contact.heading}
          </h2>
        </Reveal>

        <Reveal index={1}>
          <p className="mx-auto mt-8 max-w-[52ch] leading-relaxed text-muted">
            {site.contact.body}
          </p>
        </Reveal>

        <Reveal index={2}>
          <div className="mt-14 flex flex-col items-center gap-5">
            <p className="text-sm text-muted">Message me on Discord</p>
            <a
              href="https://discord.com/users/782319336357625856"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-medium text-lg text-black transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:ring-2 hover:ring-white/20 hover:ring-offset-2 hover:ring-offset-base active:scale-[0.96]"
            >
              <span>{site.contact.discord}</span>
              <ArrowRight
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            {site.contact.discordInvite && (
              <a
                href={site.contact.discordInvite}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted underline underline-offset-4 transition-colors hover:text-ink"
              >
                Or join the server
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
