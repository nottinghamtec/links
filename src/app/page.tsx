import Image from 'next/image';
import PageLink from '@/components/PageLink';
import Link from 'next/link';
import SocialLink from '@/components/SocialLink';

export default function Home() {
  return (
    <div className="mx-auto max-w-[50ch]">
      <header>
        <section className="mx-auto mt-8 flex w-4/5 flex-col items-center justify-center text-center">
          <Link href="https://www.nottinghamtec.co.uk/">
            <Image
              src="/tecpa-logo.png"
              alt="TEC's Logo: Serif 'TEC' vertically next to a blue box with the words 'PA and Lighting', surrounded by graduated rings"
              width={100}
              height={100}
            />
          </Link>
          <h1 className="mt-4 text-2xl font-bold">TEC PA and Lighting</h1>
        </section>
        {/* SOCIAL MEDIA LINKS */}
        <section className="my-8 flex justify-center space-x-10 text-center">
          <SocialLink href="https://www.instagram.com/nottinghamtec" src="/instagram.svg" alt="Instagram Logo" />
          <SocialLink href="https://www.facebook.com/nottinghamtec" src="/facebook.svg" alt="Facebook Logo" />
          <SocialLink href="https://www.twitter.com/nottinghamtec" src="/twitter.svg" alt="Twitter Logo" />
        </section>
      </header>
      {/* PRIMARY LINKS */}
      <main>
        <PageLink href="https://www.nottinghamtec.co.uk/" text="Main Website" subtext="nottinghamtec.co.uk" />
        <PageLink href="mailto:info@nottinghamtec.co.uk" text="Client Enquiries" subtext="info@nottinghamtec.co.uk" />
        <PageLink href="https://join.nottinghamtec.co.uk/" text="Join Us" subtext="join.nottinghamtec.co.uk" />
        <PageLink
          href="mailto:members@nottinghamtec.co.uk"
          text="Questions about becoming a member? Get in touch!"
          subtext="members@nottinghamtec.co.uk"
        />
      </main>
      {/* FOOTER TEXT AND COPYRIGHT */}
      <footer className="text-center text-gray-500">
        <p>&copy; TEC PA & Lighting</p>
      </footer>
    </div>
  );
}
