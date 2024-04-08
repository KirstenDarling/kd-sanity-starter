const Footer6 = () => {
  return (
    <div className='self-stretch px-8 py-12 bg-black justify-between items-center inline-flex'>
      <div className='grow shrink basis-0 h-[58px] justify-between items-center flex'>
        <div className='flex-col justify-center items-center gap-1 inline-flex'>
          <div className='w-8 h-8 relative'></div>
          <div className="text-neutral-100 text-sm font-normal font-['Alegreya'] leading-snug">
            ShadowBytes
          </div>
        </div>
        <div className='flex-col justify-center items-end gap-2 inline-flex'>
          <div className='justify-start items-center gap-8 inline-flex'>
            <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
              Dossier
            </div>
            <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
              Manifesto
            </div>
            <div className="text-neutral-100 text-xs font-normal font-['Alegreya'] leading-tight">
              Hackers
            </div>
          </div>
          <div className="text-zinc-300 text-xs font-normal font-['Alegreya'] leading-tight">
            All rights reserved 2024
          </div>
        </div>
        <div className='justify-start items-start gap-4 flex'>
          <div className='w-6 h-6 relative'></div>
          <div className='w-6 h-6 relative'></div>
          <div className='w-6 h-6 relative'></div>
        </div>
      </div>
    </div>
  );
};

export default Footer6;
