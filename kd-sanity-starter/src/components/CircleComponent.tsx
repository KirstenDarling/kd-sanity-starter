import Image, { StaticImageData } from 'next/image';

const CircleComponent = ({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: StaticImageData;
}) => {
  return (
    <>
      <div className='w-[260px] flex-col justify-start items-center gap-4 inline-flex'>
        {image && <Image className='self-stretch h-64 rounded-[400px]' src={image} alt='' />}
        <div className='self-stretch h-[49px] flex-col justify-start items-center flex'>
          <div className="self-stretch text-center text-neutral-100 text-lg font-normal font-['Fira Sans'] leading-[27px]">
            {title}
          </div>
          <div className="self-stretch text-center text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
            {subtitle}
          </div>
        </div>
      </div>
    </>
  );
};

export default CircleComponent;
