import Image from 'next/image';
import corporateLogo from '../../public/corporateLogo.gif';

const NavBar = () => {
  return (
    <div className='navBar flex bg-white justify-between'>
      <div className='logo ml-[40px]'>
        <Image alt='travel' src={corporateLogo} height={250} width={250} quality={100} />
      </div>
      <div className='navLinksGrouping w-[30%] flex justify-around self-center mr-[40px'>
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
