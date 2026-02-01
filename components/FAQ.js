// FAQ component
function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(0);
  const [showContactInfo, setShowContactInfo] = React.useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <section
      id="faq"
      data-name="faq-section"
      className="py-20 bg-gradient-to-b from-black to-gray-900">

      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            data-name="faq-title"
            className="section-title text-white inline-block">

            Frequently Asked Questions
          </h2>
          <p
            data-name="faq-subtitle"
            className="text-gray-300 max-w-2xl mx-auto mt-6">

            Everything you need to know about the Avengers movies, characters, and the Marvel Cinematic Universe.
          </p>
        </div>
        
        {/* FAQ accordion */}
        <div
          data-name="faq-accordion"
          className="max-w-3xl mx-auto">

          {faqData.map((faq, index) =>
          <div
            key={index}
            data-name={`faq-item-${index}`}
            className={`mb-4 border border-gray-800 rounded-lg overflow-hidden ${
            openIndex === index ? 'bg-gray-800' : 'bg-gray-900'}`
            }>

              {/* Question */}
              <button
              data-name={`faq-question-${index}`}
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}>

                <span className="text-white font-medium">{faq.question}</span>
                <i
                className={`fas ${openIndex === index ? 'fa-minus' : 'fa-plus'} text-avengers-red transition-transform duration-300 ${
                openIndex === index ? 'transform rotate-180' : ''}`
                }>
              </i>
              </button>
              
              {/* Answer */}
              <div
              data-name={`faq-answer-${index}`}
              className={`px-6 overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`
              }>

                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Still have questions */}
        <div
          data-name="more-questions"
          className="text-center mt-12 p-6 bg-gray-900 rounded-lg max-w-2xl mx-auto">

          <h3
            data-name="more-questions-title"
            className="text-xl font-bold text-white mb-3">

            Still Have Questions?
          </h3>
          <p
            data-name="more-questions-text"
            className="text-gray-300 mb-6">

            Can't find the answer you're looking for? Feel free to reach out to our support team.
          </p>
          <div className="relative">
            <button
              data-name="contact-button"
              className="avengers-button"
              onClick={toggleContactInfo}>

              Contact Us
            </button>
            
            {showContactInfo &&
            <div
              data-name="contact-info-popup"
              className="absolute left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-gray-800 rounded-lg shadow-lg z-10 w-64 animate-fade-in"
              style={{ animation: 'fadeIn 0.3s ease-in-out' }}>

                <div className="flex items-center justify-center gap-3 text-white">
                  <i className="fas fa-phone text-avengers-red"></i>
                  <span className="font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rotate-45"></div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>);

}