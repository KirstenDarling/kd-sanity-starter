import Image, { StaticImageData } from 'next/image';

const Hero7 = ({
  heading,
  subheading,
  buttonOneText,
  buttonTwoText,
  heroImage,
}: {
  heading?: string;
  subheading?: string;
  buttonOneText?: string;
  buttonTwoText?: string;
  heroImage?: StaticImageData;
}) => {
  return (
    <div className='self-stretch px-4 pt-[152px] pb-[104px] bg-black justify-center items-center inline-flex'>
      <div className='grow shrink basis-0 h-[544.97px] justify-center items-center flex'>
        <div className='grow shrink basis-0 h-[528px] rounded-2xl flex-col justify-center items-center gap-8 inline-flex'>
          <div className='self-stretch h-[297px] flex-col justify-center items-start gap-10 flex'>
            <div className='self-stretch h-[203px] flex-col justify-center items-start gap-4 flex'>
              <div className="self-stretch text-neutral-100 text-7xl font-extrabold font-['Alegreya'] leading-[77.76px]">
                {heading}
              </div>
              <div className="self-stretch text-zinc-300 text-[22px] font-normal font-['Alegreya'] leading-[30.80px]">
                {subheading}
              </div>
            </div>
            <div className='self-stretch justify-start items-center gap-4 inline-flex'>
              <div className='grow shrink basis-0 h-[54px] px-6 py-4 bg-purple-500 rounded justify-center items-center gap-1 flex'>
                <div className='px-1 justify-center items-center gap-2 flex'>
                  <div className="text-center text-white text-sm font-normal font-['Alegreya'] leading-snug">
                    {buttonOneText}
                  </div>
                </div>
              </div>
              <div className='grow shrink basis-0 h-[54px] px-6 py-4 rounded border border-gray-400 justify-center items-center gap-1 flex'>
                <div className='px-1 justify-center items-center gap-2 flex'>
                  <div className="text-center text-neutral-100 text-sm font-normal font-['Alegreya'] leading-snug">
                    {buttonTwoText}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex'>
          {heroImage && <Image alt='' src={heroImage} />}
        </div>
      </div>
    </div>
  );
};

export default Hero7;
