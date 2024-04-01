import DownArrow from '@public/downArrow.png';
import Image from 'next/image';

const ContinueSection = () => {
  return (
    <div
      className='loadMoreSection'
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '5%',
        paddingBottom: '5%',
        alignItems: 'center',
        width: '100vw',
        height: '350px',
        backgroundColor: 'white',
      }}
    >
      <Image alt='travel' src={DownArrow} quality={100} width={100} height={100} />
      <h1 style={{ fontWeight: 'bold', fontSize: '28px' }}>Learn More</h1>
      <p style={{ paddingTop: '3%' }}>
        View websites that I&apos;ve built and certificates that I have earned.
      </p>
    </div>
  );
};

export default ContinueSection;
