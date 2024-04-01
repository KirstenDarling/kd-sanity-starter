import Image from 'next/image';
import UnpluggedImage from '../../public/unpluggedScreenshot.png';

const PortfolioSection = () => {
  return (
    <div
      className='portfolioSection'
      style={{
        display: 'flex',
        width: '100vw',
        height: '550px',
        backgroundColor: 'white',
        paddingTop: '3%',
      }}
    >
      <div
        style={{
          width: '55%',
          height: '200px',
          marginLeft: '7%',
          marginTop: '6%',
          marginBottom: '5%',
          marginRight: '-5%',
          backgroundColor: '#f3f3f3',
          position: 'absolute',
          zIndex: '0',
        }}
      ></div>
      <div style={{ width: '50%', zIndex: '1' }}>
        <Image
          alt='travel'
          src={UnpluggedImage}
          quality={100}
          height={400}
          width={400}
          style={{ border: '7px white solid', marginLeft: '25%', marginTop: '10%' }}
        />
      </div>
      <div style={{ width: '50%', paddingTop: '2%', zIndex: '1' }}>
        <p style={{ marginBottom: '5%', color: '#5171ff' }}>Responsive Web Design</p>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Unplugged Retreat</h1>
        <p style={{ paddingRight: '20%', paddingLeft: '5%', paddingTop: '2%' }}>
          A sleek and minimal website built to display information about a work retreat. This
          website is fully responsive; which means it will look just as good when viewed on a
          smartphone or a laptop.
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
    </div>
  );
};

export default PortfolioSection;
