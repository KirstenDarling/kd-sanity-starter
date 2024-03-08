import { useState } from 'react';
import YouTubeVideo from './YouTubeVideo';

const Circle = ({
  text,
  videoUrl,
  size,
}: {
  text?: string;
  videoUrl?: string;
  size: '150px' | '250px' | '375px';
}) => {
  const thisSize = size || '375px';
  const circleStyle = {
    width: thisSize,
    height: thisSize,
    borderRadius: '50%',
    backgroundColor: '#9966CC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '20px',
  };

  const glowingBox = {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    transition: 'box-shadow 0.3s ease',
  };

  const glow = {
    boxShadow: '0 0 20px #00cfff',
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={isHovered ? { ...glow, ...circleStyle } : circleStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text && <p className='text-center'>{text}</p>}
      {videoUrl && <YouTubeVideo videoUrl={videoUrl} />}
    </div>
  );
};

export default Circle;
