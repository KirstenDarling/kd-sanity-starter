import Image from 'next/image';
import Nova2 from '../../public/Nova2.png';
import Nova3 from '../../public/Nova3.png';

const CardsSquare3 = () => {
  return (
    <div className='self-stretch h-[1110px] px-8 py-[120px] bg-black flex-col justify-center items-center gap-10 flex'>
      <div className='self-stretch h-[870px] flex-col justify-start items-start gap-4 flex'>
        <div className='self-stretch h-[102px] flex-col justify-start items-start gap-2 flex'>
          <div className="self-stretch text-neutral-100 text-[56px] font-normal font-['Fugaz One'] leading-[67.20px]">
            Neon Dreams Unveiled
          </div>
          <div className="self-stretch text-zinc-300 text-lg font-normal font-['Open Sans'] leading-[27px]">
            Immersive Reality Awaits
          </div>
        </div>
        <div className='self-stretch h-[752px] flex-col justify-start items-center gap-6 flex'>
          <div className='self-stretch justify-center items-start gap-6 inline-flex'>
            <div className='grow shrink basis-0 h-[364px] border border-gray-600 justify-start items-start flex'>
              <div className='grow shrink basis-0 h-[364px] p-8 bg-black flex-col justify-center items-start gap-6 inline-flex'>
                <div className='self-stretch h-[190px] flex-col justify-start items-start gap-4 flex'>
                  <div className="self-stretch text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                    Transcend Reality
                  </div>
                  <div className='self-stretch h-[152px] flex-col justify-start items-start gap-2 flex'>
                    <div className="self-stretch text-neutral-100 text-[28px] font-normal font-['Open Sans'] leading-[38.64px]">
                      Reshape the Metropolis Skyline
                    </div>
                    <div className="self-stretch text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
                      Urban revolution begins
                    </div>
                  </div>
                </div>
                <div className='self-stretch justify-start items-center gap-6 inline-flex'>
                  <div className='justify-center items-center gap-1 flex'>
                    <div className="text-center text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                      Embark the Hype
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[294px] h-[364px] relative opacity-10 bg-zinc-400' />
            </div>
            <div className='grow shrink basis-0 h-[364px] border border-gray-600 justify-start items-start flex'>
              <div className='grow shrink basis-0 h-[364px] p-8 bg-black flex-col justify-center items-start gap-6 inline-flex'>
                <div className='self-stretch h-[151px] flex-col justify-start items-start gap-4 flex'>
                  <div className="self-stretch text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                    Hack the System
                  </div>
                  <div className='self-stretch h-[113px] flex-col justify-start items-start gap-2 flex'>
                    <div className="self-stretch text-neutral-100 text-[28px] font-normal font-['Open Sans'] leading-[38.64px]">
                      Reimagine Cybernetic Life
                    </div>
                    <div className="self-stretch text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
                      AI rebellion starts now
                    </div>
                  </div>
                </div>
                <div className='self-stretch justify-start items-center gap-6 inline-flex'>
                  <div className='justify-center items-center gap-1 flex'>
                    <div className="text-center text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                      Lead the Change
                    </div>
                  </div>
                </div>
              </div>
              <Image className='w-[294px] h-[364px] relative' src={Nova2} alt='' />
            </div>
          </div>
          <div className='self-stretch border border-gray-600 justify-start items-start inline-flex'>
            <div className='grow shrink basis-0 h-[364px] p-8 bg-black flex-col justify-center items-start gap-6 inline-flex'>
              <div className='self-stretch h-28 flex-col justify-start items-start gap-4 flex'>
                <div className="self-stretch text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                  Rebel With Cause
                </div>
                <div className='self-stretch h-[74px] flex-col justify-start items-start gap-2 flex'>
                  <div className="self-stretch text-neutral-100 text-[28px] font-normal font-['Open Sans'] leading-[38.64px]">
                    Redefine Humanity&apos;s Fate
                  </div>
                  <div className="self-stretch text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
                    Cyber evolution awaits
                  </div>
                </div>
              </div>
              <div className='self-stretch justify-start items-center gap-6 inline-flex'>
                <div className='justify-center items-center gap-1 flex'>
                  <div className="text-center text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                    Seize the Future
                  </div>
                </div>
              </div>
            </div>
            <Image className='w-[600px] h-[364px] relative' src={Nova3} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSquare3;
