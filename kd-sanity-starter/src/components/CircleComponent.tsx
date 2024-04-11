import Image, { StaticImageData } from 'next/image';
import CircleOne from '../../public/oneCircleOne.png';
import CircleThree from '../../public/oneCircleThree.png';
import CircleTwo from '../../public/oneCircleTwo.png';

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
        <Image className='self-stretch h-64 rounded-[400px]' src={CircleOne} alt='' />
        <div className='self-stretch h-[49px] flex-col justify-start items-center flex'>
          <div className="self-stretch text-center text-neutral-100 text-lg font-normal font-['Fira Sans'] leading-[27px]">
            Alexa Rydell
          </div>
          <div className="self-stretch text-center text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
            Chief Innovation Officer
          </div>
        </div>
      </div>
      {circles.map((circle, index) => (
        <CircleComponent
          key={index}
          title={circle.title}
          subtitle={circle.subtitle}
          image={circle.image}
        />
      ))}
      <div className='w-[260px] flex-col justify-start items-center gap-4 inline-flex'>
        <Image className='self-stretch h-64 rounded-[400px]' src={CircleTwo} alt='' />
        <div className='self-stretch h-[49px] flex-col justify-start items-center flex'>
          <div className="self-stretch text-center text-neutral-100 text-lg font-normal font-['Fira Sans'] leading-[27px]">
            Marco Chen
          </div>
          <div className="self-stretch text-center text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
            Lead Urban Architect
          </div>
        </div>
      </div>
      <div className='w-[260px] flex-col justify-start items-center gap-4 inline-flex'>
        <Image className='self-stretch h-64 rounded-[400px]' src={CircleThree} alt='' />
        <div className='self-stretch h-[49px] flex-col justify-start items-center flex'>
          <div className="self-stretch text-center text-neutral-100 text-lg font-normal font-['Fira Sans'] leading-[27px]">
            Samira Khan
          </div>
          <div className="self-stretch text-center text-zinc-300 text-sm font-normal font-['Fira Sans'] leading-snug">
            Head of Data Science
          </div>
        </div>
      </div>
    </>
  );
};

export default CircleComponent;
