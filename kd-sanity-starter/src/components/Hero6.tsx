import Image, { StaticImageData } from 'next/image';

const Hero6 = ({
  heading,
  subheading,
  buttonText,
  heroImage,
}: {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  heroImage: StaticImageData;
}) => {
  return (
    <div className='self-stretch bg-gray-100 justify-center items-center inline-flex'>
      <div className='grow shrink basis-0 px-12 py-[120px] flex-col justify-center items-center gap-8 inline-flex'>
        <div className='self-stretch h-[302px] flex-col justify-center items-start gap-10 flex'>
          <div className='self-stretch h-[203px] flex-col justify-center items-start gap-4 flex'>
            <div className="self-stretch text-zinc-900 text-7xl font-extrabold font-['Alegreya'] leading-[77.76px]">
              {heading}
            </div>
            <div className="self-stretch text-zinc-800 text-[22px] font-normal font-['Alegreya'] leading-[30.80px]">
              {subheading}
            </div>
          </div>
          <div className='self-stretch px-12 py-4 bg-purple-500 justify-center items-center gap-1 inline-flex'>
            <div className='px-1 justify-center items-center gap-2 flex'>
              <div className="text-center text-white text-lg font-normal font-['Alegreya'] leading-[27px]">
                {buttonText}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grow shrink basis-0 h-[725px] justify-center items-center gap-2 flex'>
        {heroImage && <Image className='grow shrink basis-0 self-stretch' src={heroImage} alt='' />}
      </div>
    </div>
  );
};

export default Hero6;
