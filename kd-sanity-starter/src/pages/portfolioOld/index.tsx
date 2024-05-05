import EscapeBanner from '@/components/EscapeBanner';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import PortfolioSection from '@/components/PortfolioSection';
import Head from 'next/head';
import BecksSiteImage from '../../../public/beckshybridsSite.png';
import CodingResourcesImage from '../../../public/codingresourcessite.png';
import CollegeSkylineImage from '../../../public/collegeskylinecentersite.png';
import ErrorPageImage from '../../../public/errorpage.png';
import FlexBoxPlaygroundImage from '../../../public/flexbloxplaygroundsite.png';
import FormImage from '../../../public/formsite.png';
import JubileeAustenImage from '../../../public/jubileeaustensite.png';
import LolCatImage from '../../../public/lolcatsite.png';
import Magic8BallImage from '../../../public/magic8ballsite.png';
import RecipeImage from '../../../public/receipesite.png';
import RoguePickingsImage from '../../../public/roguepickingssite.png';
import UnpluggedImage from '../../../public/unpluggedScreenshot.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kirsten Darling</title>
        <meta
          name='description'
          content='A fun and informative site, created by Kirsten Darling.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-full h-full'>
        <EscapeBanner pageType='professional' />
        <NavBar />
        <PortfolioSection
          subheading='Nextjs and Sanity.io'
          heading="Beck's Hybrids"
          text="This site was created as a redesign of Beck's Hybrids previous website. The designs were created by Element Three. I was responsible for turning the designs into a fully functional website. This site was built using Nextjs and Sanity.io."
          buttonText='View Site'
          buttonLink='https://www.beckshybrids.com/'
          image={BecksSiteImage}
          alignment='left'
        />
        <PortfolioSection
          subheading='Responsive Web Development'
          heading='Unplugged Retreat'
          text='A sleek and minimal website built to display information about a work retreat. This
          website is fully responsive; which means it will look just as good when viewed on a
          smartphone or a laptop.'
          buttonText='View Site'
          buttonLink='https://kirstendarling.github.io/Unplugged-Retreat-Site/'
          image={UnpluggedImage}
          alignment='right'
        />
        <PortfolioSection
          subheading='JavaScript'
          heading='Magic 8 Ball'
          text=' A fun and interactive site that will give you answers to all of your questions. This site was built using HTML, CSS, and JavaScript.'
          buttonText='View Site'
          buttonLink='https://kirstendarling.github.io/Magic-8-Ball/'
          image={Magic8BallImage}
          alignment='left'
        />
        <PortfolioSection
          subheading='Javascript'
          heading='LOL Cat Clock'
          text='A fun and interactive site that displays a clock with a different cat picture for each hour of the day. This site was built using HTML, CSS, and JavaScript.'
          buttonText='View Site'
          buttonLink='https://kirstendarling.github.io/Lol-Cat-Clock/'
          image={LolCatImage}
          alignment='right'
        />
        <PortfolioSection
          subheading='Responsive Web Development'
          heading='Rogue Pickings'
          text=''
          buttonText='View Site'
          buttonLink='https://kirstendarling.github.io/Rogue-Pickings-Responsive-Site/'
          image={RoguePickingsImage}
          alignment='left'
        />
        <PortfolioSection
          subheading='Interactive Forms'
          heading='Submission Forms'
          text=' A collection of forms that I have created using HTML, CSS, and JavaScript while following along with the 100DaysOfCode Challenge. These forms are fully responsive and interactive.'
          buttonText='View Site'
          buttonLink='https://kirstendarling.github.io/100DaysOfCode-Day1-Registration-Form/'
          image={FormImage}
          alignment='right'
        />
        <PortfolioSection
          subheading='Responsive Web Development'
          heading='Coding Resources'
          text=' A collection of resources for coding. This site was built using HTML, CSS, and JavaScript. It is fully responsive and interactive.'
          buttonText='View Site'
          buttonLink='https://kirstendarling.github.io/Coding-Resources-Site/'
          image={CodingResourcesImage}
          alignment='left'
        />
        <PortfolioSection
          subheading='Portfolio Template'
          heading='Jubilee Austen'
          text=' A portfolio template that I recreated using HTML, CSS, and JavaScript in Skillcrush class. This template is fully responsive and interactive. It is a great starting point for anyone looking to create a portfolio site.'
          buttonText='View Site'
          buttonLink='https://kirstendarling.github.io/Jubilee-Austen-Site/'
          image={JubileeAustenImage}
          alignment='right'
        />
        <PortfolioSection
          subheading='Responsive Web Development'
          heading='Recipe Site'
          text=' A recipe site that I recreated using HTML, CSS, and JavaScript while in Skillcrush class. This site is fully responsive and interactive. It is a great starting point for anyone looking to create a recipe site.'
          buttonText='View Site'
          buttonLink='https://kirstendarling.github.io/Recipe-Site-Skillcrush-Challenge/'
          image={RecipeImage}
          alignment='left'
        />
        <PortfolioSection
          subheading='CSS Flexbox'
          heading='Flexbox Playground Site'
          text=' A site that I created to test out different flexbox properties. This site was built using HTML, CSS, and JavaScript. It is fully responsive and interactive.'
          buttonText='View Site'
          buttonLink='https://kirstendarling.github.io/Flexbox-Test-Site/'
          image={FlexBoxPlaygroundImage}
          alignment='right'
        />
        <PortfolioSection
          subheading='Basic Routing'
          heading='Error Page'
          text=" A simple error page that I created using HTML, CSS, and JavaScript while attending Skillcrush' bootcamp."
          buttonText='View Site'
          buttonLink='https://kirstendarling.github.io/105-Error-Page/'
          image={ErrorPageImage}
          alignment='left'
        />
        <PortfolioSection
          subheading='PHP WordPress Template'
          heading='College Skyline Center'
          text='A template that I created using PHP and WordPress to rework an existing site.'
          buttonText='View Site'
          buttonLink='https://collegeskyline.com/'
          image={CollegeSkylineImage}
          alignment='right'
        />

        <Footer />
      </div>
    </div>
  );
}
