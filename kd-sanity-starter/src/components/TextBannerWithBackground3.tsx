const TextBannerWithBackground3 = () => {
  return (
    <div className='self-stretch px-4 py-[184px] justify-center items-center gap-12 inline-flex'>
      {/* <img className="w-[1280px] h-[485px]" src="https://via.placeholder.com/1280x485" /> */}
      <div className='w-[1280px] h-[485px] relative bg-black bg-opacity-20' />
      <div className='grow shrink basis-0 flex-col justify-start items-center gap-2 inline-flex'>
        <div className="self-stretch text-center text-neutral-50 text-7xl font-normal font-['Fugaz One'] leading-[77.76px]">
          Crafting virtual utopias.
        </div>
        <div className="self-stretch text-center text-neutral-50 text-[22px] font-normal font-['Open Sans'] leading-[30.80px]">
          Digital Frontier Awaits
        </div>
      </div>
    </div>
  );
};

export default TextBannerWithBackground3;
