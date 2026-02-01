// Footer component
function Footer({ links }) {
  return (
    <footer
      data-name="footer"
      className="bg-gray-900 text-white py-12">

      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div data-name="footer-brand" className="md:col-span-2">
            <div
              data-name="footer-logo"
              className="text-2xl font-bold mb-4">

              <span className="text-avengers-red">A</span>
              <span className="text-white">vengers</span>
              <span className="text-avengers-blue ml-1">Universe</span>
            </div>
            <p
              data-name="footer-description"
              className="text-gray-400 mb-6 max-w-md">

              The official website for Marvel's Avengers movies. Explore the epic cinematic universe featuring Earth's Mightiest Heroes.
            </p>
            <div
              data-name="footer-social"
              className="flex space-x-4">

              <a
                href="#"
                data-name="social-facebook"
                className="text-gray-400 hover:text-avengers-blue transition-colors duration-300">

                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="#"
                data-name="social-twitter"
                className="text-gray-400 hover:text-avengers-blue transition-colors duration-300">

                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                data-name="social-instagram"
                className="text-gray-400 hover:text-avengers-blue transition-colors duration-300">

                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                data-name="social-youtube"
                className="text-gray-400 hover:text-avengers-red transition-colors duration-300">

                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div data-name="footer-links">
            <h3
              data-name="links-title"
              className="text-lg font-bold mb-4 text-white">

              Quick Links
            </h3>
            <ul className="space-y-2">
              {links.map((link, index) =>
              <li key={index}>
                  <a
                  href={link.path}
                  data-name={`footer-link-${link.name.toLowerCase()}`}
                  className="text-gray-400 hover:text-avengers-gold transition-colors duration-300">

                    {link.name}
                  </a>
                </li>
              )}
            </ul>
          </div>
          
          {/* Contact info */}
          <div data-name="footer-contact">
            <h3
              data-name="contact-title"
              className="text-lg font-bold mb-4 text-white">

              Contact Us
            </h3>
            <ul className="space-y-3">
              <li
                data-name="contact-email"
                className="flex items-start">

                <i className="fas fa-envelope text-avengers-red mt-1 mr-3"></i>
                <span className="text-gray-400">info@avengers-universe.com</span>
              </li>
              <li
                data-name="contact-phone"
                className="flex items-start">

                <i className="fas fa-phone text-avengers-red mt-1 mr-3"></i>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li
                data-name="contact-address"
                className="flex items-start">

                <i className="fas fa-map-marker-alt text-avengers-red mt-1 mr-3"></i>
                <span className="text-gray-400">890 Fifth Avenue, Manhattan, New York</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        {/* Bottom footer */}
        <div
          data-name="footer-bottom"
          className="flex flex-col md:flex-row justify-between items-center">

          <div
            data-name="footer-copyright"
            className="text-gray-500 text-sm mb-4 md:mb-0">

            &copy; {new Date().getFullYear()} Avengers Universe. All rights reserved.
          </div>
          <div
            data-name="footer-legal"
            className="flex flex-wrap justify-center gap-4 text-sm">

            <a
              href="#"
              data-name="legal-terms"
              className="text-gray-500 hover:text-white transition-colors duration-300">

              Terms of Service
            </a>
            <a
              href="#"
              data-name="legal-privacy"
              className="text-gray-500 hover:text-white transition-colors duration-300">

              Privacy Policy
            </a>
            <a
              href="#"
              data-name="legal-cookies"
              className="text-gray-500 hover:text-white transition-colors duration-300">

              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>);

}