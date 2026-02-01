// Hero component with dynamic space emergence animation
function Hero() {
  // Use React.useState to track the loaded state of background image and animation states
  const [bgLoaded, setBgLoaded] = React.useState(false);
  const [animationStarted, setAnimationStarted] = React.useState(false);
  const [heroesReady, setHeroesReady] = React.useState(false);
  const [heroesAnimationIndex, setHeroesAnimationIndex] = React.useState(-1);
  const [selectedHero, setSelectedHero] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  // Animation state for spaceship and effects
  const [spaceshipVisible, setSpaceshipVisible] = React.useState(false);
  const [spaceshipDeparture, setSpaceshipDeparture] = React.useState(false);
  const [jumpTrails, setJumpTrails] = React.useState([]);
  const [activeParticles, setActiveParticles] = React.useState([]);
  const [isFloating, setIsFloating] = React.useState(false);

  // Handle background image load and trigger animations
  React.useEffect(() => {
    // Load background image
    const img = new Image();
    img.src = heroBackgroundImages[0];
    img.onload = () => {
      setBgLoaded(true);

      // Start animation sequence after background loads
      setTimeout(() => setAnimationStarted(true), 300);
      setTimeout(() => setHeroesReady(true), 800);
    };

    // Fallback in case image doesn't load
    const timer = setTimeout(() => {
      if (!bgLoaded) {
        console.warn('Using fallback timer for hero background');
        setBgLoaded(true);
        setAnimationStarted(true);
        setHeroesReady(true);
      }
    }, 2000); // Reduced from 3000 to prevent long wait

    return () => clearTimeout(timer);
  }, [bgLoaded]);

  // Spaceship jump animation effect for heroes
  React.useEffect(() => {
    if (heroesReady) {
      // Start the spaceship jump animation for heroes
      const maxHeroes = 6; // Total number of heroes
      let currentIndex = 0;

      // Use varying intervals for more natural appearance - heroes jumping at different times
      const animationIntervals = [300, 250, 350, 280, 320, 270]; // Milliseconds between each hero

      // Hero positions for jumping
      const heroPositions = [
      { left: '10%', top: '40%' }, // Iron Man
      { left: '25%', top: '45%' }, // Captain America
      { left: '40%', top: '35%' }, // Thor
      { right: '40%', top: '45%' }, // Black Widow
      { right: '25%', top: '40%' }, // Hulk
      { right: '10%', top: '35%' } // Scarlet Witch
      ];

      // Hero colors for jump trails
      const heroColors = [
      'rgba(229, 83, 83, 0.8)', // Iron Man - red
      'rgba(59, 130, 246, 0.8)', // Captain America - blue
      'rgba(245, 158, 11, 0.8)', // Thor - gold
      'rgba(220, 38, 38, 0.8)', // Black Widow - red
      'rgba(16, 185, 129, 0.8)', // Hulk - green
      'rgba(124, 58, 237, 0.8)' // Scarlet Witch - purple
      ];

      // Show spaceship and get hero positions
      setSpaceshipVisible(true);
      const spaceshipData = { heroPositions, heroColors };

      // Animate heroes jumping from spaceship
      const showNextHero = () => {
        if (currentIndex < maxHeroes && spaceshipData) {
          // Create jump trail effect - enhanced for better visibility
          const createJumpTrail = (position, color) => {
            // Calculate jump start position (near the spaceship)
            const jumpStartLeft = position.left ? parseInt(position.left) : 100 - parseInt(position.right || '0');
            const jumpStartTop = 15; // Near the top where the spaceship is

            const trailId = Date.now() + Math.random();
            const newTrail = {
              id: trailId,
              left: `${jumpStartLeft}%`,
              top: `${jumpStartTop}%`,
              color
            };

            setJumpTrails((prev) => [...prev, newTrail]);

            // Add some particles for more dynamic effect
            const newParticles = [];
            for (let i = 0; i < 3; i++) {
              const particleId = Date.now() + Math.random() + i;
              newParticles.push({
                id: particleId,
                width: `${20 + Math.random() * 20}px`,
                height: `${20 + Math.random() * 20}px`,
                background: color,
                left: `${jumpStartLeft + (Math.random() * 20 - 10)}%`,
                top: `${jumpStartTop + Math.random() * 10}%`,
                animation: `particle-float-${Math.floor(Math.random() * 5) + 1} ${2 + Math.random() * 2}s infinite ease-in-out`
              });
            }

            setActiveParticles((prev) => [...prev, ...newParticles]);

            // Remove particles after animation
            setTimeout(() => {
              setActiveParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
            }, 2000);

            // Remove trail after animation completes
            setTimeout(() => {
              setJumpTrails((prev) => prev.filter((t) => t.id !== trailId));
            }, 1500);
          };

          // Show hero jumping from spaceship
          const position = spaceshipData.heroPositions[currentIndex];
          const color = spaceshipData.heroColors[currentIndex];

          // Create jump trail effect
          createJumpTrail(position, color);

          // Show hero with animation
          setTimeout(() => {
            setHeroesAnimationIndex(currentIndex);
            currentIndex++;

            if (currentIndex < maxHeroes) {
              setTimeout(showNextHero, animationIntervals[currentIndex - 1]);
            } else {
              // All heroes have jumped, make spaceship leave
              setSpaceshipDeparture(true);
            }
          }, 300);
        }
      };

      // Start the hero jumping sequence after a short delay
      setTimeout(showNextHero, 800);

      // After all heroes have appeared, add floating animation
      const totalDelay = 800 + animationIntervals.reduce((sum, interval) => sum + interval, 0) + 300 * maxHeroes;
      setTimeout(() => {
        setIsFloating(true);
      }, totalDelay);
    }
  }, [heroesReady]);

  // Handle hero image click to open modal
  const handleHeroClick = (hero) => {
    setSelectedHero(hero);
    setModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section
      id="home"
      data-name="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden space-bg">

      {/* Space background with stars and spaceship */}
      <div
        data-name="space-background"
        className="absolute inset-0 bg-black z-0 space-bg"
        style={{
          backgroundImage: `url('${heroBackgroundImages[0]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center', /* Top position to show the spaceship at the top */
          filter: 'brightness(0.8) contrast(1.5) saturate(1.2)', /* Enhanced visibility for spaceship */
          opacity: bgLoaded ? 1 : 0,
          transition: 'opacity 1.5s ease-in',
          transform: animationStarted ? 'scale(1.05)' : 'scale(1)',
          transformOrigin: 'center top', /* Center top to emphasize the spaceship at the top */
          transition: 'opacity 1.5s ease-in, transform 20s ease-in-out'
        }}>
      </div>
      
      {/* Animated stars overlay */}
      <div
        data-name="animated-stars"
        className="absolute inset-0 z-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            radial-gradient(circle at 50% 70%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 10%, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            radial-gradient(circle at 10% 90%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '200px 200px',
          opacity: bgLoaded ? 0.8 : 0,
          animation: 'space-twinkle 15s infinite ease-in-out',
          transition: 'opacity 2s ease-in'
        }}>
      </div>
      
      {/* Cosmic fog overlay */}
      <div
        data-name="cosmic-fog"
        className="absolute inset-0 z-10"
        style={{
          background: 'radial-gradient(circle at center, rgba(76, 0, 255, 0.4), rgba(229, 62, 62, 0.2) 40%, rgba(0, 0, 0, 0) 70%)',
          opacity: animationStarted ? 0.8 : 0,
          transform: animationStarted ? 'scale(1.1)' : 'scale(1)',
          transition: 'opacity 2s ease-in, transform 15s ease-in-out',
          animation: animationStarted ? 'cosmic-pulse 10s infinite alternate ease-in-out' : 'none'
        }}>
      </div>
      
      {/* Cosmic energy particles */}
      <div
        data-name="cosmic-particles"
        className="absolute inset-0 z-15 overflow-hidden"
        style={{
          opacity: animationStarted ? 0.7 : 0,
          transition: 'opacity 2s ease-in'
        }}>

        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) =>
        <div
          key={i}
          className={`cosmic-particle particle-${i}`}
          style={{
            opacity: isFloating ? 0.7 : undefined,
            filter: isFloating ? 'blur(25px)' : undefined
          }}>
          </div>
        )}
      </div>

      <div className="container-custom mx-auto px-4 z-20 text-center">
        {/* Main hero content */}
        <div data-name="hero-content" className="max-w-4xl mx-auto">
          <h1
            data-name="hero-title"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-text-shadow"
            style={{
              opacity: animationStarted ? 1 : 0,
              transform: animationStarted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
              textShadow: '0 0 20px rgba(245, 182, 66, 0.8), 0 0 40px rgba(245, 182, 66, 0.4)'
            }}>

            <span className="text-avengers-blue">AVENGERS</span>
            <span className="text-white">ASSEMBLE</span>
          </h1>
          
          <p
            data-name="hero-subtitle"
            className="text-xl md:text-2xl text-gray-200 mb-8"
            style={{
              opacity: animationStarted ? 1 : 0,
              transform: animationStarted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1.5s ease-out 0.3s, transform 1.5s ease-out 0.3s'
            }}>

            Earth's Mightiest Heroes unite to protect the universe
          </p>
          
          <div
            data-name="hero-buttons"
            className="flex flex-col sm:flex-row justify-center gap-4"
            style={{
              opacity: animationStarted ? 1 : 0,
              transform: animationStarted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1.5s ease-out 0.6s, transform 1.5s ease-out 0.6s'
            }}>

            <a
              href="#movies"
              data-name="explore-button"
              className="avengers-button text-lg px-8 py-3">

              Explore Movies
            </a>
            <a
              href="#characters"
              data-name="meet-heroes-button"
              className="bg-transparent border-2 border-white hover:border-avengers-gold text-white hover:text-avengers-gold transition-colors duration-300 text-lg px-8 py-3 rounded-md">

              Meet the Heroes
            </a>
          </div>
        </div>
        
        {/* Hero characters emerging from portals */}
        <div
          data-name="hero-characters"
          className="mt-12 relative h-64 md:h-80 lg:h-96"
          style={{
            opacity: heroesReady ? 1 : 0,
            transition: 'opacity 1s ease-in'
          }}>

          {/* Spaceship and jump effects container */}
          <div
            data-name="portal-effects"
            className="absolute inset-0 z-10">

            {spaceshipVisible &&
              <div
                className={`spaceship-effect ${spaceshipDeparture ? 'spaceship-departure' : ''}`}
                style={{
                  width: '300px',
                  height: '120px',
                  background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.5), transparent 70%)',
                  boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
                }}
                data-name="spaceship-effect">
                <div style={{ position: 'absolute', bottom: '-30px', left: '30%', width: '60px', height: '80px', background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.9), transparent 70%)', filter: 'blur(15px)', boxShadow: '0 0 20px rgba(59, 130, 246, 0.7)' }}></div>
                <div style={{ position: 'absolute', bottom: '-30px', right: '30%', width: '60px', height: '80px', background: 'radial-gradient(ellipse at center, rgba(229, 62, 62, 0.9), transparent 70%)', filter: 'blur(15px)', boxShadow: '0 0 20px rgba(229, 62, 62, 0.7)' }}></div>
                <div style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)', width: '70px', height: '90px', background: 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.9), transparent 70%)', filter: 'blur(15px)', boxShadow: '0 0 25px rgba(245, 158, 11, 0.7)' }}></div>
              </div>
            }

            {jumpTrails.map((trail) =>
              <div
                key={trail.id}
                className="jump-trail"
                style={{
                  width: '100px',
                  height: '150px',
                  position: 'absolute',
                  left: trail.left,
                  top: trail.top,
                  background: `radial-gradient(ellipse at center, ${trail.color}, transparent 70%)`,
                  filter: 'blur(20px)',
                  zIndex: '12',
                  opacity: '0.9',
                  boxShadow: `0 0 30px ${trail.color}`
                }}>
              </div>
            )}

            {activeParticles.map((particle) =>
              <div
                key={particle.id}
                style={{
                  position: 'absolute',
                  width: particle.width,
                  height: particle.height,
                  borderRadius: '50%',
                  background: particle.background,
                  left: particle.left,
                  top: particle.top,
                  opacity: '0.7',
                  filter: 'blur(5px)',
                  animation: particle.animation,
                  zIndex: '11'
                }}>
              </div>
            )}
          </div>
          
          {/* Character silhouettes jumping from spaceship and floating in space */}
          <div className="absolute inset-0 flex justify-center items-center">
            {/* Iron Man */}
            <div
              data-name="hero-ironman"
              className={`absolute h-full ${heroesAnimationIndex >= 0 ? 'hero-entrance' : ''} ${isFloating ? 'hero-float' : ''}`}
              style={{
                left: '10%',
                top: '40%',
                height: '90%',
                animationDelay: isFloating ? '0s' : '0s',
                opacity: heroesAnimationIndex >= 0 ? 1 : 0,
                visibility: heroesAnimationIndex >= 0 ? 'visible' : 'hidden',
                cursor: 'pointer',
                zIndex: 20, /* Ensure heroes are above particles */
                transformOrigin: 'center top' /* Origin for jump animation */
              }}
              onClick={() => handleHeroClick({ name: 'Iron Man', image: charactersData[0].image })}>

              <img
                src={charactersData[0].image}
                alt="Iron Man"
                className="h-full object-contain hero-cosmic-effect"
                style={{ filter: 'drop-shadow(0 0 15px rgba(229, 83, 83, 0.9))' }} />

              <div className="hero-glow" style={{ background: 'radial-gradient(circle at center, rgba(229, 83, 83, 0.6), transparent 70%)', top: '50%', bottom: 'auto', opacity: isFloating ? '0.8' : undefined, filter: isFloating ? 'blur(30px)' : undefined }}></div>
              {isFloating && <div className="hero-landing-effect"></div>}
            </div>
            
            {/* Captain America */}
            <div
              data-name="hero-captain"
              className={`absolute h-full ${heroesAnimationIndex >= 1 ? 'hero-entrance' : ''} ${isFloating ? 'hero-float' : ''}`}
              style={{
                left: '25%',
                top: '45%',
                height: '85%',
                animationDelay: isFloating ? '0.2s' : '0.3s',
                opacity: heroesAnimationIndex >= 1 ? 1 : 0,
                visibility: heroesAnimationIndex >= 1 ? 'visible' : 'hidden',
                cursor: 'pointer',
                zIndex: 20, /* Ensure heroes are above particles */
                transformOrigin: 'center top' /* Origin for jump animation */
              }}
              onClick={() => handleHeroClick({ name: 'Captain America', image: charactersData[1].image })}>

              <img
                src={charactersData[1].image}
                alt="Captain America"
                className="h-full object-contain hero-cosmic-effect"
                style={{ filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.9))' }} />

              <div className="hero-glow" style={{ background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.6), transparent 70%)', top: '50%', bottom: 'auto', opacity: isFloating ? '0.8' : undefined, filter: isFloating ? 'blur(30px)' : undefined }}></div>
              {isFloating && <div className="hero-landing-effect"></div>}
            </div>
            
            {/* Thor */}
            <div
              data-name="hero-thor"
              className={`absolute h-full ${heroesAnimationIndex >= 2 ? 'hero-entrance' : ''} ${isFloating ? 'hero-float' : ''}`}
              style={{
                left: '40%',
                top: '35%',
                height: '95%',
                animationDelay: isFloating ? '0.4s' : '0.6s',
                opacity: heroesAnimationIndex >= 2 ? 1 : 0,
                visibility: heroesAnimationIndex >= 2 ? 'visible' : 'hidden',
                cursor: 'pointer',
                zIndex: 20, /* Ensure heroes are above particles */
                transformOrigin: 'center top' /* Origin for jump animation */
              }}
              onClick={() => handleHeroClick({ name: 'Thor', image: charactersData[2].image })}>

              <img
                src={charactersData[2].image}
                alt="Thor"
                className="h-full object-contain hero-cosmic-effect"
                style={{ filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.9))' }} />

              <div className="hero-glow" style={{ background: 'radial-gradient(circle at center, rgba(245, 158, 11, 0.6), transparent 70%)', top: '50%', bottom: 'auto', opacity: isFloating ? '0.8' : undefined, filter: isFloating ? 'blur(30px)' : undefined }}></div>
              {isFloating && <div className="hero-landing-effect"></div>}
            </div>
            
            {/* Black Widow */}
            <div
              data-name="hero-blackwidow"
              className={`absolute h-full ${heroesAnimationIndex >= 3 ? 'hero-entrance' : ''} ${isFloating ? 'hero-float' : ''}`}
              style={{
                right: '40%',
                top: '45%',
                height: '80%',
                animationDelay: isFloating ? '0.6s' : '0.9s',
                opacity: heroesAnimationIndex >= 3 ? 1 : 0,
                visibility: heroesAnimationIndex >= 3 ? 'visible' : 'hidden',
                cursor: 'pointer',
                zIndex: 20, /* Ensure heroes are above particles */
                transformOrigin: 'center top' /* Origin for jump animation */
              }}
              onClick={() => handleHeroClick({ name: 'Black Widow', image: charactersData[4].image })}>

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/0549eb2c-ead1-46c0-8b50-3bef2e22bd87.jpeg"
                alt="Black Widow"
                className="h-full object-contain hero-cosmic-effect"
                style={{ filter: 'drop-shadow(0 0 15px rgba(220, 38, 38, 0.9))' }} />

              <div className="hero-glow" style={{ background: 'radial-gradient(circle at center, rgba(220, 38, 38, 0.6), transparent 70%)', top: '50%', bottom: 'auto', opacity: isFloating ? '0.8' : undefined, filter: isFloating ? 'blur(30px)' : undefined }}></div>
              {isFloating && <div className="hero-landing-effect"></div>}
            </div>
            
            {/* Hulk */}
            <div
              data-name="hero-hulk"
              className={`absolute h-full ${heroesAnimationIndex >= 4 ? 'hero-entrance' : ''} ${isFloating ? 'hero-float' : ''}`}
              style={{
                right: '25%',
                top: '40%',
                height: '90%',
                animationDelay: isFloating ? '0.8s' : '1.2s',
                opacity: heroesAnimationIndex >= 4 ? 1 : 0,
                visibility: heroesAnimationIndex >= 4 ? 'visible' : 'hidden',
                cursor: 'pointer',
                zIndex: 20, /* Ensure heroes are above particles */
                transformOrigin: 'center top' /* Origin for jump animation */
              }}
              onClick={() => handleHeroClick({ name: 'Hulk', image: charactersData[3].image })}>

              <img
                src={charactersData[3].image}
                alt="Hulk"
                className="h-full object-contain hero-cosmic-effect"
                style={{ filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.9))' }} />

              <div className="hero-glow" style={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.6), transparent 70%)', top: '50%', bottom: 'auto', opacity: isFloating ? '0.8' : undefined, filter: isFloating ? 'blur(30px)' : undefined }}></div>
              {isFloating && <div className="hero-landing-effect"></div>}
            </div>
            
            {/* Scarlet Witch */}
            <div
              data-name="hero-witch"
              className={`absolute h-full ${heroesAnimationIndex >= 5 ? 'hero-entrance' : ''} ${isFloating ? 'hero-float' : ''}`}
              style={{
                right: '10%',
                top: '35%',
                height: '85%',
                animationDelay: isFloating ? '1s' : '1.5s',
                opacity: heroesAnimationIndex >= 5 ? 1 : 0,
                visibility: heroesAnimationIndex >= 5 ? 'visible' : 'hidden',
                cursor: 'pointer',
                zIndex: 20, /* Ensure heroes are above particles */
                transformOrigin: 'center top' /* Origin for jump animation */
              }}
              onClick={() => handleHeroClick({ name: 'Scarlet Witch', image: additionalCharactersData[1].image })}>

              <img
                src={additionalCharactersData[1].image}
                alt="Scarlet Witch"
                className="h-full object-contain hero-cosmic-effect"
                style={{ filter: 'drop-shadow(0 0 15px rgba(124, 58, 237, 0.9))' }} />

              <div className="hero-glow" style={{ background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.6), transparent 70%)', top: '50%', bottom: 'auto', opacity: isFloating ? '0.8' : undefined, filter: isFloating ? 'blur(30px)' : undefined }}></div>
              {isFloating && <div className="hero-landing-effect"></div>}
            </div>
          </div>
          
          {/* Cosmic energy effect - ambient glow */}
          <div
            data-name="cosmic-energy"
            className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"
            style={{
              opacity: heroesAnimationIndex >= 0 ? 0.6 : 0,
              transition: 'opacity 2s ease-out'
            }}>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div
        data-name="scroll-indicator"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white text-center cursor-pointer"
        onClick={() => document.getElementById('movies').scrollIntoView({ behavior: 'smooth' })}>

        <p className="text-sm mb-2 text-gray-300">Scroll to Explore More Missions</p>
        <div className="animate-bounce bg-white bg-opacity-20 p-2 rounded-full">
          <i className="fas fa-chevron-down text-white"></i>
        </div>
      </div>
      
      {/* Hero Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        image={selectedHero?.image}
        name={selectedHero?.name}
        onClose={closeModal} />

    </section>);

}