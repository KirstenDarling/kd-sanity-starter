import Image, { StaticImageData } from 'next/image';

const FeaturedBullets = ({
  title,
  description,
  icon,
}: {
  title?: string;
  description?: string;
  icon: StaticImageData;
}) => {
  return (
    <div className='grow shrink basis-0 h-[79px] justify-start items-start gap-4 flex'>
      <div className='w-8 h-8 relative'>{icon && <Image src={icon} alt='' />}</div>
      <div className='w-[373.33px] h-[79px] grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
        <div className="self-stretch text-zinc-900 text-lg font-normal font-['Fira Sans'] leading-[27px]">
          {title}
        </div>
        <div className="self-stretch text-zinc-800 text-sm font-normal font-['Fira Sans'] leading-snug">
          {description}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBullets;
