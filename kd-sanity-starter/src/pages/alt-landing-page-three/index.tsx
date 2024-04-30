import CardsSquare3 from '@/components/CardsSquare3';
import CombinedHero from '@/components/CombinedHero';
import CombinedNavBar from '@/components/CombinedNavBar';
import FooterReversed from '@/components/FooterReversed';
import ProjectLargeImageAccordion3 from '@/components/ProjectLargeImageAccordion3';
import QuoteWithImage from '@/components/QuoteWithImage';
import TextBanner from '@/components/TextBanner';
import NeonThriveStackIcon from '../../../public/NeonThriveStackIcon.svg';
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

  const links = [
    { title: 'Portal', URL: 'https://www.google.com' },
    { title: 'Dystopia', URL: 'https://www.google.com' },
    { title: 'Crew', URL: 'https://www.google.com' },
  ];

  const additionalLinks = [
    { title: 'Manifesto', URL: 'https://www.google.com' },
    { title: '@cyberpulse', URL: 'https://www.google.com' },
    { title: 'Connect', URL: 'https://www.google.com' },
  ];

  return (
    <div className='w-full h-[4681px] bg-white flex-col justify-start items-center inline-flex'>
      <CombinedNavBar
        icon={NeonThriveStackIcon}
        pageTitle='Neon Thrive'
        links={links}
        additionalLinks={additionalLinks}
        backgroundEdges='bg-black'
        backgroundColor='bg-white'
        textColor=''
        font=''
      />
      <CombinedHero
        heading="I'm Nova, Cybernetic Enthusiast."
        subheading='Navigate the neon-lit streets.'
        buttonText='Join the Odyssey'
        image={Nova1}
        backgroundStyle='bg-black'
        textStyle="text-neutral-100 text-7xl font-normal font-['Fugaz One'] leading-[77.76px]"
        buttonStyle="bg-purple-500 text-white text-lg font-normal font-['Open Sans'] leading-[27px]"
      />
      <TextBanner
        heading='Crafting virtual utopias.'
        subheading='Digital Frontier Awaits'
        image={BannerImageTwo}
        // isSplitStyle={false}
      />
      <CardsSquare3
        heading='Neon Dreams Unveiled'
        subheading='Immersive Reality Awaits'
        shortCards={featuredCards}
        longCard={featuredLongCard}
      />
      <ProjectLargeImageAccordion3 />
      <QuoteWithImage
        quote='“Their vision for the cyber world transformed my reality.”'
        author='Maverick T., Cyberpunk Enthusiast'
        image={NovaPerson2}
        bgColor='black'
      />
      <FooterReversed />
    </div>
  );
}
