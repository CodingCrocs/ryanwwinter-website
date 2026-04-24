import type { CSSProperties, ReactNode } from "react";

interface SocialLinkProps {
  label: string;
  href: string;
  icon?: ReactNode;
  className?: string;
  iconOnly?: boolean;
  style?: CSSProperties;
}

export default function SocialLink({
  label,
  href,
  icon,
  className,
  iconOnly = false,
  style,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={style}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-white font-medium shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md hover:scale-105 ${className ?? ""}`}
    >
      {icon && <span>{icon}</span>}
      {!iconOnly ? label : null}
    </a>
  );
}
