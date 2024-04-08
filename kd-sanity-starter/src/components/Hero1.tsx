const Hero1 = () => {
  return (
    <div className='self-stretch h-[705px] px-4 pt-[200px] pb-[168px] flex-col justify-center items-center gap-12 flex'>
      {/* <img className='w-[1280px] h-[705px]' src='https://via.placeholder.com/1280x705' /> */}
      <div className='w-[1280px] h-[705px] opacity-60 bg-black' />
      <div className='self-stretch h-[337px] flex-col justify-center items-center gap-10 flex'>
        <div className='self-stretch h-[238px] flex-col justify-center items-center gap-4 flex'>
          <div className="self-stretch text-center text-slate-100 text-[108px] font-extrabold font-['Playfair Display'] leading-[118.80px]">
            Revolutionizing Urban Tech
          </div>
        </div>
        <div className='self-stretch px-12 py-4 bg-purple-500 justify-center items-center gap-1 inline-flex'>
          <div className='px-1 justify-center items-center gap-2 flex'>
            <div className="text-center text-white text-lg font-normal font-['Fira Sans'] leading-[27px]">
              Join the Future
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
