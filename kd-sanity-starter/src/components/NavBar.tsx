import Image from 'next/image';
import corporateLogo from '../../public/corporateLogo.gif';

const NavBar = () => {
  return (
    <div
      className='navBar'
      style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}
    >
      <div className='logo' style={{ marginLeft: '40px' }}>
        <Image alt='travel' src={corporateLogo} height={250} width={250} quality={100} />
      </div>
      <div
        className='navLinksGrouping'
        style={{
          width: '30%',
          display: 'flex',
          justifyContent: 'space-around',
          alignSelf: 'center',
          marginRight: '40px',
        }}
      >
        <a href='/corporate'>
          <button className='navButton'>
            <p>Home</p>
          </button>
        </a>
        <a href='/portfolio'>
          <button className='navButton'>
            <p>Portfolio</p>
          </button>
        </a>
        <a href='/certifications'>
          <button className='navButton'>
            <p>Certifications</p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
