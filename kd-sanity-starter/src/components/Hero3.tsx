import Image, { StaticImageData } from 'next/image';

const Hero3 = ({
  heading,
  subheading,
  buttonText,
  image,
}: {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  image: StaticImageData;
}) => {
  return (
    <div className='self-stretch px-6 pt-[104px] pb-16 bg-black justify-center items-start gap-12 inline-flex'>
      <div className='grow shrink basis-0 h-[704px] justify-center items-center gap-12 flex'>
        <div className='grow shrink basis-0 flex-col justify-center items-start gap-10 inline-flex'>
          <div className='self-stretch h-[281px] flex-col justify-center items-start gap-4 flex'>
            <div className="self-stretch text-neutral-100 text-7xl font-normal font-['Fugaz One'] leading-[77.76px]">
              {heading}
            </div>
            <div className="self-stretch text-zinc-300 text-[22px] font-normal font-['Open Sans'] leading-[30.80px]">
              {subheading}
            </div>
          </div>
          <div className='self-stretch px-12 py-4 bg-purple-500 justify-center items-center gap-1 inline-flex'>
            <div className='px-1 justify-center items-center gap-2 flex'>
              <div className="text-center text-white text-lg font-normal font-['Open Sans'] leading-[27px]">
                {buttonText}
              </div>
            </div>
          </div>
        </div>
        <div className='grow shrink basis-0 h-[704px] justify-center items-center gap-2 flex'>
          {image && <Image className='grow shrink basis-0 self-stretch' src={image} alt='' />}
        </div>
      </div>
    </div>
  );
};

export default Hero3;
