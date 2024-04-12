import { StaticImageData } from 'next/image';
import CircleComponent from './CircleComponent';

const CardRowCircles1 = ({
  heading,
  subheading,
  circles,
}: {
  heading: string;
  subheading: string;
  circles: { title: string; subtitle: string; image: StaticImageData }[];
}) => {
  return (
    <div className='self-stretch h-[763px] px-4 py-36 bg-black flex-col justify-center items-center gap-10 flex'>
      <div className='self-stretch h-[114px] flex-col justify-center items-center gap-10 flex'>
        <div className='self-stretch h-[114px] flex-col justify-center items-start gap-4 flex'>
          <div className="self-stretch text-center text-neutral-100 text-[56px] font-extrabold font-['Playfair Display'] leading-[67.20px]">
            {heading}
          </div>
          <div className="self-stretch text-center text-zinc-300 text-[22px] font-normal font-['Fira Sans'] leading-[30.80px]">
            {subheading}
          </div>
        </div>
      </div>
      <div className='self-stretch justify-center items-start gap-8 inline-flex'>
        {circles.map((circle, index) => (
          <CircleComponent
            key={index}
            title={circle.title}
            subtitle={circle.subtitle}
            image={circle.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CardRowCircles1;
