import Image from 'next/image';
import HomeIcon from '../../public/homeIcon.svg';

const NavBar7 = () => {
  return (
    <div className='bg-black text-white self-stretch p-2 justify-between items-center inline-flex'>
      <div className='w-[102px] self-stretch pl-2 pr-4 bg-black rounded-lg justify-start items-center gap-1 flex'>
        <div className='w-6 h-6 relative'>
          <Image alt='' src={HomeIcon} />
        </div>
        <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
          DataWarp
        </div>
      </div>
      <div className='grow shrink basis-0 h-[43px] justify-end items-center gap-4 flex'>
        <div className='w-[427px] self-stretch rounded-lg justify-end items-center gap-3 flex'>
          <div className='w-[62px] self-stretch px-4 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
              Portal
            </div>
          </div>
          <div className='w-[73px] self-stretch px-4 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
              Insights
            </div>
          </div>
          <div className='w-[75px] self-stretch px-4 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
              Creators
            </div>
          </div>
          <div className='w-20 px-5 py-3 bg-black rounded border border-neutral-100 justify-center items-center gap-1 flex'>
            <div className='px-1 justify-center items-center gap-2 flex'>
              <div className="text-center text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
                Access
              </div>
            </div>
          </div>
          <div className='px-5 py-3 bg-purple-500 rounded justify-center items-center gap-1 flex'>
            <div className='px-1 justify-center items-center gap-2 flex'>
              <div className="text-center text-white text-xs font-normal font-['Alegreya'] leading-tight">
                Register
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar7;
