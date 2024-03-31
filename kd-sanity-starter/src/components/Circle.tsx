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
}: {
  text?: string;
  videoUrl?: string;
  size: '150px' | '250px' | '375px';
  position?: 'absolute' | 'relative';
  left?: string;
  top?: string;
  hasPlayButton?: boolean;
}) => {
  const [clickedCircle, setCircleClicked] = useState(false);
  const thisSize = size || '375px';
  const circleStyle = {
    width: clickedCircle ? '375px' : thisSize,
    height: clickedCircle ? '375px' : thisSize,
    borderRadius: '50%',
    backgroundColor: '#9966CC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '20px',
    position: position || 'relative',
    left: clickedCircle ? '45%' : left || '0',
    top: clickedCircle ? '25%' : top || '0',
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

  const handleTextClick = () => {
    setCircleClicked(true);
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
      >
        {text && (
          <p onClick={handleTextClick} className='text-center'>
            {text}
          </p>
        )}
        {!isHovered && hasPlayButton && <button>the vibe</button>}
        {videoUrl && showVideo && <YouTubeVideo videoUrl={videoUrl} />}
      </div>
    </Draggable>
  );
};

export default Circle;
