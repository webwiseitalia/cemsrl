import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiziPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  const services = [
    {
      num: '01',
      title: 'Costruzione Edifici',
      subtitle: 'Civili & Industriali',
      description: 'Realizziamo edifici residenziali, commerciali e industriali completi, dalla fondazione alla copertura.',
      features: ['Residenziale', 'Commerciale', 'Industriale', 'Agricolo']
    },
    {
      num: '02',
      title: 'Ristrutturazioni',
      subtitle: 'Complete & Parziali',
      description: 'Interveniamo su edifici esistenti con ristrutturazioni totali o parziali, rispettando le caratteristiche originali.',
      features: ['Integrale', 'Facciate', 'Sismica', 'Energetica']
    },
    {
      num: '03',
      title: 'Manutenzioni',
      subtitle: 'Ordinarie & Straordinarie',
      description: 'Offriamo servizi di manutenzione programmata e interventi straordinari per preservare il valore degli edifici.',
      features: ['Programmata', 'Urgente', 'Impermeabilizzazione', 'Consolidamento']
    },
    {
      num: '04',
      title: 'Opere Strutturali',
      subtitle: 'Muratura & Cemento Armato',
      description: 'Eseguiamo opere in muratura tradizionale e moderna, strutture in cemento armato gettato in opera.',
      features: ['Murature', 'C.A.', 'Fondazioni', 'Solai']
    },
    {
      num: '05',
      title: 'Finiture',
      subtitle: 'Interne & Esterne',
      description: 'Completiamo gli edifici con finiture di qualita: intonaci, pavimentazioni, rivestimenti, serramenti.',
      features: ['Intonaci', 'Pavimenti', 'Serramenti', 'Cartongesso']
    },
    {
      num: '06',
      title: 'Movimento Terra',
      subtitle: 'Scavi & Sistemazioni',
      description: 'Realizziamo scavi, sbancamenti, preparazione di aree edificabili e tutte le opere accessorie.',
      features: ['Scavi', 'Sbancamenti', 'Urbanizzazione', 'Sistemazioni']
    }
  ];

  const process = [
    { num: '01', title: 'Sopralluogo', desc: 'Analisi del sito e delle esigenze' },
    { num: '02', title: 'Preventivo', desc: 'Proposta dettagliata trasparente' },
    { num: '03', title: 'Esecuzione', desc: 'Controllo qualita costante' },
    { num: '04', title: 'Consegna', desc: 'Collaudo e assistenza' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        '.hero-title .word',
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo(
        '.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.8 }
      );

      // Service cards animation
      gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Process steps animation
      gsap.fromTo(
        '.process-step',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.process-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Horizontal line animation
      gsap.fromTo(
        '.process-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: '.process-section',
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef}>
      {/* Hero Section */}
      <section className="min-h-[70vh] bg-[#0a0a0a] text-[#f5f2eb] relative overflow-hidden flex items-end pb-20 md:pb-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[60vw] h-[60vw] border border-[#f5f2eb]/20 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] border border-[#f5f2eb]/20 rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="w-full px-6 md:px-12">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 lg:col-span-6">
              <span className="font-small text-[#E31C25] block mb-6">Servizi</span>
              <h1 className="hero-title overflow-hidden">
                <span className="word inline-block font-display leading-[0.9]">
                  Soluzioni
                </span>
                <br />
                <span className="word inline-block font-display leading-[0.9] ml-[10vw]">
                  Complete
                </span>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-4 lg:col-start-9 flex items-end">
              <p className="hero-subtitle font-body text-[#f5f2eb]/60 max-w-sm">
                Dalla progettazione alla consegna, offriamo un servizio completo
                per ogni esigenza edilizia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Broken Layout */}
      <section ref={servicesRef} className="bg-[#f5f2eb] py-24 md:py-40">
        <div className="px-6 md:px-12">
          {/* Services as alternating asymmetric blocks */}
          <div className="space-y-24 md:space-y-40">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card grid grid-cols-12 gap-4 md:gap-8 ${
                  index % 2 === 0 ? '' : ''
                }`}
              >
                {/* Number - Always visible */}
                <div className={`col-span-2 md:col-span-1 ${index % 2 === 1 ? 'md:order-3 md:col-start-12' : ''}`}>
                  <span className="font-display text-[clamp(2rem,5vw,4rem)] text-[#E31C25]/30">
                    {service.num}
                  </span>
                </div>

                {/* Content */}
                <div className={`col-span-10 md:col-span-5 ${
                  index % 2 === 1 ? 'md:order-1 md:col-start-1' : 'md:col-start-2'
                }`}>
                  <span className="font-small text-[#6b6b6b] block mb-3">{service.subtitle}</span>
                  <h2 className="font-heading mb-6">{service.title}</h2>
                  <p className="font-body text-[#6b6b6b] mb-8 max-w-md">{service.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className="font-small text-[#0a0a0a]/70 px-4 py-2 border border-[#0a0a0a]/20 hover:border-[#E31C25] hover:text-[#E31C25] transition-colors duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual element */}
                <div className={`hidden md:block md:col-span-4 ${
                  index % 2 === 1 ? 'md:order-2 md:col-start-7' : 'md:col-start-8'
                }`}>
                  <div className="aspect-[4/3] bg-[#0a0a0a]/5 relative overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-[clamp(4rem,10vw,8rem)] text-[#0a0a0a]/5 group-hover:text-[#E31C25]/10 transition-colors duration-500">
                        {service.num}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E31C25] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section bg-[#0a0a0a] text-[#f5f2eb] py-24 md:py-40 overflow-hidden">
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-12 gap-4 mb-16 md:mb-24">
            <div className="col-span-12 md:col-span-6">
              <span className="font-small text-[#E31C25] block mb-4">Come Lavoriamo</span>
              <h2 className="font-heading">
                Il nostro<br />
                processo
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 flex items-end">
              <p className="font-body text-[#f5f2eb]/60">
                Un metodo collaudato che garantisce risultati di qualita.
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="process-line hidden md:block absolute top-8 left-0 right-0 h-[1px] bg-[#f5f2eb]/20 origin-left" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {process.map((step, index) => (
                <div key={index} className="process-step relative">
                  <div className="relative z-10">
                    <div className="w-16 h-16 border border-[#f5f2eb]/30 flex items-center justify-center mb-6 bg-[#0a0a0a]">
                      <span className="font-display text-2xl text-[#E31C25]">{step.num}</span>
                    </div>
                    <h3 className="font-subhead text-[#f5f2eb] mb-2">{step.title}</h3>
                    <p className="font-body text-[#f5f2eb]/50 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
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
                Hai bisogno di<br />
                uno dei nostri servizi?
              </h2>
              <p className="font-body text-[#f5f2eb]/80 max-w-md">
                Contattaci per un sopralluogo gratuito e un preventivo personalizzato.
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

export default ServiziPage;
