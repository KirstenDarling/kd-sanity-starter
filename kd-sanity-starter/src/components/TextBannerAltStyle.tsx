const TextBannerAltStyle = ({ heading, subheading }: { heading?: string; subheading?: string }) => {
  return (
    <div className='self-stretch px-4 py-36 bg-rose-500 justify-center items-center gap-12 inline-flex'>
      <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
        <div className="self-stretch text-fuchsia-400 text-[28px] font-bold font-['Syne'] leading-[33.60px]">
          {heading}
        </div>
        <div className="self-stretch text-orange-200 text-[51px] font-bold font-['Syne'] leading-[61.20px]">
          {subheading}
        </div>
      </div>
    </div>
  );
};

export default TextBannerAltStyle;
