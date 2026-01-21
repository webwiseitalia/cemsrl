import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContattiPage = () => {
  const pageRef = useRef(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ nome: '', email: '', telefono: '', messaggio: '' });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        '.hero-title .word',
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo(
        '.hero-desc',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.8 }
      );

      // Contact info animation
      gsap.fromTo(
        '.contact-item',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Form animation
      gsap.fromTo(
        '.form-field',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.form-section',
            start: 'top 75%',
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
      <section className="min-h-[60vh] bg-[#0a0a0a] text-[#f5f2eb] relative overflow-hidden flex items-end pb-20 md:pb-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-[#f5f2eb]/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-[#f5f2eb]/5 rounded-full" />
        </div>

        <div className="w-full px-6 md:px-12">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8">
              <span className="font-small text-[#E31C25] block mb-6">Contatti</span>
              <h1 className="hero-title overflow-hidden">
                <span className="word inline-block font-display leading-[0.9]">
                  Parliamo
                </span>
                <br />
                <span className="word inline-block font-display leading-[0.9] ml-[5vw]">
                  del tuo
                </span>
                <br />
                <span className="word inline-block font-display leading-[0.9] ml-[15vw]">
                  Progetto
                </span>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-3 md:col-start-10 flex items-end">
              <p className="hero-desc font-body text-[#f5f2eb]/60 max-w-xs">
                Contattaci per un preventivo gratuito e senza impegno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-[#f5f2eb] py-24 md:py-40">
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            {/* Contact Info - Left side */}
            <div className="col-span-12 md:col-span-4">
              <div className="sticky top-32">
                <span className="font-small text-[#E31C25] block mb-8">Info</span>

                <div className="space-y-12">
                  <div className="contact-item">
                    <span className="font-small text-[#6b6b6b] block mb-2">Sede</span>
                    <address className="not-italic font-body text-[#0a0a0a]">
                      <p className="font-semibold mb-1">C.E.M. S.r.l.</p>
                      <p className="text-[#6b6b6b]">Vicolo Pedrazzi, 15</p>
                      <p className="text-[#6b6b6b]">25040 Corteno Golgi (BS)</p>
                    </address>
                  </div>

                  <div className="contact-item">
                    <span className="font-small text-[#6b6b6b] block mb-2">Telefono</span>
                    <a
                      href="tel:+390364000000"
                      className="font-subhead text-[#0a0a0a] hover:text-[#E31C25] transition-colors duration-300 link-anim"
                    >
                      +39 0364 00 00 00
                    </a>
                  </div>

                  <div className="contact-item">
                    <span className="font-small text-[#6b6b6b] block mb-2">Email</span>
                    <a
                      href="mailto:info@cemsrl.it"
                      className="font-subhead text-[#0a0a0a] hover:text-[#E31C25] transition-colors duration-300 link-anim"
                    >
                      info@cemsrl.it
                    </a>
                  </div>

                  <div className="contact-item">
                    <span className="font-small text-[#6b6b6b] block mb-2">Orari</span>
                    <p className="font-body text-[#0a0a0a]">Lun - Ven: 8:00 - 18:00</p>
                    <p className="font-body text-[#6b6b6b]">Sabato: 8:00 - 12:00</p>
                  </div>

                  <div className="contact-item pt-8 border-t border-[#0a0a0a]/10">
                    <span className="font-small text-[#6b6b6b] block mb-2">P.IVA</span>
                    <p className="font-body text-[#0a0a0a]">03519900983</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form - Right side */}
            <div className="col-span-12 md:col-span-7 md:col-start-6 form-section">
              <span className="font-small text-[#E31C25] block mb-8">Richiedi Preventivo</span>

              {isSubmitted && (
                <div className="mb-8 p-6 bg-[#E31C25]/10 border-l-4 border-[#E31C25]">
                  <p className="font-body text-[#0a0a0a]">
                    Messaggio inviato con successo! Ti ricontatteremo presto.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="form-field">
                  <label
                    htmlFor="nome"
                    className={`font-small block mb-3 transition-colors duration-300 ${
                      focusedField === 'nome' ? 'text-[#E31C25]' : 'text-[#6b6b6b]'
                    }`}
                  >
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('nome')}
                    onBlur={() => setFocusedField(null)}
                    required
                    placeholder="Mario Rossi"
                    className="input-brutal"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="form-field">
                    <label
                      htmlFor="email"
                      className={`font-small block mb-3 transition-colors duration-300 ${
                        focusedField === 'email' ? 'text-[#E31C25]' : 'text-[#6b6b6b]'
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="mario@email.it"
                      className="input-brutal"
                    />
                  </div>
                  <div className="form-field">
                    <label
                      htmlFor="telefono"
                      className={`font-small block mb-3 transition-colors duration-300 ${
                        focusedField === 'telefono' ? 'text-[#E31C25]' : 'text-[#6b6b6b]'
                      }`}
                    >
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('telefono')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="+39 333 1234567"
                      className="input-brutal"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label
                    htmlFor="messaggio"
                    className={`font-small block mb-3 transition-colors duration-300 ${
                      focusedField === 'messaggio' ? 'text-[#E31C25]' : 'text-[#6b6b6b]'
                    }`}
                  >
                    Descrivi il tuo progetto
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('messaggio')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    placeholder="Descrivi brevemente il tipo di lavoro..."
                    className="input-brutal resize-none"
                  />
                </div>

                <div className="form-field flex items-start gap-4">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="mt-1 w-5 h-5 accent-[#E31C25]"
                  />
                  <label htmlFor="privacy" className="font-body text-[#6b6b6b] text-sm">
                    Acconsento al trattamento dei miei dati personali secondo la{' '}
                    <a href="/privacy" className="text-[#0a0a0a] hover:text-[#E31C25] link-anim">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <div className="form-field pt-4">
                  <button type="submit" className="btn-brutal">
                    <span>Invia Richiesta</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[50vh] md:h-[60vh] bg-[#0a0a0a]">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#f5f2eb] to-transparent z-10 pointer-events-none" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11088.067095845!2d10.2456!3d46.1642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782e1a5d1b7b8e7%3A0x4b8e7c8d5e6f7a8b!2s25040%20Corteno%20Golgi%20BS!5e0!3m2!1sit!2sit!4v1699000000000!5m2!1sit!2sit"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mappa sede C.E.M. S.r.l."
        />
        <div className="absolute bottom-8 left-6 md:left-12 z-10">
          <div className="bg-[#0a0a0a] text-[#f5f2eb] p-6 md:p-8 max-w-xs">
            <span className="font-small text-[#E31C25] block mb-3">Dove Siamo</span>
            <p className="font-body text-sm">
              Corteno Golgi, nel cuore dell'Alta Valle Camonica.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContattiPage;
