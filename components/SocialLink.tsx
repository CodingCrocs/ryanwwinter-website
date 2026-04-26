import Image from "next/image";

interface SocialLinkProps {
  label: string;
  href: string;
  iconSrc: string;
}

export default function SocialLink({ label, href, iconSrc }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-md"
    >
      <Image src={iconSrc} alt="" width={24} height={24} className="h-6 w-6" />
    </a>
  );
}
