import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type SocialLinkProps = {
    href: string;
    src: string;
    alt: string;
};

const SocialLink: FC<SocialLinkProps> = ({ href, src, alt }) => {
  return (
    <Link href={href}>
      <Image src={src} width={35} height={35} alt={alt} />
    </Link>
  );
};

export default SocialLink;
