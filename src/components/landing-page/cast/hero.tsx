import { CopyButton } from "../../copy-button";

export function CastHero() {
  return (
    <section className="relative pt-72 px-6 pb-8 max-w-[1120px] mx-auto overflow-hidden">
      <h1 className="text-[clamp(2.25rem,5.5vw,3.75rem)] font-[800] tracking-[-0.035em] leading-[1.15] max-w-[680px] mb-5">
        Setup and deploy
        <br />
        in a single command.
      </h1>
      <p className="text-[clamp(0.9375rem,1.5vw,1.0625rem)] text-text-muted max-w-[520px] leading-[1.7] mb-10">
        Auth, API, database, email, i18n, edge deploy — all wired up. Built with strict code standards and comprehensive
        AI coding instructions so your agent writes production-quality code from day one.
      </p>
      <div className="inline-flex items-center gap-3 bg-bg-card border border-border rounded-[10px] px-5 py-3 font-mono text-[0.9375rem] mb-8 transition-[border-color] duration-200 hover:border-border-hover">
        <span className="text-text-dim select-none">$</span>{" "}
        <span className="text-text">
          <a href="https://bun.sh" target="_blank" rel="noopener" className="text-syntax-string bun-link">
            bunx
          </a>{" "}
          <span className="text-accent">@ingot/cast</span>
        </span>
        <CopyButton text="bunx @ingot/cast" />
      </div>
      <div className="flex items-center gap-5">
        <a href="https://github.com/ingotjs/cast" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors duration-150 py-2.5 hover:text-text [&_svg]:w-[18px] [&_svg]:h-[18px] [&_svg]:fill-current">
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          GitHub
        </a>
        <a href="https://www.npmjs.com/package/@ingot/cast" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors duration-150 py-2.5 hover:text-text [&_svg]:w-[18px] [&_svg]:h-[18px] [&_svg]:fill-current">
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M0 0v16h16V0H0zm13 13H8V5H5v8H3V3h10v10z" fill="currentColor" />
          </svg>
          npm
        </a>
      </div>
    </section>
  );
}
