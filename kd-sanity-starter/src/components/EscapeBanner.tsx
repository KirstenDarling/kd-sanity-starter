const EscapeBanner = ({ pageType }: { pageType?: string }) => {
  return (
    <a href='/'>
      <div className='escapeBanner h-[65px] w-screen bg-blue-600 font-bold fixed z-50'>
        <h2 className='color-white text-center pt-[10px]'>
          You are currently viewing the {pageType} site.
          <br />
          Click here to change your view.
        </h2>
      </div>
    </a>
  );
};

export default EscapeBanner;
