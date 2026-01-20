import { useState } from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, CheckCircleIcon } from '../components/Icons';

const ContattiPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Sede Legale',
      lines: ['C.E.M. S.r.l.', 'Vicolo Pedrazzi, 15', '25040 Corteno Golgi (BS)']
    },
    {
      icon: PhoneIcon,
      title: 'Telefono',
      lines: ['+39 0364 00 00 00'],
      link: 'tel:+390364000000'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      lines: ['info@cemsrl.it'],
      link: 'mailto:info@cemsrl.it'
    },
    {
      icon: ClockIcon,
      title: 'Orari',
      lines: ['Lun - Ven: 8:00 - 18:00', 'Sabato: 8:00 - 12:00']
    }
  ];

  return (
    <>
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-800 to-primary-700">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Contatti</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-4 mb-6">
              Parliamo del tuo progetto
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Contattaci per un preventivo gratuito e senza impegno. Siamo a tua disposizione per qualsiasi informazione.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-3 mb-6">Richiedi un preventivo gratuito</h2>
              <p className="text-secondary-600 mb-8">
                Compila il modulo con i dettagli del tuo progetto. Ti ricontatteremo entro 24 ore lavorative.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500" />
                  <p className="text-green-700">Messaggio inviato con successo! Ti ricontatteremo presto.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-secondary-700 mb-2">
                    Nome e Cognome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    placeholder="Mario Rossi"
                    className="w-full"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="mario@email.it"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-secondary-700 mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+39 333 1234567"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="messaggio" className="block text-sm font-medium text-secondary-700 mb-2">
                    Descrivi il tuo progetto *
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Descrivi brevemente il tipo di lavoro che vorresti realizzare..."
                    className="w-full resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="privacy" required className="mt-1 w-4 h-4" />
                  <label htmlFor="privacy" className="text-sm text-secondary-600">
                    Acconsento al trattamento dei miei dati personali secondo la <a href="/privacy" className="text-primary-500 hover:underline">Privacy Policy</a>
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full md:w-auto">
                  Richiedi preventivo gratuito
                </button>
              </form>
            </div>

            <div>
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="font-heading font-bold text-xl text-primary-800 mb-6">Informazioni di Contatto</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-800">{info.title}</h4>
                        {info.lines.map((line, i) => (
                          info.link ? (
                            <a key={i} href={info.link} className="block text-secondary-600 hover:text-primary-500 transition-colors">
                              {line}
                            </a>
                          ) : (
                            <p key={i} className="text-secondary-600">{line}</p>
                          )
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary-800 rounded-2xl p-8 text-white">
                <h3 className="font-heading font-bold text-xl mb-4">Dati Aziendali</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-white/70">Ragione Sociale:</dt>
                    <dd className="font-medium">C.E.M. S.r.l.</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-white/70">P.IVA / C.F.:</dt>
                    <dd className="font-medium">03519900983</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-white/70">Forma Giuridica:</dt>
                    <dd className="font-medium">S.r.l.</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-96 bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11088.067095845!2d10.2456!3d46.1642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782e1a5d1b7b8e7%3A0x4b8e7c8d5e6f7a8b!2s25040%20Corteno%20Golgi%20BS!5e0!3m2!1sit!2sit!4v1699000000000!5m2!1sit!2sit"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mappa sede C.E.M. S.r.l."
        />
      </section>
    </>
  );
};

export default ContattiPage;
