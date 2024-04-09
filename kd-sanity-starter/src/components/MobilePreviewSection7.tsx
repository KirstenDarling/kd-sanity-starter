import Image from 'next/image';
import MobileMockup7 from '../../public/MobileMockup7.png';
import MessageIcon from '../../public/messageIcon.svg';

const MobilePreviewSection7 = () => {
  return (
    <div className='self-stretch h-[1125px] px-32 py-40 bg-black flex-col justify-center items-center gap-10 flex'>
      <div className='self-stretch h-[805px] flex-col justify-center items-center gap-10 flex'>
        <div className='self-stretch h-[101px] flex-col justify-start items-center gap-3 flex'>
          <div className="self-stretch text-center text-neutral-100 text-[56px] font-extrabold font-['Alegreya'] leading-[67.20px]">
            Advanced Analytics
          </div>
          <div className="self-stretch text-center text-zinc-300 text-sm font-normal font-['Alegreya'] leading-snug">
            Leverage insights effectively.
          </div>
        </div>
        <div className='self-stretch justify-center items-center gap-10 inline-flex'>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex'>
            <div className='self-stretch justify-start items-start gap-4 inline-flex'>
              <div className='w-8 h-8 relative'>
                <Image alt='' src={MessageIcon} />
              </div>
              <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
                <div className="self-stretch text-neutral-100 text-lg font-normal font-['Alegreya'] leading-[27px]">
                  Real-time Processing
                </div>
                <div className="self-stretch text-zinc-300 text-sm font-normal font-['Alegreya'] leading-snug">
                  Ultra-fast computation and analysis.
                </div>
              </div>
            </div>
            <div className='self-stretch justify-start items-start gap-4 inline-flex'>
              <div className='w-8 h-8 relative'>
                <Image alt='' src={MessageIcon} />
              </div>
              <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
                <div className="self-stretch text-neutral-100 text-lg font-normal font-['Alegreya'] leading-[27px]">
                  Scalable Infrastructure
                </div>
                <div className="self-stretch text-zinc-300 text-sm font-normal font-['Alegreya'] leading-snug">
                  Adaptable to growing data needs.
                </div>
              </div>
            </div>
            <div className='self-stretch justify-start items-start gap-4 inline-flex'>
              <div className='w-8 h-8 relative'>
                <Image alt='' src={MessageIcon} />
              </div>
              <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
                <div className="self-stretch text-neutral-100 text-lg font-normal font-['Alegreya'] leading-[27px]">
                  Secure Cloud Storage
                </div>
                <div className="self-stretch text-zinc-300 text-sm font-normal font-['Alegreya'] leading-snug">
                  Protecting your data at all costs.
                </div>
              </div>
            </div>
          </div>
          <Image
            className='w-[358px] h-[682.67px] left-[-7.67px] top-[-9px] relative'
            src={MobileMockup7}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default MobilePreviewSection7;
