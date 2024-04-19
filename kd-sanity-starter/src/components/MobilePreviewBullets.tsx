import Image, { StaticImageData } from 'next/image';

const MobilePreviewBullets = ({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: StaticImageData;
}) => {
  return (
    <div className='self-stretch justify-start items-start gap-4 inline-flex'>
      <div className='w-8 h-8 relative'>
        <Image alt='' src={icon} />
      </div>
      <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
        <div className="self-stretch text-neutral-100 text-lg font-normal font-['Alegreya'] leading-[27px]">
          {title}
        </div>
        <div className="self-stretch text-zinc-300 text-sm font-normal font-['Alegreya'] leading-snug">
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default MobilePreviewBullets;
