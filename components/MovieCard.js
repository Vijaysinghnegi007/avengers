// MovieCard component
function MovieCard({ movie, onViewDetails }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      data-name={`movie-card-${movie.id}`}
      className="movie-card bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} data-id="2lebl092z" data-path="components/MovieCard.js">

      {/* Movie poster with overlay */}
      <div className="relative overflow-hidden" style={{ height: "300px" }} data-id="is4z8h3bx" data-path="components/MovieCard.js">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          data-name={`movie-poster-${movie.id}`} data-id="tshbq9ira" data-path="components/MovieCard.js" />

        
        {/* Hover overlay */}
        <div
          data-name={`movie-overlay-${movie.id}`}
          className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'}`
          } data-id="4tsycfhjy" data-path="components/MovieCard.js">

          <a
            href={movie.trailer}
            target="_blank"
            rel="noopener noreferrer"
            data-name={`movie-trailer-button-${movie.id}`}
            className="bg-avengers-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105" data-id="kku66k09a" data-path="components/MovieCard.js">

            <i className="fas fa-play" data-id="xzqptvoa3" data-path="components/MovieCard.js"></i> Watch Trailer
          </a>
        </div>
        
        {/* Year badge */}
        <div
          data-name={`movie-year-${movie.id}`}
          className="absolute top-3 right-3 bg-avengers-blue text-white text-sm font-bold px-2 py-1 rounded" data-id="4ry1sfi1n" data-path="components/MovieCard.js">

          {movie.year}
        </div>
      </div>
      
      {/* Movie info */}
      <div className="p-4 flex-grow flex flex-col" data-id="4x1jdlvv4" data-path="components/MovieCard.js">
        <h3
          data-name={`movie-title-${movie.id}`}
          className="text-xl font-bold text-white mb-2" data-id="2cw6b1ywo" data-path="components/MovieCard.js">

          {movie.title}
        </h3>
        
        <div
          data-name={`movie-director-${movie.id}`}
          className="text-gray-400 text-sm mb-2" data-id="mtbo9k48r" data-path="components/MovieCard.js">

          <span className="font-medium" data-id="78ovcz49h" data-path="components/MovieCard.js">Director:</span> {movie.director}
        </div>
        
        <p
          data-name={`movie-description-${movie.id}`}
          className="text-gray-300 text-sm mb-4 flex-grow" data-id="6plew87e5" data-path="components/MovieCard.js">

          {movie.description.length > 120 ?
          `${movie.description.substring(0, 120)}...` :
          movie.description}
        </p>
        
        {/* Rating */}
        <div
          data-name={`movie-rating-${movie.id}`}
          className="flex items-center mt-auto" data-id="l2erhvnin" data-path="components/MovieCard.js">

          <div className="flex items-center" data-id="0hhhaxlj5" data-path="components/MovieCard.js">
            <i className="fas fa-star text-yellow-400 mr-1" data-id="fx3ew1abe" data-path="components/MovieCard.js"></i>
            <span className="text-white font-bold" data-id="vhnr8l6ih" data-path="components/MovieCard.js">{movie.rating.toFixed(1)}</span>
          </div>
          <span className="text-gray-400 text-sm ml-2" data-id="c1juqbcyq" data-path="components/MovieCard.js">/10</span>
        </div>
      </div>
      
      {/* Footer with action button */}
      <div
        data-name={`movie-footer-${movie.id}`}
        className="px-4 pb-4" data-id="embgbilqr" data-path="components/MovieCard.js">

        <button
          data-name={`movie-details-button-${movie.id}`}
          className="w-full py-2.5 bg-gradient-to-r from-avengers-blue to-avengers-red text-white rounded-md font-bold hover:shadow-lg hover:scale-[1.02] transform transition-all duration-300 flex items-center justify-center gap-2"
          onClick={() => onViewDetails(movie)} data-id="i3urz2s7h" data-path="components/MovieCard.js">

          <i className="fas fa-info-circle" data-id="0leyvqe6a" data-path="components/MovieCard.js"></i> View Details
        </button>
      </div>
    </div>);

}