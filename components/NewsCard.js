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
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover-scale" data-id="wiqzwhrng" data-path="components/NewsCard.js">

      {/* News image */}
      <div
        data-name={`news-image-container-${news.id}`}
        className="h-48 overflow-hidden" data-id="lq6pv88id" data-path="components/NewsCard.js">

        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          data-name={`news-image-${news.id}`} data-id="yfbl9bvy7" data-path="components/NewsCard.js" />

      </div>
      
      {/* News content */}
      <div
        data-name={`news-content-${news.id}`}
        className="p-6" data-id="7celykeik" data-path="components/NewsCard.js">

        <div
          data-name={`news-date-${news.id}`}
          className="text-avengers-blue text-sm font-medium mb-2" data-id="cz97q1ze0" data-path="components/NewsCard.js">

          {formatDate(news.date)}
        </div>
        
        <h3
          data-name={`news-title-${news.id}`}
          className="text-xl font-bold text-white mb-3 line-clamp-2" data-id="aoi8vejac" data-path="components/NewsCard.js">

          {news.title}
        </h3>
        
        <p
          data-name={`news-summary-${news.id}`}
          className="text-gray-300 text-sm mb-4 line-clamp-3" data-id="w2ue24akb" data-path="components/NewsCard.js">

          {news.summary}
        </p>
        
        <a
          href={news.link}
          data-name={`news-read-more-${news.id}`}
          className="inline-flex items-center text-avengers-red hover:text-red-400 font-medium transition-colors duration-300" data-id="j6zb99hq4" data-path="components/NewsCard.js">

          Read More
          <i className="fas fa-arrow-right ml-2 text-sm" data-id="7bc7zzvcp" data-path="components/NewsCard.js"></i>
        </a>
      </div>
    </div>);

}