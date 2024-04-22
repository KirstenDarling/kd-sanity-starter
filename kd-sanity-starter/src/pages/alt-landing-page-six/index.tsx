// import Image from 'next/image';

import Footer6 from '@/components/Footer6';
import Hero6 from '@/components/Hero6';
import MobilePreviewSection from '@/components/MobilePreviewSection';
import NavBar6 from '@/components/NavBar6';
import Newsletter from '@/components/Newsletter';
import NumberAccordion from '@/components/NumberAccordion';
import TextBannerAltStyleSplit from '@/components/TextBannerAltStyleSplit';
import HeroImage6 from '../../../public/heroImage6.png';
import MessageIcon from '../../../public/messageIcon.svg';
import MobileMockupImage from '../../../public/mobileMockupImage.png';
import SubscriptionImage from '../../../public/subscriptionBackground.png';

export default function Home() {
  const featuredBullets = [
    {
      title: 'Advanced Algorithms',
      subtitle: 'Decoding complexities, simplifying solutions.',
      icon: MessageIcon,
    },
    {
      title: 'Secure Protocols',
      subtitle: 'A fortress of code guarding your data.',
      icon: MessageIcon,
    },
    {
      title: 'User Anonymity',
      subtitle: "Your identity cloaked in the network's shadows.",
      icon: MessageIcon,
    },
  ];

  const featuredAccordionSections = [
    {
      number: 1,
      title: 'Encryption Keys',
      description: 'Generate unbreakable keys, secure your code.',
    },
    {
      number: 2,
      title: 'System Penetration',
      description: 'Test defenses, exploit vulnerabilities effectively.',
    },
    {
      number: 3,
      title: 'Data Extraction',
      description: 'Retrieve critical intel with precision operations.',
    },
  ];

  return (
    <div className='w-full h-[4106px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBar6 />
      <Hero6
        heading='Unveil the Digital Shadows'
        subheading='Piercing through cybersecurity.'
        buttonText='Initiate Your Journey'
        heroImage={HeroImage6}
      />
      <TextBannerAltStyleSplit
        eyebrowText='Our Ethos'
        heading='Crafting the Cyber Narrative'
        text='Innovation through every byte.'
      />
      <MobilePreviewSection
        title='Stealth Operations'
        subtitle='Navigate with unseen agility.'
        mobileImage={MobileMockupImage}
        bullets={featuredBullets}
      />
      <NumberAccordion
        title='Commence the Protocol'
        accordionSections={featuredAccordionSections}
      />

      <Newsletter
        title='Enlist Now'
        subtitle='Join the Shadow Network!'
        buttonOptionOneText='Proceed with OAuth'
        inputLabel='Username or Email'
        input='Enter Access Credentials'
        buttonOptionTwoText='Continue with Secrecy'
        legalText='Consent to our Cryptic Terms and Covert Policy'
        backgroundImage={SubscriptionImage}
      />
      <Footer6 />
    </div>
  );
}
