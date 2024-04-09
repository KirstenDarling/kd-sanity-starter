import SunIcon from '@public/sunIcon.svg';
import Image from 'next/image';

const NavBar6 = () => {
  return (
    <div className='z-[2] self-stretch p-2 justify-between items-center inline-flex'>
      <div className='grow shrink basis-0 h-[51px] px-2 py-4 bg-black rounded-[64px] justify-between items-center flex'>
        <div className='px-4 justify-center items-center gap-4 flex'>
          <div className='w-[65px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Open Sans'] leading-tight">
              Synopsis
            </div>
          </div>
          <div className='w-[85px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Open Sans'] leading-tight">
              Code Vault
            </div>
          </div>
          <div className='w-[85px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Open Sans'] leading-tight">
              Hackers
            </div>
          </div>
        </div>
        <div className='justify-center items-center gap-2 flex'>
          <div className='w-6 h-6 relative'>
            <Image alt='' src={SunIcon} />
          </div>
          <div className="text-neutral-100 text-base font-normal font-['Open Sans'] leading-normal">
            ShadowBytes
          </div>
        </div>
        <div className='px-4 justify-center items-center gap-4 flex'>
          <div className='w-[85px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Open Sans'] leading-tight">
              Manifesto
            </div>
          </div>
          <div className='w-[100px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Open Sans'] leading-tight">
              @darkpurplehack
            </div>
          </div>
          <div className='w-[100px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Open Sans'] leading-tight">
              Infiltrate Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar6;
