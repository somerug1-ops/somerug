"use client";

import { useState } from "react";
import Image from "next/image";
import { WorkExample } from "@/data/site";

export function WorkDropdown({ examples }: { examples: WorkExample[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImg, setActiveImg] = useState<string | null>(null);

  if (!examples || examples.length === 0) return null;

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-full border border-line/70 px-4 py-2 text-xs font-mono text-muted transition-colors hover:border-ink/40 hover:text-ink"
      >
        <span>{isOpen ? "Hide work" : "View work"}</span>
        <svg
          className={`h-3 w-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div className={`dropdown-grid ${isOpen ? "open" : ""}`}>
        <div className="dropdown-content">
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {examples.map((item) => (
              <div
                key={item.src}
                onClick={() => setActiveImg(item.src)}
                className="cursor-zoom-in overflow-hidden rounded-lg transition-opacity hover:opacity-90"
              >
                <Image
                  src={item.src}
                  alt={item.alt || ""}
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeImg && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImg(null)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <Image
            src={activeImg}
            alt=""
            width={1200}
            height={800}
            className="max-h-[90vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
