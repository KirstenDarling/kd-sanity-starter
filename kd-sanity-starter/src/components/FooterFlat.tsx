import Image, { StaticImageData } from 'next/image';

const FooterFlat = ({
  pageTitle,
  legalText,
  links,
  backgroundColor,
  appIcon,
  twitterIcon,
  instagramIcon,
  linkedinIcon,
}: {
  pageTitle?: string;
  legalText?: string;
  links?: { title: string; URL: string }[];
  backgroundColor?: string;
  appIcon: StaticImageData;
  twitterIcon: StaticImageData;
  instagramIcon: StaticImageData;
  linkedinIcon: StaticImageData;
}) => {
  return (
    <div
      className={`self-stretch px-8 py-12 ${backgroundColor} justify-between items-center inline-flex`}
    >
      <div className='grow shrink basis-0 h-[57px] justify-between items-center flex'>
        <div className='flex-col justify-center items-center gap-1 inline-flex'>
          <div className='w-8 h-8 relative'>
            <Image src={appIcon} alt='' />
          </div>
          <div className="text-orange-200 text-sm font-normal font-['Work Sans'] leading-[21px]">
            {pageTitle}
          </div>
        </div>
        <div className='flex-col justify-center items-end gap-2 inline-flex'>
          <div className='justify-start items-center gap-8 inline-flex'>
            {links &&
              links.map((link, index) => (
                <div
                  key={index}
                  className="text-orange-200 text-xs font-normal font-['Work Sans'] leading-tight"
                >
                  {link.title}
                </div>
              ))}
          </div>
          <div className="text-amber-300 text-xs font-normal font-['Work Sans'] leading-tight">
            {legalText}
          </div>
        </div>
        <div className='justify-start items-start gap-4 flex'>
          <div className='w-6 h-6 relative'>
            <Image alt='' src={twitterIcon} />
          </div>
          <div className='w-6 h-6 relative'>
            <Image alt='' src={instagramIcon} />
          </div>
          <div className='w-6 h-6 relative'>
            <Image alt='' src={linkedinIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterFlat;
