const Footer2 = () => {
  return (
    <div className='self-stretch px-8 py-12 bg-rose-500 justify-between items-center inline-flex'>
      <div className='grow shrink basis-0 h-[57px] justify-between items-center flex'>
        <div className='flex-col justify-center items-center gap-1 inline-flex'>
          <div className='w-8 h-8 relative' />
          <div className="text-orange-200 text-sm font-normal font-['Work Sans'] leading-[21px]">
            CodeGroove
          </div>
        </div>
        <div className='flex-col justify-center items-end gap-2 inline-flex'>
          <div className='justify-start items-center gap-8 inline-flex'>
            <div className="text-orange-200 text-xs font-normal font-['Work Sans'] leading-tight">
              Start
            </div>
            <div className="text-orange-200 text-xs font-normal font-['Work Sans'] leading-tight">
              Profile
            </div>
            <div className="text-orange-200 text-xs font-normal font-['Work Sans'] leading-tight">
              Collaborators
            </div>
          </div>
          <div className="text-amber-300 text-xs font-normal font-['Work Sans'] leading-tight">
            All rights reserved 2024
          </div>
        </div>
        <div className='justify-start items-start gap-4 flex'>
          <div className='w-6 h-6 relative' />
          <div className='w-6 h-6 relative' />
          <div className='w-6 h-6 relative' />
        </div>
      </div>
    </div>
  );
};

export default Footer2;
