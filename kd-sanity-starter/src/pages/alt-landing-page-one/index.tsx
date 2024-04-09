import BulletPointsSection1 from '@/components/BulletPointsSection1';
import CardRowCircle1 from '@/components/CardRowCircle1';
import Footer1 from '@/components/Footer1';
import Hero1 from '@/components/Hero1';
import NavBar1 from '@/components/NavBar1';
import NumberAccordion1 from '@/components/NumberAccordion1';
import SubscriptionPlans1 from '@/components/SubscriptionPlans1';
import TextBannerWithBackground1 from '@/components/TextBannerWithBackground1';

export default function Home() {
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
      <Hero1 />
      <TextBannerWithBackground1
        heading="Shaping Tomorrow's Cityscape."
        subheading='Innovative Urban Solutions'
      />
      <BulletPointsSection1 />
      <NumberAccordion1 />
      <CardRowCircle1 />
      <SubscriptionPlans1 />
      <Footer1 />
    </div>
  );
}
