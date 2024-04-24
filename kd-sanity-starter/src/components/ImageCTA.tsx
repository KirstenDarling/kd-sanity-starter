import Image, { StaticImageData } from 'next/image';

const ImageCTA = ({
  heading,
  subheading,
  CTAText,
  image,
}: {
  heading?: string;
  subheading?: string;
  CTAText?: string;
  image: StaticImageData;
}) => {
  return (
    <div className='self-stretch bg-rose-500 justify-center items-start inline-flex'>
      <Image className='max-w-[640px] grow shrink basis-0 h-[803px] py-12' src={image} alt='' />
      <div className='grow shrink basis-0 h-[803px] px-[5%] py-20 justify-center items-center gap-2 flex'>
        <div className='grow shrink basis-0 bg-rose-500 rounded-[32px] flex-col justify-center items-start gap-8 inline-flex'>
          <div className='self-stretch h-[102px] flex-col justify-center items-start gap-4 flex'>
            <div className="self-stretch text-orange-200 text-[51px] font-bold font-['Syne'] leading-[61.20px]">
              {heading}
            </div>
            <div className="self-stretch text-amber-300 text-lg font-normal font-['Work Sans'] leading-[25.20px]">
              {subheading}
            </div>
          </div>
          <div className='max-w-[360px] self-stretch px-12 py-4 bg-fuchsia-700 rounded-lg justify-center items-center gap-1 inline-flex'>
            <div className='px-1 justify-center items-center gap-2 flex'>
              <div className="text-center text-orange-200 text-lg font-normal font-['Work Sans'] leading-[25.20px]">
                {CTAText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCTA;
