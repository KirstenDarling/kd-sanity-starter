import Link from './Link';

export const NavBarLinkSection = ({
  textColor,
  font,
  isNavBar1 = true,
  links,
}: {
  textColor?: string;
  font?: string;
  isNavBar1?: boolean;
  links?: { title: string; URL: string }[];
}) => {
  return (
    <div className={`w-${isNavBar1 ? '334' : '307'} px-4 justify-start items-center gap-4 flex`}>
      {links &&
        links.map((link, index) => (
          <Link
            key={index}
            title={link.title}
            textColor={textColor}
            font={font}
            isNavBar1={isNavBar1}
          />
        ))}
    </div>
  );
};

export default NavBarLinkSection;
