import Image from 'next/image';

const LeftPictureSection = ({
  subheading,
  heading,
  text,
  buttonText,
  buttonLink,
  image,
}: {
  subheading?: string;
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: any;
}) => {
  return (
    <div
      className='leftPictureSection'
      style={{
        display: 'flex',
        width: '100vw',
        height: '550px',
        backgroundColor: 'white',
        paddingTop: '3%',
      }}
    >
      <div style={{ width: '50%', marginLeft: '12%', zIndex: '1' }}>
        <p style={{ marginBottom: '5%', color: '#5171ff' }}>{subheading}</p>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>{heading}</h1>
        <p style={{ paddingRight: '20%', paddingLeft: '5%', paddingTop: '2%' }}>{text}</p>

        <a href={buttonLink}>
          <button
            style={{
              backgroundColor: '#5171ff',
              padding: '2%',
              color: 'white',
              fontWeight: 'bold',
              marginTop: '5%',
            }}
          >
            {buttonText}
          </button>
        </a>
      </div>
      <div style={{ width: '50%', zIndex: '1' }}>
        <Image
          alt='travel'
          src={image}
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

export default LeftPictureSection;
