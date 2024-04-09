// import Image from 'next/image';

import CardsSquare3 from '@/components/CardsSquare3';
import Footer3 from '@/components/Footer3';
import Hero3 from '@/components/Hero3';
import NavBar3 from '@/components/NavBar3';
import ProjectLargeImageAccordion3 from '@/components/ProjectLargeImageAccordion3';
import QuoteWithImage3 from '@/components/QuoteWithImage3';
import TextBannerWithBackground3 from '@/components/TextBannerWithBackground3';
import NovaPerson2 from '../../../public/NovaPerson2.png';

export default function Home() {
  return (
    <div className='w-full h-[4681px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBar3 />
      <Hero3 />
      <TextBannerWithBackground3 />
      <CardsSquare3 />
      <ProjectLargeImageAccordion3 />
      <QuoteWithImage3
        quote='“Their vision for the cyber world transformed my reality.”'
        author='Maverick T., Cyberpunk Enthusiast'
        image={NovaPerson2}
      />
      <Footer3 />
    </div>
  );
}
