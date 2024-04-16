import Footer1 from '@/components/Footer1';
import Hero1 from '@/components/Hero1';
import Hero2 from '@/components/Hero2';
import Hero3 from '@/components/Hero3';
import Hero4 from '@/components/Hero4';
import Hero5 from '@/components/Hero5';
import Hero6 from '@/components/Hero6';
import Hero7 from '@/components/Hero7';

import NavBar1 from '@/components/NavBar1';
import Nova1 from '../../../public/Nova1.png';
import Hero4Image from '../../../public/hero4.png';
import Image1 from '../../../public/hero5image1.png';
import Image2 from '../../../public/hero5image2.png';
import Image3 from '../../../public/hero5image3.png';
import Image4 from '../../../public/hero5image4.png';
import Image5 from '../../../public/hero5image5.png';
import Image6 from '../../../public/hero5image6.png';
import HeroImage6 from '../../../public/heroImage6.png';
import Media7Layout from '../../../public/mediaLayout7.png';
import MessageIcon from '../../../public/messageIcon.svg';
import CircleOne from '../../../public/oneCircleOne.png';
import CircleThree from '../../../public/oneCircleThree.png';
import CircleTwo from '../../../public/oneCircleTwo.png';

export default function Home() {
  const featuredBullets = [
    {
      title: 'Data-Driven Insights',
      description: 'Harness big data to improve urban living with actionable insights.',
      icon: MessageIcon,
    },
    {
      title: 'Augmented Reality',
      description:
        'Interactive experiences that enhance the way city dwellers interact with their environment.',
      icon: MessageIcon,
    },
    {
      title: 'Efficient Transportation',
      description: 'Reduce congestion and streamline public transit with cutting-edge technology.',
      icon: MessageIcon,
    },
    {
      title: 'Eco-Friendly Tech',
      description:
        'Green solutions that reduce the urban carbon footprint and foster sustainability.',
      icon: MessageIcon,
    },
    {
      title: 'Advanced Security',
      description:
        'State-of-the-art encryption and privacy protocols to protect urban infrastructure.',
      icon: MessageIcon,
    },
    {
      title: 'AI-Powered Services',
      description:
        'Automated services that anticipate needs and improve the quality of urban life.',
      icon: MessageIcon,
    },
  ];

  const featuredAccordionSections = [
    {
      number: 1,
      title: 'Research & Development',
      description:
        'Our journey begins with in-depth research into urban challenges and innovative tech solutions.',
    },
    {
      number: 2,
      title: 'Prototyping & Testing',
      description:
        'We create advanced prototypes and rigorously test them in real-world urban settings.',
    },
    {
      number: 3,
      title: 'Implementation & Scale',
      description:
        'Successful solutions are implemented city-wide, scaling to meet the needs of urbanpopulations.',
    },
  ];

  const featuredCircles = [
    { title: 'Alexa Rydell', subtitle: 'Chief Innovation Officer', image: CircleOne },
    { title: 'Marco Chen', subtitle: 'Lead Urban Architect', image: CircleTwo },
    { title: 'Samira Khan', subtitle: 'Head of Data Science', image: CircleThree },
  ];

  return (
    <div className='w-full h-[4806px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBar1
        pageTitle='CityTech'
        linkOneTitle='Dashboard'
        linkTwoTitle='Innovations'
        linkThreeTitle='Our Crew'
        buttonText='Explore Now'
        backgroundColor='bg-black'
        textColor='text-white'
      />
      <Hero1 heading='Revolutionizing Urban Tech' buttonText='Join the Future' />
      <Hero3
        heading="I'm Nova, Cybernetic Enthusiast."
        subheading='Navigate the neon-lit streets.'
        buttonText='Join the Odyssey'
        image={Nova1}
      />
      <Hero6
        heading='Unveil the Digital Shadows'
        subheading='Piercing through cybersecurity.'
        buttonText='Initiate Your Journey'
        heroImage={HeroImage6}
      />
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
      <Hero4
        heading='Revolutionize Your Study'
        subheading='Join the digital study revolution'
        buttonOneText='Sign Up Now'
        buttonTwoText='Learn More'
        image={Hero4Image}
      />
      <Hero7
        heading='Unveiling Future Data'
        subheading='Explore data-driven innovation.'
        buttonOneText='Get Started Today'
        buttonTwoText='Learn More'
        heroImage={Media7Layout}
      />
      <Hero2
        heading='Crafting Code Creatively'
        subheading='Diving deep into development.'
        buttonText='See Projects'
      />

      <Footer1 />
    </div>
  );
}
