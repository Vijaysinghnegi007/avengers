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
      className="py-20 bg-gradient-to-b from-black to-gray-900" data-id="l1fqlwyxf" data-path="components/FAQ.js">

      <div className="container-custom mx-auto px-4" data-id="c7arvv9x1" data-path="components/FAQ.js">
        <div className="text-center mb-12" data-id="0m9tig2mx" data-path="components/FAQ.js">
          <h2
            data-name="faq-title"
            className="section-title text-white inline-block" data-id="qj6ezwa6a" data-path="components/FAQ.js">

            Frequently Asked Questions
          </h2>
          <p
            data-name="faq-subtitle"
            className="text-gray-300 max-w-2xl mx-auto mt-6" data-id="q8bzrdeqe" data-path="components/FAQ.js">

            Everything you need to know about the Avengers movies, characters, and the Marvel Cinematic Universe.
          </p>
        </div>
        
        {/* FAQ accordion */}
        <div
          data-name="faq-accordion"
          className="max-w-3xl mx-auto" data-id="yxt3rtusd" data-path="components/FAQ.js">

          {faqData.map((faq, index) =>
          <div
            key={index}
            data-name={`faq-item-${index}`}
            className={`mb-4 border border-gray-800 rounded-lg overflow-hidden ${
            openIndex === index ? 'bg-gray-800' : 'bg-gray-900'}`
            } data-id="4vfwx9f7e" data-path="components/FAQ.js">

              {/* Question */}
              <button
              data-name={`faq-question-${index}`}
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)} data-id="5rt0jo5vj" data-path="components/FAQ.js">

                <span className="text-white font-medium" data-id="htnm0nfuj" data-path="components/FAQ.js">{faq.question}</span>
                <i
                className={`fas ${openIndex === index ? 'fa-minus' : 'fa-plus'} text-avengers-red transition-transform duration-300 ${
                openIndex === index ? 'transform rotate-180' : ''}`
                } data-id="lq7i4x0ya" data-path="components/FAQ.js">
              </i>
              </button>
              
              {/* Answer */}
              <div
              data-name={`faq-answer-${index}`}
              className={`px-6 overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`
              } data-id="uuwda5u76" data-path="components/FAQ.js">

                <p className="text-gray-300" data-id="2euasvgf1" data-path="components/FAQ.js">{faq.answer}</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Still have questions */}
        <div
          data-name="more-questions"
          className="text-center mt-12 p-6 bg-gray-900 rounded-lg max-w-2xl mx-auto" data-id="w4j8di2nv" data-path="components/FAQ.js">

          <h3
            data-name="more-questions-title"
            className="text-xl font-bold text-white mb-3" data-id="4w52fs6zf" data-path="components/FAQ.js">

            Still Have Questions?
          </h3>
          <p
            data-name="more-questions-text"
            className="text-gray-300 mb-6" data-id="b1yaszl84" data-path="components/FAQ.js">

            Can't find the answer you're looking for? Feel free to reach out to our support team.
          </p>
          <div className="relative" data-id="ptk3bzv6i" data-path="components/FAQ.js">
            <button
              data-name="contact-button"
              className="avengers-button"
              onClick={toggleContactInfo} data-id="9e8jk2wgv" data-path="components/FAQ.js">

              Contact Us
            </button>
            
            {showContactInfo &&
            <div
              data-name="contact-info-popup"
              className="absolute left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-gray-800 rounded-lg shadow-lg z-10 w-64 animate-fade-in"
              style={{ animation: 'fadeIn 0.3s ease-in-out' }} data-id="x2fu4g787" data-path="components/FAQ.js">

                <div className="flex items-center justify-center gap-3 text-white" data-id="llott4dmr" data-path="components/FAQ.js">
                  <i className="fas fa-phone text-avengers-red" data-id="uqe8s4ni7" data-path="components/FAQ.js"></i>
                  <span className="font-medium" data-id="m4biz6xjo" data-path="components/FAQ.js">+1 (555) 123-4567</span>
                </div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rotate-45" data-id="uwei5ihhy" data-path="components/FAQ.js"></div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>);

}