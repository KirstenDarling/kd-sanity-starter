import Head from 'next/head';
// import homeStyles from '../styles/home.module.css';
import CertificateSection from '@/components/CertificateSection';
import ContinueSection from '@/components/ContinueSection';
import EscapeBanner from '@/components/EscapeBanner';
import IntroSection from '@/components/IntroSection';
import NavBar from '@/components/NavBar';
import PortfolioSection from '@/components/PortfolioSection';

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
        <PortfolioSection />
        <CertificateSection />

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
