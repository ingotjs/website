import { useCallback, useEffect, useRef, useState } from "react";

import { pkgConfig, pmCommands } from "../../lib/pkg-config";
import type { PkgName, PmName } from "../../lib/pkg-config";
import { CastPage } from "./cast/cast-page";
import { ProspectPage } from "./prospect/prospect-page";

export function LandingPage() {
  const [activePkg, setActivePkg] = useState<PkgName>("cast");
  const [activePm, setActivePm] = useState<PmName>("bun");
  const navNpmRef = useRef<HTMLAnchorElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const navGithubRef = useRef<HTMLAnchorElement>(null);

  const switchPkg = useCallback(
    (pkg: PkgName) => {
      if (pkg === activePkg) {
        return;
      }
      setActivePkg(pkg);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [activePkg]
  );

  useEffect(() => {
    const cfg = pkgConfig[activePkg];
    if (navNpmRef.current) {
      navNpmRef.current.href = cfg.npm;
    }
    if (navGithubRef.current) {
      navGithubRef.current.href = cfg.github;
    }
  }, [activePkg]);

  const handleTabKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const pkgs: PkgName[] = ["cast", "prospect"];
      const idx = pkgs.indexOf(activePkg);
      let newIdx: number | undefined;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        newIdx = (idx + 1) % pkgs.length;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        newIdx = (idx - 1 + pkgs.length) % pkgs.length;
      }
      if (newIdx !== undefined) {
        e.preventDefault();
        switchPkg(pkgs[newIdx]);
      }
    },
    [activePkg, switchPkg]
  );

  const pm = pmCommands[activePm];
  const pmFullCmd = `${pm.bin} ${pm.args}`;

  // Scroll animations — observe all .animate-on-scroll elements
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    // Defer to next frame so DOM is fully committed
    const raf = requestAnimationFrame(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.querySelectorAll(".animate-on-scroll").forEach((el) => {
          el.classList.add("visible");
        });
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.15 }
      );
      document.querySelectorAll(".pkg-page:not([hidden]) .animate-on-scroll").forEach((el) => {
        el.classList.remove("visible");
        observer.observe(el);
      });
      cleanupRef.current = () => {
        observer.disconnect();
      };
    });

    return () => {
      cancelAnimationFrame(raf);
      cleanupRef.current?.();
    };
  }, [activePkg]);

  return (
    <>
      <a
        href="#main"
        className="absolute -top-full left-4 z-[200] px-5 py-3 bg-accent text-bg font-bold text-sm rounded-b-lg transition-[top] duration-150 focus:top-0"
      >
        Skip to content
      </a>

      {/* Nav */}
      <header>
        <nav className="fixed top-0 left-0 right-0 z-100 bg-bg border-b border-border">
          <div className="max-w-[1120px] mx-auto px-6 h-16 flex items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-2.5 font-bold text-[1.3rem] tracking-tight min-h-11 shrink-0">
              <img src="/logo.svg" alt="ingot" className="h-7" />
            </a>
            <div className="flex items-center gap-1">
              <a
                id="nav-npm"
                ref={navNpmRef}
                href="https://www.npmjs.com/package/@ingot/cast"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm text-text-muted transition-all duration-150 min-h-11 hover:text-text hover:bg-white/6 [&_svg]:w-[18px] [&_svg]:h-[18px] [&_svg]:fill-current"
                aria-label="npm"
              >
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M0 0v16h16V0H0zm13 13H8V5H5v8H3V3h10v10z" />
                </svg>
                <span>npm</span>
              </a>
              <a
                id="nav-github"
                ref={navGithubRef}
                href="https://github.com/ingotjs/cast"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm text-text-muted transition-all duration-150 min-h-11 hover:text-text hover:bg-white/6 [&_svg]:w-[18px] [&_svg]:h-[18px] [&_svg]:fill-current"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Package tab bar */}
      <div className="tab-bar fixed top-16 left-0 right-0 z-99 bg-bg-subtle border-b border-border">
        <div
          className="max-w-[1120px] mx-auto px-6 flex items-end gap-1.5 pt-2.5"
          role="tablist"
          aria-label="Package"
          onKeyDown={handleTabKeyDown}
        >
          <button
            role="tab"
            className="tab-btn tab-btn--cast appearance-none font-sans text-left cursor-pointer relative px-6 py-4 rounded-t-[10px] border border-transparent border-b-0 bg-transparent text-text-dim transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] min-w-[220px] hover:text-text-muted hover:bg-white/3 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px]"
            data-pkg="cast"
            aria-selected={activePkg === "cast"}
            aria-controls="page-cast"
            tabIndex={activePkg === "cast" ? 0 : -1}
            onClick={() => {
              switchPkg("cast");
            }}
          >
            <div className="flex items-center gap-2.5 mb-1">
              <span className="tab-btn-name text-[0.9375rem] font-bold font-mono tracking-tight">@ingot/cast</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[0.5625rem] font-bold uppercase tracking-wide bg-[rgba(239,68,68,0.12)] text-cast-light border border-[rgba(239,68,68,0.2)]">
                New
              </span>
            </div>
            <p className="tab-btn-desc text-[0.8125rem] leading-[1.4]">
              Full-stack TypeScript starter with AI-first DX
            </p>
          </button>
          <button
            role="tab"
            className="tab-btn tab-btn--prospect appearance-none font-sans text-left cursor-pointer relative px-6 py-4 rounded-t-[10px] border border-transparent border-b-0 bg-transparent text-text-dim transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] min-w-[220px] hover:text-text-muted hover:bg-white/3 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px]"
            data-pkg="prospect"
            aria-selected={activePkg === "prospect"}
            aria-controls="page-prospect"
            tabIndex={activePkg === "prospect" ? 0 : -1}
            onClick={() => {
              switchPkg("prospect");
            }}
          >
            <div className="flex items-center gap-2.5 mb-1">
              <span className="tab-btn-name text-[0.9375rem] font-bold font-mono tracking-tight">@ingot/prospect</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[0.5625rem] font-bold uppercase tracking-wide bg-[rgba(34,197,94,0.12)] text-prospect-light border border-[rgba(34,197,94,0.2)]">
                WIP
              </span>
            </div>
            <p className="tab-btn-desc text-[0.8125rem] leading-[1.4]">E2E coverage framework for route-based apps</p>
          </button>
        </div>
      </div>

      <main id="main" key={activePkg}>
        {/* CAST */}
        <div className="pkg-page" id="page-cast" style={{ position: "relative" }} hidden={activePkg !== "cast"}>
          <div className="hero-bg-overlay absolute top-[110px] left-0 right-0 h-[900px] z-0 pointer-events-none overflow-hidden">
            <img src="bg-cast.webp" alt="" className="w-full h-full object-cover object-top opacity-12" />
          </div>
          <CastPage />
        </div>

        {/* PROSPECT */}
        <div className="pkg-page" id="page-prospect" style={{ position: "relative" }} hidden={activePkg !== "prospect"}>
          <div className="hero-bg-overlay absolute top-[110px] left-0 right-0 h-[900px] z-0 pointer-events-none overflow-hidden">
            <img src="bg-prospect.webp" alt="" className="w-full h-full object-cover object-top opacity-12" />
          </div>
          <ProspectPage
            activePm={activePm}
            onPmSwitch={setActivePm}
            pmBin={pm.bin}
            pmArgs={pm.args}
            pmFullCmd={pmFullCmd}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 text-center">
        <div className="max-w-[1120px] mx-auto flex flex-col items-center gap-6">
          <p className="text-[0.8125rem] text-text-dim">
            made with <span className="text-cast">&#9829;</span> by{" "}
            <a
              href="https://github.com/ftzi"
              target="_blank"
              rel="noopener"
              className="text-text-muted underline underline-offset-2"
            >
              ftzi
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
