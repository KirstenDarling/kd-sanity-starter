const NumberAccordion1 = () => {
  return (
    <div className='self-stretch h-[939px] px-4 py-24 bg-black flex-col justify-center items-center gap-10 flex'>
      <div className='p-[5%] self-stretch h-[747px] flex-col justify-center items-center gap-10 flex'>
        <div className="self-stretch text-neutral-100 text-7xl font-extrabold font-['Playfair Display'] leading-[77.76px]">
          How CyberStudy Works
        </div>
        <div className='self-stretch py-8 border-b border-gray-600 justify-start items-center gap-10 inline-flex'>
          <div className="grow shrink basis-0 text-neutral-100 text-[108px] font-extrabold font-['Playfair Display'] leading-[118.80px]">
            1
          </div>
          <div className='grow shrink basis-0 flex-col justify-center items-center gap-4 inline-flex'>
            <div className="self-stretch text-neutral-100 text-lg font-normal font-['Fira Sans'] leading-[27px]">
              Create an Account
            </div>
            <div className="self-stretch text-zinc-300 text-[22px] font-normal font-['Fira Sans'] leading-[30.80px]">
              Sign up and access our study features.
            </div>
          </div>
        </div>
        <div className='self-stretch py-8 border-b border-gray-600 justify-start items-center gap-10 inline-flex'>
          <div className="grow shrink basis-0 text-neutral-100 text-[108px] font-extrabold font-['Playfair Display'] leading-[118.80px]">
            2
          </div>
          <div className='grow shrink basis-0 flex-col justify-center items-center gap-4 inline-flex'>
            <div className="self-stretch text-neutral-100 text-lg font-normal font-['Fira Sans'] leading-[27px]">
              Customize Your Space
            </div>
            <div className="self-stretch text-zinc-300 text-[22px] font-normal font-['Fira Sans'] leading-[30.80px]">
              Personalize your study hall experience.
            </div>
          </div>
        </div>
        <div className='self-stretch py-8 border-b border-gray-600 justify-start items-center gap-10 inline-flex'>
          <div className="grow shrink basis-0 text-neutral-100 text-[108px] font-extrabold font-['Playfair Display'] leading-[118.80px]">
            3
          </div>
          <div className='grow shrink basis-0 flex-col justify-center items-center gap-4 inline-flex'>
            <div className="self-stretch text-neutral-100 text-lg font-normal font-['Fira Sans'] leading-[27px]">
              Start Learning
            </div>
            <div className="self-stretch text-zinc-300 text-[22px] font-normal font-['Fira Sans'] leading-[30.80px]">
              Dive into a world of knowledge.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberAccordion1;
