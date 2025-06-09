// MovieGrid component
function MovieGrid() {
  const [activeFilter, setActiveFilter] = React.useState('all');
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Handle view details click
  const handleViewDetails = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Filter movies based on selected filter
  React.useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredMovies(moviesData);
    } else if (activeFilter === 'phase1') {
      setFilteredMovies(moviesData.filter((movie) => movie.phase === 1));
    } else if (activeFilter === 'phase2') {
      setFilteredMovies(moviesData.filter((movie) => movie.phase === 2));
    } else if (activeFilter === 'phase3') {
      setFilteredMovies(moviesData.filter((movie) => movie.phase === 3));
    }
  }, [activeFilter]);

  return (
    <section
      id="movies"
      data-name="movies-section"
      className="py-20 bg-gradient-to-b from-black to-gray-900" data-id="v4nnjxtmd" data-path="components/MovieGrid.js">

      <div className="container-custom mx-auto px-4" data-id="vu44nygw8" data-path="components/MovieGrid.js">
        <div className="text-center mb-12" data-id="i9d117nvv" data-path="components/MovieGrid.js">
          <h2
            data-name="movies-title"
            className="section-title text-white inline-block" data-id="cjzaio2h0" data-path="components/MovieGrid.js">

            The Avengers Saga
          </h2>
          <p
            data-name="movies-subtitle"
            className="text-gray-300 max-w-2xl mx-auto mt-6" data-id="6llowi6xt" data-path="components/MovieGrid.js">

            Experience the epic journey of Earth's mightiest heroes as they face threats too great for any one hero to handle.
          </p>
        </div>
        
        {/* Movie filters */}
        <div
          data-name="movie-filters"
          className="flex flex-wrap justify-center gap-4 mb-10" data-id="lu70l6o4x" data-path="components/MovieGrid.js">

          <button
            data-name="filter-all"
            className={`px-6 py-2 ${activeFilter === 'all' ? 'bg-avengers-blue' : 'bg-gray-800'} text-white rounded-full hover:bg-blue-700 transition-colors duration-300`}
            onClick={() => setActiveFilter('all')} data-id="55m03fe7t" data-path="components/MovieGrid.js">

            All Movies
          </button>
          <button
            data-name="filter-phase1"
            className={`px-6 py-2 ${activeFilter === 'phase1' ? 'bg-avengers-red' : 'bg-gray-800'} text-white rounded-full hover:bg-red-700 transition-colors duration-300`}
            onClick={() => setActiveFilter('phase1')} data-id="qdu2cmdrx" data-path="components/MovieGrid.js">

            Phase 1
          </button>
          <button
            data-name="filter-phase2"
            className={`px-6 py-2 ${activeFilter === 'phase2' ? 'bg-avengers-gold' : 'bg-gray-800'} text-white rounded-full hover:bg-yellow-600 transition-colors duration-300`}
            onClick={() => setActiveFilter('phase2')} data-id="j5j7q8tgz" data-path="components/MovieGrid.js">

            Phase 2
          </button>
          <button
            data-name="filter-phase3"
            className={`px-6 py-2 ${activeFilter === 'phase3' ? 'bg-avengers-blue' : 'bg-gray-800'} text-white rounded-full hover:bg-blue-700 transition-colors duration-300`}
            onClick={() => setActiveFilter('phase3')} data-id="vmnoknbpu" data-path="components/MovieGrid.js">

            Phase 3
          </button>
        </div>
        
        {/* Movies grid */}
        <div
          data-name="movies-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-id="xi29ubeo2" data-path="components/MovieGrid.js">

          {filteredMovies.map((movie) =>
          <MovieCard
            key={movie.id}
            movie={movie}
            onViewDetails={handleViewDetails} data-id="607i2e055" data-path="components/MovieGrid.js" />

          )}
        </div>
        
        {/* More movies button */}
        <div
          data-name="more-movies"
          className="text-center mt-12" data-id="txvikntk8" data-path="components/MovieGrid.js">

          <a
            href="https://www.marvel.com/movies"
            target="_blank"
            rel="noopener noreferrer"
            data-name="more-movies-button"
            className="avengers-button px-8 py-3 inline-block" data-id="0p6ae73v2" data-path="components/MovieGrid.js">

            Explore All Marvel Movies
          </a>
        </div>
        
        {/* Movie Details Modal */}
        <MovieDetailsModal
          isOpen={isModalOpen}
          movie={selectedMovie}
          onClose={closeModal} data-id="1dwx4qgmv" data-path="components/MovieGrid.js" />

      </div>
    </section>);

}