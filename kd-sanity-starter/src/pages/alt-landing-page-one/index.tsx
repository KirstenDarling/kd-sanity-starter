import BulletPointsSection1 from '@/components/BulletPointsSection1';
import CardRowCircle1 from '@/components/CardRowCircle1';
import Footer1 from '@/components/Footer1';
import Hero1 from '@/components/Hero1';
import NavBar1 from '@/components/NavBar1';
import NumberAccordion1 from '@/components/NumberAccordion1';
import SubscriptionPlans1 from '@/components/SubscriptionPlans1';
import TextBannerWithBackground1 from '@/components/TextBannerWithBackground1';
import MessageIcon from '../../../public/messageIcon.svg';

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
      <TextBannerWithBackground1
        heading="Shaping Tomorrow's Cityscape."
        subheading='Innovative Urban Solutions'
      />
      <BulletPointsSection1
        heading='Smart Connectivity'
        subheading='Seamless City Integration'
        features={featuredBullets}
      />
      <NumberAccordion1 />
      <CardRowCircle1 />
      <SubscriptionPlans1 />
      <Footer1 />
    </div>
  );
}
