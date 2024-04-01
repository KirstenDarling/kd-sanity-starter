import Image from 'next/image';
import UnpluggedImage from '../../public/unpluggedScreenshot.png';

const CertificateSection = () => {
  return (
    <div
      className='certificateSection'
      style={{
        display: 'flex',
        width: '100vw',
        height: '550px',
        backgroundColor: 'white',
        paddingTop: '3%',
      }}
    >
      <div style={{ width: '50%', marginLeft: '12%', zIndex: '1' }}>
        <p style={{ marginBottom: '5%', color: '#5171ff' }}>Developer Certifications</p>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>
          Learn More About my Developer Certifications
        </h1>
        <p style={{ paddingRight: '20%', paddingLeft: '5%', paddingTop: '2%' }}>
          I am always learning and keepign up with the latest in the tech world. I attended
          Skillcrush&apos;s Front End Developer Bootcamp. As well as smaller courses on platforms
          such as Udemy, W3Schools, freeCodeCamp, Mimo, and Sololearn.
        </p>

        <a href='https://kirstendarling.github.io/Unplugged-Retreat-Site/'>
          <button
            style={{
              backgroundColor: '#5171ff',
              padding: '2%',
              color: 'white',
              fontWeight: 'bold',
              marginTop: '5%',
            }}
          >
            View Site
          </button>
        </a>
      </div>
      <div style={{ width: '50%', zIndex: '1' }}>
        <Image
          alt='travel'
          src={UnpluggedImage}
          quality={100}
          height={400}
          width={400}
          style={{ border: '7px white solid', marginTop: '10%' }}
        />
      </div>
      <div
        style={{
          width: '55%',
          height: '250px',
          marginLeft: '31%',
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

export default CertificateSection;
