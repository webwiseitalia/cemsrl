import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import cantiereCem from '../assets/foto/cantiere-cem-cartello.webp';
import cantiereLavori from '../assets/foto/cantiere-casa-pietra-lavori.webp';
import borgoMontano from '../assets/foto/borgo-montano-valle-camonica.jpg';

gsap.registerPlugin(ScrollTrigger);

const ChiSiamoPage = () => {
  const pageRef = useRef(null);

  const values = [
    { num: '01', title: 'Sicurezza', desc: 'Massima attenzione alla sicurezza in cantiere.' },
    { num: '02', title: 'Professionalita', desc: 'Team di professionisti qualificati.' },
    { num: '03', title: 'Qualita', desc: 'Materiali certificati e tecniche all\'avanguardia.' },
    { num: '04', title: 'Affidabilita', desc: 'Rispetto degli impegni e trasparenza.' }
  ];

  const areas = [
    'Corteno Golgi e frazioni',
    'Alta Valle Camonica',
    'Media Valle Camonica',
    'Provincia di Brescia'
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        '.hero-title .word',
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.12, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo(
        '.hero-image',
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 }
      );

      // Story section parallax
      gsap.to('.parallax-image', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.story-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Values animation
      gsap.fromTo(
        '.value-card',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.values-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Area text reveal
      gsap.fromTo(
        '.area-item',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.area-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero Section */}
      <section className="min-h-screen bg-[#0a0a0a] text-[#f5f2eb] relative overflow-hidden">
        <div className="absolute inset-0 hero-image">
          <img
            src={cantiereCem}
            alt="Cantiere C.E.M."
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-12">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-10">
              <span className="font-small text-[#E31C25] block mb-6">Chi Siamo</span>
              <h1 className="hero-title overflow-hidden">
                <span className="word inline-block font-display leading-[0.9]">
                  Radici
                </span>
                <br />
                <span className="word inline-block font-display leading-[0.9] ml-[8vw]">
                  Solide
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section bg-[#f5f2eb] py-24 md:py-40">
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            {/* Text content */}
            <div className="col-span-12 md:col-span-5">
              <span className="font-small text-[#E31C25] block mb-8">La Nostra Storia</span>
              <h2 className="font-heading mb-8">
                Esperienza al servizio del territorio
              </h2>
              <div className="space-y-6 font-body text-[#6b6b6b]">
                <p>
                  <strong className="text-[#0a0a0a]">C.E.M. S.r.l.</strong> e un'impresa edile strutturata
                  con sede legale a Corteno Golgi, nel cuore dell'Alta Valle Camonica.
                </p>
                <p>
                  Operiamo nel settore delle costruzioni civili e industriali con una consolidata
                  esperienza maturata sul campo. La nostra attivita principale e la costruzione
                  di edifici residenziali e non residenziali.
                </p>
                <p>
                  Conosciamo profondamente il territorio: le sue caratteristiche geologiche,
                  le condizioni climatiche, le specificita costruttive locali.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="col-span-12 md:col-span-6 md:col-start-7 relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={cantiereLavori}
                  alt="Cantiere C.E.M. in costruzione"
                  className="parallax-image w-full h-[120%] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 md:-left-16 bg-[#E31C25] text-[#f5f2eb] p-6 md:p-8">
                <span className="font-display text-4xl md:text-5xl">25+</span>
                <span className="font-small block mt-2">Anni di esperienza</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Data Section */}
      <section className="bg-[#0a0a0a] text-[#f5f2eb] py-24 md:py-32">
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <span className="font-small text-[#E31C25] block mb-4">Dati Aziendali</span>
              <h3 className="font-heading text-[clamp(1.5rem,3vw,2.5rem)]">
                C.E.M. S.r.l.
              </h3>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <dl className="space-y-6">
                <div className="flex justify-between border-b border-[#f5f2eb]/10 pb-4">
                  <dt className="font-small text-[#f5f2eb]/50">Forma Giuridica</dt>
                  <dd className="font-body">S.r.l.</dd>
                </div>
                <div className="flex justify-between border-b border-[#f5f2eb]/10 pb-4">
                  <dt className="font-small text-[#f5f2eb]/50">Settore</dt>
                  <dd className="font-body">Impresa Edile</dd>
                </div>
                <div className="flex justify-between border-b border-[#f5f2eb]/10 pb-4">
                  <dt className="font-small text-[#f5f2eb]/50">P.IVA</dt>
                  <dd className="font-body">03519900983</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-small text-[#f5f2eb]/50">Sede</dt>
                  <dd className="font-body text-right">
                    Vicolo Pedrazzi, 15<br />
                    25040 Corteno Golgi (BS)
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section bg-[#f5f2eb] py-24 md:py-40">
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-12 gap-4 mb-16 md:mb-24">
            <div className="col-span-12 md:col-span-6">
              <span className="font-small text-[#E31C25] block mb-4">I Nostri Valori</span>
              <h2 className="font-heading">
                Principi che<br />
                guidano il lavoro
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="value-card group">
                <div className="border-t border-[#0a0a0a]/20 pt-6">
                  <span className="font-display text-5xl text-[#E31C25]/20 group-hover:text-[#E31C25]/40 transition-colors duration-500">
                    {value.num}
                  </span>
                  <h3 className="font-subhead text-[#0a0a0a] mt-4 mb-3">{value.title}</h3>
                  <p className="font-body text-[#6b6b6b] text-sm">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Section */}
      <section className="area-section relative min-h-[80vh] bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <img
            src={borgoMontano}
            alt="Borgo montano Valle Camonica"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        </div>

        <div className="relative z-10 py-24 md:py-40 px-6 md:px-12">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <span className="font-small text-[#E31C25] block mb-4">Area Operativa</span>
              <h2 className="font-heading text-[#f5f2eb] mb-8">
                Dove operiamo
              </h2>
              <p className="font-body text-[#f5f2eb]/60 mb-12 max-w-md">
                La nostra sede a Corteno Golgi ci posiziona strategicamente al centro
                dell'Alta Valle Camonica.
              </p>
              <ul className="space-y-4">
                {areas.map((area, index) => (
                  <li key={index} className="area-item flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-[#E31C25]" />
                    <span className="font-body text-[#f5f2eb]">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E31C25] text-[#f5f2eb] py-24 md:py-32">
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 md:col-span-7">
              <h2 className="font-heading mb-6">
                Vuoi conoscerci meglio?
              </h2>
              <p className="font-body text-[#f5f2eb]/80 max-w-md">
                Contattaci per discutere del tuo progetto e della nostra esperienza.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 mt-8 md:mt-0">
              <Link
                to="/contatti"
                className="btn-brutal bg-[#f5f2eb] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#f5f2eb] inline-flex"
              >
                <span>Contattaci</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChiSiamoPage;
