import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import homeStyles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className=''>
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
            {/* <iframe
              src='https://quizlet.com/900633071/match/embed?i=1rmz5e&x=1jj1'
              height='500'
              width='100%'
              style={{ border: 0, zIndex: 9, marginBottom: '20px' }}
            ></iframe> */}
            <h1 className={`${homeStyles.headline} ${homeStyles.bellezaRegular}`}>
              Welcome! <br /> Please choose a vibe:
            </h1>
            <div className={homeStyles.buttonGrouping}>
              <Link href='/professional'>
                <button className={homeStyles.firstButton}>
                  <p>Professional</p>
                </button>
              </Link>

              <Link href='/learning-room'>
                <button className={` ${homeStyles.secondButton}  ${homeStyles.abhayaLibreBold}`}>
                  <p>Creative</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
