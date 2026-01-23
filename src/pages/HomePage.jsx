import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import heroImage from '../assets/foto/villa-costruzione-neve-cem.webp';
import casaPietra from '../assets/foto/casa-pietra-legno-completata.webp';
import cantiereCem from '../assets/foto/cantiere-cem-cartello.webp';
import baitaEstate from '../assets/foto/baita-pietra-legno-estate.webp';
import borgoMontano from '../assets/foto/borgo-montano-valle-camonica.jpg';
import interniCamino from '../assets/foto/interni-camino-pietra.webp';
import fondazioni from '../assets/foto/fondazioni-cemento-armato.webp';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation - animate the spans directly
      gsap.fromTo('.hero-title-word',
        { y: 100, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power4.out',
          delay: 0.3
        }
      );

      // Hero image parallax
      gsap.to('.hero-img', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5
        }
      });

      // About section reveal
      const aboutTitle = aboutRef.current?.querySelector('.about-title');
      if (aboutTitle) {
        const aboutSplit = new SplitType(aboutTitle, { types: 'lines' });
        gsap.fromTo(aboutSplit.lines,
          { y: 80, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: aboutRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // About image reveal
      gsap.fromTo('.about-img',
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.5,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: '.about-img',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Services stagger
      gsap.fromTo('.service-item',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.8,
          stagger: { amount: 0.6, from: 'start' },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Projects horizontal scroll hint
      gsap.fromTo('.project-card',
        { x: 100, opacity: 0, rotate: 3 },
        {
          x: 0, opacity: 1, rotate: 0,
          duration: 1,
          stagger: { amount: 0.8, from: 'start' },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Marquee speed variation on scroll
      gsap.to('.marquee-content', {
        x: '-50%',
        ease: 'none',
        duration: 20,
        repeat: -1
      });

      // Divider animations
      gsap.utils.toArray('.divider-anim').forEach(divider => {
        gsap.fromTo(divider,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: 'power4.inOut',
            scrollTrigger: {
              trigger: divider,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero Section - Broken Grid */}
      <section ref={heroRef} className="relative min-h-screen flex items-end pb-[var(--space-lg)] pt-40 md:pt-52">
        {/* Background Image - Full Cover */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage}
            alt=""
            className="hero-img w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)] via-[var(--color-cream)]/30 to-transparent" />
        </div>

        {/* Content - Asymmetric */}
        <div className="relative z-10 w-full px-6 md:px-12">
          <div className="grid-broken">
            <div className="col-span-full md:col-span-8 md:col-offset-1">
              <p className="font-small text-[var(--color-rust)] mb-4">
                Impresa Edile dal 1998
              </p>
              <h1
                ref={heroTitleRef}
                className="font-display text-[var(--color-dark)] leading-[0.85] mb-8 overflow-hidden"
              >
                <span className="hero-title-word block whitespace-nowrap">Costruzioni</span>
                <span className="hero-title-word block text-[var(--color-rust)]">solide.</span>
              </h1>
              <p className="font-subhead text-[var(--color-stone)] max-w-xl ml-[5vw]">
                Lavori che durano nel tempo.
                <br />
                Alta Valle Camonica.
              </p>
            </div>
          </div>

          {/* Stats - Irregular placement */}
          <div className="flex gap-16 mt-16 ml-[20vw]">
            <div>
              <span className="font-display text-[clamp(3rem,6vw,5rem)] text-[var(--color-dark)]">25+</span>
              <p className="font-small text-[var(--color-stone)]">Anni</p>
            </div>
            <div className="mt-8">
              <span className="font-display text-[clamp(3rem,6vw,5rem)] text-[var(--color-dark)]">200+</span>
              <p className="font-small text-[var(--color-stone)]">Progetti</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-12 text-vertical font-small text-[var(--color-stone)]">
          Scroll
        </div>
      </section>

      {/* Divider */}
      <div className="divider-brutal divider-anim mx-12 my-[var(--space-lg)]" />

      {/* About Section - Broken Layout */}
      <section ref={aboutRef} className="py-[var(--space-xl)] px-6 md:px-12">
        <div className="grid-broken items-start">
          {/* Text - Left offset */}
          <div className="col-span-full md:col-span-5 md:col-offset-1 order-2 md:order-1 mt-12 md:mt-0">
            <p className="num-marker mb-6">01</p>
            <h2 className="about-title font-heading text-[var(--color-dark)] mb-8">
              Un&apos;impresa edile
              <br />
              radicata nel
              <br />
              territorio
            </h2>
            <div className="font-body text-[var(--color-stone)] space-y-6 max-w-md">
              <p>
                C.E.M. S.r.l. opera nel cuore dell&apos;Alta Valle Camonica
                con competenza tecnica maturata in oltre due decenni
                di attivita sul campo.
              </p>
              <p>
                Dalla costruzione di nuovi edifici alla ristrutturazione
                completa, garantiamo il rispetto delle normative vigenti
                e la massima sicurezza in cantiere.
              </p>
            </div>
            <Link to="/chi-siamo" className="btn-brutal mt-12">
              <span>Scopri di piu</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </Link>
          </div>

          {/* Image - Overlapping right */}
          <div className="col-span-full md:col-span-6 order-1 md:order-2 md:-mr-[10vw]">
            <div className="about-img img-frame">
              <img
                src={casaPietra}
                alt="Casa in pietra Valle Camonica"
                className="w-full h-auto img-brutal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div ref={marqueeRef} className="marquee py-8 border-y border-[var(--color-dark)]/10">
        <div className="marquee-content">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-display text-[clamp(2rem,4vw,4rem)] text-[var(--color-dark)]/10 whitespace-nowrap mx-8">
              COSTRUZIONI • RISTRUTTURAZIONI • MANUTENZIONI • EDILIZIA CIVILE •
            </span>
          ))}
        </div>
      </div>

      {/* Services Section - Staggered Grid */}
      <section ref={servicesRef} className="py-[var(--space-xl)] px-6 md:px-12">
        <div className="flex justify-between items-end mb-[var(--space-lg)]">
          <div className="ml-broken">
            <p className="num-marker mb-4">02</p>
            <h2 className="font-heading text-[var(--color-dark)]">
              Servizi
            </h2>
          </div>
          <Link to="/servizi" className="link-anim font-small text-[var(--color-stone)] hidden md:block">
            Tutti i servizi
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            { title: 'Costruzioni Civili', desc: 'Edifici residenziali e commerciali con tecniche all\'avanguardia', img: cantiereCem },
            { title: 'Ristrutturazioni', desc: 'Recupero e ammodernamento di edifici esistenti', img: baitaEstate },
            { title: 'Opere Strutturali', desc: 'Fondazioni, cemento armato e consolidamenti', img: fondazioni },
          ].map((service, i) => (
            <div
              key={i}
              className={`service-item border-t border-[var(--color-dark)]/10 pt-8 pb-16 ${
                i === 1 ? 'md:border-x md:px-8 md:mt-16' : i === 2 ? 'md:mt-32' : ''
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden mb-6">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover img-brutal hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-subhead text-[var(--color-dark)] mb-3">{service.title}</h3>
              <p className="font-body text-[var(--color-stone)]">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="divider-brutal divider-anim mx-12 my-[var(--space-md)]" />

      {/* Projects Preview - Horizontal Scroll Tease */}
      <section ref={projectsRef} className="py-[var(--space-xl)] overflow-visible">
        <div className="px-6 md:px-12 mb-12">
          <p className="num-marker mb-4">03</p>
          <div className="flex justify-between items-end">
            <h2 className="font-heading text-[var(--color-dark)]">
              Progetti<br />
              <span className="text-[var(--color-rust)]">recenti</span>
            </h2>
            <Link to="/progetti" className="btn-brutal">
              <span>Vedi tutti</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex gap-6 px-6 md:px-12 overflow-x-auto pb-8 -mr-6 md:-mr-12">
          {[
            { title: 'Villa Alpina', location: 'Corteno Golgi', img: heroImage },
            { title: 'Baita Tradizionale', location: 'Ponte di Legno', img: baitaEstate },
            { title: 'Interni Rustici', location: 'Edolo', img: interniCamino },
            { title: 'Borgo Montano', location: 'Vezza d\'Oglio', img: borgoMontano },
          ].map((project, i) => (
            <Link
              key={i}
              to="/progetti"
              className={`project-card flex-shrink-0 w-[75vw] md:w-[35vw] group ${
                i % 2 === 1 ? 'mt-16' : ''
              }`}
            >
              <div className="aspect-[4/5] overflow-hidden mb-4">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover img-brutal group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-subhead text-[var(--color-dark)]">{project.title}</h3>
                  <p className="font-small text-[var(--color-stone)]">{project.location}</p>
                </div>
                <svg
                  className="w-6 h-6 text-[var(--color-rust)] transform group-hover:translate-x-2 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section - Full Bleed with Form */}
      <section className="relative py-[var(--space-xl)] bg-[var(--color-dark)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={cantiereCem}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Text */}
            <div>
              <h2 className="font-display text-[var(--color-cream)] mb-8">
                Hai un
                <br />
                progetto?
              </h2>
              <p className="font-subhead text-[var(--color-cream)] max-w-xl mb-8">
                Contattaci per un preventivo gratuito.
              </p>
              <p className="font-body text-[var(--color-concrete)] max-w-md mb-12">
                Il nostro team è pronto ad ascoltare le tue esigenze e proporti la soluzione migliore per il tuo progetto edilizio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+390364000000"
                  className="inline-flex items-center gap-3 font-body text-[var(--color-cream)]"
                >
                  <span className="w-10 h-10 rounded-full border border-[var(--color-cream)]/30 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </span>
                  +39 0364 00 00 00
                </a>
                <a
                  href="mailto:info@cemsrl.it"
                  className="inline-flex items-center gap-3 font-body text-[var(--color-cream)]"
                >
                  <span className="w-10 h-10 rounded-full border border-[var(--color-cream)]/30 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  info@cemsrl.it
                </a>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-[var(--color-cream)] p-8 md:p-10">
              <h3 className="font-subhead text-[var(--color-dark)] mb-6">Richiedi un preventivo</h3>
              <form className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Nome e Cognome"
                    className="input-brutal w-full bg-transparent"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-brutal w-full bg-transparent"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Telefono"
                    className="input-brutal w-full bg-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Descrivi il tuo progetto..."
                    rows={4}
                    className="input-brutal w-full bg-transparent resize-none"
                    required
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="privacy-home" required className="mt-1 w-4 h-4 accent-[var(--color-rust)]" />
                  <label htmlFor="privacy-home" className="font-body text-[var(--color-stone)] text-sm">
                    Acconsento al trattamento dei dati secondo la <Link to="/privacy" className="text-[var(--color-rust)] hover:underline">Privacy Policy</Link>
                  </label>
                </div>
                <button type="submit" className="btn-brutal w-full justify-center">
                  <span>Invia richiesta</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-[var(--space-xl)] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="lg:pr-8">
            <p className="num-marker mb-4">04</p>
            <h2 className="font-heading text-[var(--color-dark)] mb-6">
              Dove operiamo
            </h2>
            <p className="font-body text-[var(--color-stone)] mb-8 max-w-lg">
              La nostra sede a Corteno Golgi ci posiziona strategicamente al centro dell&apos;Alta Valle Camonica, permettendoci di operare efficacemente su tutto il territorio provinciale.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[var(--color-rust)] flex-shrink-0" />
                <span className="font-body text-[var(--color-stone)]">Corteno Golgi e frazioni</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[var(--color-rust)] flex-shrink-0" />
                <span className="font-body text-[var(--color-stone)]">Alta Valle Camonica</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[var(--color-rust)] flex-shrink-0" />
                <span className="font-body text-[var(--color-stone)]">Media Valle Camonica</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[var(--color-rust)] flex-shrink-0" />
                <span className="font-body text-[var(--color-stone)]">Provincia di Brescia</span>
              </div>
            </div>
            <div className="pt-8 border-t border-[var(--color-dark)]/10">
              <p className="font-small text-[var(--color-rust)] mb-3">Sede Legale</p>
              <p className="font-body text-[var(--color-dark)] font-medium">C.E.M. S.r.l.</p>
              <p className="font-body text-[var(--color-stone)]">Vicolo Pedrazzi, 15</p>
              <p className="font-body text-[var(--color-stone)]">25040 Corteno Golgi (BS)</p>
              <p className="font-body text-[var(--color-stone)]/60 mt-2">P.IVA 03519900983</p>
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44352.26838319379!2d10.1992!3d46.1642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47831c8e8c8e8c8d%3A0x8c8e8c8e8c8e8c8e!2s25040%20Corteno%20Golgi%20BS!5e0!3m2!1sit!2sit!4v1699000000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa sede C.E.M. S.r.l. - Corteno Golgi"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
