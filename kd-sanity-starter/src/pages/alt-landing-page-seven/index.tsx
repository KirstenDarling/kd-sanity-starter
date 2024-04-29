// import Image from 'next/image';
import FooterBasic from '@/components/FooterBasic';
import Hero7 from '@/components/Hero7';
import MobilePreviewSection from '@/components/MobilePreviewSection';
import NavBarWithLogin from '@/components/NavBarWithLogin';
import Newsletter from '@/components/Newsletter';
import Quote from '@/components/Quote';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import TextBanner from '@/components/TextBanner';
import MobileMockupImage7 from '../../../public/MobileMockup7.png';
import CatPic from '../../../public/catPic.png';
import HeartIcon from '../../../public/heartIcon.svg';
import Media7Layout from '../../../public/mediaLayout7.png';
import MessageIcon from '../../../public/messageIcon.svg';
import NewsletterImage from '../../../public/newsletterBackground.png';

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

  const footerColumns = [
    {
      links: [
        { link: 'Company', URL: 'https://www.google.com' },
        { link: 'About', URL: 'https://www.google.com' },
        { link: 'Careers', URL: 'https://www.google.com' },
        { link: 'Newsroom', URL: 'https://www.google.com' },
      ],
    },
    {
      links: [
        { link: 'Solutions', URL: 'https://www.google.com' },
        { link: 'Efficiency', URL: 'https://www.google.com' },
        { link: 'Insights', URL: 'https://www.google.com' },
        { link: 'Innovations', URL: 'https://www.google.com' },
      ],
    },
    {
      links: [
        { link: 'Social', URL: 'https://www.google.com' },
        { link: 'Twitter', URL: 'https://www.google.com' },
        { link: 'Instagram', URL: 'https://www.google.com' },
        { link: 'Threads', URL: 'https://www.google.com' },
      ],
    },
    {
      links: [
        { link: 'Legal', URL: 'https://www.google.com' },
        { link: 'Terms', URL: 'https://www.google.com' },
        { link: 'Privacy', URL: 'https://www.google.com' },
      ],
    },
  ];

  return (
    <div className='w-full h-[4818.97px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBarWithLogin />
      <Hero7
        heading='Unveiling Future Data'
        subheading='Explore data-driven innovation.'
        buttonOneText='Get Started Today'
        buttonTwoText='Learn More'
        heroImage={Media7Layout}
      />
      <TextBanner
        heading='Pioneering Data Horizons.'
        subheading='Data solutions reimagined'
        // isSplitStyle={false}
      />
      <MobilePreviewSection
        title='Advanced Analytics'
        subtitle='Leverage insights effectively.'
        mobileImage={MobileMockupImage7}
        bullets={featuredBullets}
      />
      <SubscriptionPlans />
      <Newsletter
        title='Join Today'
        subtitle='Secure your spot!'
        buttonOptionOneText='Connect with Google'
        inputLabel='Username or Email'
        input='Create a Password'
        buttonOptionTwoText='Proceed with Email'
        legalText='Terms and privacy agreed upon'
        image={2}
        backgroundImage={NewsletterImage}
      />
      <Quote
        quote='“DataWarp transformed our data strategy and execution.”'
        author='Ava Smith, Data Scientist'
        image={CatPic}
      />
      <FooterBasic
        icon={HeartIcon}
        pageTitle='DataWarp'
        subtitle='Empower your data journey'
        columns={footerColumns}
      />
    </div>
  );
}
