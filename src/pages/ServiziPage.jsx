import { Link } from 'react-router-dom';
import {
  BuildingIcon,
  HomeModernIcon,
  WrenchIcon,
  CubeIcon,
  PaintBrushIcon,
  TruckIcon,
  ClipboardDocumentCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '../components/Icons';

const ServiziPage = () => {
  const services = [
    {
      icon: BuildingIcon,
      title: 'Costruzione di Edifici Civili e Industriali',
      description: 'Realizziamo edifici residenziali, commerciali e industriali completi, dalla fondazione alla copertura.',
      features: [
        'Edifici residenziali mono e plurifamiliari',
        'Strutture commerciali e direzionali',
        'Capannoni industriali e logistici',
        'Edifici agricoli e zootecnici'
      ]
    },
    {
      icon: WrenchIcon,
      title: 'Ristrutturazioni Complete e Parziali',
      description: 'Interveniamo su edifici esistenti con ristrutturazioni totali o parziali, rispettando le caratteristiche originali.',
      features: [
        'Ristrutturazione integrale di edifici',
        'Rifacimento facciate e coperture',
        'Adeguamento sismico e strutturale',
        'Riqualificazione energetica'
      ]
    },
    {
      icon: HomeModernIcon,
      title: 'Manutenzioni Ordinarie e Straordinarie',
      description: 'Offriamo servizi di manutenzione programmata e interventi straordinari per preservare il valore degli edifici.',
      features: [
        'Manutenzione programmata edifici',
        'Riparazioni strutturali urgenti',
        'Impermeabilizzazioni e coibentazioni',
        'Interventi di consolidamento'
      ]
    },
    {
      icon: CubeIcon,
      title: 'Opere in Muratura e Cemento Armato',
      description: 'Eseguiamo opere in muratura tradizionale e moderna, strutture in cemento armato gettato in opera.',
      features: [
        'Murature portanti e di tamponamento',
        'Strutture in cemento armato',
        'Fondazioni e sottofondazioni',
        'Solai e scale in c.a.'
      ]
    },
    {
      icon: PaintBrushIcon,
      title: 'Finiture Interne ed Esterne',
      description: 'Completiamo gli edifici con finiture di qualita: intonaci, pavimentazioni, rivestimenti, serramenti.',
      features: [
        'Intonaci civili e decorativi',
        'Pavimentazioni e rivestimenti',
        'Posa serramenti e infissi',
        'Cartongesso e controsoffitti'
      ]
    },
    {
      icon: TruckIcon,
      title: 'Movimento Terra e Opere Accessorie',
      description: 'Realizziamo scavi, sbancamenti, preparazione di aree edificabili e tutte le opere accessorie.',
      features: [
        'Scavi e sbancamenti',
        'Preparazione aree edificabili',
        'Sistemazioni esterne',
        'Opere di urbanizzazione'
      ]
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: 'Gestione Completa del Cantiere',
      description: 'Coordiniamo tutte le fasi del processo costruttivo, dalla pianificazione alla consegna.',
      features: [
        'Pianificazione lavori e cronoprogramma',
        'Coordinamento maestranze e fornitori',
        'Gestione sicurezza in cantiere',
        'Documentazione e certificazioni'
      ]
    }
  ];

  return (
    <>
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-800 to-primary-700 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">I Nostri Servizi</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-4 mb-6">
              Soluzioni complete per ogni esigenza edilizia
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Dalla progettazione alla consegna, offriamo un servizio completo e professionale 
              per la realizzazione di qualsiasi intervento edilizio.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-accent-600" />
                    </div>
                    <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
                      Servizio {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="heading-3 mb-4">{service.title}</h2>
                  <p className="text-secondary-600 text-lg leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 aspect-square flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-primary-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Come Lavoriamo</span>
            <h2 className="heading-2 mt-2 mb-4">Il nostro processo di lavoro</h2>
            <p className="text-secondary-600 text-lg">
              Un metodo collaudato che garantisce risultati di qualita, nel rispetto dei tempi e del budget concordati.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Sopralluogo', desc: 'Analisi del sito e delle esigenze del cliente' },
              { step: '02', title: 'Preventivo', desc: 'Proposta dettagliata con tempi e costi' },
              { step: '03', title: 'Esecuzione', desc: 'Realizzazione con controllo qualita costante' },
              { step: '04', title: 'Consegna', desc: 'Collaudo finale e assistenza post-vendita' }
            ].map((phase, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl">
                  {phase.step}
                </div>
                <h3 className="font-heading font-bold text-lg text-primary-800 mb-2">{phase.title}</h3>
                <p className="text-secondary-600 text-sm">{phase.desc}</p>
                {index < 3 && <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary-200"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-accent-600 to-accent-500">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Hai bisogno di uno dei nostri servizi?
            </h2>
            <p className="text-white/90 text-xl mb-8">
              Contattaci per un sopralluogo gratuito e un preventivo personalizzato.
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

export default ServiziPage;
