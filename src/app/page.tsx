import { site } from "@/data/site";
import { Starfield } from "@/components/Starfield";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { Contact } from "@/components/Contact";
import { WorkDropdown } from "@/components/WorkDropdown";

export default function Home() {
  return (
    <>
      <Starfield />

      <header className="fixed inset-x-0 top-0 z-40 h-16 bg-gradient-to-b from-base via-base/85 to-transparent">
        <div className="mx-auto flex h-full w-full max-w-[1400px] items-center justify-between gap-8 px-6 lg:px-10">
          <a
            href="#top"
            className="wordmark text-[0.8rem] text-ink transition-opacity hover:opacity-70"
          >
            {site.name}
          </a>

          <nav aria-label="Sections" className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="whitespace-nowrap rounded-full bg-ink px-5 py-2 text-sm font-medium text-base transition-colors hover:bg-white"
          >
            {site.cta}
          </a>
        </div>
      </header>

      <main>
        <Hero />

        <section id="profile" className="relative z-10 scroll-mt-16 py-28 lg:py-44 select-none">
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12">
              <div className="lg:col-span-5 relative">
                <div className="lg:sticky lg:top-32">
                  <Reveal>
                    <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] tracking-tighter text-ink font-medium">
                      {site.profile.heading}
                    </h2>
                  </Reveal>
                </div>
              </div>

              <div className="lg:col-span-6 lg:col-start-7 space-y-24">
                <div className="space-y-8">
                  {site.profile.body.map((p, i) => (
                    <Reveal key={p.slice(0, 20)} index={i}>
                      <p className="text-[1.1rem] sm:text-lg leading-relaxed text-muted max-w-[50ch]">
                        {p}
                      </p>
                    </Reveal>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                  {site.profile.facts.map((fact, i) => (
                    <Reveal key={fact.label} index={i}>
                      <div className="space-y-3">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted/60">
                          {fact.label}
                        </p>
                        <p className="text-lg text-ink font-medium">
                          {fact.value}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="relative z-10 scroll-mt-16 py-28 lg:py-40">
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted mb-5">
                {site.services.eyebrow}
              </p>
              <h2 className="max-w-[20ch] text-[clamp(2.2rem,5vw,4.5rem)] leading-tight tracking-tight text-ink font-medium">
                {site.services.heading}
              </h2>
            </Reveal>

            <div className="mt-24 space-y-32">
              {site.services.items.map((item, i) => (
                <Reveal
                  key={item.title}
                  index={i}
                  className={`flex flex-col gap-12 lg:flex-row lg:items-end ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-1/2 flex flex-col justify-end">
                    <h3 className="text-3xl lg:text-5xl text-ink tracking-tight mb-8 font-medium">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted leading-relaxed max-w-[45ch]">
                      {item.body}
                    </p>

                    {item.workExamples && item.workExamples.length > 0 && (
                      <WorkDropdown examples={item.workExamples} />
                    )}
                  </div>

                  <div className="lg:w-1/2 lg:px-16">
                    <ul className="space-y-6">
                      {item.points.map((point, pi) => (
                        <li
                          key={point}
                          className="border-b border-line/40 pb-4 flex items-center justify-between gap-6"
                        >
                          <span className="text-base text-ink/80">{point}</span>
                          <span className="font-mono text-xs text-muted shrink-0">
                            0{pi + 1}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="relative z-10 bg-base border-t border-line">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="border-t border-line/60 px-6 lg:px-10 py-10 flex flex-col md:flex-row md:items-end justify-end gap-10">
            <nav aria-label="Elsewhere" className="flex flex-col gap-2 font-mono text-sm text-muted">
              <span className="uppercase tracking-[0.2em] text-muted/50 mb-2">
                Connect
              </span>
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-ink hover:underline underline-offset-4 decoration-line"
                >
                  &gt; {social.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
