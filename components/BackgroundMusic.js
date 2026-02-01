// BackgroundMusic component
function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef(null);

  React.useEffect(() => {
    // Initialize audio
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set initial volume to 30%
      audioRef.current.loop = true; // Enable looping
    }

    // Auto-play with user interaction (first click on the page)
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().
        then(() => {
          setIsPlaying(true);
          document.removeEventListener('click', handleFirstInteraction);
        }).
        catch((error) => {
          console.error('Audio playback failed:', error);
        });
      }
    };

    document.addEventListener('click', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().
        catch((error) => {
          console.error('Audio playback failed:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      data-name="background-music-control"
      className="fixed bottom-6 right-6 z-50 bg-black bg-opacity-70 rounded-full p-3 shadow-lg cursor-pointer hover:bg-opacity-90 transition-all duration-300"
      onClick={togglePlayback}>

      <audio
        ref={audioRef}
        src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/ffd0bff2-ab81-43db-a37b-887ba897b659.mp3"
        preload="auto" />

      {isPlaying ?
      <div data-name="music-playing-icon" className="text-avengers-red animate-pulse">
          <i className="fas fa-volume-up text-xl"></i>
        </div> :

      <div data-name="music-muted-icon" className="text-white">
          <i className="fas fa-volume-mute text-xl"></i>
        </div>
      }
    </div>);

}