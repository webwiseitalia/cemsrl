import { Link } from 'react-router-dom';
import {
  ShieldCheckIcon,
  UserGroupIcon,
  BuildingIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  MapPinIcon
} from '../components/Icons';

const ChiSiamoPage = () => {
  const values = [
    {
      icon: ShieldCheckIcon,
      title: 'Sicurezza',
      description: 'Massima attenzione alla sicurezza in cantiere, con rispetto rigoroso delle normative vigenti e formazione continua del personale.'
    },
    {
      icon: UserGroupIcon,
      title: 'Professionalità',
      description: 'Un team di professionisti qualificati con competenze tecniche specifiche e aggiornamento costante sulle nuove tecnologie.'
    },
    {
      icon: BuildingIcon,
      title: 'Qualità',
      description: 'Utilizzo di materiali certificati e tecniche costruttive all\'avanguardia per garantire risultati duraturi nel tempo.'
    },
    {
      icon: CheckCircleIcon,
      title: 'Affidabilità',
      description: 'Rispetto degli impegni presi, trasparenza nei rapporti con i clienti e puntualità nelle consegne.'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Chi Siamo</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-4 mb-6">
              Un'impresa edile con radici solide
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Da generazioni al servizio dell'Alta Valle Camonica, costruiamo con passione 
              e competenza edifici che durano nel tempo.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">La Nostra Storia</span>
              <h2 className="heading-2 mt-2 mb-6">
                Esperienza e competenza al servizio del territorio
              </h2>
              <div className="space-y-6 text-secondary-600 leading-relaxed">
                <p>
                  <strong className="text-primary-700">C.E.M. S.r.l.</strong> è un'impresa edile strutturata 
                  con sede legale a Corteno Golgi, nel cuore dell'Alta Valle Camonica, provincia di Brescia. 
                  Operiamo nel settore delle costruzioni civili e industriali con una consolidata esperienza 
                  maturata sul campo.
                </p>
                <p>
                  La nostra attività principale, come definito dal codice ATECO, è la 
                  <strong className="text-primary-700"> costruzione di edifici residenziali e non residenziali</strong>. 
                  Questo include la realizzazione di nuove costruzioni, ristrutturazioni complete e parziali, 
                  nonché interventi di manutenzione ordinaria e straordinaria.
                </p>
                <p>
                  Conosciamo profondamente il territorio in cui operiamo: le sue caratteristiche geologiche, 
                  le condizioni climatiche, le specificità costruttive locali. Questa conoscenza ci permette 
                  di proporre soluzioni ottimali e di affrontare ogni sfida con la competenza necessaria.
                </p>
                <p>
                  Il nostro impegno quotidiano è costruire con serietà, rispettando le normative vigenti 
                  in materia edilizia e di sicurezza, utilizzando materiali di qualità e lavorazioni 
                  accurate che garantiscono risultati duraturi.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-primary-50 rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl text-primary-800 mb-4">Dati Aziendali</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-secondary-500 text-sm">Ragione Sociale</dt>
                    <dd className="text-primary-800 font-semibold">C.E.M. S.r.l.</dd>
                  </div>
                  <div>
                    <dt className="text-secondary-500 text-sm">Forma Giuridica</dt>
                    <dd className="text-primary-800 font-semibold">Società a Responsabilità Limitata</dd>
                  </div>
                  <div>
                    <dt className="text-secondary-500 text-sm">Settore</dt>
                    <dd className="text-primary-800 font-semibold">Impresa Edile – Costruzioni Civili e Industriali</dd>
                  </div>
                  <div>
                    <dt className="text-secondary-500 text-sm">Partita IVA / Codice Fiscale</dt>
                    <dd className="text-primary-800 font-semibold">03519900983</dd>
                  </div>
                </dl>
              </div>
              <div className="bg-accent-50 rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl text-primary-800 mb-4 flex items-center gap-2">
                  <MapPinIcon className="w-6 h-6 text-accent-500" />
                  Sede Legale
                </h3>
                <address className="not-italic text-secondary-700 leading-relaxed">
                  <strong className="text-primary-800">C.E.M. S.r.l.</strong><br />
                  Vicolo Pedrazzi, 15<br />
                  25040 Corteno Golgi (BS)<br />
                  Italia
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">I Nostri Valori</span>
            <h2 className="heading-2 mt-2 mb-4">
              I principi che guidano il nostro lavoro
            </h2>
            <p className="text-secondary-600 text-lg">
              Ogni cantiere rappresenta per noi un impegno verso il cliente e verso il territorio. 
              Lavoriamo con dedizione per costruire strutture sicure e durature.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card card-hover flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary-500" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Operativa Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Area Operativa</span>
              <h2 className="heading-2 mt-2 mb-4">
                Dove operiamo
              </h2>
            </div>
            
            <div className="bg-primary-800 rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-bold text-2xl mb-4">Alta Valle Camonica</h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    La nostra sede a Corteno Golgi ci posiziona strategicamente al centro 
                    dell'Alta Valle Camonica, permettendoci di servire efficacemente tutto 
                    il territorio circostante.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Corteno Golgi e tutte le frazioni',
                      'Comuni dell\'Alta Valle Camonica',
                      'Media Valle Camonica',
                      'Provincia di Brescia'
                    ].map((area, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-accent-400 flex-shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPinIcon className="w-16 h-16 text-accent-400" />
                    </div>
                    <p className="text-xl font-heading font-bold">Brescia</p>
                    <p className="text-white/70">Lombardia, Italia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-600 to-accent-500">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Vuoi conoscerci meglio?
            </h2>
            <p className="text-white/90 text-xl mb-8">
              Contattaci per discutere del tuo progetto. Saremo lieti di presentarti 
              la nostra esperienza e le nostre competenze.
            </p>
            <Link to="/contatti" className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Contattaci ora
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChiSiamoPage;
