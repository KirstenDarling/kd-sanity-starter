import { StaticImageData } from 'next/image';

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
  pageTitleSection = true,
  linkSection = true,
  buttonSection = true,
}: {
  icon: StaticImageData;
  pageTitle?: string;
  linkOneTitle?: string;
  linkTwoTitle?: string;
  linkThreeTitle?: string;
  buttonText?: string;
  isButtonRounded?: boolean;
  buttonBorderColor?: string;
  backgroundColor?: string;
  textColor?: string;
  font?: string;
  isNavBar1?: boolean;
  pageTitleSection?: boolean;
  linkSection?: boolean;
  buttonSection?: boolean;
}) => {
  return (
    <div
      className={`w-${isNavBar1 ? '121' : '147'} px-5 py-3 ${isButtonRounded ? 'rounded-lg' : ''} border ${buttonBorderColor} justify-center items-center gap-1 flex`}
    >
      <div className='px-1 justify-center items-center gap-2 flex'>
        <div className={`text-center ${textColor} text-xs font-normal ${font} leading-tight`}>
          {buttonText}
        </div>
      </div>
    </div>
  );
};

export default NavBarNew;
