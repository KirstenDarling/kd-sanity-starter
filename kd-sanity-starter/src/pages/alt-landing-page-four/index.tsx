// import Image from 'next/image';

import CardRow4 from '@/components/CardRow4';
import FAQSection4 from '@/components/FAQSection4';
import Footer4 from '@/components/Footer4';
import Hero4 from '@/components/Hero4';
import NavBar4 from '@/components/NavBar4';
import NumberAccordion4 from '@/components/NumberAccordion4';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import TextBannerWithBackground from '@/components/TextBannerWithBackground';
import BannerImageThree from '../../../public/LummiBackground4.png';
import Hero4Image from '../../../public/hero4.png';

export default function Home() {
  return (
    <div className='w-full h-[5453px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBar4 />
      <Hero4
        heading='Revolutionize Your Study'
        subheading='Join the digital study revolution'
        buttonOneText='Sign Up Now'
        buttonTwoText='Learn More'
        image={Hero4Image}
      />
      <TextBannerWithBackground
        heading='Study anytime, anywhere.'
        subheading='A new era of online learning.'
        image={BannerImageThree}
      />
      <CardRow4 />
      <NumberAccordion4 />
      <SubscriptionPlans />
      <FAQSection4 />
      <Footer4 />
    </div>
  );
}
