export function ProspectFeatures() {
  return (
    <section className="relative z-1 py-24 px-6 bg-bg-subtle border-t border-b border-border">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-[800] tracking-[-0.03em] mb-4">Why Prospect?</h2>
          <p className="text-[1.0625rem] text-text-muted max-w-[540px] mx-auto">
            Everything you need to understand your E2E tests — without leaving your app.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-8">
          <div className="p-6 animate-on-scroll">
            <div className="mb-3 leading-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4ade80"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <h3 className="text-base font-bold mb-2 tracking-tight">Coverage Mapping</h3>
            <p className="text-sm text-text-muted leading-[1.7]">
              <code>defineE2ECoverage()</code> maps routes to interactive elements. Type-safe, version-controlled,
              validated on every test run. <code>test: null</code> marks gaps explicitly.
            </p>
          </div>
          <div className="p-6 animate-on-scroll">
            <div className="mb-3 leading-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="text-base font-bold mb-2 tracking-tight">Dev Overlay</h3>
            <p className="text-sm text-text-muted leading-[1.7]">
              See coverage and test videos directly in your app. Green for covered, red for gaps. Click any element to
              watch its test run.
            </p>
          </div>
          <div className="p-6 animate-on-scroll">
            <div className="mb-3 leading-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#a78bfa"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
            </div>
            <h3 className="text-base font-bold mb-2 tracking-tight">Test Artifacts</h3>
            <p className="text-sm text-text-muted leading-[1.7]">
              Videos, screenshots, and traces stored locally. Watch any test run from the overlay — even passing tests —
              to see exactly what each test does.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
