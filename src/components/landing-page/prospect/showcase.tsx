import { COVERAGE_CODE } from "../constants";

export function ProspectShowcase() {
  return (
    <section className="py-24 px-6 max-w-[1120px] mx-auto">
      <div className="grid grid-cols-2 gap-16 items-center max-md:grid-cols-1 max-md:gap-10">
        <div>
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-[800] tracking-[-0.03em] mb-4">
            Coverage as <span className="text-prospect-light">code</span>
          </h2>
          <p className="text-text-muted text-base leading-[1.7] mb-6">
            Map every route's interactive elements to tests. Mark gaps with <code>null</code>. The overlay shows it all
            visually — coverage and test videos — right in your running app.
          </p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden animate-on-scroll">
          <div className="flex items-center gap-2 px-4 py-3 bg-white/3 border-b border-border text-xs text-text-dim font-mono">
            coverage.ts
          </div>
          <pre className="p-5 font-mono text-[0.8125rem] leading-[1.8] overflow-x-auto text-text-muted">
            <code dangerouslySetInnerHTML={{ __html: COVERAGE_CODE }} />
          </pre>
        </div>
      </div>
    </section>
  );
}
