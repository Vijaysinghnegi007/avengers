// Main App component
function App() {
  // Add a loading state to prevent black screen
  const [isLoading, setIsLoading] = React.useState(true);
  const [assetsLoaded, setAssetsLoaded] = React.useState(false);
  const [loadingProgress, setLoadingProgress] = React.useState(0);
  const [loadingStage, setLoadingStage] = React.useState('Initializing...');

  // Preload critical assets with improved error handling
  React.useEffect(() => {
    // Force immediate render to prevent black screen
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';

    // Create an array of image URLs to preload with priority order
    const criticalImages = [
    heroBackgroundImages[0], // Space background is most critical
    heroBackgroundImages[1], // Second space background
    charactersData[0].image, // Iron Man
    charactersData[1].image // Captain America
    ];

    const secondaryImages = [
    charactersData[2].image,
    charactersData[3].image,
    charactersData[4].image,
    additionalCharactersData[1].image];


    let criticalLoadedCount = 0;
    const totalCriticalImages = criticalImages.length;

    // First load critical images
    setLoadingStage('Loading essential assets...');

    const loadCriticalImages = () => {
      return new Promise((resolve) => {
        if (criticalImages.length === 0) {
          resolve();
          return;
        }

        criticalImages.forEach((imgSrc) => {
          const img = new Image();
          img.src = imgSrc;

          img.onload = () => {
            criticalLoadedCount++;
            setLoadingProgress(Math.floor(criticalLoadedCount / totalCriticalImages * 50)); // First 50%
            if (criticalLoadedCount === totalCriticalImages) {
              resolve();
            }
          };

          img.onerror = () => {
            console.error(`Failed to load critical image: ${imgSrc}`);
            criticalLoadedCount++;
            setLoadingProgress(Math.floor(criticalLoadedCount / totalCriticalImages * 50));
            if (criticalLoadedCount === totalCriticalImages) {
              resolve();
            }
          };
        });

        // Shorter fallback for critical images to prevent long black screen
        setTimeout(() => {
          if (criticalLoadedCount < totalCriticalImages) {
            console.warn('Using fallback timer for critical images');
            resolve();
          }
        }, 3000);
      });
    };

    // Then load secondary images
    const loadSecondaryImages = () => {
      return new Promise((resolve) => {
        setLoadingStage('Assembling heroes...');

        if (secondaryImages.length === 0) {
          resolve();
          return;
        }

        let secondaryLoadedCount = 0;
        const totalSecondaryImages = secondaryImages.length;

        secondaryImages.forEach((imgSrc) => {
          const img = new Image();
          img.src = imgSrc;

          img.onload = () => {
            secondaryLoadedCount++;
            // Calculate progress from 50% to 100%
            const secondaryProgress = Math.floor(secondaryLoadedCount / totalSecondaryImages * 50);
            setLoadingProgress(50 + secondaryProgress);

            if (secondaryLoadedCount === totalSecondaryImages) {
              resolve();
            }
          };

          img.onerror = () => {
            console.error(`Failed to load secondary image: ${imgSrc}`);
            secondaryLoadedCount++;
            const secondaryProgress = Math.floor(secondaryLoadedCount / totalSecondaryImages * 50);
            setLoadingProgress(50 + secondaryProgress);

            if (secondaryLoadedCount === totalSecondaryImages) {
              resolve();
            }
          };
        });

        // Shorter fallback for secondary images
        setTimeout(() => {
          if (secondaryLoadedCount < totalSecondaryImages) {
            console.warn('Using fallback timer for secondary images');
            resolve();
          }
        }, 2000);
      });
    };

    // Execute loading sequence
    const loadAllAssets = async () => {
      try {
        await loadCriticalImages();
        await loadSecondaryImages();
        setLoadingStage('Preparing universe...');
        setAssetsLoaded(true);
      } catch (error) {
        console.error('Error loading assets:', error);
        // Ensure we still complete loading even if there's an error
        setLoadingStage('Recovering...');
        setAssetsLoaded(true);
      }
    };

    loadAllAssets();

    // Final fallback timer in case everything else fails - shorter timeout
    const finalTimer = setTimeout(() => {
      if (!assetsLoaded) {
        console.warn('Using final fallback timer to complete loading');
        setLoadingStage('Finalizing...');
        setAssetsLoaded(true);
      }
    }, 5000); // Reduced from 10000 to prevent long black screen

    return () => clearTimeout(finalTimer);
  }, []);

  // Once assets are loaded, remove loading screen after a short delay
  React.useEffect(() => {
    if (assetsLoaded) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800); // Reduced from 1000 to make transition faster

      return () => clearTimeout(timer);
    }
  }, [assetsLoaded]);

  if (isLoading) {
    return (
      <div data-name="loading-screen" className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="w-16 h-16 border-4 border-avengers-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-white text-xl mb-2">Assembling Heroes...</h2>
          <p className="text-gray-400 text-sm mb-4">
            {assetsLoaded ? 'Preparing universe...' : `${loadingStage} ${loadingProgress}%`}
          </p>
          <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4">
            <div
              data-name="loading-progress-bar"
              className="bg-gradient-to-r from-avengers-red to-avengers-blue h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}>
            </div>
          </div>
          <p className="text-gray-500 text-xs italic">The Avengers are assembling from across the universe</p>
        </div>
      </div>);

  }

  return (
    <div data-name="app-container" className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <MovieGrid />
      <CharacterGrid />
      <Timeline />
      <NewsSection />
      <FAQ />
      <Footer />
      <BackgroundMusic />
    </div>);

}

// Render the App to the DOM
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);