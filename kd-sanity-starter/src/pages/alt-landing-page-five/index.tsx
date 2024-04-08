// import Image from 'next/image';

import CardRow5 from '@/components/CardRow5';
import Footer5 from '@/components/Footer5';
import NavBar5 from '@/components/NavBar5';
import ProjectAccordion5 from '@/components/ProjectAccordion5';
import QuoteWithImage5 from '@/components/QuoteWithImage5';
import Timeline5 from '@/components/Timeline5';

export default function Home() {
  return (
    <div className='w-full h-[4526px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBar5 />
      <Timeline5 />
      <CardRow5 />
      <ProjectAccordion5 />
      <QuoteWithImage5 />
      <Footer5 />
    </div>
  );
}