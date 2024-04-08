// import Image from 'next/image';

import CardRow4 from '@/components/CardRow4';
import FAQSection4 from '@/components/FAQSection4';
import Footer4 from '@/components/Footer4';
import Hero4 from '@/components/Hero4';
import NavBar4 from '@/components/NavBar4';
import NumberAccordion4 from '@/components/NumberAccordion4';
import SubscriptionPlans4 from '@/components/SubscriptionPlans4';
import TextBannerWithImage4 from '@/components/TextBannerWithImage4';

export default function Home() {
  return (
    <div className='w-full h-[5453px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBar4 />
      <Hero4 />
      <TextBannerWithImage4 />
      <CardRow4 />
      <NumberAccordion4 />
      <SubscriptionPlans4 />
      <FAQSection4 />
      <Footer4 />
    </div>
  );
}
