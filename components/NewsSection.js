// NewsSection component
function NewsSection() {
  return (
    <section
      id="news"
      data-name="news-section"
      className="py-20 bg-black" data-id="vv1l52tqg" data-path="components/NewsSection.js">

      <div className="container-custom mx-auto px-4" data-id="vbotdr4m8" data-path="components/NewsSection.js">
        <div className="text-center mb-12" data-id="n7zrwyqqh" data-path="components/NewsSection.js">
          <h2
            data-name="news-title"
            className="section-title text-white inline-block" data-id="14j5c4yjt" data-path="components/NewsSection.js">

            Latest News
          </h2>
          <p
            data-name="news-subtitle"
            className="text-gray-300 max-w-2xl mx-auto mt-6" data-id="tf4hulf16" data-path="components/NewsSection.js">

            Stay updated with the latest announcements, behind-the-scenes content, and upcoming releases from the Marvel Cinematic Universe.
          </p>
        </div>
        
        {/* News grid */}
        <div
          data-name="news-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="xpoeb5gvl" data-path="components/NewsSection.js">

          {newsData.map((news) =>
          <NewsCard key={news.id} news={news} data-id="20rst7kea" data-path="components/NewsSection.js" />
          )}
        </div>
        
        {/* Newsletter signup */}
        <div
          data-name="newsletter"
          className="mt-16 bg-gray-900 rounded-lg p-8 max-w-3xl mx-auto" data-id="zh3xlym4y" data-path="components/NewsSection.js">

          <div className="text-center mb-6" data-id="6pk9h0c25" data-path="components/NewsSection.js">
            <h3
              data-name="newsletter-title"
              className="text-2xl font-bold text-white mb-2" data-id="m3chucn5l" data-path="components/NewsSection.js">

              Subscribe to Our Newsletter
            </h3>
            <p
              data-name="newsletter-subtitle"
              className="text-gray-300" data-id="yrmq76f2p" data-path="components/NewsSection.js">

              Get the latest Avengers news, exclusive content, and special offers delivered directly to your inbox.
            </p>
          </div>
          
          <form
            data-name="newsletter-form"
            className="flex flex-col md:flex-row gap-4" data-id="36z1cuovq" data-path="components/NewsSection.js">

            <input
              type="email"
              placeholder="Your email address"
              data-name="newsletter-email"
              className="flex-grow px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-avengers-blue"
              required data-id="2hhllghn6" data-path="components/NewsSection.js" />

            <button
              type="submit"
              data-name="newsletter-submit"
              className="avengers-button whitespace-nowrap" data-id="2phcphrb7" data-path="components/NewsSection.js">

              Subscribe Now
            </button>
          </form>
          
          <p
            data-name="newsletter-privacy"
            className="text-gray-500 text-xs mt-4 text-center" data-id="jzd2mg8ou" data-path="components/NewsSection.js">

            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>);

}