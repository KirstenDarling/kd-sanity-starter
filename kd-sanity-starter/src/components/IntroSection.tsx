import Image from 'next/image';
import IntroImage from '../../public/introImage.jpg';

const IntroSection = ({ text }: { text?: string }) => {
  return (
    <div
      className='introSection'
      style={{
        display: 'flex',
        width: '100vw',
        height: '80%',
        backgroundColor: 'white',
        paddingLeft: '5%',
      }}
    >
      <div
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '5%',
          paddingTop: '5%',
          zIndex: '1',
        }}
      >
        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>
          Hi, my name is Kirsten and I like to bring your ideas to life on the web.
        </h1>
        <p style={{ marginTop: '7%', marginBottom: '7%', paddingLeft: '7%' }}>
          My #1 goal is to help businesses create custom company websites. I can build custom
          websites from scratch, redesign an existing website, or add features to your website such
          as a contact form, image gallery, portfolio section, blog, and more!
        </p>
        <p>Click below to contact me and get started on your new custom website!</p>
        <a href='/'>
          <button
            style={{
              backgroundColor: '#5171ff',
              padding: '2%',
              color: 'white',
              fontWeight: 'bold',
              marginTop: '5%',
            }}
          >
            Contact Me!
          </button>
        </a>
      </div>
      <div
        style={{
          width: '30%',
          marginLeft: '15%',
          display: 'flex',
          flexDirection: 'column',
          zIndex: '1',
        }}
      >
        <Image
          alt='travel'
          src={IntroImage}
          height={350}
          width={350}
          quality={100}
          style={{ border: '7px white solid' }}
        />
        <p style={{ marginLeft: '2%' }}>
          Photo by&nbsp;
          <a href='https://unsplash.com/@rucksackmag?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
            Rucksack Magazine
          </a>
          &nbsp;on&nbsp;
          <a href='https://unsplash.com/photos/macbook-pro-on-white-table-QbVvcO6lr2o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
            Unsplash
          </a>
        </p>
      </div>
      <div
        style={{
          width: '65%',
          height: '425px',
          marginLeft: '25%',
          marginTop: '3%',
          marginBottom: '5%',
          backgroundColor: '#f3f3f3',
          position: 'absolute',
          zIndex: '0',
        }}
      ></div>
    </div>
  );
};

export default IntroSection;
