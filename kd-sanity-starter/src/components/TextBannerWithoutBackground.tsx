const TextBannerWithoutBackground = ({
  heading,
  subheading,
}: {
  heading?: string;
  subheading?: string;
}) => {
  return (
    <div className='bg-black text-black w-[1280px] h-[485px] px-4 py-[184px] justify-center items-center gap-12 inline-flex'>
      <div className='grow shrink basis-0 flex-col justify-start items-center gap-2 inline-flex'>
        <div className="self-stretch text-center text-neutral-50 text-7xl font-extrabold font-['Alegreya'] leading-[77.76px]">
          {heading}
        </div>
        <div className="self-stretch text-center text-neutral-50 text-[22px] font-normal font-['Alegreya'] leading-[30.80px]">
          {subheading}
        </div>
      </div>
    </div>
  );
};

export default TextBannerWithoutBackground;
