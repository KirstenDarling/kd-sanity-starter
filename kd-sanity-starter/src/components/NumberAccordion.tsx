import NumberAccordionRow from './NumberAccordionRow';

const NumberAccordion = ({
  title,
  accordionSections,
}: {
  title: string;
  accordionSections: { number: number; title: string; description: string }[];
}) => {
  return (
    <div className='self-stretch h-[939px] px-20 py-24 bg-black flex-col justify-center items-center gap-10 flex'>
      <div className='p-[5%] self-stretch h-[747px] flex-col justify-center items-center gap-10 flex'>
        <div className="self-stretch text-neutral-100 text-7xl font-extrabold font-['Playfair Display'] leading-[77.76px]">
          {title}
        </div>
        {accordionSections.map((row, index) => (
          <NumberAccordionRow
            key={index}
            number={row.number}
            title={row.title}
            description={row.description}
          />
        ))}
      </div>
    </div>
  );
};

export default NumberAccordion;
