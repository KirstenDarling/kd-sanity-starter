// import Image from 'next/image';

import CardRowSimplified from '@/components/CardRowSimplified';
import Footer5 from '@/components/Footer5';
import Hero5 from '@/components/Hero5';
import NavBar5 from '@/components/NavBar5';
import ProjectAccordion5 from '@/components/ProjectAccordion5';
import QuoteWithImage5 from '@/components/QuoteWithImage5';
import Timeline5 from '@/components/Timeline5';
import FiveSplitImage from '../../../public/fiveSplitImage.png';
import Image1 from '../../../public/hero5image1.png';
import Image2 from '../../../public/hero5image2.png';
import Image3 from '../../../public/hero5image3.png';
import Image4 from '../../../public/hero5image4.png';
import Image5 from '../../../public/hero5image5.png';
import Image6 from '../../../public/hero5image6.png';

export default function Home() {
  const featuredCards = [
    {
      title: 'Cloud Expertise',
      text: 'Migrating and managing petabyte-scale datasets in the cloud environment.',
    },
    {
      title: 'Real-time Analytics',
      text: 'Building systems that provide instant insights from live data streams.',
    },
    {
      title: 'Data Security',
      text: 'Ensuring the integrity and confidentiality of sensitive information.',
    },
    { title: 'Automation', text: 'Creating pipelines that efficiently process and analyze data.' },
  ];

  return (
    <div className='w-full h-[4526px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBar5 />
      <Hero5
        heading='Hi, I&amp;m Lucas Brenton, Data Engineer.'
        subheading='Crafting data architectures and analytics for impactful insights in various
                industries.'
        buttonOneText='View Projects'
        buttonTwoText='Learn More'
        image1={Image1}
        image2={Image2}
        image3={Image3}
        image4={Image4}
        image5={Image5}
        image6={Image6}
      />
      <Timeline5 />
      <CardRowSimplified
        heading='Data Mastery'
        subheading='Innovative solutions tailored to empower decision-making.'
        cards={featuredCards}
      />
      <ProjectAccordion5 />
      <QuoteWithImage5
        quote='“Lucas transformed our data handling, unveiling insights that propelled our growth.”'
        author='Jordan Smith, CEO of Innotech'
        image={FiveSplitImage}
      />
      <Footer5 />
    </div>
  );
}
