// MovieDetailsModal component
function MovieDetailsModal({ isOpen, movie, onClose }) {
  // If modal is not open or no movie is provided, don't render anything
  if (!isOpen || !movie) return null;

  // State for active tab in the modal
  const [activeTab, setActiveTab] = React.useState('overview');

  // Handle click on the backdrop to close the modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Format runtime (assuming minutes)
  const formatRuntime = (minutes) => {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  // Format release date
  const formatReleaseDate = (date) => {
    if (!date) return movie.year.toString();
    return date;
  };

  // Get phase color
  const getPhaseColor = (phase) => {
    const phaseColors = {
      1: 'var(--avengers-red)',
      2: 'var(--avengers-gold)',
      3: 'var(--avengers-blue)',
      4: 'var(--avengers-purple)'
    };

    return phaseColors[phase] || 'var(--avengers-red)';
  };

  // Get relevant characters for this movie
  const getRelevantCharacters = () => {
    if (movie.mainCharacters) {
      return charactersData.filter((char) =>
      movie.mainCharacters.includes(char.name)
      ).concat(
        additionalCharactersData.filter((char) =>
        movie.mainCharacters.includes(char.name)
        )
      );
    }
    // Fallback to showing some characters
    return charactersData.slice(0, 4);
  };

  return (
    <div
      data-name="movie-details-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm overflow-y-auto py-6"
      onClick={handleBackdropClick} data-id="aar2p6ool" data-path="components/MovieDetailsModal.js">

      <div
        data-name="movie-details-modal-content"
        className="relative max-w-6xl w-full mx-4 bg-gray-900 rounded-lg shadow-2xl modal-entrance overflow-hidden"
        style={{ maxHeight: 'calc(100vh - 40px)' }} data-id="0roeppsg8" data-path="components/MovieDetailsModal.js">

        {/* Close button */}
        <button
          data-name="modal-close-button"
          className="absolute top-4 right-4 z-50 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all duration-300"
          onClick={onClose} data-id="96ydkr1jl" data-path="components/MovieDetailsModal.js">

          <i className="fas fa-times text-xl" data-id="9qs055fjl" data-path="components/MovieDetailsModal.js"></i>
        </button>
        
        {/* Movie backdrop */}
        <div
          data-name="movie-backdrop"
          className="w-full h-80 md:h-96 relative" data-id="2ub4re4pu" data-path="components/MovieDetailsModal.js">

          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${movie.poster})`,
              filter: 'blur(2px) brightness(0.5)',
              backgroundSize: 'cover',
              backgroundPosition: 'center top'
            }} data-id="9joyef9f3" data-path="components/MovieDetailsModal.js">
          </div>
          
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" data-id="pa6b7govk" data-path="components/MovieDetailsModal.js">
          </div>
          
          {/* Movie info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-end" data-id="qprdw6amc" data-path="components/MovieDetailsModal.js">
            {/* Movie poster */}
            <div
              data-name="movie-poster-container"
              className="hidden md:block w-48 h-72 rounded-lg overflow-hidden shadow-lg border-2 border-gray-800 mr-8 flex-shrink-0 transform -translate-y-10" data-id="o8j8qh17s" data-path="components/MovieDetailsModal.js">

              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover"
                data-name="movie-poster-detail" data-id="xbgbvfs4p" data-path="components/MovieDetailsModal.js" />

            </div>
            
            {/* Movie title and basic info */}
            <div className="flex-grow" data-id="m7gcrac44" data-path="components/MovieDetailsModal.js">
              <div
                data-name="movie-phase-badge"
                className="inline-block px-3 py-1 rounded-full text-sm font-bold mb-4"
                style={{ backgroundColor: getPhaseColor(movie.phase) }} data-id="uu92tixle" data-path="components/MovieDetailsModal.js">

                Phase {movie.phase}
              </div>
              
              <h2
                data-name="movie-title-detail"
                className="text-3xl md:text-4xl font-bold text-white mb-2" data-id="cwd5srn2f" data-path="components/MovieDetailsModal.js">

                {movie.title}
              </h2>
              
              <div
                data-name="movie-meta"
                className="flex flex-wrap items-center text-sm text-gray-400 mb-4 gap-4" data-id="i17ccz81a" data-path="components/MovieDetailsModal.js">

                <span data-name="movie-year-detail" data-id="fck1mpc7g" data-path="components/MovieDetailsModal.js">{movie.year}</span>
                <span className="hidden md:inline" data-id="m70atkfg1" data-path="components/MovieDetailsModal.js">•</span>
                <span data-name="movie-runtime-detail" data-id="ezgcgezn3" data-path="components/MovieDetailsModal.js">{formatRuntime(movie.runtime || 120)}</span>
                <span className="hidden md:inline" data-id="iy3pc68et" data-path="components/MovieDetailsModal.js">•</span>
                <div className="flex items-center" data-id="x000qm5tw" data-path="components/MovieDetailsModal.js">
                  <i className="fas fa-star text-yellow-400 mr-1" data-id="gvojvqrnx" data-path="components/MovieDetailsModal.js"></i>
                  <span className="text-white font-bold" data-id="p5qed09kk" data-path="components/MovieDetailsModal.js">{movie.rating.toFixed(1)}</span>
                  <span className="text-gray-400 ml-1" data-id="qp4zezrzl" data-path="components/MovieDetailsModal.js">/10</span>
                </div>
              </div>
              
              <div
                data-name="movie-actions"
                className="flex flex-wrap gap-4 mt-4" data-id="zelr474iz" data-path="components/MovieDetailsModal.js">

                <a
                  href={movie.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-name="movie-trailer-link"
                  className="bg-avengers-red hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 transition-all duration-300" data-id="u25vjlc4u" data-path="components/MovieDetailsModal.js">

                  <i className="fas fa-play" data-id="kgruzp4af" data-path="components/MovieDetailsModal.js"></i> Watch Trailer
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(`Check out ${movie.title} (${movie.year}) - ${movie.description.substring(0, 100)}...`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-name="movie-share-button"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 transition-all duration-300" data-id="rd9urbtfw" data-path="components/MovieDetailsModal.js">

                  <i className="fab fa-facebook-f" data-id="gioxibmiy" data-path="components/MovieDetailsModal.js"></i> Share on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs navigation */}
        <div
          data-name="movie-tabs-navigation"
          className="sticky top-0 z-30 bg-gray-900 border-b border-gray-800 px-6 md:px-10 py-4 flex space-x-6 overflow-x-auto scrollbar-thin" data-id="x1z7hwers" data-path="components/MovieDetailsModal.js">

          <button
            data-name="tab-overview"
            className={`whitespace-nowrap pb-2 px-1 font-medium transition-colors duration-300 ${activeTab === 'overview' ? 'text-avengers-red border-b-2 border-avengers-red' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('overview')} data-id="oh3qdeb6s" data-path="components/MovieDetailsModal.js">

            Overview
          </button>
          <button
            data-name="tab-characters"
            className={`whitespace-nowrap pb-2 px-1 font-medium transition-colors duration-300 ${activeTab === 'characters' ? 'text-avengers-red border-b-2 border-avengers-red' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('characters')} data-id="xzywga04h" data-path="components/MovieDetailsModal.js">

            Characters
          </button>
          <button
            data-name="tab-gallery"
            className={`whitespace-nowrap pb-2 px-1 font-medium transition-colors duration-300 ${activeTab === 'gallery' ? 'text-avengers-red border-b-2 border-avengers-red' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('gallery')} data-id="57rnynerw" data-path="components/MovieDetailsModal.js">

            Gallery
          </button>
          <button
            data-name="tab-related"
            className={`whitespace-nowrap pb-2 px-1 font-medium transition-colors duration-300 ${activeTab === 'related' ? 'text-avengers-red border-b-2 border-avengers-red' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('related')} data-id="ustmermmv" data-path="components/MovieDetailsModal.js">

            Related Movies
          </button>
        </div>
        
        {/* Scrollable content area - Fixed with explicit overflow-y-auto and height */}
        <div
          data-name="movie-details-scrollable-content"
          className="modal-scrollable scrollbar-thin overflow-y-auto bg-gray-900"
          style={{ maxHeight: 'calc(100vh - 350px)' }} data-id="yleruvzvu" data-path="components/MovieDetailsModal.js">

          
        {/* Overview Tab Content */}
        {activeTab === 'overview' &&
          <div
            data-name="movie-details-content"
            className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8" data-id="yn0us4ny1" data-path="components/MovieDetailsModal.js">

          {/* Main content - synopsis */}
          <div
              data-name="movie-main-content"
              className="md:col-span-2" data-id="1bcfta4mo" data-path="components/MovieDetailsModal.js">

            <h3
                data-name="movie-synopsis-title"
                className="text-xl font-bold text-white mb-4 flex items-center" data-id="bilws5aoq" data-path="components/MovieDetailsModal.js">

              <i className="fas fa-film text-avengers-red mr-2" data-id="18ofkjx8z" data-path="components/MovieDetailsModal.js"></i> Synopsis
            </h3>
            
            <p
                data-name="movie-full-description"
                className="text-gray-300 mb-8 leading-relaxed" data-id="vsb1t8ol0" data-path="components/MovieDetailsModal.js">

              {movie.description}
            </p>
            
            <h3
                data-name="movie-director-title"
                className="text-xl font-bold text-white mb-4 flex items-center" data-id="4z547qbd1" data-path="components/MovieDetailsModal.js">

              <i className="fas fa-video text-avengers-blue mr-2" data-id="3d9dtfviq" data-path="components/MovieDetailsModal.js"></i> Director
            </h3>
            
            <p
                data-name="movie-director-detail"
                className="text-gray-300 mb-8" data-id="91tgy6o7k" data-path="components/MovieDetailsModal.js">

              {movie.director}
            </p>
            
            {/* Key moments section */}
            <h3
                data-name="movie-key-moments-title"
                className="text-xl font-bold text-white mb-4 flex items-center" data-id="uubjwbgy5" data-path="components/MovieDetailsModal.js">

              <i className="fas fa-star text-avengers-gold mr-2" data-id="xl5pr4uj5" data-path="components/MovieDetailsModal.js"></i> Key Moments
            </h3>
            
            <div
                data-name="movie-key-moments"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" data-id="cig7bk9hw" data-path="components/MovieDetailsModal.js">

              {/* Generate some key moments based on the movie */}
              <div
                  data-name="key-moment-1"
                  className="bg-gray-800 p-4 rounded-lg" data-id="cm0r8qd43" data-path="components/MovieDetailsModal.js">

                <h4 className="font-bold text-white mb-2" data-id="9xa4wkgoe" data-path="components/MovieDetailsModal.js">Character Development</h4>
                <p className="text-gray-400 text-sm" data-id="tc07r7z25" data-path="components/MovieDetailsModal.js">Significant character arcs and emotional moments that define the story.</p>
              </div>
              
              <div
                  data-name="key-moment-2"
                  className="bg-gray-800 p-4 rounded-lg" data-id="kqbx4yco0" data-path="components/MovieDetailsModal.js">

                <h4 className="font-bold text-white mb-2" data-id="v1xtg4q0k" data-path="components/MovieDetailsModal.js">Action Sequences</h4>
                <p className="text-gray-400 text-sm" data-id="kj8occ9cd" data-path="components/MovieDetailsModal.js">Epic battles and stunning visual effects that showcase the heroes' abilities.</p>
              </div>
              
              <div
                  data-name="key-moment-3"
                  className="bg-gray-800 p-4 rounded-lg" data-id="68anxqmzd" data-path="components/MovieDetailsModal.js">

                <h4 className="font-bold text-white mb-2" data-id="qz5054yph" data-path="components/MovieDetailsModal.js">Plot Twists</h4>
                <p className="text-gray-400 text-sm" data-id="bb0pazf91" data-path="components/MovieDetailsModal.js">Surprising revelations that change the course of the Marvel Cinematic Universe.</p>
              </div>
              
              <div
                  data-name="key-moment-4"
                  className="bg-gray-800 p-4 rounded-lg" data-id="fxx8uedbg" data-path="components/MovieDetailsModal.js">

                <h4 className="font-bold text-white mb-2" data-id="66c9erdrn" data-path="components/MovieDetailsModal.js">Easter Eggs</h4>
                <p className="text-gray-400 text-sm" data-id="1urguvnn0" data-path="components/MovieDetailsModal.js">Hidden references and connections to the broader Marvel universe.</p>
              </div>
            </div>
          </div>
          
          {/* Sidebar content */}
          <div
              data-name="movie-sidebar"
              className="md:border-l md:border-gray-800 md:pl-8" data-id="73wwoxw1w" data-path="components/MovieDetailsModal.js">

            {/* Movie details */}
            <h3
                data-name="movie-details-title"
                className="text-xl font-bold text-white mb-4 flex items-center" data-id="2nudj6qot" data-path="components/MovieDetailsModal.js">

              <i className="fas fa-info-circle text-avengers-blue mr-2" data-id="g07tjbufq" data-path="components/MovieDetailsModal.js"></i> Movie Details
            </h3>
            
            <ul className="space-y-4 mb-8" data-id="uxs0l9in0" data-path="components/MovieDetailsModal.js">
              <li
                  data-name="movie-release-date"
                  className="flex flex-col" data-id="z6517ykun" data-path="components/MovieDetailsModal.js">

                <span className="text-gray-400 text-sm" data-id="bsanap6hw" data-path="components/MovieDetailsModal.js">Release Date</span>
                <span className="text-white" data-id="k8n941jjs" data-path="components/MovieDetailsModal.js">{movie.year}</span>
              </li>
              
              <li
                  data-name="movie-mcu-phase"
                  className="flex flex-col" data-id="yh5rgyf7o" data-path="components/MovieDetailsModal.js">

                <span className="text-gray-400 text-sm" data-id="6gsdjhjy8" data-path="components/MovieDetailsModal.js">MCU Phase</span>
                <span className="text-white" data-id="80kt76629" data-path="components/MovieDetailsModal.js">Phase {movie.phase}</span>
              </li>
              
              <li
                  data-name="movie-chronology"
                  className="flex flex-col" data-id="ldpnmcse2" data-path="components/MovieDetailsModal.js">

                <span className="text-gray-400 text-sm" data-id="1p61y2nyn" data-path="components/MovieDetailsModal.js">MCU Chronology</span>
                <span className="text-white" data-id="l14i41r3g" data-path="components/MovieDetailsModal.js">#{movie.id}</span>
              </li>
              
              <li
                  data-name="movie-rating-detail"
                  className="flex flex-col" data-id="f6zlc9ms9" data-path="components/MovieDetailsModal.js">

                <span className="text-gray-400 text-sm" data-id="70s9gjs1w" data-path="components/MovieDetailsModal.js">Rating</span>
                <div className="flex items-center" data-id="9pxjq3gvq" data-path="components/MovieDetailsModal.js">
                  <i className="fas fa-star text-yellow-400 mr-1" data-id="oojql5osy" data-path="components/MovieDetailsModal.js"></i>
                  <span className="text-white" data-id="je1kmlw67" data-path="components/MovieDetailsModal.js">{movie.rating.toFixed(1)}/10</span>
                </div>
              </li>
            </ul>
            
            {/* Featured characters */}
            <h3
                data-name="featured-characters-title"
                className="text-xl font-bold text-white mb-4 flex items-center" data-id="p4h90otw2" data-path="components/MovieDetailsModal.js">

              <i className="fas fa-users text-avengers-red mr-2" data-id="n2xt4qx6y" data-path="components/MovieDetailsModal.js"></i> Featured Characters
            </h3>
            
            <div
                data-name="featured-characters"
                className="grid grid-cols-2 gap-4 mb-8" data-id="aswqy8dsv" data-path="components/MovieDetailsModal.js">

              {/* Generate some featured characters based on the movie */}
              {/* We'll show a subset of characters that might appear in this movie */}
              {charactersData.slice(0, 4).map((character) =>
                <div
                  key={character.id}
                  data-name={`featured-character-${character.id}`}
                  className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors duration-300 cursor-pointer" data-id="zlsd1jbcw" data-path="components/MovieDetailsModal.js">

                  <div className="h-24 overflow-hidden" data-id="ij8lcztbz" data-path="components/MovieDetailsModal.js">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover object-top" data-id="xwyu8hd3h" data-path="components/MovieDetailsModal.js" />

                  </div>
                  <div className="p-2 text-center" data-id="vr9nv2bw6" data-path="components/MovieDetailsModal.js">
                    <h4 className="text-white text-sm font-medium" data-id="y2jt2686o" data-path="components/MovieDetailsModal.js">{character.name}</h4>
                  </div>
                </div>
                )}
            </div>
            
            {/* Related movies */}
            <h3
                data-name="related-movies-title"
                className="text-xl font-bold text-white mb-4 flex items-center" data-id="x59tmul0r" data-path="components/MovieDetailsModal.js">

              <i className="fas fa-film text-avengers-gold mr-2" data-id="8gwbwod8u" data-path="components/MovieDetailsModal.js"></i> Related Movies
            </h3>
            
            <ul
                data-name="related-movies-list"
                className="space-y-3" data-id="b8cdk5if2" data-path="components/MovieDetailsModal.js">

              {/* Show movies from the same phase */}
              {moviesData.
                filter((m) => m.phase === movie.phase && m.id !== movie.id).
                slice(0, 3).
                map((relatedMovie) =>
                <li
                  key={relatedMovie.id}
                  data-name={`related-movie-${relatedMovie.id}`}
                  className="flex items-center gap-3 bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer" data-id="ikbnwgs9b" data-path="components/MovieDetailsModal.js">

                    <img
                    src={relatedMovie.poster}
                    alt={relatedMovie.title}
                    className="w-12 h-16 object-cover rounded" data-id="ltncguh48" data-path="components/MovieDetailsModal.js" />

                    <div data-id="ndjjngoxg" data-path="components/MovieDetailsModal.js">
                      <h4 className="text-white text-sm font-medium" data-id="bhrxgbdyg" data-path="components/MovieDetailsModal.js">{relatedMovie.title}</h4>
                      <p className="text-gray-400 text-xs" data-id="ubfu5bffl" data-path="components/MovieDetailsModal.js">{relatedMovie.year}</p>
                    </div>
                  </li>
                )}
            </ul>
          </div>
        </div>
          }
        
        {/* Characters Tab Content */}
        {activeTab === 'characters' &&
          <div
            data-name="movie-characters-content"
            className="p-6 md:p-10" data-id="dy8jpoyfa" data-path="components/MovieDetailsModal.js">

            <h2
              data-name="characters-tab-title"
              className="text-2xl font-bold text-white mb-6 flex items-center" data-id="e9z8gl3n3" data-path="components/MovieDetailsModal.js">

              <i className="fas fa-users text-avengers-red mr-3" data-id="y94wi27p1" data-path="components/MovieDetailsModal.js"></i> Characters in {movie.title}
            </h2>
            
            <div
              data-name="characters-grid"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-id="j8c289xlp" data-path="components/MovieDetailsModal.js">

              {getRelevantCharacters().map((character) =>
              <div
                key={character.id}
                data-name={`character-card-${character.id}`}
                className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer" data-id="i9s3hpzls" data-path="components/MovieDetailsModal.js">

                  <div className="h-48 overflow-hidden" data-id="491ibnkpa" data-path="components/MovieDetailsModal.js">
                    <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                    data-name={`character-image-${character.id}`} data-id="3zon4pakk" data-path="components/MovieDetailsModal.js" />

                  </div>
                  <div className="p-4" data-id="ea79pd80q" data-path="components/MovieDetailsModal.js">
                    <h3
                    data-name={`character-name-${character.id}`}
                    className="text-lg font-bold text-white mb-1" data-id="tpseh2jrz" data-path="components/MovieDetailsModal.js">

                      {character.name}
                    </h3>
                    <p
                    data-name={`character-real-name-${character.id}`}
                    className="text-sm text-gray-400" data-id="u9s1fq8w0" data-path="components/MovieDetailsModal.js">

                      {character.realName}
                    </p>
                    <p
                    data-name={`character-portrayed-${character.id}`}
                    className="text-xs text-gray-500 mt-2" data-id="wb4djlc4a" data-path="components/MovieDetailsModal.js">

                      Portrayed by: {character.portrayed}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          }
        
        {/* Gallery Tab Content */}
        {activeTab === 'gallery' &&
          <div
            data-name="movie-gallery-content"
            className="p-6 md:p-10" data-id="xq1nz8jde" data-path="components/MovieDetailsModal.js">

            <h2
              data-name="gallery-tab-title"
              className="text-2xl font-bold text-white mb-6 flex items-center" data-id="jiu0933qo" data-path="components/MovieDetailsModal.js">

              <i className="fas fa-images text-avengers-gold mr-3" data-id="8lecbpgb3" data-path="components/MovieDetailsModal.js"></i> {movie.title} Gallery
            </h2>
            
            <div
              data-name="gallery-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-id="o9wdmhwmk" data-path="components/MovieDetailsModal.js">

              {/* Main poster as first gallery item */}
              <div
                data-name="gallery-item-poster"
                className="relative group cursor-pointer rounded-lg overflow-hidden" data-id="h8a89qo24" data-path="components/MovieDetailsModal.js">

                <img
                  src={movie.poster}
                  alt={`${movie.title} poster`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" data-id="f8dzc9657" data-path="components/MovieDetailsModal.js" />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" data-id="1ufwcacla" data-path="components/MovieDetailsModal.js">
                  <p className="text-white font-medium" data-id="hbvhk0ium" data-path="components/MovieDetailsModal.js">Official Poster</p>
                </div>
              </div>
              
              {/* Placeholder gallery items - in a real app, these would come from the movie data */}
              <div
                data-name="gallery-item-1"
                className="relative group cursor-pointer bg-gray-800 rounded-lg overflow-hidden" data-id="vo1y614ga" data-path="components/MovieDetailsModal.js">

                <div className="w-full h-64 flex items-center justify-center" data-id="l1w01fw8s" data-path="components/MovieDetailsModal.js">
                  <i className="fas fa-film text-5xl text-gray-600" data-id="llr793ir8" data-path="components/MovieDetailsModal.js"></i>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 flex items-end p-4" data-id="xizh281mj" data-path="components/MovieDetailsModal.js">
                  <p className="text-white font-medium" data-id="mnlfqvzhz" data-path="components/MovieDetailsModal.js">Scene from {movie.title}</p>
                </div>
              </div>
              
              <div
                data-name="gallery-item-2"
                className="relative group cursor-pointer bg-gray-800 rounded-lg overflow-hidden" data-id="jqev6lh2k" data-path="components/MovieDetailsModal.js">

                <div className="w-full h-64 flex items-center justify-center" data-id="zbsddjq9n" data-path="components/MovieDetailsModal.js">
                  <i className="fas fa-camera text-5xl text-gray-600" data-id="u9eyr6n3v" data-path="components/MovieDetailsModal.js"></i>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 flex items-end p-4" data-id="lk37z1vut" data-path="components/MovieDetailsModal.js">
                  <p className="text-white font-medium" data-id="95kejrp9n" data-path="components/MovieDetailsModal.js">Behind the Scenes</p>
                </div>
              </div>
            </div>
          </div>
          }
        
        {/* Related Movies Tab Content */}
        {activeTab === 'related' &&
          <div
            data-name="movie-related-content"
            className="p-6 md:p-10" data-id="zpzjle0l3" data-path="components/MovieDetailsModal.js">

            <h2
              data-name="related-tab-title"
              className="text-2xl font-bold text-white mb-6 flex items-center" data-id="rzr3cra3x" data-path="components/MovieDetailsModal.js">

              <i className="fas fa-film text-avengers-blue mr-3" data-id="ubrdn6cza" data-path="components/MovieDetailsModal.js"></i> Related to {movie.title}
            </h2>
            
            <div className="mb-8" data-id="54anmqz6q" data-path="components/MovieDetailsModal.js">
              <h3
                data-name="same-phase-title"
                className="text-xl font-bold text-white mb-4 flex items-center" data-id="j6ylhs7yo" data-path="components/MovieDetailsModal.js">

                <i className="fas fa-layer-group text-avengers-gold mr-2" data-id="7lspjd4rh" data-path="components/MovieDetailsModal.js"></i> Same Phase
              </h3>
              
              <div
                data-name="same-phase-movies"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-id="ssrfcqik0" data-path="components/MovieDetailsModal.js">

                {moviesData.
                filter((m) => m.phase === movie.phase && m.id !== movie.id).
                slice(0, 3).
                map((relatedMovie) =>
                <div
                  key={relatedMovie.id}
                  data-name={`related-movie-card-${relatedMovie.id}`}
                  className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all duration-300 cursor-pointer flex" data-id="6fannrqj5" data-path="components/MovieDetailsModal.js">

                      <img
                    src={relatedMovie.poster}
                    alt={relatedMovie.title}
                    className="w-24 h-36 object-cover" data-id="avvnr7fnd" data-path="components/MovieDetailsModal.js" />

                      <div className="p-4 flex flex-col justify-between flex-grow" data-id="k88x34xo2" data-path="components/MovieDetailsModal.js">
                        <div data-id="7a5nla36u" data-path="components/MovieDetailsModal.js">
                          <h4 className="text-white font-bold mb-1" data-id="o2lor76ux" data-path="components/MovieDetailsModal.js">{relatedMovie.title}</h4>
                          <p className="text-gray-400 text-sm" data-id="punnlrt2d" data-path="components/MovieDetailsModal.js">{relatedMovie.year}</p>
                        </div>
                        <div className="flex items-center mt-2" data-id="wqlqzmz5z" data-path="components/MovieDetailsModal.js">
                          <i className="fas fa-star text-yellow-400 mr-1 text-sm" data-id="x33be6qqc" data-path="components/MovieDetailsModal.js"></i>
                          <span className="text-white text-sm" data-id="bkn6vud37" data-path="components/MovieDetailsModal.js">{relatedMovie.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                )}
              </div>
            </div>
            
            <div data-id="5p29gk13x" data-path="components/MovieDetailsModal.js">
              <h3
                data-name="chronology-title"
                className="text-xl font-bold text-white mb-4 flex items-center" data-id="sqcmokpxu" data-path="components/MovieDetailsModal.js">

                <i className="fas fa-clock text-avengers-red mr-2" data-id="kjoupw4hc" data-path="components/MovieDetailsModal.js"></i> MCU Timeline
              </h3>
              
              <div
                data-name="timeline-visualization"
                className="relative py-8 px-4 border-l-2 border-gray-800" data-id="jvgaynqlx" data-path="components/MovieDetailsModal.js">

                {moviesData.
                filter((m) => Math.abs(m.id - movie.id) <= 2 && m.id !== movie.id).
                sort((a, b) => a.id - b.id).
                map((timelineMovie, index) =>
                <div
                  key={timelineMovie.id}
                  data-name={`timeline-item-${timelineMovie.id}`}
                  className={`mb-6 ml-6 relative ${timelineMovie.id === movie.id ? 'opacity-100' : 'opacity-80'}`} data-id="bu87366fs" data-path="components/MovieDetailsModal.js">

                      <div
                    className="absolute -left-10 w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: getPhaseColor(timelineMovie.phase),
                      top: '6px'
                    }} data-id="4zwaygdqd" data-path="components/MovieDetailsModal.js">
                  </div>
                      <div className="flex items-start" data-id="p3sxgwghs" data-path="components/MovieDetailsModal.js">
                        <div className="mr-4 text-sm text-gray-500" data-id="xmjll30jh" data-path="components/MovieDetailsModal.js">{timelineMovie.year}</div>
                        <div data-id="7ldfofwsb" data-path="components/MovieDetailsModal.js">
                          <h4 className="text-white font-medium" data-id="dvhrgu4jj" data-path="components/MovieDetailsModal.js">{timelineMovie.title}</h4>
                          <p className="text-gray-400 text-sm mt-1" data-id="ymfxopyui" data-path="components/MovieDetailsModal.js">Phase {timelineMovie.phase}</p>
                        </div>
                      </div>
                    </div>
                )}
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </div>);

}