import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoUrl }) => {
  const getVideoIdFromUrl = (url) => {
    const videoId = url.split('/').pop();
    return videoId;
  };

  const opts = {
    height: '315',
    width: '560',
    playerVars: {
      autoplay: 0,
    },
  };

  const videoId = getVideoIdFromUrl(videoUrl);

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubePlayer;
