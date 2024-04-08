// import Image from 'next/image';
import Footer7 from '@/components/Footer7';
import Hero7 from '@/components/Hero7';
import MobilePreviewSection7 from '@/components/MobilePreviewSection7';
import NavBar7 from '@/components/NavBar7';
import Newsletter7 from '@/components/Newsletter7';
import Quote7 from '@/components/Quote7';
import Subscriptions7 from '@/components/Subscriptions7';
import TextBanner7 from '@/components/TextBanner7';

export default function Home() {
  return (
    <div className='w-full h-[4818.97px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBar7 />
      <Hero7 />
      <TextBanner7 />
      <MobilePreviewSection7 />
      <Subscriptions7 />
      <Newsletter7 />
      <Quote7 />
      <Footer7 />
    </div>
  );
}
