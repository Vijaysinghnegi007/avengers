// MovieCard component
function MovieCard({ movie, onViewDetails }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      data-name={`movie-card-${movie.id}`}
      className="movie-card bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>

      {/* Movie poster with overlay */}
      <div className="relative overflow-hidden" style={{ height: "300px" }}>
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          data-name={`movie-poster-${movie.id}`} />

        
        {/* Hover overlay */}
        <div
          data-name={`movie-overlay-${movie.id}`}
          className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'}`
          }>

          <a
            href={movie.trailer}
            target="_blank"
            rel="noopener noreferrer"
            data-name={`movie-trailer-button-${movie.id}`}
            className="bg-avengers-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105">

            <i className="fas fa-play"></i> Watch Trailer
          </a>
        </div>
        
        {/* Year badge */}
        <div
          data-name={`movie-year-${movie.id}`}
          className="absolute top-3 right-3 bg-avengers-blue text-white text-sm font-bold px-2 py-1 rounded">

          {movie.year}
        </div>
      </div>
      
      {/* Movie info */}
      <div className="p-4 flex-grow flex flex-col">
        <h3
          data-name={`movie-title-${movie.id}`}
          className="text-xl font-bold text-white mb-2">

          {movie.title}
        </h3>
        
        <div
          data-name={`movie-director-${movie.id}`}
          className="text-gray-400 text-sm mb-2">

          <span className="font-medium">Director:</span> {movie.director}
        </div>
        
        <p
          data-name={`movie-description-${movie.id}`}
          className="text-gray-300 text-sm mb-4 flex-grow">

          {movie.description.length > 120 ?
          `${movie.description.substring(0, 120)}...` :
          movie.description}
        </p>
        
        {/* Rating */}
        <div
          data-name={`movie-rating-${movie.id}`}
          className="flex items-center mt-auto">

          <div className="flex items-center">
            <i className="fas fa-star text-yellow-400 mr-1"></i>
            <span className="text-white font-bold">{movie.rating.toFixed(1)}</span>
          </div>
          <span className="text-gray-400 text-sm ml-2">/10</span>
        </div>
      </div>
      
      {/* Footer with action button */}
      <div
        data-name={`movie-footer-${movie.id}`}
        className="px-4 pb-4">

        <button
          data-name={`movie-details-button-${movie.id}`}
          className="w-full py-2.5 bg-gradient-to-r from-avengers-blue to-avengers-red text-white rounded-md font-bold hover:shadow-lg hover:scale-[1.02] transform transition-all duration-300 flex items-center justify-center gap-2"
          onClick={() => onViewDetails(movie)}>

          <i className="fas fa-info-circle"></i> View Details
        </button>
      </div>
    </div>);

}