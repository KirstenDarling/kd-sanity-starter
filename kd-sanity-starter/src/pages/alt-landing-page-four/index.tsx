// import Image from 'next/image';

import CardRow4 from '@/components/CardRow4';
import FAQSection4 from '@/components/FAQSection4';
import Footer4 from '@/components/Footer4';
import Hero4 from '@/components/Hero4';
import NavBar4 from '@/components/NavBar4';
import NumberAccordion4 from '@/components/NumberAccordion4';
import SubscriptionPlans1 from '@/components/SubscriptionPlans1';
import TextBannerWithImage4 from '@/components/TextBannerWithImage4';

export default function Home() {
  return (
    <div className='w-full h-[5453px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBar4 />
      <Hero4 />
      <TextBannerWithImage4
        heading='Study anytime, anywhere.'
        subheading='A new era of online learning.'
      />
      <CardRow4 />
      <NumberAccordion4 />
      <SubscriptionPlans1 />
      <FAQSection4 />
      <Footer4 />
    </div>
  );
}
