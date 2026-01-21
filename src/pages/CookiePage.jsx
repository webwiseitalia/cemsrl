const CookiePage = () => {
  return (
    <>
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-800 to-primary-700">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-white/80">
              Informativa sull utilizzo dei cookie su questo sito web
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-3 mb-4">Cosa sono i Cookie</h2>
            <p className="text-secondary-600 mb-6">
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Sono ampiamente utilizzati per far funzionare i siti web in modo efficiente e fornire informazioni ai proprietari del sito.
            </p>

            <h2 className="heading-3 mb-4 mt-8">Tipologie di Cookie Utilizzati</h2>
            
            <h3 className="font-heading font-bold text-lg text-primary-700 mb-2 mt-6">Cookie Tecnici (Necessari)</h3>
            <p className="text-secondary-600 mb-4">
              Questi cookie sono essenziali per il corretto funzionamento del sito web. Consentono la navigazione e l utilizzo delle funzionalita di base. Senza questi cookie, il sito potrebbe non funzionare correttamente.
            </p>

            <h3 className="font-heading font-bold text-lg text-primary-700 mb-2 mt-6">Cookie Analitici</h3>
            <p className="text-secondary-600 mb-4">
              Utilizziamo cookie analitici per comprendere come i visitatori interagiscono con il nostro sito web. Questi cookie ci aiutano a migliorare le prestazioni e l esperienza utente raccogliendo informazioni in forma anonima.
            </p>

            <h2 className="heading-3 mb-4 mt-8">Gestione dei Cookie</h2>
            <p className="text-secondary-600 mb-4">
              Puoi gestire le preferenze sui cookie in qualsiasi momento attraverso le impostazioni del tuo browser. Di seguito le istruzioni per i browser piu comuni:
            </p>
            <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-6">
              <li><strong>Google Chrome:</strong> Impostazioni - Privacy e sicurezza - Cookie</li>
              <li><strong>Mozilla Firefox:</strong> Opzioni - Privacy e sicurezza - Cookie</li>
              <li><strong>Safari:</strong> Preferenze - Privacy - Cookie</li>
              <li><strong>Microsoft Edge:</strong> Impostazioni - Cookie e autorizzazioni sito</li>
            </ul>

            <h2 className="heading-3 mb-4 mt-8">Cookie di Terze Parti</h2>
            <p className="text-secondary-600 mb-6">
              Questo sito potrebbe utilizzare servizi di terze parti che installano propri cookie, come Google Maps per la visualizzazione della mappa nella pagina contatti.
            </p>

            <h2 className="heading-3 mb-4 mt-8">Contatti</h2>
            <p className="text-secondary-600 mb-6">
              Per qualsiasi domanda relativa alla nostra Cookie Policy, puoi contattarci all indirizzo email: info@cemsrl.it
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

export default CookiePage;
