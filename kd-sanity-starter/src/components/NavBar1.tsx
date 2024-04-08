import CityTechIcon from '@public/CityTechIcon.svg';
import Image from 'next/image';

const NavBar1 = () => {
  return (
    <div className='self-stretch h-[59px] p-2 bg-black justify-between items-center inline-flex'>
      <div className='px-2 justify-start items-center gap-2 flex'>
        <Image src={CityTechIcon} alt='CityTech Icon' />
        <div className="text-neutral-100 text-base font-normal font-['Fira Sans'] leading-normal">
          CityTech
        </div>
      </div>
      <div className='w-[334px] px-4 justify-start items-center gap-4 flex'>
        <div className='w-[100px] self-stretch px-4 justify-start items-center gap-2 flex'>
          <div className="text-neutral-100 text-xs font-normal font-['Fira Sans'] leading-tight">
            Dashboard
          </div>
        </div>
        <div className='w-[100px] self-stretch px-4 justify-start items-center gap-2 flex'>
          <div className="text-neutral-100 text-xs font-normal font-['Fira Sans'] leading-tight">
            Innovations
          </div>
        </div>
        <div className='w-[100px] self-stretch  justify-start items-center gap-2 flex'>
          <div className="text-neutral-100 text-xs font-normal font-['Fira Sans'] leading-tight">
            Our Crew
          </div>
        </div>
      </div>
      <div className='w-[121px] px-5 py-3 border border-neutral-100 justify-center items-center gap-1 flex'>
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
