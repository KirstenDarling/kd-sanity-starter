import BackgroundImageStyles from '../styles/background.module.css';

const TextBannerWithBackground1 = () => {
  return (
    <div
      className={`${BackgroundImageStyles.textBanner1} h-[563px] w-full self-stretch px-4 py-[184px] justify-center items-center gap-12 inline-flex`}
    >
      <div className='p-[5%] pt-[15%] w-[1280px] h-[563px] relative bg-black bg-opacity-20'>
        <div className='grow shrink basis-0 flex-col justify-start items-center gap-2 inline-flex'>
          <div className="self-stretch text-center text-neutral-50 text-7xl font-extrabold font-['Playfair Display'] leading-[77.76px]">
            Shaping Tomorrow&apos;s Cityscape.
          </div>
          <div className="self-stretch text-center text-neutral-50 text-[22px] font-normal font-['Fira Sans'] leading-[30.80px]">
            Innovative Urban Solutions
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBannerWithBackground1;
