import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import YouTubeVideo from './YouTubeVideo';

const Circle = ({
  text,
  videoUrl,
  size,
  position,
  left,
  top,
  hasPlayButton,
  handleCircleClick,
  backgroundColor,
}: {
  text?: string;
  videoUrl?: string;
  size: '150px' | '250px' | '375px' | '575px';
  position?: 'absolute' | 'relative';
  left?: string;
  top?: string;
  hasPlayButton?: boolean;
  handleCircleClick?: () => void;
  backgroundColor?: string;
}) => {
  const thisSize = size || '375px';
  const circleStyle = {
    width: thisSize,
    height: thisSize,
    borderRadius: '50%',
    backgroundColor: backgroundColor || '#9966CC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '20px',
    position: position || 'relative',
    left: left || '0',
    top: top || '0',
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
  const [showVideo, setShowVideo] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    hasPlayButton && isHovered && setShowVideo(true);
    hasPlayButton && !isHovered && setShowVideo(false);
    !hasPlayButton && setShowVideo(true);
  }, [hasPlayButton, isHovered]);

  return (
    <Draggable>
      <div
        style={isHovered ? { ...glow, ...circleStyle } : circleStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCircleClick}
      >
        {text && <p className='text-center'>{text}</p>}
        {!isHovered && hasPlayButton && <button>the vibe</button>}
        {videoUrl && showVideo && <YouTubeVideo videoUrl={videoUrl} />}
      </div>
    </Draggable>
  );
};

export default Circle;
