import CardRow2 from '@/components/CardRow2';
import Footer2 from '@/components/Footer2';
import Hero2 from '@/components/Hero2';
import ImageCTA from '@/components/ImageCTA';
import NavBar2 from '@/components/NavBar2';
import PortfolioImageGrid2 from '@/components/PortfolioImageGrid2';
import TextBannerAltStyle from '@/components/TextBannerAltStyle';
import LummiGroup1Image from '../../../public/ImageLummiGroup1.png';
import LummiGroup2Image from '../../../public/ImageLummiGroup2.png';
import LummiGroup3Image from '../../../public/ImageLummiGroup3.png';
import LummiImage1 from '../../../public/image-lummi1.png';
import LummiImage2 from '../../../public/imageLummi2.png';
import LummiImage3 from '../../../public/imageLummi3.png';
import LummiImage4 from '../../../public/imageLummi4.png';
import LummiImage5 from '../../../public/imageLummi5.png';
import LummiImage6 from '../../../public/imageLummi6.png';
import ImageLummiFinal from '../../../public/imageLummiFinal.png';

export default function Home() {
  const cardsFeatured = [
    {
      image: LummiGroup1Image,
      eyebrowHeading: 'Step 1',
      heading: 'Ideation Phase',
      text: 'Conceptualizing the user experience with a touch of whimsy and technical prowess.',
    },
    {
      image: LummiGroup2Image,
      eyebrowHeading: 'Step 2',
      heading: 'Code in Action',
      text: 'Breathing life into ideas with elegant algorithms and swift keystrokes.',
    },
    {
      image: LummiGroup3Image,
      eyebrowHeading: 'Step 3',
      heading: 'Final Touches',
      text: 'Polishing features to ensure a delightful and bug-free user journey.',
    },
  ];
  return (
    <div className='w-full h-[4071px] bg-white flex-col justify-start items-center inline-flex'>
      <NavBar2 />
      <Hero2
        heading='Crafting Code Creatively'
        subheading='Diving deep into development.'
        buttonText='See Projects'
      />
      <TextBannerAltStyle
        heading='Creative Ethos'
        subheading='Fueling innovation with playful designs and robust code that encapsulate my journey as a mobile engineer.'
      />
      <PortfolioImageGrid2
        heading='Portfolio Highlights'
        subheading='A peek into my professional adventures.'
        image1={LummiImage1}
        image2={LummiImage2}
        image3={LummiImage3}
        image4={LummiImage4}
        image5={LummiImage5}
        image6={LummiImage6}
      />
      <CardRow2
        heading='Making Magic Happen'
        subheading='A snapshot of my development process.'
        cards={cardsFeatured}
      />
      <ImageCTA
        heading="Let's Collaborate!"
        subheading='Ready to build something amazing together?'
        CTAText='Get in Touch'
        image={ImageLummiFinal}
      />
      <Footer2 />
    </div>
  );
}
