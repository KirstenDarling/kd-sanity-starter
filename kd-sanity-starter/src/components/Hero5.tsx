import Image, { StaticImageData } from 'next/image';

const Hero5 = ({
  heading,
  subheading,
  buttonOneText,
  buttonTwoText,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
}: {
  heading?: string;
  subheading?: string;
  buttonOneText?: string;
  buttonTwoText?: string;
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  image4: StaticImageData;
  image5: StaticImageData;
  image6: StaticImageData;
}) => {
  return (
    <div className='self-stretch px-6 bg-gray-800 justify-center items-start gap-20 inline-flex'>
      <div className='grow shrink basis-0 h-[900px] justify-center items-start gap-8 flex'>
        <div className='grow shrink basis-0 self-stretch flex-col justify-center items-center gap-6 inline-flex'>
          <div className='h-[406px] flex-col justify-center items-start gap-10 flex'>
            <div className='self-stretch h-[312px] flex-col justify-start items-start gap-6 flex'>
              <div className="self-stretch text-zinc-100 text-7xl font-black font-['Playfair Display'] leading-[77.76px]">
                {heading}
              </div>
              <div className="self-stretch text-white text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
                {subheading}
              </div>
            </div>
            <div className='justify-start items-center gap-4 inline-flex'>
              <div className='px-6 py-4 bg-teal-600 rounded-lg justify-center items-center gap-1 flex'>
                <div className='px-1 justify-center items-center gap-2 flex'>
                  <div className="text-center text-white text-sm font-normal font-['Source Sans Pro'] leading-snug">
                    {buttonOneText}
                  </div>
                </div>
              </div>
              <div className='px-6 py-4 rounded-lg border border-gray-500 justify-center items-center gap-1 flex'>
                <div className='px-1 justify-center items-center gap-2 flex'>
                  <div className="text-center text-zinc-100 text-sm font-normal font-['Source Sans Pro'] leading-snug">
                    {buttonTwoText}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grow shrink basis-0 self-stretch justify-start items-start gap-4 flex'>
          <div className='w-[280.77px] flex-col justify-start items-start gap-4 inline-flex'>
            {image1 && <Image className='self-stretch  rounded-2xl' src={image1} alt='' />}
            {image3 && <Image className='self-stretch  rounded-2xl' src={image3} alt='' />}
            {image5 && <Image className='self-stretch  rounded-2xl' src={image5} alt='' />}
          </div>
          <div className='w-[280.77px] flex-col justify-start items-start gap-4 inline-flex'>
            {image2 && <Image className='self-stretch  rounded-2xl' src={image2} alt='' />}
            {image4 && <Image className='self-stretch  rounded-2xl' src={image4} alt='' />}
            {image6 && <Image className='self-stretch  rounded-2xl' src={image6} alt='' />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero5;
