const TextBannerAltStyle = ({
  eyebrowText,
  heading,
  text,
  subheading,
}: {
  eyebrowText?: string;
  heading?: string;
  text?: string;
  subheading?: string;
}) => {
  const hasSplitStyle = eyebrowText && heading && text;

  return (
    <div
      className={`self-stretch px-4 py-36 ${hasSplitStyle ? 'h-[477px]' : 'bg-rose-500'} justify-center items-center gap-12 inline-flex`}
    >
      <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
        {hasSplitStyle ? (
          <>
            <div className="self-stretch text-purple-500 text-4xl font-extrabold font-['Alegreya'] leading-[46.80px]">
              {eyebrowText}
            </div>
            <div className='self-stretch justify-start items-start gap-8 inline-flex'>
              <div className="max-w-[45%] grow shrink basis-0 text-neutral-100 text-[56px] font-extrabold font-['Alegreya'] leading-[67.20px]">
                {heading}
              </div>
              <div className="grow shrink basis-0 h-[93px] text-zinc-300 text-[22px] font-normal font-['Alegreya'] leading-[30.80px]">
                {text}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="self-stretch text-fuchsia-400 text-[28px] font-bold font-['Syne'] leading-[33.60px]">
              {heading || eyebrowText}
            </div>
            <div className="self-stretch text-orange-200 text-[51px] font-bold font-['Syne'] leading-[61.20px]">
              {text || subheading}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TextBannerAltStyle;
