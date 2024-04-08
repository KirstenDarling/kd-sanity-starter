const Footer4 = () => {
  return (
    <div className='self-stretch h-[303px] p-2 flex-col justify-start items-start gap-2 flex'>
      <div className='self-stretch h-[287px] px-10 py-8 bg-black rounded-3xl flex-col justify-start items-start gap-8 flex'>
        <div className='self-stretch justify-between items-start inline-flex'>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex'>
            <div className='justify-center items-center gap-2 inline-flex'>
              <div className='w-8 h-8 relative' />
              <div className="text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                CyberStudy Cafe
              </div>
            </div>
            <div className="text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
              Elevate your learning space
            </div>
          </div>
          <div className='grow shrink basis-0 h-[136px] justify-end items-start gap-10 flex'>
            <div className='grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex'>
              <div className="text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                Company
              </div>
              <div className="text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                About
              </div>
              <div className="text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                Careers
              </div>
              <div className="text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                Newsroom
              </div>
            </div>
            <div className='grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex'>
              <div className="text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                Our Features
              </div>
              <div className="text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                High-Speed Wi-Fi
              </div>
              <div className="text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                Study Cards
              </div>
              <div className="text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                Virtual Bulletin
              </div>
            </div>
            <div className='grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex'>
              <div className="text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                Social
              </div>
              <div className="text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                Twitter
              </div>
              <div className="text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                Instagram
              </div>
              <div className="text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                Threads
              </div>
            </div>
          </div>
        </div>
        <div className='self-stretch h-px bg-zinc-800' />
        <div className='self-stretch justify-between items-center inline-flex'>
          <div className="text-zinc-300 text-xs font-normal font-['Open Sans'] leading-tight">
            © CyberStudy Cafe 2024
          </div>
          <div className='h-[22px] justify-end items-center gap-4 flex'>
            <div className="text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
              Legal Info
            </div>
            <div className="text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer4;
