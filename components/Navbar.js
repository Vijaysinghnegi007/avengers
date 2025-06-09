// Navbar component
function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Handle scroll event to change navbar appearance
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      data-name="navbar"
      className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ?
      'bg-black bg-opacity-90 shadow-lg py-2' :
      'bg-transparent py-4'}`
      } data-id="sp17d5ddx" data-path="components/Navbar.js">

      <div className="container-custom mx-auto px-4 flex justify-between items-center" data-id="21aqp921z" data-path="components/Navbar.js">
        {/* Logo */}
        <a
          href="#home"
          data-name="logo-link"
          className="flex items-center" data-id="dqy6eqnpt" data-path="components/Navbar.js">

          <div
            data-name="logo"
            className="text-3xl font-bold logo-animation flex items-center" data-id="bdhl7kxpl" data-path="components/Navbar.js">

            <span className="text-avengers-red" data-id="2kujjoq2u" data-path="components/Navbar.js">A</span>
            <span className="text-white" data-id="3tg5ze73k" data-path="components/Navbar.js">vengers</span>
            <span className="text-avengers-blue ml-1" data-id="ez6km725a" data-path="components/Navbar.js">Universe</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div
          data-name="desktop-nav"
          className="hidden md:flex items-center space-x-8" data-id="hnhg45m3n" data-path="components/Navbar.js">

          {navLinks.map((link, index) =>
          <a
            key={index}
            href={link.path}
            data-name={`nav-link-${link.name.toLowerCase()}`}
            className="text-white hover:text-avengers-gold transition-colors duration-300 font-medium" data-id="uz6e8ueje" data-path="components/Navbar.js">

              {link.name}
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          data-name="mobile-menu-button"
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu} data-id="vtbm7c3oe" data-path="components/Navbar.js">

          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`} data-id="sspps8m7p" data-path="components/Navbar.js"></i>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        data-name="mobile-nav"
        className={`md:hidden bg-black bg-opacity-95 overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-screen py-4' : 'max-h-0'}`
        } data-id="5oglo6pjj" data-path="components/Navbar.js">

        <div className="container-custom mx-auto px-4 flex flex-col space-y-4" data-id="xaotd4s8g" data-path="components/Navbar.js">
          {navLinks.map((link, index) =>
          <a
            key={index}
            href={link.path}
            data-name={`mobile-nav-link-${link.name.toLowerCase()}`}
            className="text-white hover:text-avengers-gold transition-colors duration-300 py-2 font-medium"
            onClick={() => setIsOpen(false)} data-id="vjdu1vrgq" data-path="components/Navbar.js">

              {link.name}
            </a>
          )}
        </div>
      </div>
    </nav>);

}