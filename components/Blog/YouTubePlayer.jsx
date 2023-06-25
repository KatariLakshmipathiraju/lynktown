import YouTube from 'react-youtube';
import styles from './YouTubePlayer.module.css'; 

const YouTubePlayer = ({ videoUrl }) => {
  const getVideoIdFromUrl = (url) => {
    const videoId = url.split('/').pop();
    return videoId;
  };

  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  const videoId = getVideoIdFromUrl(videoUrl);

  return (
    <div className={styles.youtubeContainer}>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubePlayer;
