// NewsSection component
function NewsSection() {
  return (
    <section
      id="news"
      data-name="news-section"
      className="py-20 bg-black">

      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            data-name="news-title"
            className="section-title text-white inline-block">

            Latest News
          </h2>
          <p
            data-name="news-subtitle"
            className="text-gray-300 max-w-2xl mx-auto mt-6">

            Stay updated with the latest announcements, behind-the-scenes content, and upcoming releases from the Marvel Cinematic Universe.
          </p>
        </div>
        
        {/* News grid */}
        <div
          data-name="news-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {newsData.map((news) =>
          <NewsCard key={news.id} news={news} />
          )}
        </div>
        
        {/* Newsletter signup */}
        <div
          data-name="newsletter"
          className="mt-16 bg-gray-900 rounded-lg p-8 max-w-3xl mx-auto">

          <div className="text-center mb-6">
            <h3
              data-name="newsletter-title"
              className="text-2xl font-bold text-white mb-2">

              Subscribe to Our Newsletter
            </h3>
            <p
              data-name="newsletter-subtitle"
              className="text-gray-300">

              Get the latest Avengers news, exclusive content, and special offers delivered directly to your inbox.
            </p>
          </div>
          
          <form
            data-name="newsletter-form"
            className="flex flex-col md:flex-row gap-4">

            <input
              type="email"
              placeholder="Your email address"
              data-name="newsletter-email"
              className="flex-grow px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-avengers-blue"
              required />

            <button
              type="submit"
              data-name="newsletter-submit"
              className="avengers-button whitespace-nowrap">

              Subscribe Now
            </button>
          </form>
          
          <p
            data-name="newsletter-privacy"
            className="text-gray-500 text-xs mt-4 text-center">

            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>);

}