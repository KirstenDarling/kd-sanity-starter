const YouTubeVideo = ({ videoUrl }: { videoUrl: string }, mini: boolean) => {
  // Extracting video ID from the URL
  const videoId = extractVideoId(videoUrl);

  return (
    <div className='video-container'>
      <iframe
        width='280'
        height='158'
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='YouTube video player'
      ></iframe>
    </div>
  );
};

// Function to extract video ID from the YouTube URL
interface ExtractVideoIdFn {
  (videoUrl: string): string;
}

const extractVideoId: ExtractVideoIdFn = (videoUrl) => {
  let videoId = '';
  if (videoUrl.includes('youtube.com')) {
    videoId = videoUrl.split('v=')[1];
  } else if (videoUrl.includes('youtu.be/')) {
    videoId = videoUrl.split('youtu.be/')[1];
  }
  const ampersandPosition = videoId.indexOf('&');
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition);
  }
  return videoId;
};

export default YouTubeVideo;
