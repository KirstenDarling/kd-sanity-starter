import Image from 'next/image';
import DropdownIcon from '../../public/dropdownIcon.svg';
import WinkIcon from '../../public/winkIcon.svg';

const NavBar5 = () => {
  return (
    <div className='z-[2] self-stretch p-2 bg-gray-800 justify-between items-center inline-flex'>
      <div className='px-2 justify-start items-center gap-2 flex'>
        <div className='w-6 h-6 relative'>
          <Image alt='' src={WinkIcon} />
        </div>
        <div className="text-zinc-100 text-base font-normal font-['Source Sans Pro'] leading-normal">
          Data Arcana
        </div>
      </div>
      <div className='grow shrink basis-0 self-stretch p-2 bg-gray-800 rounded-lg border border-slate-600 justify-start items-center gap-1 flex'>
        <div className='grow shrink basis-0 h-[21px] px-1 justify-start items-center gap-2 flex'>
          <div className="text-white text-sm font-normal font-['Inter'] leading-[21px]">
            Explore
          </div>
        </div>
      </div>
      <div className='justify-end items-center gap-3 flex'>
        <div className='w-[79px] self-stretch px-4 justify-start items-center gap-2 flex'>
          <div className="text-zinc-100 text-xs font-normal font-['Source Sans Pro'] leading-tight">
            Skills
          </div>
          <div className='w-3 h-3 relative'>
            <Image alt='' src={DropdownIcon} />
          </div>
        </div>
        <div className='px-5 py-3 bg-teal-600 rounded-lg justify-center items-center gap-1 flex'>
          <div className='px-1 justify-center items-center gap-2 flex'>
            <div className="text-center text-white text-xs font-normal font-['Source Sans Pro'] leading-tight">
              Join Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar5;
