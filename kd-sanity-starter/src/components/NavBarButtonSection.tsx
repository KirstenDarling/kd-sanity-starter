export const NavBarButtonSection = ({
  buttonText,
  isButtonRounded,
  textColor,
  font,
  buttonBorderColor,
  isNavBar1 = true,
}: {
  buttonText?: string;
  isButtonRounded?: boolean;
  buttonBorderColor?: string;
  textColor?: string;
  font?: string;
  isNavBar1?: boolean;
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

export default NavBarButtonSection;
