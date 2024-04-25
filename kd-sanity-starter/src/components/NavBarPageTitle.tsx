import Image, { StaticImageData } from 'next/image';

export const NavBarPageTitle = ({
  icon,
  pageTitle,
  textColor,
  font,
  isNavBar1 = true,
}: {
  icon: StaticImageData;
  pageTitle?: string;
  textColor?: string;
  font?: string;
  isNavBar1?: boolean;
}) => {
  return (
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
  );
};

export default NavBarPageTitle;
