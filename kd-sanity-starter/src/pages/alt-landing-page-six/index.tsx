// import Image from 'next/image';

import CombinedNavBar from '@/components/CombinedNavBar';
import FooterFlat from '@/components/FooterFlat';
import Hero6 from '@/components/Hero6';
import MobilePreviewSection from '@/components/MobilePreviewSection';
import Newsletter from '@/components/Newsletter';
import NumberAccordion from '@/components/NumberAccordion';
import TextBanner from '@/components/TextBanner';
import InstagramIcon from '../../../public/InstagramLogo.svg';
import LinkedInIcon from '../../../public/LinkedinLogo.svg';
import TwitterIcon from '../../../public/TwitterLogo.svg';
import HeartIcon from '../../../public/heartIcon.svg';
import HeroImage6 from '../../../public/heroImage6.png';
import MessageIcon from '../../../public/messageIcon.svg';
import MobileMockupImage from '../../../public/mobileMockupImage.png';
import SubscriptionImage from '../../../public/subscriptionBackground.png';
import SunIcon from '../../../public/sunIcon.svg';

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

  const links = [
    { title: 'Synopsis', URL: 'https://www.google.com' },
    { title: 'Code Vault', URL: 'https://www.google.com' },
    { title: 'Hackers', URL: 'https://www.google.com' },
  ];

  const additionalLinks = [
    { title: 'Manifesto', URL: 'https://www.google.com' },
    { title: '@darkpurplehack', URL: 'https://www.google.com' },
    { title: 'Infiltrate Us', URL: 'https://www.google.com' },
  ];

  const footerLinks = [
    { title: 'Dossier', URL: 'https://www.google.com' },
    { title: 'Manifesto', URL: 'https://www.google.com' },
    { title: 'Hackers', URL: 'https://www.google.com' },
  ];

  return (
    <div className='w-full h-[4106px] bg-white flex-col justify-start items-center inline-flex'>
      <CombinedNavBar
        icon={SunIcon}
        pageTitle='ShadowBytes'
        links={links}
        additionalLinks={additionalLinks}
        backgroundEdges='bg-white'
        backgroundColor='bg-black'
        textColor='text-white'
        font=''
      />
      <Hero6
        heading='Unveil the Digital Shadows'
        subheading='Piercing through cybersecurity.'
        buttonText='Initiate Your Journey'
        heroImage={HeroImage6}
      />
      <TextBanner
        eyebrowText='Our Ethos'
        heading='Crafting the Cyber Narrative'
        splitText='Innovation through every byte.'
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
        image={1}
        backgroundImage={SubscriptionImage}
      />

      <FooterFlat
        appIcon={HeartIcon}
        instagramIcon={InstagramIcon}
        twitterIcon={TwitterIcon}
        linkedinIcon={LinkedInIcon}
        pageTitle='ShadowBytes'
        legalText='All rights reserved 2024'
        links={footerLinks}
        backgroundColor='bg-black'
      />
    </div>
  );
}
