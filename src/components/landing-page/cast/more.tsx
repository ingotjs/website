export function CastMore() {
  return (
    <section className="relative z-1 py-24 px-6">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-[800] tracking-[-0.03em] mb-4">And more</h2>
          <p className="text-[1.0625rem] text-text-muted max-w-[540px] mx-auto">
            Everything you need, already wired up.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-6">
          <div className="rounded-xl border border-border bg-bg-card overflow-hidden animate-on-scroll">
            <div className="w-full aspect-video bg-white/3 flex items-center justify-center text-text-dim text-xs border-b border-border">
              {/* TODO: add OG image screenshot */}
            </div>
            <div className="p-5">
              <h3 className="text-base font-bold mb-1.5 tracking-tight">Dynamic OG Images with i18n</h3>
              <p className="text-sm text-text-muted leading-[1.7]">
                Auto-generated Open Graph images per page with full internationalization support. Every route gets a
                unique, localized social preview out of the box.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-bg-card overflow-hidden animate-on-scroll">
            <div className="w-full aspect-video bg-white/3 flex items-center justify-center text-text-dim text-xs border-b border-border">
              {/* TODO: add email template screenshot */}
            </div>
            <div className="p-5">
              <h3 className="text-base font-bold mb-1.5 tracking-tight">Transactional Emails</h3>
              <p className="text-sm text-text-muted leading-[1.7]">
                React Email templates with Resend, fully i18n-ready. Welcome emails, password resets, magic links —
                styled, tested, and localized.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-bg-card overflow-hidden animate-on-scroll">
            <div className="w-full aspect-video bg-white/3 flex items-center justify-center text-text-dim text-xs border-b border-border">
              {/* TODO: add auth screenshot */}
            </div>
            <div className="p-5">
              <h3 className="text-base font-bold mb-1.5 tracking-tight">Auth That Just Works</h3>
              <p className="text-sm text-text-muted leading-[1.7]">
                Email/password, passkeys, Google OAuth, magic links, and admin roles. Session storage on Cloudflare KV
                with rate limiting built in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
