import Image from 'next/image';
import HeartIcon from '../../public/heartIcon.svg';

const FooterFlat2 = () => {
  const footerLinks = [
    { title: 'Start', URL: 'https://www.google.com' },
    { title: 'Profile', URL: 'https://www.google.com' },
    { title: 'Collaborators', URL: 'https://www.google.com' },
  ];
  return (
    <div className='self-stretch h-[187px] px-8 py-16 bg-gray-800 flex-col justify-start items-start gap-8 flex'>
      <div className='self-stretch justify-between items-center inline-flex'>
        <div className='flex-col justify-center items-start gap-2 inline-flex'>
          <div className='justify-center items-center gap-2 inline-flex'>
            <div className='w-8 h-8 relative'>
              <Image alt='' src={HeartIcon} />
            </div>
            <div className="text-zinc-100 text-sm font-normal font-['Source Sans Pro'] leading-snug">
              Data Arcana
            </div>
          </div>
          <div className="text-white text-xs font-normal font-['Source Sans Pro'] leading-tight">
            All rights reserved 2025
          </div>
        </div>
        <div className='justify-start items-center gap-8 flex'>
          <div className="text-zinc-100 text-sm font-normal font-['Source Sans Pro'] leading-snug">
            @DataArcana
          </div>
          <div className="text-zinc-100 text-sm font-normal font-['Source Sans Pro'] leading-snug">
            @DataArcana
          </div>
          <div className="text-white text-sm font-normal font-['Source Sans Pro'] leading-snug">
            @DataArcana
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterFlat2;
