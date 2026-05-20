"use client";

import { useEffect, useMemo, useState } from "react";

type Command = {
  label: string;
  hint: string;
  sectionId?: string;
  href?: string;
};

const commands: Command[] = [
  { label: "Jump to Experience", hint: "See architecture impact", sectionId: "experience" },
  { label: "Jump to Stack", hint: "Explore technology depth", sectionId: "stack" },
  { label: "Jump to Projects", hint: "Review builder-style work", sectionId: "projects" },
  { label: "Jump to Contact", hint: "Open contact section", sectionId: "contact" },
  { label: "Open GitHub", hint: "github.com/lucaspiressimao", href: "https://github.com/lucaspiressimao" },
  { label: "Open LinkedIn", hint: "linkedin.com/in/lucaspiressimao", href: "https://www.linkedin.com/in/lucaspiressimao/" },
  { label: "Download CV", hint: "PDF resume", href: "/docs/CurriculumLucasPiresSimao.pdf" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filteredCommands = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return commands;
    }

    return commands.filter((command) => `${command.label} ${command.hint}`.toLowerCase().includes(normalized));
  }, [query]);

  const executeCommand = (command: Command) => {
    if (command.sectionId) {
      document.getElementById(command.sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (command.href) {
      window.open(command.href, command.href.startsWith("http") ? "_blank" : "_self", "noopener,noreferrer");
    }

    setOpen(false);
    setQuery("");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200/80 transition hover:border-sky-300/30 hover:text-white md:inline-flex"
      >
        Command Palette
        <span className="ml-3 rounded-md border border-white/10 bg-black/20 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
          Ctrl K
        </span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/70 px-6 pt-20 backdrop-blur-md">
          <div className="w-full max-w-2xl rounded-[28px] border border-white/10 bg-[#07111f]/95 shadow-glow">
            <div className="border-b border-white/8 px-5 py-4">
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search sections, links or actions..."
                className="w-full bg-transparent text-base text-slate-100 outline-none placeholder:text-slate-500"
              />
            </div>

            <div className="max-h-[420px] overflow-y-auto p-3">
              {filteredCommands.map((command) => (
                <button
                  key={command.label}
                  type="button"
                  onClick={() => executeCommand(command)}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-white/[0.05]"
                >
                  <span>
                    <span className="block text-sm font-medium text-slate-100">{command.label}</span>
                    <span className="mt-1 block text-xs text-slate-400">{command.hint}</span>
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300/70">Run</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

