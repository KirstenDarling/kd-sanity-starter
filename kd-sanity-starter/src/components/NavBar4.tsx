const NavBar4 = () => {
  return (
    <div className='self-stretch p-2 justify-between items-center inline-flex'>
      <div className='grow shrink basis-0 h-[51px] px-2 py-4 bg-black rounded-[64px] justify-between items-center flex'>
        <div className='px-4 justify-center items-center gap-4 flex'>
          <div className='w-[68px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Open Sans'] leading-tight">
              Welcome
            </div>
          </div>
          <div className='w-20 self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Open Sans'] leading-tight">
              Our Spaces
            </div>
          </div>
          <div className='w-[70px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Open Sans'] leading-tight">
              Our Story
            </div>
          </div>
        </div>
        <div className='justify-center items-center gap-2 flex'>
          <div className='w-6 h-6 relative' />
          <div className="text-neutral-100 text-base font-normal font-['Open Sans'] leading-normal">
            CyberStudy Cafe
          </div>
        </div>
        <div className='px-4 justify-center items-center gap-4 flex'>
          <div className='w-[81px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Open Sans'] leading-tight">
              Learn More
            </div>
          </div>
          <div className='w-[109px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Open Sans'] leading-tight">
              @cyberstudyhall
            </div>
          </div>
          <div className='w-[87px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Open Sans'] leading-tight">
              Get in Touch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar4;
