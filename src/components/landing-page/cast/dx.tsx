export function CastDx() {
  return (
    <section className="relative z-1 py-20 px-6">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-[800] tracking-[-0.03em] mb-4">Developer Experience</h2>
          <p className="text-[1.0625rem] text-text-muted max-w-[540px] mx-auto">
            Smart scripts that handle the boring parts. You write features, the tooling handles the rest.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-5">
          <div className="px-6 py-5 rounded-[10px] bg-white/4 animate-on-scroll">
            <div className="text-sm font-semibold text-text mb-2.5">
              <code>bun dev</code>
            </div>
            <p className="text-[0.8125rem] text-text-muted leading-[1.65] m-0">
              Installs dependencies, applies database migrations, starts the dev server.
            </p>
          </div>
          <div className="px-6 py-5 rounded-[10px] bg-white/4 animate-on-scroll">
            <div className="text-sm font-semibold text-text mb-2.5">
              <code>bun ok</code>
            </div>
            <p className="text-[0.8125rem] text-text-muted leading-[1.65] m-0">
              Type checks, lints, formats, and runs unit tests. Your AI agent runs it as needed to validate its changes.
            </p>
          </div>
          <div className="px-6 py-5 rounded-[10px] bg-white/4 animate-on-scroll">
            <div className="text-sm font-semibold text-text mb-2.5">
              <code>bun ok:full</code>
            </div>
            <p className="text-[0.8125rem] text-text-muted leading-[1.65] m-0">
              Everything in <code>bun ok</code> plus E2E tests and dead code detection. Runs as pre-commit hook and in
              CI before deploying.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
