import { StaticImageData } from 'next/image';
import FeaturedBullets from './FeaturedBullets';

const BulletPointsSection1 = ({
  heading,
  subheading,
  features,
}: {
  heading?: string;
  subheading?: string;
  features: { title: string; description: string; icon: StaticImageData }[];
}) => {
  return (
    <div className=' h-[659px] px-4 py-40 bg-gray-100 flex-col justify-center items-center gap-10 inline-flex'>
      <div className='self-stretch h-[101px] flex-col justify-start items-center gap-3 flex'>
        <div className="self-stretch text-center text-zinc-900 text-[56px] font-extrabold font-['Playfair Display'] leading-[67.20px]">
          {heading}
        </div>
        <div className="self-stretch text-center text-zinc-800 text-sm font-normal font-['Fira Sans'] leading-snug">
          {subheading}
        </div>
      </div>
      <div className='m-[auto] flex flex-wrap self-stretch justify-center items-start gap-10'>
        {features.map((feature, index) => (
          <FeaturedBullets
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default BulletPointsSection1;
