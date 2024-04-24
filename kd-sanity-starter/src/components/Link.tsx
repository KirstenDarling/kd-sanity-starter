export const Link = ({
  title,
  textColor,
  font,
  isNavBar1 = true,
}: {
  title?: string;
  textColor?: string;
  font?: string;
  isNavBar1?: boolean;
}) => {
  return (
    <div
      className={`w-${isNavBar1 ? '100' : '111'} self-stretch px-4 justify-start items-center gap-2 flex`}
    >
      <div className={`${textColor} text-xs font-normal ${font} leading-tight`}>{title}</div>
    </div>
  );
};

export default Link;
