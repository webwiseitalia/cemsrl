import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from './Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-7 h-7">
                  <path d="M8 32 L8 16 L14 10 L20 16 L20 32 Z" fill="#d97706"/>
                  <path d="M20 32 L20 16 L26 10 L32 16 L32 32 Z" fill="#f79f33"/>
                  <rect x="12" y="22" width="4" height="5" fill="#1a4b7c"/>
                  <rect x="24" y="22" width="4" height="5" fill="#1a4b7c"/>
                </svg>
              </div>
              <div>
                <span className="font-heading font-bold text-lg">C.E.M. S.r.l.</span>
                <p className="text-xs text-primary-200">Impresa Edile</p>
              </div>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed mb-4">
              Costruzioni solide, lavori che durano nel tempo.
              Da generazioni al servizio dell'Alta Valle Camonica.
            </p>
            <p className="text-primary-300 text-xs">
              P.IVA / C.F.: 03519900983
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Chi Siamo', path: '/chi-siamo' },
                { name: 'Servizi', path: '/servizi' },
                { name: 'Progetti', path: '/progetti' },
                { name: 'Contatti', path: '/contatti' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Servizi</h4>
            <ul className="space-y-2 text-sm text-primary-200">
              <li>Costruzioni Civili</li>
              <li>Costruzioni Industriali</li>
              <li>Ristrutturazioni</li>
              <li>Manutenzioni</li>
              <li>Opere in Muratura</li>
              <li>Movimento Terra</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-primary-200">
                  <p className="font-medium text-white">C.E.M. S.r.l.</p>
                  <p>Vicolo Pedrazzi, 15</p>
                  <p>25040 Corteno Golgi (BS)</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <a
                  href="tel:+390364000000"
                  className="text-sm text-primary-200 hover:text-white transition-colors"
                >
                  +39 0364 00 00 00
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <a
                  href="mailto:info@cemsrl.it"
                  className="text-sm text-primary-200 hover:text-white transition-colors"
                >
                  info@cemsrl.it
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-300">
              © {currentYear} C.E.M. S.r.l. - Tutti i diritti riservati
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-primary-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie"
                className="text-primary-300 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
