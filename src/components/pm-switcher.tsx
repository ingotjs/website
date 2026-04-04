import { useCallback } from "react";
import type { KeyboardEvent } from "react";

import { pmNames } from "../lib/pkg-config";
import type { PmName } from "../lib/pkg-config";

export function PmTabs({ active, onSwitch }: { active: PmName; onSwitch: (pm: PmName) => void }) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const idx = pmNames.indexOf(active);
      let newIdx: number | undefined;
      if (e.key === "ArrowRight") {
        newIdx = (idx + 1) % pmNames.length;
      } else if (e.key === "ArrowLeft") {
        newIdx = (idx - 1 + pmNames.length) % pmNames.length;
      }
      if (newIdx !== undefined) {
        e.preventDefault();
        onSwitch(pmNames[newIdx]);
      }
    },
    [active, onSwitch]
  );

  return (
    <div className="flex justify-start border-b border-border w-full" role="tablist" aria-label="Package manager" onKeyDown={handleKeyDown}>
      {pmNames.map((pm) => (
        <button
          key={pm}
          role="tab"
          className="pm-tab appearance-none border-none bg-transparent px-3.5 py-2 font-mono text-xs text-text-dim cursor-pointer border-b-2 border-transparent -mb-px transition-[color,border-color] duration-150 hover:text-text-muted"
          data-pm={pm}
          aria-selected={pm === active}
          tabIndex={pm === active ? 0 : -1}
          onClick={() => {
            onSwitch(pm);
          }}
        >
          {pm}
        </button>
      ))}
    </div>
  );
}
