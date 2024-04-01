import Head from 'next/head';
// import homeStyles from '../styles/home.module.css';
import CertificateSection from '@/components/CertificateSection';
import ContinueSection from '@/components/ContinueSection';
import EscapeBanner from '@/components/EscapeBanner';
import IntroSection from '@/components/IntroSection';
import NavBar from '@/components/NavBar';
import PortfolioSection from '@/components/PortfolioSection';
import SkillcrushCert from '../../../public/skillcrushCertImage.png';
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

      <div style={{ width: '100vw', height: '100vh' }}>
        <EscapeBanner pageType='corporate' />
        <NavBar />
        <IntroSection />
        <ContinueSection />
        <PortfolioSection
          subheading='Software Development'
          heading='Custom, Complex Websites'
          text='From a sleek and minimal website built to display information about a work retreat, to a Magic 8-ball that uses JavaScript to predict your future, to a complex and interactive site that helps content creators manage blog posts, podcasts, tables of data, and more, I can create a site that is perfect for your needs. View my portfolio to browse some of my past projects.'
          buttonText='View Portfolio'
          buttonLink='/portfolio'
          image={UnpluggedImage}
        />
        <CertificateSection
          subheading='Developer Certifications'
          heading='Learn More About my Developer Certifications'
          text="I am always learning and keepign up with the latest in the tech world. I attended
          Skillcrush's Front End Developer Bootcamp. As well as smaller courses on platforms
          such as Udemy, W3Schools, freeCodeCamp, Mimo, and Sololearn."
          buttonText='View Certifications'
          buttonLink='/certifications'
          image={SkillcrushCert}
        />

        <div
          className='footerSection'
          style={{ display: 'flex', width: '100vw', height: '350px', backgroundColor: '#5171ff' }}
        >
          <div style={{ width: '50%' }}></div>
          <div style={{ width: '50%' }}></div>
        </div>
      </div>
    </div>
  );
}
