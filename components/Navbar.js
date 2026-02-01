// Navbar component
function Navbar({ links }) {
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
      }>

      <div className="container-custom mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          data-name="logo-link"
          className="flex items-center">

          <div
            data-name="logo"
            className="text-3xl font-bold logo-animation flex items-center">

            <span className="text-avengers-red">A</span>
            <span className="text-white">vengers</span>
            <span className="text-avengers-blue ml-1">Universe</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div
          data-name="desktop-nav"
          className="hidden md:flex items-center space-x-8">

          {links.map((link, index) =>
          <a
            key={index}
            href={link.path}
            data-name={`nav-link-${link.name.toLowerCase()}`}
            className="text-white hover:text-avengers-gold transition-colors duration-300 font-medium">

              {link.name}
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          data-name="mobile-menu-button"
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}>

          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        data-name="mobile-nav"
        className={`md:hidden bg-black bg-opacity-95 overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-screen py-4' : 'max-h-0'}`
        }>

        <div className="container-custom mx-auto px-4 flex flex-col space-y-4">
          {links.map((link, index) =>
          <a
            key={index}
            href={link.path}
            data-name={`mobile-nav-link-${link.name.toLowerCase()}`}
            className="text-white hover:text-avengers-gold transition-colors duration-300 py-2 font-medium"
            onClick={() => setIsOpen(false)}>

              {link.name}
            </a>
          )}
        </div>
      </div>
    </nav>);

}