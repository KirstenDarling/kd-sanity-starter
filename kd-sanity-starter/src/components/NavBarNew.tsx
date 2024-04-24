import { StaticImageData } from 'next/image';
import NavBarButtonSection from './NavBarButtonSection';
import NavBarLinkSection from './NavBarLinkSection';
import NavBarPageTitle from './NavBarPageTitle';

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
  links,
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
  links?: { title: string; URL: string }[];
}) => {
  return (
    <div
      className={`z-[2] self-stretch h-[59px] p-2 ${backgroundColor} justify-between items-center inline-flex`}
    >
      {pageTitleSection && (
        <NavBarPageTitle
          icon={icon}
          pageTitle={pageTitle}
          textColor={textColor}
          font={font}
          isNavBar1={isNavBar1}
        />
      )}
      {linkSection && (
        <NavBarLinkSection textColor={textColor} font={font} isNavBar1={isNavBar1} links={links} />
      )}
      {buttonSection && (
        <NavBarButtonSection
          buttonText={buttonText}
          isButtonRounded={isButtonRounded}
          textColor={textColor}
          font={font}
          buttonBorderColor={buttonBorderColor}
          isNavBar1={isNavBar1}
        />
      )}
    </div>
  );
};

export default NavBarNew;
