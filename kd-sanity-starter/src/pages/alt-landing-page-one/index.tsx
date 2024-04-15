import BulletPointsSection1 from '@/components/BulletPointsSection1';
import Footer1 from '@/components/Footer1';
import Hero1 from '@/components/Hero1';
import NavBar1 from '@/components/NavBar1';
import NumberAccordion1 from '@/components/NumberAccordion1';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import TextBannerWithBackground from '@/components/TextBannerWithBackground';
import CardRowCircles1 from '@components/CardRowCircles1';
import MessageIcon from '../../../public/messageIcon.svg';
import CircleOne from '../../../public/oneCircleOne.png';
import CircleThree from '../../../public/oneCircleThree.png';
import CircleTwo from '../../../public/oneCircleTwo.png';
import BannerImageOne from '../../../public/textBanner1.png';

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
      <TextBannerWithBackground
        heading="Shaping Tomorrow's Cityscape."
        subheading='Innovative Urban Solutions'
        image={BannerImageOne}
      />
      <BulletPointsSection1
        heading='Smart Connectivity'
        subheading='Seamless City Integration'
        features={featuredBullets}
      />
      <NumberAccordion1 title='How We Innovate' accordionSections={featuredAccordionSections} />
      <CardRowCircles1
        heading='Meet Our Visionaries'
        subheading='The minds driving urban tech into the future.'
        circles={featuredCircles}
      />
      <SubscriptionPlans />
      <Footer1 />
    </div>
  );
}
