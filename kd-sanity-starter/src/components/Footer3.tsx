import RightArrowIcon from '@public/rightArrowIcon.svg';
import Image from 'next/image';

const Footer3 = () => {
  return (
    <div className='self-stretch h-[290px] px-8 py-16 bg-black flex-col justify-start items-start gap-8 flex'>
      <div className='self-stretch justify-start items-start gap-10 inline-flex'>
        <div className='grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex'>
          <div className="text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
            Subculture
          </div>
          <div className="text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
            Manifesto
          </div>
          <div className="text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
            Join Us
          </div>
          <div className="text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
            Feed
          </div>
        </div>
        <div className='grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex'>
          <div className="text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
            Highlights
          </div>
          <div className="text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
            Quantum Leap
          </div>
          <div className="text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
            Tech Waves
          </div>
          <div className="text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
            Feed
          </div>
        </div>
        <div className='grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex'>
          <div className="text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
            Signals
          </div>
          <div className="text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
            @neonpulse
          </div>
          <div className="text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
            @cyberpulse
          </div>
          <div className="text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
            Circuits
          </div>
        </div>
        <div className='flex-col justify-start items-start gap-4 inline-flex'>
          <div className='self-stretch h-[57px] flex-col justify-start items-start gap-2 flex'>
            <div className="self-stretch text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
              Monthly Manifest
            </div>
            <div className="self-stretch text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
              Get tips for hacking the mainframe
            </div>
          </div>
          <div className='justify-center items-center inline-flex'>
            <div className='w-[243px] flex-col justify-center items-start gap-1 inline-flex'>
              <div className='self-stretch p-4 bg-black border border-gray-600 justify-start items-center gap-1 inline-flex'>
                <div className='grow shrink basis-0 h-[22px] px-1 justify-start items-center gap-2 flex'>
                  <div className="text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
                    user@neonpulse.net
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[53px] h-[53px] p-4 bg-purple-500 justify-center items-center gap-1 flex'>
              <div className='w-6 h-6 relative'>
                <Image alt='' src={RightArrowIcon} />
              </div>
            </div>
          </div>
          <div className='justify-start items-start gap-4 inline-flex'>
            <div className="text-zinc-300 text-xs font-normal font-['Open Sans'] leading-tight">
              Protocol
            </div>
            <div className="text-zinc-300 text-xs font-normal font-['Open Sans'] leading-tight">
              Anonymity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer3;
