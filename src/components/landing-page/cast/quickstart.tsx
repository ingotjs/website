import { CopyButton } from "../../copy-button";

export function CastQuickstart() {
  return (
    <section
      className="relative py-14 px-6 border-t border-b border-border"
      style={{
        background:
          "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.02) 20px, rgba(255,255,255,0.02) 21px), var(--color-bg-subtle)",
      }}
    >
      <div className="max-w-[360px] mx-auto text-center">
        <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-[800] tracking-[-0.03em] mb-3">Get started</h2>
        <p className="text-text-muted mb-10 text-[1.0625rem]">From zero to dev in a single command.</p>
        <div className="bg-bg-card border border-border rounded-xl text-left overflow-visible">
          <div className="flex items-center gap-2 px-4 py-3 bg-white/3 border-b border-border text-xs text-text-dim font-mono">
            <div className="flex gap-1.5">
              <span className="macos-dot-red w-2.5 h-2.5 rounded-full" />
              <span className="macos-dot-yellow w-2.5 h-2.5 rounded-full" />
              <span className="macos-dot-green w-2.5 h-2.5 rounded-full" />
            </div>
          </div>
          <pre className="flex items-center justify-between p-5 font-mono text-[0.8125rem] leading-[1.9] text-text-muted">
            <code>
              <span className="text-text-dim select-none">$</span>{" "}
              <a href="https://bun.sh" target="_blank" rel="noopener" className="text-syntax-string bun-link">
                bunx
              </a>{" "}
              <span className="text-accent">@ingot/cast</span>
            </code>
            <CopyButton text="bunx @ingot/cast" />
          </pre>
        </div>
      </div>
    </section>
  );
}
