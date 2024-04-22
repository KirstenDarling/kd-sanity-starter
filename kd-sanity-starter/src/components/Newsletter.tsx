import { StaticImageData } from 'next/image';

const Newsletter = ({
  title,
  subtitle,
  buttonOptionOneText,
  inputLabel,
  input,
  buttonOptionTwoText,
  legalText,
  image,
  backgroundImage,
}: {
  title?: string;
  subtitle?: string;
  buttonOptionOneText?: string;
  inputLabel?: string;
  input?: string;
  buttonOptionTwoText?: string;
  legalText?: string;
  image: 1 | 2;
  backgroundImage?: StaticImageData;
}) => {
  return (
    <div
      className={`  self-stretch h-[686px] px-4 py-[120px] flex-col justify-center items-center flex`}
    >
      <div className='self-stretch h-[446px] max-w-[480px] m-[auto] p-8 bg-black flex-col justify-center items-center gap-4 flex'>
        <div className='self-stretch h-[82px] flex-col justify-center items-center gap-2 flex'>
          <div className="self-stretch text-center text-neutral-100 text-4xl font-extrabold font-['Alegreya'] leading-[46.80px]">
            {title}
          </div>
          <div className="self-stretch text-center text-zinc-300 text-lg font-normal font-['Alegreya'] leading-[27px]">
            {subtitle}
          </div>
        </div>
        <div className='self-stretch px-2 py-4 bg-gray-800 border border-gray-600 justify-center items-center gap-3 inline-flex'>
          <div className='w-6 h-6 relative'></div>
          <div className="text-center text-neutral-100 text-sm font-normal font-['Alegreya'] leading-snug">
            {buttonOptionOneText}
          </div>
        </div>
        <div className='self-stretch justify-center items-center gap-6 inline-flex'>
          <div className='w-[178.50px] h-px relative bg-gray-600'></div>
          <div className="text-center text-zinc-300 text-xs font-normal font-['Alegreya'] leading-tight">
            or
          </div>
          <div className='w-[178.50px] h-px relative bg-gray-600'></div>
        </div>
        <div className='self-stretch h-[142px] flex-col justify-start items-center gap-2 flex'>
          <div className='self-stretch h-20 flex-col justify-center items-start gap-1 flex'>
            <div className="self-stretch text-neutral-100 text-sm font-normal font-['Alegreya'] leading-snug">
              {inputLabel}
            </div>
            <div className='self-stretch p-4 bg-black rounded border border-gray-600 justify-start items-center gap-1 inline-flex'>
              <div className='grow shrink basis-0 h-[22px] px-1 justify-start items-center gap-2 flex'>
                <div className="text-zinc-300 text-sm font-normal font-['Alegreya'] leading-snug">
                  {input}
                </div>
              </div>
            </div>
          </div>
          <div className='self-stretch px-6 py-4 bg-purple-500 justify-center items-center gap-1 inline-flex'>
            <div className='grow shrink basis-0 h-[22px] px-1 justify-center items-center gap-2 flex'>
              <div className="grow shrink basis-0 text-center text-white text-sm font-normal font-['Alegreya'] leading-snug">
                {buttonOptionTwoText}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch text-center text-zinc-300 text-xs font-normal font-['Alegreya'] leading-tight">
          {legalText}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
