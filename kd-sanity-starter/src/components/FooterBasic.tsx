import Image, { StaticImageData } from 'next/image';
import FooterColumn from './FooterColumn';

const FooterBasic = ({
  icon,
  pageTitle,
  subtitle,
  columns,
}: {
  icon: StaticImageData;
  pageTitle?: string;
  subtitle?: string;
  columns: { links: { link: string; URL: string }[] }[];
}) => {
  return (
    <div className='self-stretch px-8 py-16 bg-gray-100 justify-between items-start inline-flex'>
      <div className='grow shrink basis-0 h-[136px] justify-between items-start flex'>
        <div className='grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex'>
          <div className='justify-center items-center gap-2 inline-flex'>
            <div className='w-8 h-8 relative'>
              <Image alt='' src={icon} />
            </div>
            <div className="text-zinc-900 text-sm font-normal font-['Fira Sans'] leading-snug">
              {pageTitle}
            </div>
          </div>
          <div className="text-zinc-900 text-lg font-normal font-['Fira Sans'] leading-[27px]">
            {subtitle}
          </div>
        </div>
        <div className='grow shrink basis-0 h-[136px] justify-end items-start gap-10 flex'>
          {columns.map((column, index) => (
            <FooterColumn key={index} links={column.links} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBasic;
