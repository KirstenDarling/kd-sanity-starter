import Image, { StaticImageData } from 'next/image';

const TextBanner = ({
  heading,
  subheading,
  image,
  withBackground = true,
}: {
  heading?: string;
  subheading?: string;
  image?: StaticImageData;
  withBackground?: boolean;
}) => {
  return (
    <div className='w-full h-full relative'>
      {withBackground && image && (
        <Image
          alt=''
          src={image}
          className='z-[3]'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
        />
      )}
      <div
        className={`absolute top-0 z-[5] text-center h-[563px] w-full self-stretch px-4 py-[184px] justify-center items-center gap-12 inline-flex ${
          withBackground ? 'bg-black bg-opacity-20' : 'bg-black text-black'
        }`}
      >
        <div className='grow shrink basis-0 flex-col justify-start items-center gap-2 inline-flex'>
          <div className="self-stretch text-center text-neutral-50 text-7xl font-extrabold font-['Alegreya'] leading-[77.76px]">
            {heading}
          </div>
          <div className="self-stretch text-center text-neutral-50 text-[22px] font-normal font-['Alegreya'] leading-[30.80px]">
            {subheading}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBanner;
