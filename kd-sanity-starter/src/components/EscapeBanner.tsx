import homeStyles from '../styles/home.module.css';

const EscapeBanner = ({ pageType }: { pageType?: string }) => {
  return (
    <a href='/'>
      <div className='escapeBanner h-[80px] w-screen bg-blue-600 font-bold fixed z-50 text-white'>
        <h2 className='color-white text-center pt-[10px]'>
          You are currently viewing the{' '}
          <span
            className={`${pageType == 'creative' && `bg-[#cb6ce6] text-white text-[24px] center text-italic cursor-pointer ${homeStyles.abhayaLibreBoldItalic}`} ${pageType == 'professional' && `bg-[#5171ff] text-white text-[24px] center cursor-pointer font-sans ${homeStyles.abhayaLibreBold}`}`}
          >
            {pageType}
          </span>
          &nbsp;&nbsp;site.
          <br />
          Click here to change your view.
        </h2>
      </div>
    </a>
  );
};

export default EscapeBanner;
