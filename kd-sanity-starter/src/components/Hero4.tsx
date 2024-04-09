import Hero4Image from '@public/hero4.png';
import Image from 'next/image';

const Hero4 = () => {
  return (
    <div className='mt-[-7%] self-stretch h-[832px] flex-col justify-center items-center gap-12 flex'>
      <Image className='z-[1] w-full h-[832px]' src={Hero4Image} alt='' />
      <div className='self-stretch h-[383.28px] px-12 rounded-2xl flex-col justify-center items-start flex'>
        <div className='absolute top-[30%] z-[2] self-stretch h-[343px] p-10 rounded-2xl flex-col justify-center items-start gap-8 flex'>
          <div className='self-stretch h-[177px] flex-col justify-center items-start gap-4 flex'>
            <div className="self-stretch text-zinc-900 text-[56px] font-normal font-['Fugaz One'] leading-[67.20px]">
              Revolutionize Your Study
            </div>
            <div className="self-stretch text-zinc-900 text-lg font-normal font-['Open Sans'] leading-[27px]">
              Join the digital study revolution
            </div>
          </div>
          <div className='self-stretch justify-start items-center gap-4 inline-flex'>
            <div className='grow shrink basis-0 h-[54px] px-6 py-4 bg-purple-500 rounded-lg justify-center items-center gap-1 flex'>
              <div className='px-1 justify-center items-center gap-2 flex'>
                <div className="text-center text-white text-sm font-normal font-['Open Sans'] leading-snug">
                  Sign Up Now
                </div>
              </div>
            </div>
            <div className='grow shrink basis-0 h-[54px] px-6 py-4 rounded-lg border border-gray-400 justify-center items-center gap-1 flex'>
              <div className='px-1 justify-center items-center gap-2 flex'>
                <div className="text-center text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
