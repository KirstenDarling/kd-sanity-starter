import CardRow2 from '@/components/CardRow2';
import Footer2 from '@/components/Footer2';
import Hero2 from '@/components/Hero2';
import ImageCTASection2 from '@/components/ImageCTASection2';
import NavBar2 from '@/components/NavBar2';
import PortfolioImageGrid2 from '@/components/PortfolioImageGrid2';
import TextBanner2 from '@/components/TextBanner2';

export default function Home() {
  return (
    <div className='w-full h-[4071px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBar2 />
      <Hero2
        heading='Crafting Code Creatively'
        subheading='Diving deep into development.'
        buttonText='See Projects'
      />
      <TextBanner2 />
      <PortfolioImageGrid2 />
      <CardRow2 />
      <ImageCTASection2 />
      <Footer2 />
    </div>
  );
}
