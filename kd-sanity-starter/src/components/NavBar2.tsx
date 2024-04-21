import Image from 'next/image';
import CodeGrooveIcon from '../../public/codeGrooveIcon.svg';

const NavBar2 = () => {
  return (
    <div className='z-[2] self-stretch h-[59px] p-2 bg-rose-500 justify-between items-center inline-flex'>
      <div className='px-2 justify-start items-center gap-2 flex'>
        <div className='w-6 h-6 relative'>
          <Image src={CodeGrooveIcon} alt='' />
        </div>
        <div className="text-orange-200 text-sm font-normal font-['Work Sans'] leading-[21px]">
          CodeGroove
        </div>
      </div>
      <div className='w-[307px] px-4 justify-start items-center gap-4 flex'>
        <div className='w-[62px] self-stretch px-4 justify-start items-center gap-2 flex'>
          <div className="text-orange-200 text-xs font-normal font-['Work Sans'] leading-tight">
            Start
          </div>
        </div>
        <div className='w-[70px] self-stretch px-4 justify-start items-center gap-2 flex'>
          <div className="text-orange-200 text-xs font-normal font-['Work Sans'] leading-tight">
            Profile
          </div>
        </div>
        <div className='w-[111px] self-stretch px-4 justify-start items-center gap-2 flex'>
          <div className="text-orange-200 text-xs font-normal font-['Work Sans'] leading-tight">
            Collaborators
          </div>
        </div>
      </div>
      <div className='w-[147px] px-5 py-3 rounded-lg border border-orange-200 justify-center items-center gap-1 flex'>
        <div className='px-1 justify-center items-center gap-2 flex'>
          <div className="text-center text-orange-200 text-xs font-normal font-['Work Sans'] leading-tight">
            Explore My Work
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar2;
