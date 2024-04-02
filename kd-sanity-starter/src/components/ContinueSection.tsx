import DownArrow from '@public/downArrow.png';
import Image from 'next/image';

const ContinueSection = () => {
  return (
    <div className='loadMoreSection flex flex-col pt-[5%] pb-[5%] items-center w-screen h-[350px] bg-white'>
      <Image alt='travel' src={DownArrow} quality={100} width={100} height={100} />
      <h1 className='font-bold text-[28px]'>Learn More</h1>
      <p className='pt-[3%]'>
        View websites that I&apos;ve built and certificates that I have earned.
      </p>
    </div>
  );
};

export default ContinueSection;
