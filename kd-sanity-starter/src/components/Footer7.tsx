import Image from 'next/image';
import HeartIcon from '../../public/heartIcon.svg';

const Footer7 = () => {
  return (
    <div className='self-stretch px-8 py-16 bg-gray-100 justify-between items-start inline-flex'>
      <div className='grow shrink basis-0 h-[136px] justify-between items-start flex'>
        <div className='grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex'>
          <div className='justify-center items-center gap-2 inline-flex'>
            <div className='w-8 h-8 relative'>
              <Image alt='' src={HeartIcon} />
            </div>
            <div className="text-zinc-900 text-sm font-normal font-['Alegreya'] leading-snug">
              DataWarp
            </div>
          </div>
          <div className="text-zinc-900 text-lg font-normal font-['Alegreya'] leading-[27px]">
            Empower your data journey
          </div>
        </div>
        <div className='grow shrink basis-0 h-[136px] justify-end items-start gap-10 flex'>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex'>
            <div className="text-zinc-900 text-sm font-normal font-['Alegreya'] leading-snug">
              Social
            </div>
            <div className="text-zinc-900 text-sm font-normal font-['Alegreya'] leading-snug">
              Twitter
            </div>
            <div className="text-zinc-900 text-sm font-normal font-['Alegreya'] leading-snug">
              Instagram
            </div>
            <div className="text-zinc-900 text-sm font-normal font-['Alegreya'] leading-snug">
              Threads
            </div>
          </div>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex'>
            <div className="text-zinc-900 text-sm font-normal font-['Alegreya'] leading-snug">
              Legal
            </div>
            <div className="text-zinc-900 text-sm font-normal font-['Alegreya'] leading-snug">
              Terms
            </div>
            <div className="text-zinc-900 text-sm font-normal font-['Alegreya'] leading-snug">
              Privacy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer7;
