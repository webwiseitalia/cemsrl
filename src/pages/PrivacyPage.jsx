import { Link } from 'react-router-dom';

const PrivacyPage = () => {
  return (
    <>
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-800 to-primary-700">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80">
              Informativa sul trattamento dei dati personali ai sensi del GDPR
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="heading-3 mb-4">Titolare del Trattamento</h2>
            <p className="text-secondary-600 mb-6">
              Il Titolare del trattamento dei dati personali e C.E.M. S.r.l., con sede legale in Vicolo Pedrazzi 15, 25040 Corteno Golgi (BS), P.IVA 03519900983.
            </p>

            <h2 className="heading-3 mb-4 mt-8">Tipologie di Dati Raccolti</h2>
            <p className="text-secondary-600 mb-4">
              Tra i dati personali raccolti da questo sito web, in modo autonomo o tramite terze parti, ci sono:
            </p>
            <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-6">
              <li>Nome e cognome</li>
              <li>Indirizzo email</li>
              <li>Numero di telefono</li>
              <li>Dati di utilizzo (cookies tecnici)</li>
            </ul>

            <h2 className="heading-3 mb-4 mt-8">Finalita del Trattamento</h2>
            <p className="text-secondary-600 mb-4">
              I dati personali sono raccolti per le seguenti finalita:
            </p>
            <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-6">
              <li>Rispondere alle richieste di informazioni e preventivi</li>
              <li>Gestire i rapporti commerciali</li>
              <li>Adempiere agli obblighi di legge</li>
              <li>Migliorare il servizio offerto</li>
            </ul>

            <h2 className="heading-3 mb-4 mt-8">Base Giuridica del Trattamento</h2>
            <p className="text-secondary-600 mb-6">
              Il trattamento dei dati personali si basa sul consenso espresso dallinteressato, sullinteresse legittimo del titolare e sulladempimento di obblighi legali.
            </p>

            <h2 className="heading-3 mb-4 mt-8">Conservazione dei Dati</h2>
            <p className="text-secondary-600 mb-6">
              I dati personali sono conservati per il tempo strettamente necessario al raggiungimento delle finalita per cui sono stati raccolti e comunque non oltre i termini previsti dalla legge.
            </p>

            <h2 className="heading-3 mb-4 mt-8">Diritti dellInteressato</h2>
            <p className="text-secondary-600 mb-4">
              In qualsiasi momento puoi esercitare i seguenti diritti:
            </p>
            <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-6">
              <li>Diritto di accesso ai propri dati</li>
              <li>Diritto di rettifica</li>
              <li>Diritto alla cancellazione</li>
              <li>Diritto di limitazione del trattamento</li>
              <li>Diritto alla portabilita dei dati</li>
              <li>Diritto di opposizione</li>
            </ul>

            <h2 className="heading-3 mb-4 mt-8">Contatti</h2>
            <p className="text-secondary-600 mb-6">
              Per esercitare i tuoi diritti o per qualsiasi informazione relativa al trattamento dei tuoi dati personali, puoi contattarci allindirizzo email: info@cemsrl.it
            </p>

            <p className="text-secondary-500 text-sm mt-12">
              Ultimo aggiornamento: Gennaio 2024
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
