import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, PhoneIcon } from './Icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Gestione scroll per navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Chiudi menu mobile quando cambia pagina
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Servizi', path: '/servizi' },
    { name: 'Progetti', path: '/progetti' },
    { name: 'Contatti', path: '/contatti' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <svg viewBox="0 0 40 40" className="w-8 h-8">
                <path d="M8 32 L8 16 L14 10 L20 16 L20 32 Z" fill="#d97706"/>
                <path d="M20 32 L20 16 L26 10 L32 16 L32 32 Z" fill="#f79f33"/>
                <rect x="12" y="22" width="4" height="5" fill="#1a4b7c"/>
                <rect x="24" y="22" width="4" height="5" fill="#1a4b7c"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-xl text-primary-500">C.E.M.</span>
              <span className="font-heading font-bold text-xl text-accent-500"> S.r.l.</span>
              <p className="text-xs text-secondary-400 -mt-1">Impresa Edile</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 relative py-2 ${
                  isActive(link.path)
                    ? 'text-accent-500'
                    : 'text-secondary-600 hover:text-primary-500'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Link
              to="/contatti"
              className="btn-primary"
            >
              Richiedi Preventivo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-secondary-600 hover:text-primary-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 px-4 font-medium rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'text-accent-500 bg-accent-50'
                    : 'text-secondary-600 hover:text-primary-500 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-4">
              <Link
                to="/contatti"
                className="btn-primary w-full text-center"
              >
                Richiedi Preventivo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
