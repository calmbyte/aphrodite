export function SocialXIcon({
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
      <g clipPath="url(#clip0_524_462)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.815 3.494a.752.752 0 00-.325-1.204.75.75 0 00-.805.216l-3.832 4.38L6.6 2.55a.75.75 0 00-.6-.3H3a.75.75 0 00-.6 1.2l4.828 6.436-4.043 4.62a.75.75 0 001.13.988l3.832-4.38L11.4 15.45a.75.75 0 00.6.3h3a.75.75 0 00.6-1.2l-4.828-6.437 4.043-4.619zm-2.44 10.756L4.5 3.75h1.125l7.875 10.5h-1.125z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_524_462">
          <path fill={color} d="M0 0H18V18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
