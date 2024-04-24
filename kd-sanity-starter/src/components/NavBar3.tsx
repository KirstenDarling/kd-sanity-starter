import Image, { StaticImageData } from 'next/image';

const NavBar3 = ({
  icon,
  pageTitle,
  linkOneTitle,
  linkTwoTitle,
  linkThreeTitle,
  linkOneTitleB,
  linkTwoTitleB,
  linkThreeTitleB,
  buttonText,
  isButtonRounded,
  backgroundColor,
  textColor,
  font,
  buttonBorderColor,
  isNavBar1 = true,
  linkSection = true,
  pageTitleSection = true,
}: {
  icon: StaticImageData;
  pageTitle?: string;
  linkOneTitle?: string;
  linkTwoTitle?: string;
  linkThreeTitle?: string;
  linkOneTitleB?: string;
  linkTwoTitleB?: string;
  linkThreeTitleB?: string;
  buttonText?: string;
  isButtonRounded?: boolean;
  backgroundColor?: string;
  textColor?: string;
  font?: string;
  buttonBorderColor?: string;
  isNavBar1?: boolean;
  linkSection?: boolean;
  pageTitleSection?: boolean;
}) => {
  return (
    <div className='z-[2] w-full bg-black h-[67px] p-2 justify-between items-center inline-flex'>
      <div className='grow shrink basis-0 h-[51px] px-2 py-4 bg-gray-100 rounded-[64px] justify-between items-center flex'>
        {linkSection && (
          <div className='px-4 justify-center items-center gap-4 flex'>
            <div className='w-[50px] self-stretch px-2 justify-start items-center gap-2 flex'>
              <div className="text-zinc-900 text-xs font-normal font-['Open Sans'] leading-tight">
                {linkOneTitle}
              </div>
            </div>
            <div className='w-[65px] self-stretch px-2 justify-start items-center gap-2 flex'>
              <div className="text-zinc-900 text-xs font-normal font-['Open Sans'] leading-tight">
                {linkTwoTitle}
              </div>
            </div>
            <div className='w-[45px] self-stretch px-2 justify-start items-center gap-2 flex'>
              <div className="text-zinc-900 text-xs font-normal font-['Open Sans'] leading-tight">
                {linkThreeTitle}
              </div>
            </div>
          </div>
        )}
        {pageTitleSection && (
          <div className='justify-center items-center gap-2 flex'>
            <div className='w-6 h-6 relative'>
              <Image alt='' src={icon} />
            </div>
            <div className="text-zinc-900 text-base font-normal font-['Open Sans'] leading-normal">
              {pageTitle}
            </div>
          </div>
        )}
        {linkSection && (
          <div className='px-4 justify-center items-center gap-4 flex'>
            <div className='w-[72px] self-stretch px-2 justify-start items-center gap-2 flex'>
              <div className="text-zinc-900 text-xs font-normal font-['Open Sans'] leading-tight">
                {linkOneTitleB}
              </div>
            </div>
            <div className='w-[88px] self-stretch px-2 justify-start items-center gap-2 flex'>
              <div className="text-zinc-900 text-xs font-normal font-['Open Sans'] leading-tight">
                {linkTwoTitleB}
              </div>
            </div>
            <div className='w-[63px] self-stretch px-2 justify-start items-center gap-2 flex'>
              <div className="text-zinc-900 text-xs font-normal font-['Open Sans'] leading-tight">
                {linkThreeTitleB}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar3;
