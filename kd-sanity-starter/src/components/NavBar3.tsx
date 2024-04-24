import Image, { StaticImageData } from 'next/image';
import { NavBarLinkSection } from './NavBarLinkSection';

const NavBar3 = ({
  icon,
  pageTitle,
  textColor,
  font,
  isNavBar1 = true,
  linkSection = true,
  linkSection2 = true,
  pageTitleSection = true,
  links,
  additionalLinks,
  backgroundColor,
}: {
  icon: StaticImageData;
  pageTitle?: string;
  textColor?: string;
  font?: string;
  isNavBar1?: boolean;
  linkSection?: boolean;
  linkSection2?: boolean;
  pageTitleSection?: boolean;
  links?: { title: string; URL: string }[];
  backgroundColor?: string;
  additionalLinks?: { title: string; URL: string }[];
}) => {
  return (
    <div
      className={`z-[2] w-full ${backgroundColor} h-[67px] p-2 justify-between items-center inline-flex`}
    >
      <div className='grow shrink basis-0 h-[51px] px-2 py-4 bg-gray-100 rounded-[64px] justify-between items-center flex'>
        {linkSection && (
          <NavBarLinkSection
            textColor={textColor}
            font={font}
            isNavBar1={isNavBar1}
            links={links}
          />
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
        {linkSection2 && (
          <NavBarLinkSection
            textColor={textColor}
            font={font}
            isNavBar1={isNavBar1}
            links={additionalLinks}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar3;
