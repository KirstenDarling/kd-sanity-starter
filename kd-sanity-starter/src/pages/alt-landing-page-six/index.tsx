// import Image from 'next/image';

import Footer6 from '@/components/Footer6';
import Hero6 from '@/components/Hero6';
import MobilePreviewSection6 from '@/components/MobilePreviewSection6';
import NavBar6 from '@/components/NavBar6';
import Newsletter6 from '@/components/Newsletter6';
import NumberAccordion6 from '@/components/NumberAccordion6';
import SplitTextBanner6 from '@/components/SplitTextBanner6';
import HeroImage6 from '../../../public/heroImage6.png';

export default function Home() {
  return (
    <div className='w-full h-[4106px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBar6 />
      <Hero6
        heading='Unveil the Digital Shadows'
        subheading='Piercing through cybersecurity.'
        buttonText='Initiate Your Journey'
        heroImage={HeroImage6}
      />
      <SplitTextBanner6 />
      <MobilePreviewSection6 />
      <NumberAccordion6 />
      <Newsletter6 />
      <Footer6 />
    </div>
  );
}
