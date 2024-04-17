import CardsSimplified from './CardsSimplified';

const CardRowSimplified = ({
  heading,
  subheading,
  cards,
}: {
  heading?: string;
  subheading?: string;
  cards: { title: string; text: string }[];
}) => {
  return (
    <div className='self-stretch h-[489px] px-4 py-[120px] bg-gray-800 flex-col justify-center items-center gap-10 flex'>
      <div className='self-stretch h-[249px] flex-col justify-start items-start gap-8 flex'>
        <div className='self-stretch h-[110px] flex-col justify-start items-start gap-3 flex'>
          <div className="self-stretch text-zinc-100 text-[56px] font-black font-['Playfair Display'] leading-[67.20px]">
            {heading}
          </div>
          <div className="self-stretch text-white text-[22px] font-normal font-['Source Sans Pro'] leading-[30.80px]">
            {subheading}
          </div>
        </div>
        <div className='self-stretch justify-center items-start gap-6 inline-flex'>
          {cards.map((card, index) => (
            <CardsSimplified key={index} title={card.title} text={card.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardRowSimplified;
