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
        className="mb-8 flex w-full cursor-pointer items-center gap-3 text-left text-4xl font-bold text-secondary transition-opacity hover:opacity-80"
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
