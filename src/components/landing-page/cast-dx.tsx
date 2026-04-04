export function CastDx() {
  return (
    <section className="features">
      <div className="features-inner">
        <div className="section-header">
          <h2>Developer Experience</h2>
          <p>Smart scripts that handle the boring parts. You write features, the tooling handles the rest.</p>
        </div>
        <div className="dx-grid">
          <div className="dx-card animate-on-scroll">
            <div className="dx-cmd">
              <span className="dx-prompt">$</span> bun dev
            </div>
            <p>Installs dependencies, applies database migrations, starts the dev server.</p>
          </div>
          <div className="dx-card animate-on-scroll">
            <div className="dx-cmd">
              <span className="dx-prompt">$</span> bun ok
            </div>
            <p>Type checks, lints, formats, and runs unit tests.</p>
          </div>
          <div className="dx-card animate-on-scroll">
            <div className="dx-cmd">
              <span className="dx-prompt">$</span> bun ok:full
            </div>
            <p>
              Everything in <code>bun ok</code> plus E2E tests and dead code detection. Runs as pre-commit hook and in
              CI before deploying.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
