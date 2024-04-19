import Image, { StaticImageData } from 'next/image';
import MobilePreviewBullets from './MobilePreviewBullets';

const MobilePreviewSection = ({
  title,
  subtitle,
  bullets,
  mobileImage,
}: {
  title?: string;
  subtitle?: string;
  bullets: { title: string; subtitle: string; icon: StaticImageData }[];
  mobileImage: StaticImageData;
}) => {
  return (
    <div className='self-stretch h-[1125px] px-32 py-40 bg-black flex-col justify-center items-center gap-10 flex'>
      <div className='self-stretch h-[805px] flex-col justify-center items-center gap-10 flex'>
        <div className='self-stretch h-[101px] flex-col justify-start items-center gap-3 flex'>
          <div className="self-stretch text-center text-neutral-100 text-[56px] font-extrabold font-['Alegreya'] leading-[67.20px]">
            {title}
          </div>
          <div className="self-stretch text-center text-zinc-300 text-sm font-normal font-['Alegreya'] leading-snug">
            {subtitle}
          </div>
        </div>
        <div className='self-stretch justify-center items-center gap-10 inline-flex'>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex'>
            {bullets.map((bullet, index) => (
              <MobilePreviewBullets
                key={index}
                title={bullet.title}
                subtitle={bullet.subtitle}
                icon={bullet.icon}
              />
            ))}
          </div>
          <Image
            className='w-[358px] h-[682.67px] left-[-7.67px] top-[-9px] relative'
            src={mobileImage}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default MobilePreviewSection;
