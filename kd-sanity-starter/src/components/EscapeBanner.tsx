const EscapeBanner = ({ pageType }: { pageType?: string }) => {
  return (
    <a href='/'>
      <div
        className='escapeBanner'
        style={{
          height: '65px',
          width: '100vw',
          backgroundColor: '#5171ff',
          fontWeight: 'bold',
          position: 'fixed',
          zIndex: 1000,
        }}
      >
        <h2
          style={{
            color: 'white',
            textAlign: 'center',
            paddingTop: '10px',
          }}
        >
          You are currently viewing the {pageType} site.
          <br />
          Click here to change your view.
        </h2>
      </div>
    </a>
  );
};

export default EscapeBanner;
