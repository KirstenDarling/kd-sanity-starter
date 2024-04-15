import { StaticImageData } from 'next/image';
import CardsRectangle from './CardsRectangle';

const CardRow2 = ({
  heading,
  subheading,
  cards,
}: {
  heading?: string;
  subheading?: string;
  cards: { image: StaticImageData; eyebrowHeading?: string; heading?: string; text?: string }[];
}) => {
  return (
    <div className='self-stretch h-[812px] px-4 py-40 bg-rose-500 flex-col justify-center items-center gap-10 flex'>
      <div className='self-stretch h-[106px] flex-col justify-center items-center gap-10 flex'>
        <div className='self-stretch h-[106px] flex-col justify-center items-start gap-4 flex'>
          <div className="self-stretch text-center text-orange-200 text-[51px] font-bold font-['Syne'] leading-[61.20px]">
            {heading}
          </div>
          <div className="self-stretch text-center text-amber-300 text-[22px] font-normal font-['Work Sans'] leading-7">
            {subheading}
          </div>
        </div>
      </div>
      <div className='self-stretch justify-center items-start gap-10 inline-flex'>
        {cards.map((card, index) => (
          <CardsRectangle
            key={index}
            image={card.image}
            eyebrowHeading={card.eyebrowHeading}
            heading={card.heading}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export default CardRow2;
