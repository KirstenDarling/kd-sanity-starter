import CardsSquare3 from '@/components/CardsSquare3';
import Footer3 from '@/components/Footer3';
import Hero3 from '@/components/Hero3';
import NavBar3 from '@/components/NavBar3';
import ProjectLargeImageAccordion3 from '@/components/ProjectLargeImageAccordion3';
import QuoteWithImage3 from '@/components/QuoteWithImage3';
import TextBannerWithBackground from '@/components/TextBannerWithBackground';
import Nova1 from '../../../public/Nova1.png';
import BannerImageTwo from '../../../public/NovaBackground.png';
import NovaPerson2 from '../../../public/NovaPerson2.png';

export default function Home() {
  const featuredCards = [
    {
      eyebrowText: 'Transcend Reality',
      heading: 'Reshape the Metropolis Skyline',
      subheading: 'Urban revolution begins',
      CTAText: 'Embark the Hype',
    },
    {
      eyebrowText: 'Hack the System',
      heading: 'Reimagine Cybernetic Life',
      subheading: 'AI rebellion starts now',
      CTAText: 'Lead the Change',
    },
  ];

  const featuredLongCard = {
    eyebrowText: 'Rebel With Cause',
    heading: "Redefine Humanity's Fate",
    subheading: 'Cyber evolution awaits',
    CTAText: 'Seize the Future',
  };

  return (
    <div className='w-full h-[4681px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBar3 />
      <Hero3
        heading="I'm Nova, Cybernetic Enthusiast."
        subheading='Navigate the neon-lit streets.'
        buttonText='Join the Odyssey'
        image={Nova1}
      />
      <TextBannerWithBackground
        heading='Crafting virtual utopias.'
        subheading='Digital Frontier Awaits'
        image={BannerImageTwo}
      />
      <CardsSquare3
        heading='Neon Dreams Unveiled'
        subheading='Immersive Reality Awaits'
        shortCards={featuredCards}
        longCard={featuredLongCard}
      />
      <ProjectLargeImageAccordion3 />
      <QuoteWithImage3
        quote='“Their vision for the cyber world transformed my reality.”'
        author='Maverick T., Cyberpunk Enthusiast'
        image={NovaPerson2}
      />
      <Footer3 />
    </div>
  );
}
