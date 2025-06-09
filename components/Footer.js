// Footer component
function Footer() {
  return (
    <footer
      data-name="footer"
      className="bg-gray-900 text-white py-12" data-id="1jh1y36ne" data-path="components/Footer.js">

      <div className="container-custom mx-auto px-4" data-id="cj8yicqyv" data-path="components/Footer.js">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-id="72s83n76u" data-path="components/Footer.js">
          {/* Logo and description */}
          <div data-name="footer-brand" className="md:col-span-2" data-id="qe7ubn96h" data-path="components/Footer.js">
            <div
              data-name="footer-logo"
              className="text-2xl font-bold mb-4" data-id="65crvy7dp" data-path="components/Footer.js">

              <span className="text-avengers-red" data-id="21ses7m0m" data-path="components/Footer.js">A</span>
              <span className="text-white" data-id="xzcus59mu" data-path="components/Footer.js">vengers</span>
              <span className="text-avengers-blue ml-1" data-id="wmbby5dqn" data-path="components/Footer.js">Universe</span>
            </div>
            <p
              data-name="footer-description"
              className="text-gray-400 mb-6 max-w-md" data-id="hgxit5dmc" data-path="components/Footer.js">

              The official website for Marvel's Avengers movies. Explore the epic cinematic universe featuring Earth's Mightiest Heroes.
            </p>
            <div
              data-name="footer-social"
              className="flex space-x-4" data-id="j9rcaw6os" data-path="components/Footer.js">

              <a
                href="#"
                data-name="social-facebook"
                className="text-gray-400 hover:text-avengers-blue transition-colors duration-300" data-id="94fyu55fv" data-path="components/Footer.js">

                <i className="fab fa-facebook-f text-xl" data-id="gpz6ocxin" data-path="components/Footer.js"></i>
              </a>
              <a
                href="#"
                data-name="social-twitter"
                className="text-gray-400 hover:text-avengers-blue transition-colors duration-300" data-id="hysgou4s9" data-path="components/Footer.js">

                <i className="fab fa-twitter text-xl" data-id="hikrto898" data-path="components/Footer.js"></i>
              </a>
              <a
                href="#"
                data-name="social-instagram"
                className="text-gray-400 hover:text-avengers-blue transition-colors duration-300" data-id="lnm7wqopa" data-path="components/Footer.js">

                <i className="fab fa-instagram text-xl" data-id="bihz0y791" data-path="components/Footer.js"></i>
              </a>
              <a
                href="#"
                data-name="social-youtube"
                className="text-gray-400 hover:text-avengers-red transition-colors duration-300" data-id="t00ant0gl" data-path="components/Footer.js">

                <i className="fab fa-youtube text-xl" data-id="cqrh537b1" data-path="components/Footer.js"></i>
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div data-name="footer-links" data-id="nk5v82687" data-path="components/Footer.js">
            <h3
              data-name="links-title"
              className="text-lg font-bold mb-4 text-white" data-id="mbfq578y0" data-path="components/Footer.js">

              Quick Links
            </h3>
            <ul className="space-y-2" data-id="y1vt94vrf" data-path="components/Footer.js">
              {navLinks.map((link, index) =>
              <li key={index} data-id="daolqsnl2" data-path="components/Footer.js">
                  <a
                  href={link.path}
                  data-name={`footer-link-${link.name.toLowerCase()}`}
                  className="text-gray-400 hover:text-avengers-gold transition-colors duration-300" data-id="p4qe3ihab" data-path="components/Footer.js">

                    {link.name}
                  </a>
                </li>
              )}
            </ul>
          </div>
          
          {/* Contact info */}
          <div data-name="footer-contact" data-id="8cii1d91g" data-path="components/Footer.js">
            <h3
              data-name="contact-title"
              className="text-lg font-bold mb-4 text-white" data-id="y5l47u7sv" data-path="components/Footer.js">

              Contact Us
            </h3>
            <ul className="space-y-3" data-id="mrq53jo7f" data-path="components/Footer.js">
              <li
                data-name="contact-email"
                className="flex items-start" data-id="velcq9s27" data-path="components/Footer.js">

                <i className="fas fa-envelope text-avengers-red mt-1 mr-3" data-id="8qvdb1opm" data-path="components/Footer.js"></i>
                <span className="text-gray-400" data-id="v33ro9wqy" data-path="components/Footer.js">info@avengers-universe.com</span>
              </li>
              <li
                data-name="contact-phone"
                className="flex items-start" data-id="k3asyclta" data-path="components/Footer.js">

                <i className="fas fa-phone text-avengers-red mt-1 mr-3" data-id="s2pjhyd8h" data-path="components/Footer.js"></i>
                <span className="text-gray-400" data-id="ot19rpj0d" data-path="components/Footer.js">+1 (555) 123-4567</span>
              </li>
              <li
                data-name="contact-address"
                className="flex items-start" data-id="rxv21bjc4" data-path="components/Footer.js">

                <i className="fas fa-map-marker-alt text-avengers-red mt-1 mr-3" data-id="hxc7ingq8" data-path="components/Footer.js"></i>
                <span className="text-gray-400" data-id="t9ulbp1t7" data-path="components/Footer.js">890 Fifth Avenue, Manhattan, New York</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" data-id="dzjx0ms1x" data-path="components/Footer.js" />
        
        {/* Bottom footer */}
        <div
          data-name="footer-bottom"
          className="flex flex-col md:flex-row justify-between items-center" data-id="mk3ga13wu" data-path="components/Footer.js">

          <div
            data-name="footer-copyright"
            className="text-gray-500 text-sm mb-4 md:mb-0" data-id="5cg0a3y25" data-path="components/Footer.js">

            &copy; {new Date().getFullYear()} Avengers Universe. All rights reserved.
          </div>
          <div
            data-name="footer-legal"
            className="flex flex-wrap justify-center gap-4 text-sm" data-id="6mi7d2cdj" data-path="components/Footer.js">

            <a
              href="#"
              data-name="legal-terms"
              className="text-gray-500 hover:text-white transition-colors duration-300" data-id="1lntacfun" data-path="components/Footer.js">

              Terms of Service
            </a>
            <a
              href="#"
              data-name="legal-privacy"
              className="text-gray-500 hover:text-white transition-colors duration-300" data-id="2m081ylcc" data-path="components/Footer.js">

              Privacy Policy
            </a>
            <a
              href="#"
              data-name="legal-cookies"
              className="text-gray-500 hover:text-white transition-colors duration-300" data-id="fayjn7opp" data-path="components/Footer.js">

              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>);

}