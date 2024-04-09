import Image from 'next/image';
import LummiGroup1Image from '../../public/ImageLummiGroup1.png';
import LummiGroup2Image from '../../public/ImageLummiGroup2.png';
import LummiGroup3Image from '../../public/ImageLummiGroup3.png';

const CardRow2 = () => {
  return (
    <div className='self-stretch h-[812px] px-4 py-40 bg-rose-500 flex-col justify-center items-center gap-10 flex'>
      <div className='self-stretch h-[106px] flex-col justify-center items-center gap-10 flex'>
        <div className='self-stretch h-[106px] flex-col justify-center items-start gap-4 flex'>
          <div className="self-stretch text-center text-orange-200 text-[51px] font-bold font-['Syne'] leading-[61.20px]">
            Making Magic Happen
          </div>
          <div className="self-stretch text-center text-amber-300 text-[22px] font-normal font-['Work Sans'] leading-7">
            A snapshot of my development process.
          </div>
        </div>
      </div>
      <div className='self-stretch justify-center items-start gap-10 inline-flex'>
        <div className='grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex'>
          <Image className='self-stretch h-56 rounded-[32px]' src={LummiGroup1Image} alt='' />
          <div className='self-stretch h-[106px] flex-col justify-center items-center gap-2 flex'>
            <div className="self-stretch text-center text-fuchsia-400 text-xs font-normal font-['Work Sans'] leading-tight">
              Step 1
            </div>
            <div className="self-stretch text-center text-orange-200 text-[22px] font-normal font-['Work Sans'] leading-7">
              Ideation Phase
            </div>
            <div className="self-stretch text-center text-amber-300 text-sm font-normal font-['Work Sans'] leading-[21px]">
              Conceptualizing the user experience with a touch of whimsy and technical prowess.
            </div>
          </div>
        </div>
        <div className='grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex'>
          <Image className='self-stretch h-56 rounded-[32px]' src={LummiGroup2Image} alt='' />
          <div className='self-stretch h-[106px] flex-col justify-center items-center gap-2 flex'>
            <div className="self-stretch text-center text-fuchsia-400 text-xs font-normal font-['Work Sans'] leading-tight">
              Step 2
            </div>
            <div className="self-stretch text-center text-orange-200 text-[22px] font-normal font-['Work Sans'] leading-7">
              Code in Action
            </div>
            <div className="self-stretch text-center text-amber-300 text-sm font-normal font-['Work Sans'] leading-[21px]">
              Breathing life into ideas with elegant algorithms and swift keystrokes.
            </div>
          </div>
        </div>
        <div className='grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex'>
          <Image className='self-stretch h-56 rounded-[32px]' src={LummiGroup3Image} alt='' />
          <div className='self-stretch h-[106px] flex-col justify-center items-center gap-2 flex'>
            <div className="self-stretch text-center text-fuchsia-400 text-xs font-normal font-['Work Sans'] leading-tight">
              Step 3
            </div>
            <div className="self-stretch text-center text-orange-200 text-[22px] font-normal font-['Work Sans'] leading-7">
              Final Touches
            </div>
            <div className="self-stretch text-center text-amber-300 text-sm font-normal font-['Work Sans'] leading-[21px]">
              Polishing features to ensure a delightful and bug-free user journey.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRow2;
