interface SocialLinkProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export default function SocialLink({ label, href, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-white font-medium shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md hover:scale-105"
    >
      {icon && <span>{icon}</span>}
      {label}
    </a>
  );
}
