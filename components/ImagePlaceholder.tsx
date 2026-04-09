interface ImagePlaceholderProps {
  aspectRatio?: string;
  label?: string;
}

export default function ImagePlaceholder({
  aspectRatio = "aspect-video",
  label = "Image Placeholder",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectRatio} bg-neutral2 rounded-2xl flex items-center justify-center`}
    >
      <div className="flex flex-col items-center gap-2 text-neutral1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span className="text-sm font-medium">{label}</span>
      </div>
    </div>
  );
}
