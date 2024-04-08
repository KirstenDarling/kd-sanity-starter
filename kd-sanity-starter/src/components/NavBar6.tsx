const NavBar6 = () => {
  return (
    <div className='self-stretch p-2 justify-between items-center inline-flex'>
      <div className='grow shrink basis-0 h-[51px] px-2 py-4 bg-black rounded-[64px] justify-between items-center flex'>
        <div className='px-4 justify-center items-center gap-4 flex'>
          <div className='w-[60px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
              Synopsis
            </div>
          </div>
          <div className='w-[69px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
              Code Vault
            </div>
          </div>
          <div className='w-[57px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
              Hackers
            </div>
          </div>
        </div>
        <div className='justify-center items-center gap-2 flex'>
          <div className='w-6 h-6 relative'></div>
          <div className="text-neutral-100 text-base font-normal font-['Alegreya'] leading-normal">
            ShadowBytes
          </div>
        </div>
        <div className='px-4 justify-center items-center gap-4 flex'>
          <div className='w-[66px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
              Manifesto
            </div>
          </div>
          <div className='w-[104px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
              @darkpurplehack
            </div>
          </div>
          <div className='w-[76px] self-stretch px-2 justify-start items-center gap-2 flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
              Infiltrate Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar6;
