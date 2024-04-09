import NeonThriveStackIcon from '@public/NeonThriveStackIcon.svg';
import Image from 'next/image';

const NavBar3 = () => {
  return (
    <div className='w-full bg-black h-[67px] p-2 justify-between items-center inline-flex'>
      <div className='grow shrink basis-0 h-[51px] px-2 py-4 bg-gray-100 rounded-[64px] justify-between items-center flex'>
        <div className='px-4 justify-center items-center gap-4 flex'>
          <div className='w-[50px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-zinc-900 text-xs font-normal font-['Open Sans'] leading-tight">
              Portal
            </div>
          </div>
          <div className='w-[65px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-zinc-900 text-xs font-normal font-['Open Sans'] leading-tight">
              Dystopia
            </div>
          </div>
          <div className='w-[45px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-zinc-900 text-xs font-normal font-['Open Sans'] leading-tight">
              Crew
            </div>
          </div>
        </div>
        <div className='justify-center items-center gap-2 flex'>
          <div className='w-6 h-6 relative'>
            <Image alt='' src={NeonThriveStackIcon} />
          </div>
          <div className="text-zinc-900 text-base font-normal font-['Open Sans'] leading-normal">
            Neon Thrive
          </div>
        </div>
        <div className='px-4 justify-center items-center gap-4 flex'>
          <div className='w-[72px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-zinc-900 text-xs font-normal font-['Open Sans'] leading-tight">
              Manifesto
            </div>
          </div>
          <div className='w-[88px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-zinc-900 text-xs font-normal font-['Open Sans'] leading-tight">
              @cyberpulse
            </div>
          </div>
          <div className='w-[63px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-zinc-900 text-xs font-normal font-['Open Sans'] leading-tight">
              Connect
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar3;
