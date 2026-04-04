import { CLAUDE_MD_CODE } from "../constants";

export function CastShowcase() {
  return (
    <section className="py-24 px-6 max-w-[1120px] mx-auto">
      <div className="grid grid-cols-2 gap-16 items-center max-md:grid-cols-1 max-md:gap-10">
        <div>
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-[800] tracking-[-0.03em] mb-4">
            Built for
            <br />
            <span className="text-[#a78bfa]">AI-assisted development</span>
          </h2>
          <p className="text-text-muted text-base leading-[1.7] mb-6">
            Cast isn't just AI-compatible — it's designed from the ground up for AI agents to be productive from the
            first prompt. Detailed project instructions, auto-invoked skills per domain, and a dependency graph that AI
            can reason about.
          </p>
          <div className="flex gap-8">
            <div className="text-center">
              <div className="text-[2rem] font-[800] tracking-[-0.03em] text-accent">42</div>
              <div className="text-xs text-text-dim uppercase tracking-wide mt-1">Claude Skills</div>
            </div>
            <div className="text-center">
              <div className="text-[2rem] font-[800] tracking-[-0.03em] text-accent">15+</div>
              <div className="text-xs text-text-dim uppercase tracking-wide mt-1">Auto-Invoke Rules</div>
            </div>
            <div className="text-center">
              <div className="text-[2rem] font-[800] tracking-[-0.03em] text-accent">8</div>
              <div className="text-xs text-text-dim uppercase tracking-wide mt-1">Internal Packages</div>
            </div>
          </div>
        </div>
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden animate-on-scroll">
          <div className="flex items-center gap-2 px-4 py-3 bg-white/3 border-b border-border text-xs text-text-dim font-mono">
            CLAUDE.md
          </div>
          <pre className="p-5 font-mono text-[0.8125rem] leading-[1.8] overflow-x-auto text-text-muted">
            <code dangerouslySetInnerHTML={{ __html: CLAUDE_MD_CODE }} />
          </pre>
        </div>
      </div>
    </section>
  );
}
