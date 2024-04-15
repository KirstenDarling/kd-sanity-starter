import Image, { StaticImageData } from 'next/image';

const CardsRectangle = ({
  image,
  eyebrowHeading,
  heading,
  text,
}: {
  image: StaticImageData;
  eyebrowHeading?: string;
  heading?: string;
  text?: string;
}) => {
  return (
    <div className='grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex'>
      <Image className='self-stretch h-56 rounded-[32px]' src={image} alt='' />
      <div className='self-stretch h-[106px] flex-col justify-center items-center gap-2 flex'>
        <div className="self-stretch text-center text-fuchsia-400 text-xs font-normal font-['Work Sans'] leading-tight">
          {eyebrowHeading}
        </div>
        <div className="self-stretch text-center text-orange-200 text-[22px] font-normal font-['Work Sans'] leading-7">
          {heading}
        </div>
        <div className="self-stretch text-center text-amber-300 text-sm font-normal font-['Work Sans'] leading-[21px]">
          {text}
        </div>
      </div>
    </div>
  );
};

export default CardsRectangle;
