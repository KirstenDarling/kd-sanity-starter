const QuoteWithImage5 = () => {
  return (
    <div className='self-stretch bg-gray-800 justify-center items-center inline-flex'>
      <div className='grow shrink basis-0 h-[640px] p-6 bg-gray-800 justify-center items-center gap-10 flex'>
        <div className='grow shrink basis-0 flex-col justify-center items-center gap-3 inline-flex'>
          <div className='self-stretch h-[100px] flex-col justify-center items-center gap-10 flex'>
            <div className='self-stretch h-[100px] flex-col justify-center items-start gap-4 flex'>
              <div className="self-stretch text-center text-zinc-100 text-[22px] font-normal font-['Source Sans Pro'] leading-[30.80px]">
                “Lucas transformed our data handling, unveiling insights that propelled our growth.”
              </div>
              <div className="self-stretch text-center text-white text-sm font-normal font-['Source Sans Pro'] leading-snug">
                Jordan Smith, CEO of Innotech
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Image className="w-[640px] h-[640px] relative" src="https://via.placeholder.com/640x640" /> */}
    </div>
  );
};

export default QuoteWithImage5;
