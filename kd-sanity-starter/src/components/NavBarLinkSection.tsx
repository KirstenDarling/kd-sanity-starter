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
  );
};

export default NavBarNew;
