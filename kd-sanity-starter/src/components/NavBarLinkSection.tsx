export const NavBarLinkSection = ({
  linkOneTitle,
  linkTwoTitle,
  linkThreeTitle,
  textColor,
  font,
  isNavBar1 = true,
}: {
  linkOneTitle?: string;
  linkTwoTitle?: string;
  linkThreeTitle?: string;
  textColor?: string;
  font?: string;
  isNavBar1?: boolean;
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

export default NavBarLinkSection;
