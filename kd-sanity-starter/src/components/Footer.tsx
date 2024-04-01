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
    <div
      className='footerSection'
      style={{
        display: 'flex',
        width: '100vw',
        height: '350px',
        backgroundColor: '#5171ff',
        paddingLeft: '12%',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: '5%',
        }}
      >
        <a href='/'>
          <Image
            src={NameImage}
            alt='Kirsten Bachert-Darling'
            height={100}
            width={200}
            style={{ borderRadius: '2%', paddingTop: '12%' }}
          />
        </a>
        <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '5%', marginTop: '-2%' }}>
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
                style={{
                  color: isGithubHovered ? '#00c2cb' : 'white',
                  height: '50px',
                  width: '50px',
                  marginRight: '20px',
                }}
              />
            </a>
            <a
              href='https://www.linkedin.com/in/kirstendarling/'
              target='_blank'
              onMouseEnter={handleMouseEnterLinkedIn}
              onMouseLeave={handleMouseLeaveLinkedIn}
            >
              <FaLinkedin
                style={{
                  color: isLinkedinHovered ? '#00c2cb' : 'white',
                  height: '50px',
                  width: '50px',
                  marginRight: '20px',
                }}
              />
            </a>
            <a href='https://LinkedIn.com/kdarling93' target='_blank'></a>
          </IconContext.Provider>
        </div>
        <div
          className='siteMap'
          style={{ display: 'flex', paddingTop: '3%', color: 'white', paddingRight: '15%' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', marginRight: '5%' }}>
            <a href='/'>
              <p>Home Page</p>
            </a>
            <a href='/corporate'>
              <p>Coporate Site</p>
            </a>
            <a href='/creative'>
              <p>Creative Site</p>
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
