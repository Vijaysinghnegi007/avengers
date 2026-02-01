// NewsCard component
function NewsCard({ news }) {
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div
      data-name={`news-card-${news.id}`}
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover-scale">

      {/* News image */}
      <div
        data-name={`news-image-container-${news.id}`}
        className="h-48 overflow-hidden">

        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          data-name={`news-image-${news.id}`} />

      </div>
      
      {/* News content */}
      <div
        data-name={`news-content-${news.id}`}
        className="p-6">

        <div
          data-name={`news-date-${news.id}`}
          className="text-avengers-blue text-sm font-medium mb-2">

          {formatDate(news.date)}
        </div>
        
        <h3
          data-name={`news-title-${news.id}`}
          className="text-xl font-bold text-white mb-3 line-clamp-2">

          {news.title}
        </h3>
        
        <p
          data-name={`news-summary-${news.id}`}
          className="text-gray-300 text-sm mb-4 line-clamp-3">

          {news.summary}
        </p>
        
        <a
          href={news.link}
          data-name={`news-read-more-${news.id}`}
          className="inline-flex items-center text-avengers-red hover:text-red-400 font-medium transition-colors duration-300">

          Read More
          <i className="fas fa-arrow-right ml-2 text-sm"></i>
        </a>
      </div>
    </div>);

}