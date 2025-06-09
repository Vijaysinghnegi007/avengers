// Hero component with dynamic space emergence animation
function Hero() {
  // Use React.useState to track the loaded state of background image and animation states
  const [bgLoaded, setBgLoaded] = React.useState(false);
  const [animationStarted, setAnimationStarted] = React.useState(false);
  const [heroesReady, setHeroesReady] = React.useState(false);
  const [heroesAnimationIndex, setHeroesAnimationIndex] = React.useState(-1);
  const [selectedHero, setSelectedHero] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

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

      // Create spaceship effect
      const createSpaceshipEffect = () => {
        // Create effects container if it doesn't exist
        const effectsContainer = document.querySelector('[data-name="portal-effects"]');
        if (effectsContainer) {
          // Clear any existing effects
          effectsContainer.innerHTML = '';

          // Create spaceship glow effect - more visible
          const spaceship = document.createElement('div');
          spaceship.className = 'spaceship-effect';
          spaceship.dataset.name = 'spaceship-effect';
          spaceship.style.width = '300px';
          spaceship.style.height = '120px';
          spaceship.style.background = 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.5), transparent 70%)';
          spaceship.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.3)';
          effectsContainer.appendChild(spaceship);

          // Create engine glow effects - enhanced visibility
          const engineLeft = document.createElement('div');
          engineLeft.className = 'spaceship-engine';
          engineLeft.style.position = 'absolute';
          engineLeft.style.bottom = '-30px';
          engineLeft.style.left = '30%';
          engineLeft.style.width = '60px';
          engineLeft.style.height = '80px';
          engineLeft.style.background = 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.9), transparent 70%)';
          engineLeft.style.filter = 'blur(15px)';
          engineLeft.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.7)';
          spaceship.appendChild(engineLeft);

          const engineRight = document.createElement('div');
          engineRight.className = 'spaceship-engine';
          engineRight.style.position = 'absolute';
          engineRight.style.bottom = '-30px';
          engineRight.style.right = '30%';
          engineRight.style.width = '60px';
          engineRight.style.height = '80px';
          engineRight.style.background = 'radial-gradient(ellipse at center, rgba(229, 62, 62, 0.9), transparent 70%)';
          engineRight.style.filter = 'blur(15px)';
          engineRight.style.boxShadow = '0 0 20px rgba(229, 62, 62, 0.7)';
          spaceship.appendChild(engineRight);

          // Add central engine for more visibility
          const engineCenter = document.createElement('div');
          engineCenter.className = 'spaceship-engine';
          engineCenter.style.position = 'absolute';
          engineCenter.style.bottom = '-25px';
          engineCenter.style.left = '50%';
          engineCenter.style.transform = 'translateX(-50%)';
          engineCenter.style.width = '70px';
          engineCenter.style.height = '90px';
          engineCenter.style.background = 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.9), transparent 70%)';
          engineCenter.style.filter = 'blur(15px)';
          engineCenter.style.boxShadow = '0 0 25px rgba(245, 158, 11, 0.7)';
          spaceship.appendChild(engineCenter);

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

          // Store positions for later use
          return { heroPositions, heroColors, spaceship };
        }
        return null;
      };

      // Create spaceship and get hero positions
      const spaceshipData = createSpaceshipEffect();

      // Animate heroes jumping from spaceship
      const showNextHero = () => {
        if (currentIndex < maxHeroes && spaceshipData) {
          // Create jump trail effect - enhanced for better visibility
          const createJumpTrail = (position, color) => {
            const effectsContainer = document.querySelector('[data-name="portal-effects"]');
            if (!effectsContainer) return;

            // Calculate jump start position (near the spaceship)
            const jumpStartLeft = position.left ? parseInt(position.left) : 100 - parseInt(position.right || '0');
            const jumpStartTop = 15; // Near the top where the spaceship is

            // Create trail effect
            const trail = document.createElement('div');
            trail.className = 'jump-trail';
            trail.style.width = '100px';
            trail.style.height = '150px';
            trail.style.position = 'absolute';
            trail.style.left = `${jumpStartLeft}%`;
            trail.style.top = `${jumpStartTop}%`;
            trail.style.background = `radial-gradient(ellipse at center, ${color}, transparent 70%)`;
            trail.style.filter = 'blur(20px)';
            trail.style.zIndex = '12';
            trail.style.opacity = '0.9';
            trail.style.boxShadow = `0 0 30px ${color}`;
            effectsContainer.appendChild(trail);

            // Add some particles for more dynamic effect
            for (let i = 0; i < 3; i++) {
              const particle = document.createElement('div');
              particle.style.position = 'absolute';
              particle.style.width = `${20 + Math.random() * 20}px`;
              particle.style.height = `${20 + Math.random() * 20}px`;
              particle.style.borderRadius = '50%';
              particle.style.background = color;
              particle.style.left = `${jumpStartLeft + (Math.random() * 20 - 10)}%`;
              particle.style.top = `${jumpStartTop + Math.random() * 10}%`;
              particle.style.opacity = '0.7';
              particle.style.filter = 'blur(5px)';
              particle.style.animation = `particle-float-${Math.floor(Math.random() * 5) + 1} ${2 + Math.random() * 2}s infinite ease-in-out`;
              particle.style.zIndex = '11';
              effectsContainer.appendChild(particle);

              // Remove particles after animation
              setTimeout(() => {
                if (particle && particle.parentNode) {
                  particle.parentNode.removeChild(particle);
                }
              }, 2000);
            }

            // Remove trail after animation completes
            setTimeout(() => {
              if (trail && trail.parentNode) {
                trail.parentNode.removeChild(trail);
              }
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
              if (spaceshipData.spaceship) {
                spaceshipData.spaceship.classList.add('spaceship-departure');
              }
            }
          }, 300);
        }
      };

      // Start the hero jumping sequence after a short delay
      setTimeout(showNextHero, 800);

      // After all heroes have appeared, add floating animation
      const totalDelay = 800 + animationIntervals.reduce((sum, interval) => sum + interval, 0) + 300 * maxHeroes;
      setTimeout(() => {
        // Add floating animation class to all heroes
        const heroElements = document.querySelectorAll('.hero-entrance');
        heroElements.forEach((element, index) => {
          // Add different animation delays to create more natural movement
          element.style.animationDelay = `${index * 0.2}s`;
          element.classList.add('hero-float');

          // Add cosmic glow effect to enhance floating in space appearance
          const glow = element.querySelector('.hero-glow');
          if (glow) {
            glow.style.opacity = '0.8';
            glow.style.filter = 'blur(30px)';
          }

          // Add landing effect
          const landing = document.createElement('div');
          landing.className = 'hero-landing-effect';
          element.appendChild(landing);
        });

        // Enhance cosmic particles to make space more vibrant
        const particles = document.querySelectorAll('.cosmic-particle');
        particles.forEach((particle) => {
          particle.style.opacity = '0.7';
          particle.style.filter = 'blur(25px)';
        });
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden space-bg" data-id="72pcrn7ku" data-path="components/Hero.js">

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
        }} data-id="sblv3vmfg" data-path="components/Hero.js">
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
        }} data-id="5f3orcux5" data-path="components/Hero.js">
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
        }} data-id="gphqqlmg1" data-path="components/Hero.js">
      </div>
      
      {/* Cosmic energy particles */}
      <div
        data-name="cosmic-particles"
        className="absolute inset-0 z-15 overflow-hidden"
        style={{
          opacity: animationStarted ? 0.7 : 0,
          transition: 'opacity 2s ease-in'
        }} data-id="a9ag7ywv1" data-path="components/Hero.js">

        <div className="cosmic-particle particle-1" data-id="l8929dg05" data-path="components/Hero.js"></div>
        <div className="cosmic-particle particle-2" data-id="90qk02bm0" data-path="components/Hero.js"></div>
        <div className="cosmic-particle particle-3" data-id="47337dqgt" data-path="components/Hero.js"></div>
        <div className="cosmic-particle particle-4" data-id="if1sz1ku1" data-path="components/Hero.js"></div>
        <div className="cosmic-particle particle-5" data-id="8sbyin2wn" data-path="components/Hero.js"></div>
        <div className="cosmic-particle particle-6" data-id="dffpfi4y3" data-path="components/Hero.js"></div>
        <div className="cosmic-particle particle-7" data-id="g1cny2jl9" data-path="components/Hero.js"></div>
        <div className="cosmic-particle particle-8" data-id="blno79n7m" data-path="components/Hero.js"></div>
      </div>

      <div className="container-custom mx-auto px-4 z-20 text-center" data-id="oxpgx2cqp" data-path="components/Hero.js">
        {/* Main hero content */}
        <div data-name="hero-content" className="max-w-4xl mx-auto" data-id="4qqebfjxi" data-path="components/Hero.js">
          <h1
            data-name="hero-title"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-text-shadow"
            style={{
              opacity: animationStarted ? 1 : 0,
              transform: animationStarted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
              textShadow: '0 0 20px rgba(245, 182, 66, 0.8), 0 0 40px rgba(245, 182, 66, 0.4)'
            }} data-id="bb2k6egck" data-path="components/Hero.js">

            <span className="text-avengers-blue" data-id="ztvrrpksy" data-path="components/Hero.js">AVENGERS</span> 
            <span className="text-white" data-id="atynzx4kq" data-path="components/Hero.js">ASSEMBLE</span>
          </h1>
          
          <p
            data-name="hero-subtitle"
            className="text-xl md:text-2xl text-gray-200 mb-8"
            style={{
              opacity: animationStarted ? 1 : 0,
              transform: animationStarted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1.5s ease-out 0.3s, transform 1.5s ease-out 0.3s'
            }} data-id="vlvv56hi4" data-path="components/Hero.js">

            Earth's Mightiest Heroes unite to protect the universe
          </p>
          
          <div
            data-name="hero-buttons"
            className="flex flex-col sm:flex-row justify-center gap-4"
            style={{
              opacity: animationStarted ? 1 : 0,
              transform: animationStarted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1.5s ease-out 0.6s, transform 1.5s ease-out 0.6s'
            }} data-id="tq9xcneck" data-path="components/Hero.js">

            <a
              href="#movies"
              data-name="explore-button"
              className="avengers-button text-lg px-8 py-3" data-id="64i3c0iia" data-path="components/Hero.js">

              Explore Movies
            </a>
            <a
              href="#characters"
              data-name="meet-heroes-button"
              className="bg-transparent border-2 border-white hover:border-avengers-gold text-white hover:text-avengers-gold transition-colors duration-300 text-lg px-8 py-3 rounded-md" data-id="vubemhhn6" data-path="components/Hero.js">

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
          }} data-id="zvqy88310" data-path="components/Hero.js">

          {/* Spaceship and jump effects container */}
          <div
            data-name="portal-effects"
            className="absolute inset-0 z-10" data-id="qpb23frax" data-path="components/Hero.js">
          </div>
          
          {/* Character silhouettes jumping from spaceship and floating in space */}
          <div className="absolute inset-0 flex justify-center items-center" data-id="nc58n8a47" data-path="components/Hero.js">
            {/* Iron Man */}
            <div
              data-name="hero-ironman"
              className={`absolute h-full ${heroesAnimationIndex >= 0 ? 'hero-entrance' : ''}`}
              style={{
                left: '10%',
                top: '40%',
                height: '90%',
                animationDelay: '0s',
                opacity: heroesAnimationIndex >= 0 ? 1 : 0,
                visibility: heroesAnimationIndex >= 0 ? 'visible' : 'hidden',
                cursor: 'pointer',
                zIndex: 20, /* Ensure heroes are above particles */
                transformOrigin: 'center top' /* Origin for jump animation */
              }}
              onClick={() => handleHeroClick({ name: 'Iron Man', image: charactersData[0].image })} data-id="qxscao7ve" data-path="components/Hero.js">

              <img
                src={charactersData[0].image}
                alt="Iron Man"
                className="h-full object-contain hero-cosmic-effect"
                style={{ filter: 'drop-shadow(0 0 15px rgba(229, 83, 83, 0.9))' }} data-id="t9ttrosgq" data-path="components/Hero.js" />

              <div className="hero-glow" style={{ background: 'radial-gradient(circle at center, rgba(229, 83, 83, 0.6), transparent 70%)', top: '50%', bottom: 'auto' }} data-id="7ht220bzn" data-path="components/Hero.js"></div>
            </div>
            
            {/* Captain America */}
            <div
              data-name="hero-captain"
              className={`absolute h-full ${heroesAnimationIndex >= 1 ? 'hero-entrance' : ''}`}
              style={{
                left: '25%',
                top: '45%',
                height: '85%',
                animationDelay: '0.3s',
                opacity: heroesAnimationIndex >= 1 ? 1 : 0,
                visibility: heroesAnimationIndex >= 1 ? 'visible' : 'hidden',
                cursor: 'pointer',
                zIndex: 20, /* Ensure heroes are above particles */
                transformOrigin: 'center top' /* Origin for jump animation */
              }}
              onClick={() => handleHeroClick({ name: 'Captain America', image: charactersData[1].image })} data-id="0c6sspct1" data-path="components/Hero.js">

              <img
                src={charactersData[1].image}
                alt="Captain America"
                className="h-full object-contain hero-cosmic-effect"
                style={{ filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.9))' }} data-id="53fsyb0o0" data-path="components/Hero.js" />

              <div className="hero-glow" style={{ background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.6), transparent 70%)', top: '50%', bottom: 'auto' }} data-id="f7a6u51vr" data-path="components/Hero.js"></div>
            </div>
            
            {/* Thor */}
            <div
              data-name="hero-thor"
              className={`absolute h-full ${heroesAnimationIndex >= 2 ? 'hero-entrance' : ''}`}
              style={{
                left: '40%',
                top: '35%',
                height: '95%',
                animationDelay: '0.6s',
                opacity: heroesAnimationIndex >= 2 ? 1 : 0,
                visibility: heroesAnimationIndex >= 2 ? 'visible' : 'hidden',
                cursor: 'pointer',
                zIndex: 20, /* Ensure heroes are above particles */
                transformOrigin: 'center top' /* Origin for jump animation */
              }}
              onClick={() => handleHeroClick({ name: 'Thor', image: charactersData[2].image })} data-id="azh5a7ssx" data-path="components/Hero.js">

              <img
                src={charactersData[2].image}
                alt="Thor"
                className="h-full object-contain hero-cosmic-effect"
                style={{ filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.9))' }} data-id="7sne90tug" data-path="components/Hero.js" />

              <div className="hero-glow" style={{ background: 'radial-gradient(circle at center, rgba(245, 158, 11, 0.6), transparent 70%)', top: '50%', bottom: 'auto' }} data-id="sqymkoqid" data-path="components/Hero.js"></div>
            </div>
            
            {/* Black Widow */}
            <div
              data-name="hero-blackwidow"
              className={`absolute h-full ${heroesAnimationIndex >= 3 ? 'hero-entrance' : ''}`}
              style={{
                right: '40%',
                top: '45%',
                height: '80%',
                animationDelay: '0.9s',
                opacity: heroesAnimationIndex >= 3 ? 1 : 0,
                visibility: heroesAnimationIndex >= 3 ? 'visible' : 'hidden',
                cursor: 'pointer',
                zIndex: 20, /* Ensure heroes are above particles */
                transformOrigin: 'center top' /* Origin for jump animation */
              }}
              onClick={() => handleHeroClick({ name: 'Black Widow', image: charactersData[4].image })} data-id="9fel9fqgt" data-path="components/Hero.js">

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/0549eb2c-ead1-46c0-8b50-3bef2e22bd87.jpeg"
                alt="Black Widow"
                className="h-full object-contain hero-cosmic-effect"
                style={{ filter: 'drop-shadow(0 0 15px rgba(220, 38, 38, 0.9))' }} data-id="axxhkk5nf" data-path="components/Hero.js" />

              <div className="hero-glow" style={{ background: 'radial-gradient(circle at center, rgba(220, 38, 38, 0.6), transparent 70%)', top: '50%', bottom: 'auto' }} data-id="zudmkji5w" data-path="components/Hero.js"></div>
            </div>
            
            {/* Hulk */}
            <div
              data-name="hero-hulk"
              className={`absolute h-full ${heroesAnimationIndex >= 4 ? 'hero-entrance' : ''}`}
              style={{
                right: '25%',
                top: '40%',
                height: '90%',
                animationDelay: '1.2s',
                opacity: heroesAnimationIndex >= 4 ? 1 : 0,
                visibility: heroesAnimationIndex >= 4 ? 'visible' : 'hidden',
                cursor: 'pointer',
                zIndex: 20, /* Ensure heroes are above particles */
                transformOrigin: 'center top' /* Origin for jump animation */
              }}
              onClick={() => handleHeroClick({ name: 'Hulk', image: charactersData[3].image })} data-id="ohsrz26vv" data-path="components/Hero.js">

              <img
                src={charactersData[3].image}
                alt="Hulk"
                className="h-full object-contain hero-cosmic-effect"
                style={{ filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.9))' }} data-id="cufqrlsc7" data-path="components/Hero.js" />

              <div className="hero-glow" style={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.6), transparent 70%)', top: '50%', bottom: 'auto' }} data-id="cvf3bvdhi" data-path="components/Hero.js"></div>
            </div>
            
            {/* Scarlet Witch */}
            <div
              data-name="hero-witch"
              className={`absolute h-full ${heroesAnimationIndex >= 5 ? 'hero-entrance' : ''}`}
              style={{
                right: '10%',
                top: '35%',
                height: '85%',
                animationDelay: '1.5s',
                opacity: heroesAnimationIndex >= 5 ? 1 : 0,
                visibility: heroesAnimationIndex >= 5 ? 'visible' : 'hidden',
                cursor: 'pointer',
                zIndex: 20, /* Ensure heroes are above particles */
                transformOrigin: 'center top' /* Origin for jump animation */
              }}
              onClick={() => handleHeroClick({ name: 'Scarlet Witch', image: additionalCharactersData[1].image })} data-id="4wig1fj5n" data-path="components/Hero.js">

              <img
                src={additionalCharactersData[1].image}
                alt="Scarlet Witch"
                className="h-full object-contain hero-cosmic-effect"
                style={{ filter: 'drop-shadow(0 0 15px rgba(124, 58, 237, 0.9))' }} data-id="m2t2x3w2l" data-path="components/Hero.js" />

              <div className="hero-glow" style={{ background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.6), transparent 70%)', top: '50%', bottom: 'auto' }} data-id="zts6gqxec" data-path="components/Hero.js"></div>
            </div>
          </div>
          
          {/* Cosmic energy effect - ambient glow */}
          <div
            data-name="cosmic-energy"
            className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"
            style={{
              opacity: heroesAnimationIndex >= 0 ? 0.6 : 0,
              transition: 'opacity 2s ease-out'
            }} data-id="e0ayr9wkb" data-path="components/Hero.js">
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div
        data-name="scroll-indicator"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white text-center cursor-pointer"
        onClick={() => document.getElementById('movies').scrollIntoView({ behavior: 'smooth' })} data-id="hfod9u9cs" data-path="components/Hero.js">

        <p className="text-sm mb-2 text-gray-300" data-id="q4ma97kqd" data-path="components/Hero.js">Scroll to Explore More Missions</p>
        <div className="animate-bounce bg-white bg-opacity-20 p-2 rounded-full" data-id="8r467l6gk" data-path="components/Hero.js">
          <i className="fas fa-chevron-down text-white" data-id="1nnyq31vn" data-path="components/Hero.js"></i>
        </div>
      </div>
      
      {/* Hero Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        image={selectedHero?.image}
        name={selectedHero?.name}
        onClose={closeModal} data-id="nwctq8w91" data-path="components/Hero.js" />

    </section>);

}