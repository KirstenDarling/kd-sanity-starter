const NavBar1 = () => {
  return (
    <div className='self-stretch h-[59px] p-2 bg-black justify-between items-center inline-flex'>
      <div className='px-2 justify-start items-center gap-2 flex'>
        <div className='w-6 h-6 relative' />
        <div className="text-neutral-100 text-base font-normal font-['Fira Sans'] leading-normal">
          CityTech
        </div>
      </div>
      <div className='w-[334px] px-4 justify-start items-center gap-4 flex'>
        <div className='w-[91px] self-stretch px-4 justify-start items-center gap-2 flex'>
          <div className="text-neutral-100 text-xs font-normal font-['Fira Sans'] leading-tight">
            Dashboard
          </div>
        </div>
        <div className='w-[97px] self-stretch px-4 justify-start items-center gap-2 flex'>
          <div className="text-neutral-100 text-xs font-normal font-['Fira Sans'] leading-tight">
            Innovations
          </div>
        </div>
        <div className='w-[82px] self-stretch px-4 justify-start items-center gap-2 flex'>
          <div className="text-neutral-100 text-xs font-normal font-['Fira Sans'] leading-tight">
            Our Crew
          </div>
        </div>
      </div>
      <div className='w-[116px] px-5 py-3 border border-neutral-100 justify-center items-center gap-1 flex'>
        <div className='px-1 justify-center items-center gap-2 flex'>
          <div className="text-center text-neutral-100 text-xs font-normal font-['Fira Sans'] leading-tight">
            Explore Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar1;
