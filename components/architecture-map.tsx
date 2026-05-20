"use client";

import { motion } from "framer-motion";

const orbitNodes = [
  { label: "Edge", top: "8%", left: "60%" },
  { label: "WAF", top: "22%", left: "15%" },
  { label: "CI/CD", top: "26%", left: "76%" },
  { label: "EKS", top: "48%", left: "20%" },
  { label: "ECS", top: "44%", left: "74%" },
  { label: "IaC", top: "72%", left: "18%" },
  { label: "Obs", top: "74%", left: "72%" },
  { label: "Data", top: "88%", left: "50%" },
];

export function ArchitectureMap() {
  return (
    <div className="panel relative overflow-hidden p-6 md:p-8">
      <div className="grid-backdrop absolute inset-0 bg-radial-grid opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_48%)]" />

      <div className="relative min-h-[360px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-300/65">System View</p>
            <h3 className="mt-3 text-xl font-medium text-slate-50">Cloud, delivery and operations in one operating model</h3>
          </div>
          <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300">
            24/7 reliability
          </div>
        </div>

        <div className="relative mt-10 h-[260px]">
          <motion.div
            className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-sky-300/30 bg-sky-300/[0.08] p-4 shadow-glow"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-sky-300/70">Core</p>
            <p className="mt-4 text-lg font-semibold text-slate-50">Platform</p>
            <p className="mt-2 text-sm leading-6 text-slate-300/78">Security, automation, scalability and observability by design.</p>
          </motion.div>

          {orbitNodes.map((node, index) => (
            <motion.div
              key={node.label}
              className="absolute rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-200/85"
              style={{ top: node.top, left: node.left }}
              animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
              transition={{ duration: 3.2 + index * 0.3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              {node.label}
            </motion.div>
          ))}

          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="node-line" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(125, 211, 252, 0.25)" />
                <stop offset="100%" stopColor="rgba(129, 140, 248, 0.04)" />
              </linearGradient>
            </defs>
            <path d="M50 50 L18 26" stroke="url(#node-line)" strokeWidth="0.3" />
            <path d="M50 50 L76 25" stroke="url(#node-line)" strokeWidth="0.3" />
            <path d="M50 50 L22 50" stroke="url(#node-line)" strokeWidth="0.3" />
            <path d="M50 50 L75 48" stroke="url(#node-line)" strokeWidth="0.3" />
            <path d="M50 50 L22 73" stroke="url(#node-line)" strokeWidth="0.3" />
            <path d="M50 50 L73 74" stroke="url(#node-line)" strokeWidth="0.3" />
            <path d="M50 50 L50 88" stroke="url(#node-line)" strokeWidth="0.3" />
            <path d="M50 50 L60 8" stroke="url(#node-line)" strokeWidth="0.3" />
          </svg>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-300/70">Ops focus</p>
            <p className="mt-2 text-sm leading-7 text-slate-300/78">High-availability systems, incident response, layered security and cost-aware scaling.</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-300/70">Delivery focus</p>
            <p className="mt-2 text-sm leading-7 text-slate-300/78">CI/CD, infrastructure as code, standardized runtime patterns and platform enablement.</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-300/70">Builder focus</p>
            <p className="mt-2 text-sm leading-7 text-slate-300/78">Internal tooling, AI-assisted operations, automation systems and reusable engineering primitives.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

