import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <Image src="/header-logo.svg" alt="CalmByte AI" width={60} height={50} />
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#howTo">How To</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div>
        <a className="button w-[120px]" href="https://app.calmbyte.xyz/sign-up">
          Sign Up
        </a>
        <a
          className="inline-block text-center w-[120px] hover:text-[var(--gray)]"
          href="https://app.calmbyte.xyz/"
        >
          Sign In
        </a>
      </div>
    </header>
  );
}
