const ImageCTASection2 = () => {
  return (
    <div className='self-stretch bg-rose-500 justify-center items-start inline-flex'>
      {/* <img
      className='grow shrink basis-0 h-[803px] py-12'
      src='https://via.placeholder.com/640x803'
    /> */}
      <div className='grow shrink basis-0 h-[803px] px-4 py-20 justify-center items-center gap-2 flex'>
        <div className='grow shrink basis-0 bg-rose-500 rounded-[32px] flex-col justify-center items-start gap-8 inline-flex'>
          <div className='self-stretch h-[102px] flex-col justify-center items-start gap-4 flex'>
            <div className="self-stretch text-orange-200 text-[51px] font-bold font-['Syne'] leading-[61.20px]">
              Let&apos;s Collaborate!
            </div>
            <div className="self-stretch text-amber-300 text-lg font-normal font-['Work Sans'] leading-[25.20px]">
              Ready to build something amazing together?
            </div>
          </div>
          <div className='self-stretch px-12 py-4 bg-fuchsia-700 rounded-lg justify-center items-center gap-1 inline-flex'>
            <div className='px-1 justify-center items-center gap-2 flex'>
              <div className="text-center text-orange-200 text-lg font-normal font-['Work Sans'] leading-[25.20px]">
                Get in Touch
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCTASection2;
