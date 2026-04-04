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
            <p>Installs dependencies, applies database migrations, starts the dev server. One command, zero setup.</p>
          </div>
          <div className="dx-card animate-on-scroll">
            <div className="dx-cmd">
              <span className="dx-prompt">$</span> bun ok
            </div>
            <p>
              Type checks, lints, formats, and runs all tests in one shot. If it passes, your code is clean. Run it
              before every commit — or let the pre-commit hook do it for you.
            </p>
          </div>
          <div className="dx-card animate-on-scroll">
            <div className="dx-cmd">
              <span className="dx-prompt">$</span> git push
            </div>
            <p>CI takes over — runs checks, E2E tests, applies migrations, and deploys to the edge. Push and forget.</p>
          </div>
          <div className="dx-card animate-on-scroll">
            <div className="dx-cmd">
              <span className="dx-prompt">$</span> git commit
            </div>
            <p>
              Pre-commit hooks run <code>bun ok</code> + format staged files automatically. Broken code never reaches
              the repo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
