const NumberAccordionRow = ({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) => {
  return (
    <div className='self-stretch py-8 border-b border-gray-600 justify-start items-center gap-10 inline-flex'>
      <div className="grow shrink basis-0 text-neutral-100 text-[108px] font-extrabold font-['Playfair Display'] leading-[118.80px]">
        {number}
      </div>
      <div className='grow shrink basis-0 flex-col justify-center items-center gap-4 inline-flex'>
        <div className="self-stretch text-neutral-100 text-lg font-normal font-['Fira Sans'] leading-[27px]">
          {title}
        </div>
        <div className="self-stretch text-zinc-300 text-[22px] font-normal font-['Fira Sans'] leading-[30.80px]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default NumberAccordionRow;
