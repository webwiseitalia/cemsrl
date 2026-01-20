import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ChiSiamoPage from './pages/ChiSiamoPage';
import ServiziPage from './pages/ServiziPage';
import ProgettiPage from './pages/ProgettiPage';
import ContattiPage from './pages/ContattiPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiePage from './pages/CookiePage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamoPage />} />
          <Route path="/servizi" element={<ServiziPage />} />
          <Route path="/progetti" element={<ProgettiPage />} />
          <Route path="/contatti" element={<ContattiPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookie" element={<CookiePage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
