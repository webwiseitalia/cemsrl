import { Link } from 'react-router-dom';
import {
  BuildingIcon,
  WrenchIcon,
  HomeModernIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  MapPinIcon,
  PhoneIcon
} from '../components/Icons';

const HomePage = () => {
  const services = [
    {
      icon: BuildingIcon,
      title: 'Costruzioni Civili',
      description: 'Edifici residenziali e commerciali realizzati con tecniche costruttive all\'avanguardia.'
    },
    {
      icon: HomeModernIcon,
      title: 'Costruzioni Industriali',
      description: 'Capannoni, magazzini e strutture industriali progettate per massima funzionalità.'
    },
    {
      icon: WrenchIcon,
      title: 'Ristrutturazioni',
      description: 'Interventi di recupero e ammodernamento di edifici esistenti, completi e parziali.'
    },
  ];

  const reasons = [
    {
      icon: ShieldCheckIcon,
      title: 'Sicurezza Garantita',
      description: 'Rispetto rigoroso delle normative di sicurezza in cantiere e certificazioni aggiornate.'
    },
    {
      icon: UserGroupIcon,
      title: 'Team Qualificato',
      description: 'Personale esperto con competenze specializzate in ogni fase del processo costruttivo.'
    },
    {
      icon: ClockIcon,
      title: 'Puntualità',
      description: 'Rispetto dei tempi concordati grazie a una pianificazione efficiente dei lavori.'
    },
    {
      icon: CheckCircleIcon,
      title: 'Qualità Certificata',
      description: 'Materiali selezionati e lavorazioni a regola d\'arte per risultati duraturi.'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Impresa Edile in Alta Valle Camonica</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Costruzioni solide.
              <span className="block text-accent-400">Lavori che durano nel tempo.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              C.E.M. S.r.l. — Impresa edile a Corteno Golgi specializzata in costruzioni 
              e ristrutturazioni civili dal radicato know-how territoriale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contatti" className="btn-primary text-lg px-8 py-4">
                Richiedi un preventivo
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/servizi" className="btn-outline text-lg px-8 py-4">
                Scopri i servizi
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl md:text-4xl font-heading font-bold text-accent-400">25+</p>
                <p className="text-white/70 text-sm mt-1">Anni di esperienza</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-heading font-bold text-accent-400">200+</p>
                <p className="text-white/70 text-sm mt-1">Progetti realizzati</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-heading font-bold text-accent-400">100%</p>
                <p className="text-white/70 text-sm mt-1">Clienti soddisfatti</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-accent-500/20 to-transparent"></div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Chi Siamo</span>
              <h2 className="heading-2 mt-2 mb-6">
                Un'impresa edile radicata nel territorio
              </h2>
              <p className="text-secondary-600 text-lg leading-relaxed mb-6">
                C.E.M. S.r.l. è un'impresa edile strutturata con sede a Corteno Golgi, 
                nel cuore dell'Alta Valle Camonica. Operiamo nel settore delle costruzioni 
                civili e industriali con competenza tecnica e attenzione alla qualità.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-8">
                La nostra esperienza pluriennale ci permette di affrontare progetti di 
                ogni dimensione, dalla costruzione di nuovi edifici alla ristrutturazione 
                completa, garantendo sempre il rispetto delle normative vigenti e la 
                massima sicurezza in cantiere.
              </p>
              <Link to="/chi-siamo" className="inline-flex items-center text-primary-500 font-semibold hover:text-accent-500 transition-colors">
                Scopri di più su di noi
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <BuildingIcon className="w-10 h-10 text-primary-500 mb-4" />
                    <h4 className="font-heading font-bold text-primary-800">Edilizia Civile</h4>
                    <p className="text-secondary-500 text-sm mt-2">Residenze e commerciale</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <HomeModernIcon className="w-10 h-10 text-primary-500 mb-4" />
                    <h4 className="font-heading font-bold text-primary-800">Edilizia Industriale</h4>
                    <p className="text-secondary-500 text-sm mt-2">Capannoni e strutture</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <WrenchIcon className="w-10 h-10 text-primary-500 mb-4" />
                    <h4 className="font-heading font-bold text-primary-800">Ristrutturazioni</h4>
                    <p className="text-secondary-500 text-sm mt-2">Recupero e restauro</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <ShieldCheckIcon className="w-10 h-10 text-primary-500 mb-4" />
                    <h4 className="font-heading font-bold text-primary-800">Manutenzioni</h4>
                    <p className="text-secondary-500 text-sm mt-2">Ordinaria e straordinaria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">I Nostri Servizi</span>
            <h2 className="heading-2 mt-2 mb-4">
              Soluzioni complete per l'edilizia
            </h2>
            <p className="text-secondary-600 text-lg">
              Dalla progettazione alla consegna, offriamo un servizio completo per ogni 
              esigenza costruttiva, con la garanzia di qualità e professionalità.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card card-hover group">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-colors">
                  <service.icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/servizi" className="btn-secondary">
              Vedi tutti i servizi
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Perché Sceglierci</span>
            <h2 className="heading-2 mt-2 mb-4">
              La differenza di lavorare con professionisti
            </h2>
            <p className="text-secondary-600 text-lg">
              Affidabilità, competenza e presenza sul territorio sono i valori che guidano 
              ogni nostro intervento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-500 transition-colors">
                  <reason.icon className="w-8 h-8 text-accent-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-lg text-primary-800 mb-3">
                  {reason.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Geografica Section */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Area Operativa</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-6">
                Operiamo in Alta Valle Camonica e provincia di Brescia
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Con sede a Corteno Golgi, siamo profondamente radicati nel territorio 
                dell'Alta Valle Camonica. La nostra conoscenza del territorio ci permette 
                di offrire soluzioni ottimali, tenendo conto delle specificità locali.
              </p>
              <ul className="space-y-4 mb-8">
                {['Corteno Golgi e frazioni', 'Alta Valle Camonica', 'Media Valle Camonica', 'Provincia di Brescia'].map((area, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <MapPinIcon className="w-5 h-5 text-accent-400 flex-shrink-0" />
                    <span className="text-white/90">{area}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contatti" className="btn-primary">
                Contattaci per un sopralluogo
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="bg-primary-700/50 rounded-2xl p-8">
              <div className="aspect-video bg-primary-600 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="w-16 h-16 text-accent-400 mx-auto mb-4" />
                  <p className="text-white font-heading font-bold text-xl">Corteno Golgi (BS)</p>
                  <p className="text-white/70 mt-2">Alta Valle Camonica</p>
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
              Hai un progetto da realizzare?
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Contattaci per un preventivo gratuito e senza impegno. 
              Il nostro team è pronto ad ascoltare le tue esigenze.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contatti" className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                Richiedi preventivo gratuito
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <a href="tel:+390364000000" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
                <PhoneIcon className="w-5 h-5 mr-2" />
                Chiama ora
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
