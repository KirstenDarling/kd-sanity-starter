import Image from 'next/image';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import NameImage from '../../public/nameimage.png';

const Footer = ({ pageType }: { pageType?: string }) => {
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isLinkedinHovered, setIsLinkedinHovered] = useState(false);
  const [isHomeHovered, setIsHomeHovered] = useState(false);

  const handleMouseEnterGithub = () => {
    setIsGithubHovered(true);
  };

  const handleMouseLeaveGithub = () => {
    setIsGithubHovered(false);
  };

  const handleMouseEnterLinkedIn = () => {
    setIsLinkedinHovered(true);
  };

  const handleMouseLeaveLinkedIn = () => {
    setIsLinkedinHovered(false);
  };

  const handleMouseEnterHome = () => {
    setIsHomeHovered(true);
  };

  const handleMouseLeaveHome = () => {
    setIsHomeHovered(false);
  };

  return (
    <div className='footerSection flex w-full h-[350px] bg-[#5171ff] pl-[12%] justify-between'>
      <div className='w-full flex flex-row justify-between pt-[5%]'>
        <a href='/'>
          <Image
            src={NameImage}
            alt='Kirsten Bachert-Darling'
            height={100}
            width={200}
            className='border-[2%] pt-[12%]'
          />
        </a>
        <div className='flex flex-row pt-[5%] mt-[-2%]'>
          <IconContext.Provider
            value={{
              style: {
                marginRight: '20px',
              },
            }}
          >
            <a
              href='https://github.com/KirstenDarling'
              target='_blank'
              onMouseEnter={handleMouseEnterGithub}
              onMouseLeave={handleMouseLeaveGithub}
            >
              <FaGithub
                className={`${isGithubHovered ? 'color-[#00c2cb]' : 'color-white'} h-[50px] w-[50px] mr-[20px]`}
              />
            </a>
            <a
              href='https://www.linkedin.com/in/kirstendarling/'
              target='_blank'
              onMouseEnter={handleMouseEnterLinkedIn}
              onMouseLeave={handleMouseLeaveLinkedIn}
            >
              <FaLinkedin
                className={`${isLinkedinHovered ? 'color-[#00c2cb]' : 'color-white'} h-[50px] w-[50px] mr-[20px]`}
              />
            </a>
            <a href='https://LinkedIn.com/kdarling93' target='_blank'></a>
          </IconContext.Provider>
        </div>
        <div className='siteMap flex pt-[3%] color-white pr-[15%]'>
          <div className='flex flex-col mr-[5%]'>
            <a href='/'>
              <p>Home Page</p>
            </a>
            <a href='/professional'>
              <p>Coporate Site</p>
            </a>
            <a href='/creative'>
              <p>Creative Site</p>
            </a>
          </div>
          <div className='flex flex-col'>
            <a href='/portfolio'>
              <p>Portfolio</p>
            </a>
            <a href='/certifications'>
              <p>Certifications</p>
            </a>
            <a href='/learning-room'>
              <p>Learning Room</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
