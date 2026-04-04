import { useCallback, useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    void navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }, [text]);

  return (
    <button className={`copy-btn relative inline-flex items-center justify-center p-1.5 rounded-md border-none bg-transparent text-text-dim cursor-pointer transition-colors duration-150 hover:text-text [&_svg]:w-3.5 [&_svg]:h-3.5${copied ? " copied" : ""}`} onClick={handleCopy} aria-label="Copy command">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    </button>
  );
}
