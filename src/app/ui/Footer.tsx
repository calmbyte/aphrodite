import Image from 'next/image';

import { LinkedinIcon } from './icons/linkedin';
import { InstagramIcon } from './icons/instagram';
import { MailIcon } from './icons/mail';

const socialLinks = [
  {
    icon: <LinkedinIcon />,
    href: 'https://www.linkedin.com/company/calmbyte/',
  },
  // { icon: <FaceBookIcon />, href: '' },
  // { icon: <SocialXIcon />, href: '' },
  {
    icon: <InstagramIcon />,
    href: 'https://www.instagram.com/calmbyte.ai?igsh=a2U3djVub256OXQx',
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col-reverse md:flex-row gap-12 justify-between w-full px-16 my-16">
      <div className="flex flex-col gap-4">
        <a
          href="mailto: admin@calmbyte.xyz"
          className="hover:text-[var(--gray)] flex items-center gap-2"
        >
          <MailIcon /> calmbyte.xyz
        </a>
        <div className="flex gap-6">
          {socialLinks.map(({ icon, href }, ind) => (
            <a
              key={ind}
              href={href}
              target="_black"
              className="hover:text-[var(--gray)]"
            >
              {icon}
            </a>
          ))}
        </div>
        <span>
          Copyright © {new Date().getFullYear()} CalmByte. All rights reserved
        </span>
      </div>
      <div className="flex items-start gap-2">
        <Image alt="byte-logo" src="/byte.svg" width={34} height={40} />
        <div className="flex flex-col leading-5">
          <span className="font-semibold">Byte</span>
          <span>Get Your AI Assistant App</span>
        </div>
      </div>
    </footer>
  );
}
