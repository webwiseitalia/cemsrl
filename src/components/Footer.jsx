import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const titleRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the big title - use 'from' so elements are visible by default
      gsap.from(titleRef.current, {
        yPercent: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 95%',
          toggleActions: 'play none none none',
        },
      });

      // Animate footer columns - use 'from' so elements are visible by default
      gsap.from('.footer-col', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 95%',
          toggleActions: 'play none none none',
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Chi Siamo', href: '/chi-siamo' },
    { name: 'Servizi', href: '/servizi' },
    { name: 'Progetti', href: '/progetti' },
    { name: 'Contatti', href: '/contatti' },
  ];

  return (
    <footer ref={footerRef} className="bg-[#0a0a0a] text-[#f5f2eb] relative overflow-hidden">
      {/* Big decorative title */}
      <div className="overflow-hidden py-16 md:py-24 border-b border-[#f5f2eb]/10">
        <h2
          ref={titleRef}
          className="font-display text-[clamp(3rem,15vw,14rem)] leading-[0.85] text-center tracking-tighter opacity-20"
        >
          C.E.M.
        </h2>
      </div>

      {/* Main content - Asymmetric grid */}
      <div className="px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {/* Left side - Company info */}
          <div className="col-span-12 md:col-span-5 lg:col-span-4 footer-col">
            <div className="mb-8">
              <span className="font-small text-[#E31C25] block mb-4">Impresa Edile</span>
              <h3 className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] mb-6">
                Costruzioni solide,<br />
                lavori che durano.
              </h3>
            </div>
            <address className="not-italic font-body text-[#f5f2eb]/60 leading-relaxed">
              <p className="font-semibold text-[#f5f2eb] mb-2">C.E.M. S.r.l.</p>
              <p>Vicolo Pedrazzi, 15</p>
              <p>25040 Corteno Golgi (BS)</p>
              <p className="mt-4">P.IVA 03519900983</p>
            </address>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Navigation */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2 footer-col md:mt-12">
            <span className="font-small text-[#f5f2eb]/40 block mb-6">Navigazione</span>
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="font-body text-[#f5f2eb]/80 hover:text-[#E31C25] transition-colors duration-300 link-anim w-fit"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="col-span-6 md:col-span-4 lg:col-span-3 footer-col md:mt-24">
            <span className="font-small text-[#f5f2eb]/40 block mb-6">Contatti</span>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+390364000000"
                className="font-body text-[#f5f2eb]/80 hover:text-[#E31C25] transition-colors duration-300 link-anim w-fit"
              >
                +39 0364 00 00 00
              </a>
              <a
                href="mailto:info@cemsrl.it"
                className="font-body text-[#f5f2eb]/80 hover:text-[#E31C25] transition-colors duration-300 link-anim w-fit"
              >
                info@cemsrl.it
              </a>
            </div>

            <div className="mt-12">
              <span className="font-small text-[#f5f2eb]/40 block mb-4">Area operativa</span>
              <p className="font-body text-[#f5f2eb]/60 text-sm">
                Alta Valle Camonica<br />
                Provincia di Brescia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar - Minimal */}
      <div className="px-6 md:px-12 py-6 border-t border-[#f5f2eb]/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-small text-[#f5f2eb]/40">
            {currentYear} C.E.M. S.r.l.
          </p>
          <div className="flex gap-8">
            <Link
              to="/privacy"
              className="font-small text-[#f5f2eb]/40 hover:text-[#f5f2eb] transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              to="/cookie"
              className="font-small text-[#f5f2eb]/40 hover:text-[#f5f2eb] transition-colors duration-300"
            >
              Cookie
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-5">
          <path d="M100 0 L100 100 L0 100 Z" fill="#E31C25" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
