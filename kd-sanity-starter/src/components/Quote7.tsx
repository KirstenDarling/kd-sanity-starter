const Quote7 = () => {
  return (
    <div className='self-stretch bg-black justify-center items-center inline-flex'>
      <div className='grow shrink basis-0 h-[640px] p-6 bg-black justify-center items-center gap-10 flex'>
        <div className='grow shrink basis-0 flex-col justify-center items-center gap-3 inline-flex'>
          <div className='self-stretch h-[100px] flex-col justify-center items-center gap-10 flex'>
            <div className='self-stretch h-[100px] flex-col justify-center items-start gap-4 flex'>
              <div className="self-stretch text-center text-neutral-100 text-[22px] font-normal font-['Alegreya'] leading-[30.80px]">
                “DataWarp transformed our data strategy and execution.”
              </div>
              <div className="self-stretch text-center text-zinc-300 text-sm font-normal font-['Alegreya'] leading-snug">
                Ava Smith, Data Scientist
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Image className='w-[640px] h-[640px] relative' src='https://via.placeholder.com/640x640' /> */}
    </div>
  );
};

export default Quote7;
