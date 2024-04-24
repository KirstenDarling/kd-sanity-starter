import Image, { StaticImageData } from 'next/image';

export const NavBarNew = ({
  icon,
  pageTitle,
  linkOneTitle,
  linkTwoTitle,
  linkThreeTitle,
  buttonText,
  isButtonRounded,
  backgroundColor,
  textColor,
  font,
  buttonBorderColor,
  isNavBar1 = true,
}: {
  icon: StaticImageData;
  pageTitle?: string;
  linkOneTitle?: string;
  linkTwoTitle?: string;
  linkThreeTitle?: string;
  buttonText?: string;
  isButtonRounded?: boolean;
  backgroundColor?: string;
  textColor?: string;
  font?: string;
  buttonBorderColor?: string;
  isNavBar1?: boolean;
}) => {
  return (
    <div
      className={`z-[2] self-stretch h-[59px] p-2 ${backgroundColor} justify-between items-center inline-flex`}
    >
      <div className='px-2 justify-start items-center gap-2 flex'>
        <div className={isNavBar1 ? 'w-6 h-6 relative' : ''}>
          <Image src={icon} alt='' />
        </div>
        <div
          className={`${textColor} ${isNavBar1 ? 'text-base' : 'text-sm'} font-normal ${font} ${isNavBar1 ? 'leading-normal' : 'leading-[21px]'}`}
        >
          {pageTitle}
        </div>
      </div>
      <div className={`w-${isNavBar1 ? '334' : '307'} px-4 justify-start items-center gap-4 flex`}>
        <div
          className={`w-${isNavBar1 ? '100' : '62'} self-stretch px-4 justify-start items-center gap-2 flex`}
        >
          <div className={`${textColor} text-xs font-normal ${font} leading-tight`}>
            {linkOneTitle}
          </div>
        </div>
        <div
          className={`w-${isNavBar1 ? '100' : '70'} self-stretch px-4 justify-start items-center gap-2 flex`}
        >
          <div className={`${textColor} text-xs font-normal ${font} leading-tight`}>
            {linkTwoTitle}
          </div>
        </div>
        <div
          className={`w-${isNavBar1 ? '100' : '111'} self-stretch px-4 justify-start items-center gap-2 flex`}
        >
          <div className={`${textColor} text-xs font-normal ${font} leading-tight`}>
            {linkThreeTitle}
          </div>
        </div>
      </div>
      <div
        className={`w-${isNavBar1 ? '121' : '147'} px-5 py-3 ${isButtonRounded ? 'rounded-lg' : ''} border ${buttonBorderColor} justify-center items-center gap-1 flex`}
      >
        <div className='px-1 justify-center items-center gap-2 flex'>
          <div className={`text-center ${textColor} text-xs font-normal ${font} leading-tight`}>
            {buttonText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarNew;
