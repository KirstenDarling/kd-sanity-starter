import BackgroundImageStyles from '../styles/background.module.css';

const Hero1 = () => {
  return (
    <div
      className={`${BackgroundImageStyles.hero1} bg-cover bg-center h-screen self-stretch px-4 pt-[183px] pb-[168px] flex-col justify-center items-center gap-12 flex`}
    >
      <div className='w-[70%] m-[auto] relative z-[9] self-stretch h-[337px] flex-col justify-center items-center gap-10 flex'>
        <div className='self-stretch h-[238px] flex-col justify-center items-center gap-4 flex'>
          <div className="self-stretch text-center text-slate-100 text-[108px] font-extrabold font-['Playfair Display'] leading-[118.80px]">
            Revolutionizing Urban Tech
          </div>
        </div>
        <div className='w-[360px] m-[auto] self-stretch px-12 py-4 bg-purple-500 justify-center items-center gap-1 inline-flex'>
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
