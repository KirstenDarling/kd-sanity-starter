import Image from 'next/image';
import CityTechIcon from '../../public/cityTechIcon.svg';

export const NavBar1 = ({
  pageTitle,
  linkOneTitle,
  linkTwoTitle,
  linkThreeTitle,
  buttonText,
  backgroundColor,
  textColor,
}: {
  pageTitle?: string;
  linkOneTitle?: string;
  linkTwoTitle?: string;
  linkThreeTitle?: string;
  buttonText?: string;
  backgroundColor?: string;
  textColor?: string;
}) => {
  return (
    // <div className='w-full h-[4806px] bg-white flex-col justify-start items-center inline-flex'>
    <div
      className={`self-stretch h-[59px] p-2 ${backgroundColor ? backgroundColor : 'bg-black'} justify-between items-center inline-flex`}
    >
      <div className='px-2 justify-start items-center gap-2 flex'>
        <Image src={CityTechIcon} alt='CityTech Icon' />
        <div
          className={`${textColor ? textColor : ' text-neutral-100'} text-base font-normal font-['Fira Sans'] leading-normal`}
        >
          {pageTitle}
        </div>
      </div>
      <div className='w-[334px] px-4 justify-start items-center gap-4 flex'>
        <div className='w-[100px] self-stretch px-4 justify-start items-center gap-2 flex'>
          <div
            className={`${textColor ? textColor : ' text-neutral-100'} text-xs font-normal font-['Fira Sans'] leading-tight`}
          >
            {linkOneTitle}
          </div>
        </div>
        <div className='w-[100px] self-stretch px-4 justify-start items-center gap-2 flex'>
          <div
            className={`${textColor ? textColor : ' text-neutral-100'} text-xs font-normal font-['Fira Sans'] leading-tight`}
          >
            {linkTwoTitle}
          </div>
        </div>
        <div className='w-[100px] self-stretch  justify-start items-center gap-2 flex'>
          <div
            className={`${textColor ? textColor : ' text-neutral-100'} text-xs font-normal font-['Fira Sans'] leading-tight`}
          >
            {linkThreeTitle}
          </div>
        </div>
      </div>
      <div className='w-[121px] px-5 py-3 border border-neutral-100 justify-center items-center gap-1 flex'>
        <div className='px-1 justify-center items-center gap-2 flex'>
          <div
            className={`text-center ${textColor ? textColor : ' text-neutral-100'} text-xs font-normal font-['Fira Sans'] leading-tight`}
          >
            {buttonText}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default NavBar1;
