import CardRow4 from '@/components/CardRow4';
import CombinedNavBar from '@/components/CombinedNavBar';
import FAQSection from '@/components/FAQSection';
import FooterThicc from '@/components/FooterThicc';
import Hero4 from '@/components/Hero4';
import NumberAccordion from '@/components/NumberAccordion';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import TextBanner from '@/components/TextBanner';
import BannerImageThree from '../../../public/LummiBackground4.png';
import Image1 from '../../../public/fourCard1.png';
import Image2 from '../../../public/fourCard2.png';
import Image3 from '../../../public/fourCard3.png';
import Image4 from '../../../public/fourCard4.png';
import Image5 from '../../../public/fourCard5.png';
import Image6 from '../../../public/fourCard6.png';
import HeartIcon from '../../../public/heartIcon.svg';
import Hero4Image from '../../../public/hero4.png';
import SunIcon from '../../../public/sunIcon.svg';

export default function Home() {
  const featuredQuestions = [
    { questionText: 'What is CyberStudy Hall?' },
    { questionText: 'Can I study with others?' },
    { questionText: 'Are there live tutors?' },
    { questionText: 'How do I customize my space?' },
    { questionText: 'What are community events?' },
  ];

  const featuredCards = [
    { heading: '24/7 Access', subheading: 'Study at any hour, day or night.', image: Image1 },
    { heading: 'Expert Support', subheading: 'Guidance from online study experts.', image: Image2 },
    { heading: 'Global Community', subheading: 'Connect with learners worldwide.', image: Image3 },
    {
      heading: 'Customizable Spaces',
      subheading: 'Create the perfect study environment.',
      image: Image4,
    },
    { heading: 'Tech-Enabled', subheading: 'Advanced tools at your fingertips.', image: Image5 },
    {
      heading: 'Interactive Sessions',
      subheading: 'Engage in live knowledge exchanges.',
      image: Image6,
    },
  ];

  const featuredAccordionSections = [
    {
      number: 1,
      title: 'Create an Account',
      description: 'Sign up and access our study features.',
    },
    {
      number: 2,
      title: 'Customize Your Space',
      description: 'Personalize your study hall experience.',
    },
    {
      number: 3,
      title: 'Start Learning',
      description: 'Dive into a world of knowledge.',
    },
  ];

  const links = [
    { title: 'Welcome', URL: 'https://www.google.com' },
    { title: 'Our Spaces', URL: 'https://www.google.com' },
    { title: 'Our Story', URL: 'https://www.google.com' },
  ];

  const additionalLinks = [
    { title: 'Learn More', URL: 'https://www.google.com' },
    { title: '@cyberstudyhall', URL: 'https://www.google.com' },
    { title: 'Get in Touch', URL: 'https://www.google.com' },
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
        { link: 'Our Features', URL: 'https://www.google.com' },
        { link: 'High-Speed Wi-Fi', URL: 'https://www.google.com' },
        { link: 'Study Cards', URL: 'https://www.google.com' },
        { link: 'Virtual Bulletin', URL: 'https://www.google.com' },
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
  ];

  return (
    <div className='w-full h-[5453px] bg-white flex-col justify-start items-center inline-flex'>
      <CombinedNavBar
        icon={SunIcon}
        pageTitle='CyberStudy Cafe'
        links={links}
        additionalLinks={additionalLinks}
        backgroundColor='bg-black'
        textColor='text-white'
        font=''
      />
      <Hero4
        heading='Revolutionize Your Study'
        subheading='Join the digital study revolution'
        buttonOneText='Sign Up Now'
        buttonTwoText='Learn More'
        image={Hero4Image}
      />
      <TextBanner
        heading='Study anytime, anywhere.'
        subheading='A new era of online learning.'
        image={BannerImageThree}
      />
      <CardRow4
        heading='Comfort & Convenience'
        subheading='Study in the comfort of cyber space.'
        cards={featuredCards}
      />
      <NumberAccordion title='How CyberStudy Works' accordionSections={featuredAccordionSections} />
      <SubscriptionPlans />
      <FAQSection
        title='Common Questions'
        subtitle='Find answers to commonly asked questions about our cyber study hall.'
        questions={featuredQuestions}
        footerTitle='Need further assistance?'
        footerText='Reach out to us anytime for additional support.'
        footerCTAButtonText='Contact Us'
      />
      <FooterThicc
        icon={HeartIcon}
        pageTitle='CyberStudy Cafe'
        subtitle='Elevate your learning space'
        columns={footerColumns}
        textColor='text-neutral-100'
        backgroundColor='bg-black'
        additionalSection={true}
      />
    </div>
  );
}
