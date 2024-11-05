import { type FC } from 'react';
import Link from 'next/link';

type PageLinkProps = {
  href: string;
  text: string;
  subtext: string;
};

const PageLink: FC<PageLinkProps> = ({ href, text, subtext }) => {
  return (
    <Link href={href} className="bg-tecblue m-4 block rounded-md p-4 text-center text-xl font-bold">
      <p className='w-4/5 mx-auto max-w-[35ch]'>{text}</p>
      <p className="text-xs font-normal text-blue-200">{subtext}</p>
    </Link>
  );
};

export default PageLink;
