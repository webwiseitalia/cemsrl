import { Link } from 'react-router-dom';
import {
  BuildingIcon,
  HomeModernIcon,
  WrenchIcon,
  MapPinIcon,
  CalendarDaysIcon,
  ArrowRightIcon
} from '../components/Icons';

const ProgettiPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Residenza Alpina',
      category: 'Edilizia Residenziale',
      location: 'Corteno Golgi (BS)',
      year: '2023',
      description: 'Costruzione di una villa bifamiliare con struttura in cemento armato e finiture di pregio. Progetto caratterizzato da elevata efficienza energetica.',
      icon: HomeModernIcon,
      features: ['350 mq', 'Classe A4', '2 unita']
    },
    {
      id: 2,
      title: 'Capannone Industriale Valsaviore',
      category: 'Edilizia Industriale',
      location: 'Cevo (BS)',
      year: '2023',
      description: 'Realizzazione di un capannone industriale per attivita artigianale. Struttura prefabbricata con copertura coibentata.',
      icon: BuildingIcon,
      features: ['800 mq', 'Prefabbricato', 'Impianto FV']
    },
    {
      id: 3,
      title: 'Ristrutturazione Casa Storica',
      category: 'Ristrutturazione',
      location: 'Edolo (BS)',
      year: '2022',
      description: 'Recupero completo di un edificio storico. Intervento di consolidamento strutturale e rifacimento copertura.',
      icon: WrenchIcon,
      features: ['220 mq', 'Restauro', 'Antisismico']
    },
    {
      id: 4,
      title: 'Condominio Monte Rosa',
      category: 'Edilizia Residenziale',
      location: 'Ponte di Legno (BS)',
      year: '2022',
      description: 'Costruzione di un complesso residenziale con 8 appartamenti. Struttura antisismica e riscaldamento a pavimento.',
      icon: BuildingIcon,
      features: ['1200 mq', '8 appartamenti', 'Classe A']
    },
    {
      id: 5,
      title: 'Magazzino Agricolo',
      category: 'Edilizia Rurale',
      location: 'Vezza d Oglio (BS)',
      year: '2021',
      description: 'Realizzazione di un magazzino agricolo con struttura in legno lamellare e copertura coibentata.',
      icon: HomeModernIcon,
      features: ['450 mq', 'Legno lamellare', 'Eco-friendly']
    },
    {
      id: 6,
      title: 'Rifacimento Facciate',
      category: 'Manutenzione',
      location: 'Temu (BS)',
      year: '2021',
      description: 'Riqualificazione delle facciate con cappotto termico e sostituzione serramenti.',
      icon: WrenchIcon,
      features: ['16 unita', 'Cappotto 12cm', 'Bonus 110%']
    }
  ];

  return (
    <>
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-800 to-primary-700">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">I Nostri Progetti</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-4 mb-6">
              Lavori realizzati con passione
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Una selezione dei nostri interventi in Alta Valle Camonica e provincia di Brescia.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card card-hover group">
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl p-8 mb-6 aspect-video flex items-center justify-center">
                  <project.icon className="w-20 h-20 text-primary-400 group-hover:text-primary-500 transition-colors" />
                </div>
                <span className="text-xs font-semibold text-accent-500 bg-accent-50 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="font-heading font-bold text-xl text-primary-800 mt-3 mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-secondary-500 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPinIcon className="w-4 h-4" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarDaysIcon className="w-4 h-4" />
                    {project.year}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-secondary-600 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '200+', label: 'Progetti Completati' },
              { number: '25+', label: 'Anni di Esperienza' },
              { number: '50+', label: 'Clienti Soddisfatti' },
              { number: '100%', label: 'Lavori Consegnati' }
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-heading font-bold text-accent-400">{stat.number}</p>
                <p className="text-white/70 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-accent-600 to-accent-500">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Hai un progetto da realizzare?
            </h2>
            <p className="text-white/90 text-xl mb-8">
              Contattaci per discutere delle tue esigenze e ricevere un preventivo personalizzato.
            </p>
            <Link to="/contatti" className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Richiedi preventivo gratuito
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgettiPage;
