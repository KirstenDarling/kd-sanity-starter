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
            <div className={homeStyles.profilePic}>
              <Image
                alt='travel'
                src='/profilePic.png'
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
            <h1 className={`${homeStyles.headline} ${homeStyles.bellezaRegular}`}>
              Welcome! <br /> Please choose a vibe:
            </h1>
            <div className={homeStyles.buttonGrouping}>
              <a href='/corporate'>
                <button className={homeStyles.firstButton}>
                  <p>Corporate</p>
                </button>
              </a>

              <a href='/learning-room'>
                <button className={` ${homeStyles.secondButton}  ${homeStyles.abhayaLibreBold}`}>
                  <p>Creative</p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
