export default function Logo({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="8" cy="24" r="2.5" fill="#2F5DE3" />
      <circle cx="8" cy="14" r="2.5" fill="#2F5DE3" opacity="0.85" />
      <circle cx="18" cy="19" r="2.5" fill="#2F5DE3" />
      <circle cx="24" cy="9" r="2.5" fill="#2F5DE3" opacity="0.6" />
      <circle cx="24" cy="24" r="2.5" fill="#2F5DE3" opacity="0.6" />
      <path d="M8 24L8 14M8 14L18 19M18 19L24 9M18 19L24 24" stroke="#2F5DE3" strokeWidth="1.3" />
    </svg>
  );
}