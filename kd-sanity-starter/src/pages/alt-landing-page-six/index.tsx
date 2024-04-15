// import Image from 'next/image';

import Footer6 from '@/components/Footer6';
import Hero6 from '@/components/Hero6';
import MobilePreviewSection from '@/components/MobilePreviewSection';
import NavBar6 from '@/components/NavBar6';
import Newsletter6 from '@/components/Newsletter6';
import NumberAccordion6 from '@/components/NumberAccordion6';
import TextBannerAltStyleSplit from '@/components/TextBannerAltStyleSplit';
import HeroImage6 from '../../../public/heroImage6.png';
import MessageIcon from '../../../public/messageIcon.svg';
import MobileMockupImage from '../../../public/mobileMockupImage.png';

export default function Home() {
  const featuredBullets = [
    {
      title: 'Advanced Algorithms',
      subtitle: 'Decoding complexities, simplifying solutions.',
      icon: MessageIcon,
    },
    {
      title: 'Secure Protocols',
      subtitle: 'A fortress of code guarding your data.',
      icon: MessageIcon,
    },
    {
      title: 'User Anonymity',
      subtitle: "Your identity cloaked in the network's shadows.",
      icon: MessageIcon,
    },
  ];

  return (
    <div className='w-full h-[4106px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBar6 />
      <Hero6
        heading='Unveil the Digital Shadows'
        subheading='Piercing through cybersecurity.'
        buttonText='Initiate Your Journey'
        heroImage={HeroImage6}
      />
      <TextBannerAltStyleSplit
        eyebrowText='Our Ethos'
        heading='Crafting the Cyber Narrative'
        text='Innovation through every byte.'
      />
      <MobilePreviewSection
        title='Stealth Operations'
        subtitle='Navigate with unseen agility.'
        mobileImage={MobileMockupImage}
        bullets={featuredBullets}
      />
      <NumberAccordion6 />
      <Newsletter6 />
      <Footer6 />
    </div>
  );
}
