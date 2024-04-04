import EscapeBanner from '@/components/EscapeBanner';
import Image from 'next/image';
import ConstructionImage from '../../../public/undraw_building_websites.svg';

export default function Home() {
  return (
    <div className='w-full h-[100vh] bg-[lightblue]'>
      <EscapeBanner pageType='creative' />
      <Image
        src={ConstructionImage}
        height={500}
        width={500}
        alt=''
        className='ml-[auto] mr-[auto] pt-[10%]'
      />
      <h1 className='text-[36px] font-bold text-center pt-[5%] text-[#6B63FF]'>
        Under Construction - Coming Soon!
      </h1>
    </div>
  );
}
