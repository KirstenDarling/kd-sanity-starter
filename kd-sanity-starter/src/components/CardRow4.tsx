import Image1 from '@public/fourCard1.png';
import Image2 from '@public/fourCard2.png';
import Image3 from '@public/fourCard3.png';
import Image4 from '@public/fourCard4.png';
import Image5 from '@public/fourCard5.png';
import Image6 from '@public/fourCard6.png';
import Image from 'next/image';

const CardRow4 = () => {
  return (
    <div className='self-stretch h-[1095px] px-4 py-40 bg-black flex-col justify-center items-center gap-10 flex'>
      <div className='self-stretch h-[101px] flex-col justify-start items-center gap-3 flex'>
        <div className="self-stretch text-center text-neutral-100 text-[56px] font-normal font-['Fugaz One'] leading-[67.20px]">
          Comfort & Convenience
        </div>
        <div className="self-stretch text-center text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
          Study in the comfort of cyber space.
        </div>
      </div>
      <div className='flex flex-wrap self-stretch justify-center items-start gap-10 inline-flex'>
        <div className='min-w-[340px] grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex'>
          <Image className='self-stretch h-56 rounded-[32px]' alt='' src={Image1} />
          <div className='self-stretch h-[57px] flex-col justify-center items-center gap-2 flex'>
            <div className="self-stretch text-center text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
              24/7 Access
            </div>
            <div className="self-stretch text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
              Study at any hour, day or night.
            </div>
          </div>
        </div>
        <div className='min-w-[340px] grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex'>
          <Image className='self-stretch h-56 rounded-[32px]' alt='' src={Image2} />
          <div className='self-stretch h-[57px] flex-col justify-center items-center gap-2 flex'>
            <div className="self-stretch text-center text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
              Expert Support
            </div>
            <div className="self-stretch text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
              Guidance from online study experts.
            </div>
          </div>
        </div>
        <div className='min-w-[340px] grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex'>
          <Image className='self-stretch h-56 rounded-[32px]' alt='' src={Image3} />
          <div className='self-stretch h-[57px] flex-col justify-center items-center gap-2 flex'>
            <div className="self-stretch text-center text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
              Global Community
            </div>
            <div className="self-stretch text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
              Connect with learners worldwide.
            </div>
          </div>
        </div>
        <div className='min-w-[340px] grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex'>
          <Image className='self-stretch h-56 rounded-[32px]' alt='' src={Image4} />
          <div className='self-stretch h-[57px] flex-col justify-center items-center gap-2 flex'>
            <div className="self-stretch text-center text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
              Customizable Spaces
            </div>
            <div className="self-stretch text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
              Create the perfect study environment.
            </div>
          </div>
        </div>
        <div className='min-w-[340px] grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex'>
          <Image className='self-stretch h-56 rounded-[32px]' alt='' src={Image5} />
          <div className='self-stretch h-[57px] flex-col justify-center items-center gap-2 flex'>
            <div className="self-stretch text-center text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
              Tech-Enabled
            </div>
            <div className="self-stretch text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
              Advanced tools at your fingertips.
            </div>
          </div>
        </div>
        <div className='min-w-[340px] grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex'>
          <Image className='self-stretch h-56 rounded-[32px]' alt='' src={Image6} />
          <div className='self-stretch h-[57px] flex-col justify-center items-center gap-2 flex'>
            <div className="self-stretch text-center text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
              Interactive Sessions
            </div>
            <div className="self-stretch text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
              Engage in live knowledge exchanges.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRow4;
