const Hero2 = () => {
  return (
    <div className='self-stretch h-[671px] px-4 pt-[232px] pb-20 bg-rose-500 flex-col justify-center items-center gap-2 flex'>
      <div className='p-[10%] self-stretch justify-start items-center gap-8 inline-flex'>
        <div className='grow shrink basis-0 flex-col justify-center items-start gap-10 inline-flex'>
          <div className='self-stretch h-[262px] flex-col justify-center items-start gap-6 flex'>
            <div className="self-stretch text-orange-200 text-8xl font-bold font-['Syne'] leading-[96px]">
              Crafting Code Creatively
            </div>
            <div className="self-stretch text-amber-300 text-[38px] font-normal font-['Work Sans'] leading-[45.60px]">
              Diving deep into development.
            </div>
          </div>
          <div className='max-w-[360px] max-h-[60px] self-stretch px-12 py-4 bg-fuchsia-700 rounded-lg justify-center items-center gap-1 inline-flex'>
            <div className='p-[10%] px-1 justify-center items-center gap-2 flex'>
              <div className="text-center text-orange-200 text-lg font-normal font-['Work Sans'] leading-[25.20px]">
                See Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
