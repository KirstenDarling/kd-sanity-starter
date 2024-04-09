const NumberAccordion1 = () => {
  return (
    <div className='self-stretch h-[939px] px-4 py-24 bg-black flex-col justify-center items-center gap-10 flex'>
      <div className='p-[5%] self-stretch h-[747px] flex-col justify-center items-center gap-10 flex'>
        <div className="self-stretch text-neutral-100 text-7xl font-extrabold font-['Playfair Display'] leading-[77.76px]">
          How We Innovate
        </div>
        <div className='self-stretch py-8 border-b border-gray-600 justify-start items-center gap-10 inline-flex'>
          <div className="grow shrink basis-0 text-neutral-100 text-[108px] font-extrabold font-['Playfair Display'] leading-[118.80px]">
            1
          </div>
          <div className='grow shrink basis-0 flex-col justify-center items-center gap-4 inline-flex'>
            <div className="self-stretch text-neutral-100 text-lg font-normal font-['Fira Sans'] leading-[27px]">
              Research & Development
            </div>
            <div className="self-stretch text-zinc-300 text-[22px] font-normal font-['Fira Sans'] leading-[30.80px]">
              Our journey begins with in-depth research into urban challenges and innovative tech
              solutions.
            </div>
          </div>
        </div>
        <div className='self-stretch py-8 border-b border-gray-600 justify-start items-center gap-10 inline-flex'>
          <div className="grow shrink basis-0 text-neutral-100 text-[108px] font-extrabold font-['Playfair Display'] leading-[118.80px]">
            2
          </div>
          <div className='grow shrink basis-0 flex-col justify-center items-center gap-4 inline-flex'>
            <div className="self-stretch text-neutral-100 text-lg font-normal font-['Fira Sans'] leading-[27px]">
              Prototyping & Testing
            </div>
            <div className="self-stretch text-zinc-300 text-[22px] font-normal font-['Fira Sans'] leading-[30.80px]">
              We create advanced prototypes and rigorously test them in real-world urban settings.
            </div>
          </div>
        </div>
        <div className='self-stretch py-8 border-b border-gray-600 justify-start items-center gap-10 inline-flex'>
          <div className="grow shrink basis-0 text-neutral-100 text-[108px] font-extrabold font-['Playfair Display'] leading-[118.80px]">
            3
          </div>
          <div className='grow shrink basis-0 flex-col justify-center items-center gap-4 inline-flex'>
            <div className="self-stretch text-neutral-100 text-lg font-normal font-['Fira Sans'] leading-[27px]">
              Implementation & Scale
            </div>
            <div className="self-stretch text-zinc-300 text-[22px] font-normal font-['Fira Sans'] leading-[30.80px]">
              Successful solutions are implemented city-wide, scaling to meet the needs of urban
              populations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberAccordion1;
