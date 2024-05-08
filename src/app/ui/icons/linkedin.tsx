export function LinkedinIcon({
  width = 18,
  height = 18,
  color = 'currentColor',
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.25 2.25a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V3.75a1.5 1.5 0 011.5-1.5h10.5zm-.375 11.625V9.9a2.445 2.445 0 00-2.445-2.445c-.637 0-1.38.39-1.74.975v-.832H7.598v6.277H9.69v-3.697a1.047 1.047 0 112.093 0v3.697h2.092zM5.16 6.42a1.26 1.26 0 001.26-1.26 1.264 1.264 0 10-1.26 1.26zm1.042 7.455V7.598H4.125v6.277h2.077z"
        fill={color}
      />
    </svg>
  );
}
