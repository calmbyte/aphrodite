export function InstagramIcon({
  width = 18,
  height = 18,
  color = 'currentColor',
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 -1 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.85.5h6.3c2.4 0 4.35 1.95 4.35 4.35v6.3a4.35 4.35 0 01-4.35 4.35h-6.3C2.45 15.5.5 13.55.5 11.15v-6.3A4.35 4.35 0 014.85.5zM4.7 2A2.7 2.7 0 002 4.7v6.6C2 12.792 3.208 14 4.7 14h6.6a2.7 2.7 0 002.7-2.7V4.7C14 3.207 12.793 2 11.3 2H4.7zm7.237 1.125a.937.937 0 110 1.875.937.937 0 010-1.875zM8 4.25a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zm0 1.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        fill={color}
      />
    </svg>
  );
}
