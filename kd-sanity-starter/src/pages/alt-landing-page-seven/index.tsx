// import Image from 'next/image';
import Footer7 from '@/components/Footer7';
import Hero7 from '@/components/Hero7';
import MobilePreviewSection from '@/components/MobilePreviewSection';
import NavBar7 from '@/components/NavBar7';
import Newsletter7 from '@/components/Newsletter7';
import Quote7 from '@/components/Quote7';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import TextBannerWithoutBackground from '@/components/TextBannerWithoutBackground';
import MobileMockupImage7 from '../../../public/MobileMockup7.png';
import Media7Layout from '../../../public/mediaLayout7.png';
import MessageIcon from '../../../public/messageIcon.svg';

export default function Home() {
  const featuredBullets = [
    {
      title: 'Real-time Processing',
      subtitle: 'Ultra-fast computation and analysis.',
      icon: MessageIcon,
    },
    {
      title: 'Scalable Infrastructure',
      subtitle: 'Adaptable to growing data needs.',
      icon: MessageIcon,
    },
    {
      title: 'Secure Cloud Storage',
      subtitle: 'Protecting your data at all costs.',
      icon: MessageIcon,
    },
  ];

  return (
    <div className='w-full h-[4818.97px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBar7 />
      <Hero7
        heading='Unveiling Future Data'
        subheading='Explore data-driven innovation.'
        buttonOneText='Get Started Today'
        buttonTwoText='Learn More'
        heroImage={Media7Layout}
      />
      <TextBannerWithoutBackground
        heading='Pioneering Data Horizons.'
        subheading='Data solutions reimagined'
      />
      <MobilePreviewSection
        title='Advanced Analytics'
        subtitle='Leverage insights effectively.'
        mobileImage={MobileMockupImage7}
        bullets={featuredBullets}
      />
      <SubscriptionPlans />
      <Newsletter7 />
      <Quote7 />
      <Footer7 />
    </div>
  );
}
