// import Image from 'next/image';

import Footer6 from '@/components/Footer6';
import Hero6 from '@/components/Hero6';
import MobilePreviewSection6 from '@/components/MobilePreviewSection6';
import NavBar6 from '@/components/NavBar6';
import Newsletter6 from '@/components/Newsletter6';
import SplitTextBanner6 from '@/components/SplitTextBanner6';

export default function Home() {
  return (
    <div className='w-full h-[4106px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBar6 />
      <Hero6 />
      <SplitTextBanner6 />
      <MobilePreviewSection6 />
      <Newsletter6 />
      <Footer6 />
    </div>
  );
}