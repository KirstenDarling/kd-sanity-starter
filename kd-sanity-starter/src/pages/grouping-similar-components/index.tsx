import SplitTextBanner6 from '@/components/SplitTextBanner6';
import TextBanner2 from '@/components/TextBanner2';
import TextBanner7 from '@/components/TextBanner7';
import TextBannerWithBackground1 from '@/components/TextBannerWithBackground1';
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
    <div className='w-full h-full bg-white flex-col justify-start items-center inline-flex'>
      {/* TEXT BANNERS START */}
      <TextBannerWithBackground1
        heading="Shaping Tomorrow's Cityscape."
        subheading='Innovative Urban Solutions'
      />
      <TextBannerWithBackground1
        heading='Crafting virtual utopias.'
        subheading='Digital Frontier Awaits'
      />
      <TextBannerWithBackground1
        heading='Study anytime, anywhere.'
        subheading='A new era of online learning.'
      />
      <TextBanner7 heading='Pioneering Data Horizons.' subheading='Data solutions reimagined' />
      <TextBanner2 />
      <SplitTextBanner6 />
      {/* TEXT BANNERS END */}
    </div>
  );
}
