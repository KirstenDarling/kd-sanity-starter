import Head from 'next/head';
import Image from 'next/image';
import homeStyles from '../styles/home.module.css';

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
      <div className={homeStyles.mainContainer}>
        <Image
          alt='travel'
          src='/landing-page-bg2.png'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
        <div className={homeStyles.innerContainer}>
          <div className={homeStyles.innerContent}>
            <h1>Circle Image Here</h1>
            <h1 className={`${homeStyles.headline} ${homeStyles.bellezaRegular}`}>
              Welcome! <br /> Please choose a vibe:
            </h1>
            <a href='https://www.google.com'>
              <button className={homeStyles.firstButton}>Corporate</button>
            </a>
            <a href='https://www.google.com'>
              <button className={` ${homeStyles.secondButton}  ${homeStyles.abhayaLibreBold}`}>
                Creative
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
