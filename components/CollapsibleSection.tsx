"use client";

import { useState } from "react";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-12">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 w-full text-left text-4xl font-bold text-secondary mb-8 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <span
          className={`transform transition-transform duration-200 ${isOpen ? "rotate-90" : "rotate-0"}`}
        >
          ▶
        </span>
        {title}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
