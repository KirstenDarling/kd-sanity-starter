const Newsletter7 = () => {
  return (
    <div className='self-stretch h-[686px] px-4 py-[120px] flex-col justify-center items-center flex'>
      {/* <Image className='w-[1280px] h-[686px]' src='https://via.placeholder.com/1280x686' /> */}
      <div className='self-stretch h-[446px] p-8 bg-black rounded-2xl flex-col justify-center items-center gap-4 flex'>
        <div className='self-stretch h-[82px] flex-col justify-center items-center gap-2 flex'>
          <div className="self-stretch text-center text-neutral-100 text-4xl font-extrabold font-['Alegreya'] leading-[46.80px]">
            Join Today
          </div>
          <div className="self-stretch text-center text-zinc-300 text-lg font-normal font-['Alegreya'] leading-[27px]">
            Secure your spot!
          </div>
        </div>
        <div className='self-stretch px-2 py-4 bg-gray-800 rounded border border-gray-600 justify-center items-center gap-3 inline-flex'>
          <div className='w-6 h-6 relative' />
          <div className="text-center text-neutral-100 text-sm font-normal font-['Alegreya'] leading-snug">
            Connect with Google
          </div>
        </div>
        <div className='self-stretch justify-center items-center gap-6 inline-flex'>
          <div className='w-[178.50px] h-px relative bg-gray-600' />
          <div className="text-center text-zinc-300 text-xs font-normal font-['Alegreya'] leading-tight">
            or
          </div>
          <div className='w-[178.50px] h-px relative bg-gray-600' />
        </div>
        <div className='self-stretch h-[142px] flex-col justify-start items-center gap-2 flex'>
          <div className='self-stretch h-20 rounded flex-col justify-center items-start gap-1 flex'>
            <div className="self-stretch text-neutral-100 text-sm font-normal font-['Alegreya'] leading-snug">
              Username or Email
            </div>
            <div className='self-stretch p-4 bg-black rounded border border-gray-600 justify-start items-center gap-1 inline-flex'>
              <div className='grow shrink basis-0 h-[22px] px-1 justify-start items-center gap-2 flex'>
                <div className="text-zinc-300 text-sm font-normal font-['Alegreya'] leading-snug">
                  Create a Password
                </div>
              </div>
            </div>
          </div>
          <div className='self-stretch px-6 py-4 bg-purple-500 rounded justify-center items-center gap-1 inline-flex'>
            <div className='grow shrink basis-0 h-[22px] px-1 justify-center items-center gap-2 flex'>
              <div className="grow shrink basis-0 text-center text-white text-sm font-normal font-['Alegreya'] leading-snug">
                Proceed with Email
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch text-center text-zinc-300 text-xs font-normal font-['Alegreya'] leading-tight">
          Terms and privacy agreed upon
        </div>
      </div>
    </div>
  );
};

export default Newsletter7;
