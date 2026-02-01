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
      onClick={handleBackdropClick}>

      <div
        data-name="movie-details-modal-content"
        className="relative max-w-6xl w-full mx-4 bg-gray-900 rounded-lg shadow-2xl modal-entrance overflow-hidden"
        style={{ maxHeight: 'calc(100vh - 40px)' }}>

        {/* Close button */}
        <button
          data-name="modal-close-button"
          className="absolute top-4 right-4 z-50 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all duration-300"
          onClick={onClose}>

          <i className="fas fa-times text-xl"></i>
        </button>
        
        {/* Movie backdrop */}
        <div
          data-name="movie-backdrop"
          className="w-full h-80 md:h-96 relative">

          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${movie.poster})`,
              filter: 'blur(2px) brightness(0.5)',
              backgroundSize: 'cover',
              backgroundPosition: 'center top'
            }}>
          </div>
          
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent">
          </div>
          
          {/* Movie info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-end">
            {/* Movie poster */}
            <div
              data-name="movie-poster-container"
              className="hidden md:block w-48 h-72 rounded-lg overflow-hidden shadow-lg border-2 border-gray-800 mr-8 flex-shrink-0 transform -translate-y-10">

              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover"
                data-name="movie-poster-detail" />

            </div>
            
            {/* Movie title and basic info */}
            <div className="flex-grow">
              <div
                data-name="movie-phase-badge"
                className="inline-block px-3 py-1 rounded-full text-sm font-bold mb-4"
                style={{ backgroundColor: getPhaseColor(movie.phase) }}>

                Phase {movie.phase}
              </div>
              
              <h2
                data-name="movie-title-detail"
                className="text-3xl md:text-4xl font-bold text-white mb-2">

                {movie.title}
              </h2>
              
              <div
                data-name="movie-meta"
                className="flex flex-wrap items-center text-sm text-gray-400 mb-4 gap-4">

                <span data-name="movie-year-detail">{movie.year}</span>
                <span className="hidden md:inline">•</span>
                <span data-name="movie-runtime-detail">{formatRuntime(movie.runtime || 120)}</span>
                <span className="hidden md:inline">•</span>
                <div className="flex items-center">
                  <i className="fas fa-star text-yellow-400 mr-1"></i>
                  <span className="text-white font-bold">{movie.rating.toFixed(1)}</span>
                  <span className="text-gray-400 ml-1">/10</span>
                </div>
              </div>
              
              <div
                data-name="movie-actions"
                className="flex flex-wrap gap-4 mt-4">

                <a
                  href={movie.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-name="movie-trailer-link"
                  className="bg-avengers-red hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 transition-all duration-300">

                  <i className="fas fa-play"></i> Watch Trailer
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(`Check out ${movie.title} (${movie.year}) - ${movie.description.substring(0, 100)}...`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-name="movie-share-button"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 transition-all duration-300">

                  <i className="fab fa-facebook-f"></i> Share on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs navigation */}
        <div
          data-name="movie-tabs-navigation"
          className="sticky top-0 z-30 bg-gray-900 border-b border-gray-800 px-6 md:px-10 py-4 flex space-x-6 overflow-x-auto scrollbar-thin">

          <button
            data-name="tab-overview"
            className={`whitespace-nowrap pb-2 px-1 font-medium transition-colors duration-300 ${activeTab === 'overview' ? 'text-avengers-red border-b-2 border-avengers-red' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('overview')}>

            Overview
          </button>
          <button
            data-name="tab-characters"
            className={`whitespace-nowrap pb-2 px-1 font-medium transition-colors duration-300 ${activeTab === 'characters' ? 'text-avengers-red border-b-2 border-avengers-red' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('characters')}>

            Characters
          </button>
          <button
            data-name="tab-gallery"
            className={`whitespace-nowrap pb-2 px-1 font-medium transition-colors duration-300 ${activeTab === 'gallery' ? 'text-avengers-red border-b-2 border-avengers-red' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('gallery')}>

            Gallery
          </button>
          <button
            data-name="tab-related"
            className={`whitespace-nowrap pb-2 px-1 font-medium transition-colors duration-300 ${activeTab === 'related' ? 'text-avengers-red border-b-2 border-avengers-red' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('related')}>

            Related Movies
          </button>
        </div>
        
        {/* Scrollable content area - Fixed with explicit overflow-y-auto and height */}
        <div
          data-name="movie-details-scrollable-content"
          className="modal-scrollable scrollbar-thin overflow-y-auto bg-gray-900"
          style={{ maxHeight: 'calc(100vh - 350px)' }}>

          
        {/* Overview Tab Content */}
        {activeTab === 'overview' &&
          <div
            data-name="movie-details-content"
            className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Main content - synopsis */}
          <div
              data-name="movie-main-content"
              className="md:col-span-2">

            <h3
                data-name="movie-synopsis-title"
                className="text-xl font-bold text-white mb-4 flex items-center">

              <i className="fas fa-film text-avengers-red mr-2"></i> Synopsis
            </h3>
            
            <p
                data-name="movie-full-description"
                className="text-gray-300 mb-8 leading-relaxed">

              {movie.description}
            </p>
            
            <h3
                data-name="movie-director-title"
                className="text-xl font-bold text-white mb-4 flex items-center">

              <i className="fas fa-video text-avengers-blue mr-2"></i> Director
            </h3>
            
            <p
                data-name="movie-director-detail"
                className="text-gray-300 mb-8">

              {movie.director}
            </p>
            
            {/* Key moments section */}
            <h3
                data-name="movie-key-moments-title"
                className="text-xl font-bold text-white mb-4 flex items-center">

              <i className="fas fa-star text-avengers-gold mr-2"></i> Key Moments
            </h3>
            
            <div
                data-name="movie-key-moments"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

              {/* Generate some key moments based on the movie */}
              <div
                  data-name="key-moment-1"
                  className="bg-gray-800 p-4 rounded-lg">

                <h4 className="font-bold text-white mb-2">Character Development</h4>
                <p className="text-gray-400 text-sm">Significant character arcs and emotional moments that define the story.</p>
              </div>
              
              <div
                  data-name="key-moment-2"
                  className="bg-gray-800 p-4 rounded-lg">

                <h4 className="font-bold text-white mb-2">Action Sequences</h4>
                <p className="text-gray-400 text-sm">Epic battles and stunning visual effects that showcase the heroes' abilities.</p>
              </div>
              
              <div
                  data-name="key-moment-3"
                  className="bg-gray-800 p-4 rounded-lg">

                <h4 className="font-bold text-white mb-2">Plot Twists</h4>
                <p className="text-gray-400 text-sm">Surprising revelations that change the course of the Marvel Cinematic Universe.</p>
              </div>
              
              <div
                  data-name="key-moment-4"
                  className="bg-gray-800 p-4 rounded-lg">

                <h4 className="font-bold text-white mb-2">Easter Eggs</h4>
                <p className="text-gray-400 text-sm">Hidden references and connections to the broader Marvel universe.</p>
              </div>
            </div>
          </div>
          
          {/* Sidebar content */}
          <div
              data-name="movie-sidebar"
              className="md:border-l md:border-gray-800 md:pl-8">

            {/* Movie details */}
            <h3
                data-name="movie-details-title"
                className="text-xl font-bold text-white mb-4 flex items-center">

              <i className="fas fa-info-circle text-avengers-blue mr-2"></i> Movie Details
            </h3>
            
            <ul className="space-y-4 mb-8">
              <li
                  data-name="movie-release-date"
                  className="flex flex-col">

                <span className="text-gray-400 text-sm">Release Date</span>
                <span className="text-white">{movie.year}</span>
              </li>
              
              <li
                  data-name="movie-mcu-phase"
                  className="flex flex-col">

                <span className="text-gray-400 text-sm">MCU Phase</span>
                <span className="text-white">Phase {movie.phase}</span>
              </li>
              
              <li
                  data-name="movie-chronology"
                  className="flex flex-col">

                <span className="text-gray-400 text-sm">MCU Chronology</span>
                <span className="text-white">#{movie.id}</span>
              </li>
              
              <li
                  data-name="movie-rating-detail"
                  className="flex flex-col">

                <span className="text-gray-400 text-sm">Rating</span>
                <div className="flex items-center">
                  <i className="fas fa-star text-yellow-400 mr-1"></i>
                  <span className="text-white">{movie.rating.toFixed(1)}/10</span>
                </div>
              </li>
            </ul>
            
            {/* Featured characters */}
            <h3
                data-name="featured-characters-title"
                className="text-xl font-bold text-white mb-4 flex items-center">

              <i className="fas fa-users text-avengers-red mr-2"></i> Featured Characters
            </h3>
            
            <div
                data-name="featured-characters"
                className="grid grid-cols-2 gap-4 mb-8">

              {/* Generate some featured characters based on the movie */}
              {/* We'll show a subset of characters that might appear in this movie */}
              {charactersData.slice(0, 4).map((character) =>
                <div
                  key={character.id}
                  data-name={`featured-character-${character.id}`}
                  className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors duration-300 cursor-pointer">

                  <div className="h-24 overflow-hidden">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover object-top" />

                  </div>
                  <div className="p-2 text-center">
                    <h4 className="text-white text-sm font-medium">{character.name}</h4>
                  </div>
                </div>
                )}
            </div>
            
            {/* Related movies */}
            <h3
                data-name="related-movies-title"
                className="text-xl font-bold text-white mb-4 flex items-center">

              <i className="fas fa-film text-avengers-gold mr-2"></i> Related Movies
            </h3>
            
            <ul
                data-name="related-movies-list"
                className="space-y-3">

              {/* Show movies from the same phase */}
              {moviesData.
                filter((m) => m.phase === movie.phase && m.id !== movie.id).
                slice(0, 3).
                map((relatedMovie) =>
                <li
                  key={relatedMovie.id}
                  data-name={`related-movie-${relatedMovie.id}`}
                  className="flex items-center gap-3 bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer">

                    <img
                    src={relatedMovie.poster}
                    alt={relatedMovie.title}
                    className="w-12 h-16 object-cover rounded" />

                    <div>
                      <h4 className="text-white text-sm font-medium">{relatedMovie.title}</h4>
                      <p className="text-gray-400 text-xs">{relatedMovie.year}</p>
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
            className="p-6 md:p-10">

            <h2
              data-name="characters-tab-title"
              className="text-2xl font-bold text-white mb-6 flex items-center">

              <i className="fas fa-users text-avengers-red mr-3"></i> Characters in {movie.title}
            </h2>
            
            <div
              data-name="characters-grid"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {getRelevantCharacters().map((character) =>
              <div
                key={character.id}
                data-name={`character-card-${character.id}`}
                className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">

                  <div className="h-48 overflow-hidden">
                    <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                    data-name={`character-image-${character.id}`} />

                  </div>
                  <div className="p-4">
                    <h3
                    data-name={`character-name-${character.id}`}
                    className="text-lg font-bold text-white mb-1">

                      {character.name}
                    </h3>
                    <p
                    data-name={`character-real-name-${character.id}`}
                    className="text-sm text-gray-400">

                      {character.realName}
                    </p>
                    <p
                    data-name={`character-portrayed-${character.id}`}
                    className="text-xs text-gray-500 mt-2">

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
            className="p-6 md:p-10">

            <h2
              data-name="gallery-tab-title"
              className="text-2xl font-bold text-white mb-6 flex items-center">

              <i className="fas fa-images text-avengers-gold mr-3"></i> {movie.title} Gallery
            </h2>
            
            <div
              data-name="gallery-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {/* Main poster as first gallery item */}
              <div
                data-name="gallery-item-poster"
                className="relative group cursor-pointer rounded-lg overflow-hidden">

                <img
                  src={movie.poster}
                  alt={`${movie.title} poster`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Official Poster</p>
                </div>
              </div>
              
              {/* Placeholder gallery items - in a real app, these would come from the movie data */}
              <div
                data-name="gallery-item-1"
                className="relative group cursor-pointer bg-gray-800 rounded-lg overflow-hidden">

                <div className="w-full h-64 flex items-center justify-center">
                  <i className="fas fa-film text-5xl text-gray-600"></i>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 flex items-end p-4">
                  <p className="text-white font-medium">Scene from {movie.title}</p>
                </div>
              </div>
              
              <div
                data-name="gallery-item-2"
                className="relative group cursor-pointer bg-gray-800 rounded-lg overflow-hidden">

                <div className="w-full h-64 flex items-center justify-center">
                  <i className="fas fa-camera text-5xl text-gray-600"></i>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 flex items-end p-4">
                  <p className="text-white font-medium">Behind the Scenes</p>
                </div>
              </div>
            </div>
          </div>
          }
        
        {/* Related Movies Tab Content */}
        {activeTab === 'related' &&
          <div
            data-name="movie-related-content"
            className="p-6 md:p-10">

            <h2
              data-name="related-tab-title"
              className="text-2xl font-bold text-white mb-6 flex items-center">

              <i className="fas fa-film text-avengers-blue mr-3"></i> Related to {movie.title}
            </h2>
            
            <div className="mb-8">
              <h3
                data-name="same-phase-title"
                className="text-xl font-bold text-white mb-4 flex items-center">

                <i className="fas fa-layer-group text-avengers-gold mr-2"></i> Same Phase
              </h3>
              
              <div
                data-name="same-phase-movies"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {moviesData.
                filter((m) => m.phase === movie.phase && m.id !== movie.id).
                slice(0, 3).
                map((relatedMovie) =>
                <div
                  key={relatedMovie.id}
                  data-name={`related-movie-card-${relatedMovie.id}`}
                  className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all duration-300 cursor-pointer flex">

                      <img
                    src={relatedMovie.poster}
                    alt={relatedMovie.title}
                    className="w-24 h-36 object-cover" />

                      <div className="p-4 flex flex-col justify-between flex-grow">
                        <div>
                          <h4 className="text-white font-bold mb-1">{relatedMovie.title}</h4>
                          <p className="text-gray-400 text-sm">{relatedMovie.year}</p>
                        </div>
                        <div className="flex items-center mt-2">
                          <i className="fas fa-star text-yellow-400 mr-1 text-sm"></i>
                          <span className="text-white text-sm">{relatedMovie.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                )}
              </div>
            </div>
            
            <div>
              <h3
                data-name="chronology-title"
                className="text-xl font-bold text-white mb-4 flex items-center">

                <i className="fas fa-clock text-avengers-red mr-2"></i> MCU Timeline
              </h3>
              
              <div
                data-name="timeline-visualization"
                className="relative py-8 px-4 border-l-2 border-gray-800">

                {moviesData.
                filter((m) => Math.abs(m.id - movie.id) <= 2 && m.id !== movie.id).
                sort((a, b) => a.id - b.id).
                map((timelineMovie, index) =>
                <div
                  key={timelineMovie.id}
                  data-name={`timeline-item-${timelineMovie.id}`}
                  className={`mb-6 ml-6 relative ${timelineMovie.id === movie.id ? 'opacity-100' : 'opacity-80'}`}>

                      <div
                    className="absolute -left-10 w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: getPhaseColor(timelineMovie.phase),
                      top: '6px'
                    }}>
                  </div>
                      <div className="flex items-start">
                        <div className="mr-4 text-sm text-gray-500">{timelineMovie.year}</div>
                        <div>
                          <h4 className="text-white font-medium">{timelineMovie.title}</h4>
                          <p className="text-gray-400 text-sm mt-1">Phase {timelineMovie.phase}</p>
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