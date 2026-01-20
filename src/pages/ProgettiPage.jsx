import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import villaNeve from '../assets/foto/villa-pietra-neve-sera.webp';
import cantierePietra from '../assets/foto/cantiere-costruzione-pietra.webp';
import casaPietra from '../assets/foto/casa-pietra-legno-completata.webp';
import ponteggio from '../assets/foto/ponteggio-ristrutturazione.webp';
import interniLegno from '../assets/foto/interni-legno-xlam.webp';
import fondazioni from '../assets/foto/fondazioni-cemento-armato.webp';
import baitaEstate from '../assets/foto/baita-pietra-legno-estate.webp';
import cantiereCem from '../assets/foto/cantiere-cem-cartello.webp';
import ristrutturazione from '../assets/foto/ristrutturazione-ponteggi-montagna.webp';
import cantiereGru from '../assets/foto/cantiere-fondazioni-gru.webp';
import interniCamino from '../assets/foto/interni-camino-pietra.webp';
import villaCem from '../assets/foto/villa-costruzione-neve-cem.webp';
import cantiereLavori from '../assets/foto/cantiere-casa-pietra-lavori.webp';

gsap.registerPlugin(ScrollTrigger);

const ProgettiPage = () => {
  const pageRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('Tutti');

  const projects = [
    {
      id: 1,
      title: 'Villa con Pannelli Solari',
      category: 'Residenziale',
      location: 'Corteno Golgi',
      year: '2024',
      image: villaCem,
    },
    {
      id: 2,
      title: 'Baita Alpina',
      category: 'Nuova Costruzione',
      location: 'Corteno Golgi',
      year: '2023',
      image: casaPietra,
    },
    {
      id: 3,
      title: 'Villa Bifamiliare',
      category: 'Residenziale',
      location: 'Ponte di Legno',
      year: '2023',
      image: villaNeve,
    },
    {
      id: 4,
      title: 'Ristrutturazione Condominio',
      category: 'Ristrutturazione',
      location: 'Aprica',
      year: '2023',
      image: ristrutturazione,
    },
    {
      id: 5,
      title: 'Casa in Pietra',
      category: 'Nuova Costruzione',
      location: 'Edolo',
      year: '2024',
      image: cantierePietra,
    },
    {
      id: 6,
      title: 'Interni in Legno Xlam',
      category: 'Finiture',
      location: 'Vezza d\'Oglio',
      year: '2023',
      image: interniLegno,
    },
    {
      id: 7,
      title: 'Fondazioni in C.A.',
      category: 'Strutturale',
      location: 'Corteno Golgi',
      year: '2024',
      image: fondazioni,
    },
    {
      id: 8,
      title: 'Baita Tradizionale',
      category: 'Nuova Costruzione',
      location: 'Monno',
      year: '2022',
      image: baitaEstate,
    },
    {
      id: 9,
      title: 'Struttura Prefabbricata',
      category: 'Industriale',
      location: 'Cevo',
      year: '2024',
      image: cantiereGru,
    },
    {
      id: 10,
      title: 'Camino in Pietra',
      category: 'Finiture',
      location: 'Corteno Golgi',
      year: '2023',
      image: interniCamino,
    },
    {
      id: 11,
      title: 'Casa - Fase Copertura',
      category: 'Nuova Costruzione',
      location: 'Santicolo',
      year: '2024',
      image: cantiereLavori,
    },
    {
      id: 12,
      title: 'Manutenzione Copertura',
      category: 'Ristrutturazione',
      location: 'Ponte di Legno',
      year: '2023',
      image: ponteggio,
    }
  ];

  const categories = ['Tutti', 'Residenziale', 'Nuova Costruzione', 'Ristrutturazione', 'Finiture', 'Strutturale'];

  const filteredProjects = activeFilter === 'Tutti'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const stats = [
    { num: '200+', label: 'Progetti' },
    { num: '25+', label: 'Anni' },
    { num: '50+', label: 'Clienti' },
    { num: '100%', label: 'Consegnati' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        '.hero-title .word',
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.12, ease: 'power3.out', delay: 0.3 }
      );

      // Stats animation
      gsap.fromTo(
        '.stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate project cards when filter changes
    gsap.fromTo(
      '.project-card',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
    );
  }, [activeFilter]);

  return (
    <div ref={pageRef}>
      {/* Hero Section */}
      <section className="min-h-[70vh] bg-[#0a0a0a] text-[#f5f2eb] relative overflow-hidden flex items-end pb-20 md:pb-32">
        <div className="absolute inset-0 opacity-30">
          <img
            src={cantiereCem}
            alt="Cantiere C.E.M."
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-10">
              <span className="font-small text-[#E31C25] block mb-6">Portfolio</span>
              <h1 className="hero-title overflow-hidden">
                <span className="word inline-block font-display leading-[0.9]">
                  I Nostri
                </span>
                <br />
                <span className="word inline-block font-display leading-[0.9] ml-[10vw]">
                  Progetti
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="bg-[#f5f2eb] py-16 md:py-24">
        <div className="px-6 md:px-12">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-small px-5 py-2 border transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-[#0a0a0a] text-[#f5f2eb] border-[#0a0a0a]'
                    : 'bg-transparent text-[#0a0a0a] border-[#0a0a0a]/20 hover:border-[#E31C25] hover:text-[#E31C25]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid - Masonry-like */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {filteredProjects.map((project, index) => {
              // Create varied sizes for masonry effect
              const sizes = [
                'col-span-12 md:col-span-8',
                'col-span-12 md:col-span-4',
                'col-span-12 md:col-span-4',
                'col-span-12 md:col-span-4',
                'col-span-12 md:col-span-4',
                'col-span-12 md:col-span-8',
                'col-span-12 md:col-span-6',
                'col-span-12 md:col-span-6',
                'col-span-12 md:col-span-4',
                'col-span-12 md:col-span-8',
                'col-span-12 md:col-span-6',
                'col-span-12 md:col-span-6',
              ];
              const sizeClass = sizes[index % sizes.length];
              const isLarge = sizeClass.includes('col-span-8') || sizeClass.includes('col-span-6');

              return (
                <div
                  key={project.id}
                  className={`project-card ${sizeClass} group`}
                >
                  <div className={`relative overflow-hidden bg-[#0a0a0a] ${isLarge ? 'aspect-[16/10]' : 'aspect-square'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

                    {/* Content overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <span className="font-small text-[#E31C25] mb-2">{project.category}</span>
                      <h3 className="font-subhead text-[#f5f2eb] mb-2">{project.title}</h3>
                      <div className="flex items-center gap-4 text-[#f5f2eb]/60 font-small">
                        <span>{project.location}</span>
                        <span className="w-1 h-1 rounded-full bg-[#f5f2eb]/40" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    {/* Hover line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E31C25] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section bg-[#0a0a0a] text-[#f5f2eb] py-24 md:py-32">
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item text-center md:text-left">
                <span className="font-display text-[clamp(3rem,8vw,6rem)] text-[#E31C25]">
                  {stat.num}
                </span>
                <span className="font-small text-[#f5f2eb]/50 block mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E31C25] text-[#f5f2eb] py-24 md:py-32">
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 md:col-span-7">
              <h2 className="font-heading mb-6">
                Hai un progetto<br />
                da realizzare?
              </h2>
              <p className="font-body text-[#f5f2eb]/80 max-w-md">
                Contattaci per discutere delle tue esigenze e ricevere un preventivo personalizzato.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 mt-8 md:mt-0">
              <Link
                to="/contatti"
                className="btn-brutal bg-[#f5f2eb] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#f5f2eb] inline-flex"
              >
                <span>Richiedi Preventivo</span>
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

export default ProgettiPage;
