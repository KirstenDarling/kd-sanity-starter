// import Image from 'next/image';

import CardRowSimplified from '@/components/CardRowSimplified';
import FooterFlat from '@/components/FooterFlat';
import Hero5 from '@/components/Hero5';
import NavBarWithSearch from '@/components/NavBarWithSearch';
import ProjectAccordion from '@/components/ProjectAccordion';
import QuoteWithImage from '@/components/QuoteWithImage';
import Timeline from '@/components/Timeline';
import FiveSplitImage from '../../../public/fiveSplitImage.png';
import HeartIcon from '../../../public/heartIcon.svg';
import Image1 from '../../../public/hero5image1.png';
import Image2 from '../../../public/hero5image2.png';
import Image3 from '../../../public/hero5image3.png';
import Image4 from '../../../public/hero5image4.png';
import Image5 from '../../../public/hero5image5.png';
import Image6 from '../../../public/hero5image6.png';
import ProfessionalJourneyImage from '../../../public/professionalJourneyImage.png';

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

  const featuredEvents = [
    {
      date: '2018',
      text: 'Developed an award-winning data warehouse for a leading e-commerce platform.',
    },
    {
      date: '2019',
      text: 'Engineered a real-time analytics system for a national healthcare provider.',
    },
    { date: '2020', text: 'Led the data migration for a merger of two Fortune 500 companies.' },
    {
      date: '2021',
      text: "Optimized machine learning pipelines for a tech startup's recommendation system.",
    },
    { date: '2022', text: 'Implemented GDPR-compliant data practices for a European client.' },
    {
      date: '2023',
      text: 'Architected a scalable data lake for a multinational media conglomerate.',
    },
  ];

  const footerLinks = [
    { title: '@DataArcana', URL: 'https://www.google.com' },
    { title: '@DataArcana', URL: 'https://www.google.com' },
    { title: '@DataArcana', URL: 'https://www.google.com' },
  ];

  return (
    <div className='w-full h-[4526px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBarWithSearch />
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

      <CardRowSimplified
        heading='Data Mastery'
        subheading='Innovative solutions tailored to empower decision-making.'
        cards={featuredCards}
      />

      <Timeline
        mainImage={ProfessionalJourneyImage}
        title='Professional Journey'
        subtitle="With a decade in data engineering, I've sculpted data solutions that drive
        business growth."
        CTAButtonText='Contact Lucas'
        events={featuredEvents}
      />
      <ProjectAccordion />
      <QuoteWithImage
        quote='“Lucas transformed our data handling, unveiling insights that propelled our growth.”'
        author='Jordan Smith, CEO of Innotech'
        image={FiveSplitImage}
        bgColor='gray-800'
      />
      <FooterFlat
        backgroundColor='bg-gray-800'
        appIcon={HeartIcon}
        pageTitle='Data Arcana'
        legalText='All rights reserved 2024'
        links={footerLinks}
      />
    </div>
  );
}
