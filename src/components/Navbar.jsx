import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const logoRef = useRef(null);

  const navigation = [
    { name: 'Chi Siamo', href: '/chi-siamo' },
    { name: 'Servizi', href: '/servizi' },
    { name: 'Progetti', href: '/progetti' },
    { name: 'Contatti', href: '/contatti' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(logoRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 }
      );
    }
  }, []);

  const menuVariants = {
    closed: {
      clipPath: 'circle(0% at calc(100% - 40px) 40px)',
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    },
    open: {
      clipPath: 'circle(150% at calc(100% - 40px) 40px)',
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const linkVariants = {
    closed: { y: 50, opacity: 0 },
    open: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    })
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg'
            : 'py-5 md:py-6 bg-[#0a0a0a]'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12">
          <Link
            to="/"
            ref={logoRef}
            className="relative group"
          >
            <span className="font-heading text-[clamp(1.25rem,2vw,1.75rem)] text-[#f5f2eb] tracking-tight">
              C.E.M.
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#E31C25] group-hover:w-full transition-all duration-500 ease-out" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navigation.map((item, i) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative font-small text-[#f5f2eb]/80 hover:text-[#f5f2eb] transition-colors duration-300 ${
                  location.pathname === item.href ? 'text-[#f5f2eb]' : ''
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#E31C25]" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative w-12 h-12 flex items-center justify-center z-[1001] lg:hidden ${
              isOpen ? 'text-[#f5f2eb]' : ''
            }`}
            aria-label="Toggle menu"
          >
            <div className="relative w-7 h-5 flex flex-col justify-between">
              <motion.span
                className="w-full h-[2px] bg-[#f5f2eb] origin-center"
                animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <motion.span
                className="w-full h-[2px] bg-[#f5f2eb]"
                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <motion.span
                className="w-full h-[2px] bg-[#f5f2eb] origin-center"
                animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
          </button>

          {/* Desktop CTA Button */}
          <Link
            to="/contatti"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#E31C25] text-[#f5f2eb] font-small hover:bg-[#FF2D2D] transition-colors duration-300"
          >
            <span>Contattaci</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[999] bg-[#0a0a0a] lg:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="h-full flex flex-col justify-center px-6 md:px-12">
              <nav className="flex flex-col items-start gap-4">
                {[{ name: 'Home', href: '/' }, ...navigation].map((item, i) => (
                  <motion.div
                    key={item.href}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    className="overflow-hidden"
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block font-heading text-[clamp(2rem,8vw,4rem)] leading-tight hover:text-[#E31C25] transition-colors duration-300 ${
                        location.pathname === item.href ? 'text-[#E31C25]' : 'text-[#f5f2eb]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-16 pt-8 border-t border-[#f5f2eb]/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="text-[#f5f2eb]/60 font-body text-sm">
                  <p>Vicolo Pedrazzi, 15</p>
                  <p>25040 Corteno Golgi (BS)</p>
                  <p className="mt-4">P.IVA 03519900983</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
