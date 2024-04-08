const Hero3 = () => {
  return (
    <div className='self-stretch px-6 pt-[104px] pb-16 bg-black justify-center items-start gap-12 inline-flex'>
      <div className='grow shrink basis-0 h-[704px] justify-center items-center gap-12 flex'>
        <div className='grow shrink basis-0 flex-col justify-center items-start gap-10 inline-flex'>
          <div className='self-stretch h-[281px] flex-col justify-center items-start gap-4 flex'>
            <div className="self-stretch text-neutral-100 text-7xl font-normal font-['Fugaz One'] leading-[77.76px]">
              I&apos;m Nova, Cybernetic Enthusiast.
            </div>
            <div className="self-stretch text-zinc-300 text-[22px] font-normal font-['Open Sans'] leading-[30.80px]">
              Navigate the neon-lit streets.
            </div>
          </div>
          <div className='self-stretch px-12 py-4 bg-purple-500 justify-center items-center gap-1 inline-flex'>
            <div className='px-1 justify-center items-center gap-2 flex'>
              <div className="text-center text-white text-lg font-normal font-['Open Sans'] leading-[27px]">
                Join the Odyssey
              </div>
            </div>
          </div>
        </div>
        <div className='grow shrink basis-0 h-[704px] justify-center items-center gap-2 flex'>
          {/* <img className="grow shrink basis-0 self-stretch" src="https://via.placeholder.com/576x704" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero3;
