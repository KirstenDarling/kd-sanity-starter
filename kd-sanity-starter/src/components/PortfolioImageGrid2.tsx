const PortfolioImageGrid2 = () => {
  return (
    <div className='self-stretch h-[1058px] px-4 py-[120px] bg-rose-500 flex-col justify-center items-center gap-10 flex'>
      <div className='self-stretch h-[818px] flex-col justify-center items-center gap-10 flex'>
        <div className='self-stretch h-[102px] flex-col justify-start items-center gap-3 flex'>
          <div className="self-stretch text-center text-orange-200 text-[51px] font-bold font-['Syne'] leading-[61.20px]">
            Portfolio Highlights
          </div>
          <div className="self-stretch text-center text-amber-300 text-[22px] font-normal font-['Work Sans'] leading-7">
            A peek into my professional adventures.
          </div>
        </div>
        <div className='self-stretch justify-center items-start gap-6 inline-flex'>
          {/* <img
          className='grow shrink basis-0 h-[676px] rounded-2xl'
          src='https://via.placeholder.com/588x676'
        /> */}
          <div className='grow shrink basis-0 h-[676px] justify-start items-center gap-6 flex'>
            {/* <img
            className='grow shrink basis-0 h-[209.33px] rounded-2xl'
            src='https://via.placeholder.com/282x209'
          /> */}
            {/* <img
            className='grow shrink basis-0 h-[209.33px] rounded-2xl'
            src='https://via.placeholder.com/282x209'
          /> */}
            {/* <img
            className='grow shrink basis-0 h-[209.33px] rounded-2xl'
            src='https://via.placeholder.com/588x209'
          /> */}
            {/* <img
            className='grow shrink basis-0 h-[209.33px] rounded-2xl'
            src='https://via.placeholder.com/282x209'
          /> */}
            {/* <img
            className='grow shrink basis-0 h-[209.33px] rounded-2xl'
            src='https://via.placeholder.com/282x209'
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioImageGrid2;
