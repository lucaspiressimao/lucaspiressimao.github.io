"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { contact, experience, focusAreas, intro, learning, openSourceProjects, principles, quickFacts, selectedWork, writingTopics } from "@/lib/site-data";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Open source", href: "#open-source" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export function PortfolioPage() {
  return (
    <main className="noise relative overflow-hidden">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#050816]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="text-sm font-medium tracking-[-0.03em] text-slate-100">
            Lucas Pires Simão
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-300/80 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={contact.cv}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-100 transition hover:border-sky-300/25 hover:bg-white/[0.07]"
          >
            CV
          </a>
        </div>
      </header>

      <section id="top" className="section-shell max-w-6xl pb-20 pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
          <motion.div {...fadeUp}>
            <p className="section-label">{intro.location}</p>
            <h1 className="mt-5 max-w-4xl text-[clamp(3.2rem,8vw,6.8rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-slate-50">
              {intro.name}
            </h1>
            <p className="mt-5 text-xl leading-9 tracking-[-0.03em] text-slate-200/88 md:max-w-3xl md:text-2xl">
              {intro.title}
            </p>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300/78">{intro.summary}</p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300/70">{intro.detail}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-slate-50 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-100"
              >
                Get in touch
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-slate-100 transition hover:border-sky-300/25 hover:bg-white/[0.07]"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.aside {...fadeUp} transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 }}>
            <div className="panel overflow-hidden p-4">
              <Image
                src="/images/profile.jpg"
                alt="Lucas Pires Simão"
                width={720}
                height={960}
                className="h-auto w-full rounded-[24px] object-cover"
                priority
              />
              <div className="px-2 pb-2 pt-5">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-300/72">Current focus</p>
                <p className="mt-3 text-sm leading-7 text-slate-300/74">
                  DevOps, cloud architecture, platform engineering, observability, AI automation and resilient delivery systems.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="mt-16 grid gap-4 md:grid-cols-2"
        >
          {quickFacts.map((fact) => (
            <div key={fact} className="border-t border-white/10 pt-4 text-sm leading-7 text-slate-300/76">
              {fact}
            </div>
          ))}
        </motion.div>
      </section>

      <section id="about" className="section-shell max-w-6xl py-14">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="About"
            title="A personal site should explain how someone thinks, not only what they ship."
            description="The part of engineering I care about most is building systems that remain operable under pressure. That usually means making delivery more predictable, infrastructure easier to reason about, incidents faster to understand and teams less dependent on tribal knowledge."
          />
        </motion.div>

        <div className="mt-14 grid gap-x-14 gap-y-10 md:grid-cols-2">
          {principles.map((item, index) => (
            <motion.article
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.04 }}
            >
              <h3 className="text-2xl font-medium tracking-[-0.04em] text-slate-50">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-300/74">{item.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div id="open-source" {...fadeUp} className="scroll-mt-24 mt-20 border-t border-white/10 pt-12">
          <p className="section-label">Open source</p>
          <div className="mt-5 grid gap-5 md:grid-cols-[0.72fr_0.28fr] md:items-end">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-50 md:text-4xl">
              Projects built in the open
            </h2>
            <p className="text-sm leading-7 text-slate-300/70 md:text-right">
              Free to use, inspect, adapt and improve.
            </p>
          </div>

          <div className="mt-8 grid gap-5">
            {openSourceProjects.map((project) => (
              <article key={project.name} className="panel grid gap-6 p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-7">
                <Image
                  src={project.icon}
                  alt={`${project.name} icon`}
                  width={72}
                  height={72}
                  className="h-16 w-16 rounded-2xl object-cover md:h-[72px] md:w-[72px]"
                />
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-300/72">{project.fullName}</p>
                  <h3 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-slate-50">{project.name}</h3>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300/74">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="metric-chip">{tag}</span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-sky-300/20 bg-sky-300/[0.07] px-5 py-3 text-sm font-medium text-sky-200 transition hover:border-sky-300/40 hover:bg-sky-300/[0.12]"
                >
                  Explore {project.name} ↗
                </a>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="experience" className="section-shell max-w-6xl py-14">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="Experience"
            title="Selected experience"
            description="Cloud platforms, application delivery and operational outcomes across hospitality, payments and digital services."
          />
        </motion.div>

        <div className="mt-14 space-y-14">
          {experience.map((item, index) => (
            <motion.article
              key={item.company}
              {...fadeUp}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
              className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:grid-cols-[0.28fr_0.72fr] md:gap-12 md:p-9"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-300/72">{item.period}</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-50">{item.company}</h3>
                <p className="mt-3 text-base text-slate-300/80">{item.role}</p>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-200/84">{item.overview}</p>
                <ul className="mt-6 space-y-4">
                  {item.points.map((point) => (
                    <li key={point} className="border-l border-slate-600 pl-4 text-base leading-8 text-slate-300">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-2" aria-label="Technologies">
                  {item.stack.map((technology) => (
                    <span key={technology} className="rounded-lg bg-slate-800/80 px-3 py-1.5 text-xs text-slate-300">{technology}</span>
                  ))}
                </div>
                <div className="mt-7 rounded-xl border-l-2 border-sky-300 bg-sky-300/[0.06] p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">Key contribution</p>
                  <p className="mt-2 text-base leading-7 text-slate-200">{item.achievement}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell max-w-6xl py-14">
        <div className="grid gap-14 lg:grid-cols-[0.44fr_0.56fr]">
          <motion.div {...fadeUp}>
            <SectionHeading
              eyebrow="Focus"
              title="Areas I work across"
              description="AWS and Microsoft Azure infrastructure, Kubernetes operations, automated delivery and production observability."
            />
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }} className="flex flex-wrap gap-3 self-start">
            {focusAreas.map((item) => (
              <span key={item} className="metric-chip">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="work" className="section-shell max-w-6xl py-14">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="Selected work"
            title="Projects and systems I like to build"
            description="Outside of company roles, I tend to gravitate toward tooling, automation, documentation systems, AI for operations and small products where infrastructure thinking actually matters."
          />
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {selectedWork.map((item, index) => (
            <motion.article
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
              className="panel p-7"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-300/72">{item.kind}</p>
              <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-slate-50">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-300/74">{item.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.stack.map((tag) => (
                  <span key={tag} className="metric-chip">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex text-sm text-sky-300 transition hover:text-sky-200"
              >
                View project
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="writing" className="section-shell max-w-6xl py-14">
        <div className="grid gap-14 lg:grid-cols-[0.42fr_0.58fr]">
          <motion.div {...fadeUp}>
            <SectionHeading
              eyebrow="Writing"
              title="I also want this site to become a place for technical writing."
              description="The long-term direction is to publish notes, deep dives, postmortems and practical pieces about infrastructure, cloud architecture, observability and AI-assisted operations."
            />
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }} className="space-y-6">
            {writingTopics.map((topic) => (
              <div key={topic} className="border-t border-white/10 pt-5">
                <p className="text-lg leading-8 text-slate-200/86">{topic}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-shell max-w-6xl py-14">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.article {...fadeUp}>
            <p className="section-label">Learning</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-50">Certifications</h2>
            <div className="mt-8 space-y-4">
              {learning.certifications.map((item) => (
                <p key={item} className="border-t border-white/10 pt-4 text-base leading-8 text-slate-300/74">
                  {item}
                </p>
              ))}
            </div>
          </motion.article>

          <motion.article {...fadeUp} transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}>
            <p className="section-label">Education</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-50">Background</h2>
            <div className="mt-8 space-y-4">
              {learning.education.map((item) => (
                <p key={item} className="border-t border-white/10 pt-4 text-base leading-8 text-slate-300/74">
                  {item}
                </p>
              ))}
            </div>
          </motion.article>
        </div>
      </section>

      <section id="contact" className="section-shell max-w-6xl py-20">
        <motion.div {...fadeUp} className="border-t border-white/10 pt-10">
          <p className="section-label">Contact</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-slate-50 md:text-6xl">
            Get in touch with me.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300/76 md:text-lg">
            If you want to talk about infrastructure, cloud architecture, automation, observability or technical projects, feel free to reach out.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <a href={`mailto:${contact.email}`} className="rounded-full bg-slate-50 px-5 py-3 text-slate-950 transition hover:bg-sky-100">
              {contact.email}
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-slate-100 transition hover:border-sky-300/25 hover:bg-white/[0.07]"
            >
              GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-slate-100 transition hover:border-sky-300/25 hover:bg-white/[0.07]"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: intro.name,
            jobTitle: intro.title,
            url: "https://lucas.piressimao.com.br",
            sameAs: [contact.github, contact.linkedin],
            address: {
              "@type": "PostalAddress",
              addressCountry: "BR",
            },
            knowsAbout: focusAreas,
          }),
        }}
      />
    </main>
  );
}
