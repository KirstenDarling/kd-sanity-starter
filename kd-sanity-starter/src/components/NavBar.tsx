import Image from 'next/image';
import Link from 'next/link';
import corporateLogo from '../../public/corporateLogo.gif';

export const NavBar = () => {
  return (
    <div className='navBar flex bg-white justify-between'>
      <div className='logo ml-[40px]'>
        <Image alt='travel' src={corporateLogo} height={250} width={250} quality={100} />
      </div>
      <div className='navLinksGrouping w-[30%] flex justify-around self-center mr-[40px'>
        <Link href='/professional'>
          <button className='navButton'>
            <p>Home</p>
          </button>
        </Link>
        <Link href='/portfolio'>
          <button className='navButton'>
            <p>Portfolio</p>
          </button>
        </Link>
        <Link href='/certifications'>
          <button className='navButton'>
            <p>Certifications</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
