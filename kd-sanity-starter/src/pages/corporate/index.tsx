import Head from 'next/head';
import Image from 'next/image';
// import homeStyles from '../styles/home.module.css';
import EscapeBanner from '@/components/EscapeBanner';
import corporateLogo from '../../../public/corporateLogo.gif';

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

        <div
          className='navBar'
          style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}
        >
          <div className='logo' style={{ marginLeft: '40px' }}>
            <Image
              alt='travel'
              src={corporateLogo}
              height={250}
              width={250}
              quality={100}
              // style={{ marginLeft: '75px' }}
            />
          </div>
          <div
            className='navLinksGrouping'
            style={{
              width: '30%',
              display: 'flex',
              justifyContent: 'space-around',
              alignSelf: 'center',
              marginRight: '40px',
            }}
          >
            <a href='/corporate'>
              <button className='navButton'>
                <p>Home</p>
              </button>
            </a>
            <a href='/corporate/about'>
              <button className='navButton'>
                <p>About</p>
              </button>
            </a>
            <a href='/corporate/contact'>
              <button className='navButton'>
                <p>Contact</p>
              </button>
            </a>
          </div>
        </div>
        <div
          className='introSection'
          style={{ display: 'flex', width: '100vw', height: '500px', backgroundColor: 'pink' }}
        >
          <div style={{ width: '50%' }}></div>
          <div style={{ width: '50%' }}></div>
        </div>
        <div
          className='loadMoreSection'
          style={{ display: 'flex', width: '100vw', height: '300px', backgroundColor: 'yellow' }}
        ></div>
        <div
          className='portfolioSection'
          style={{ display: 'flex', width: '100vw', height: '275px', backgroundColor: 'pink' }}
        >
          <div style={{ width: '50%' }}></div>
          <div style={{ width: '50%' }}></div>
        </div>
        <div
          className='certificationsSection'
          style={{ display: 'flex', width: '100vw', height: '300px', backgroundColor: 'lightblue' }}
        >
          <div style={{ width: '50%' }}></div>
          <div style={{ width: '50%' }}></div>
        </div>
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
