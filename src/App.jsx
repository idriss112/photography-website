import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

function AppContent() {
  const location = useLocation();

  const getPageName = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    const pageName = path.substring(1);
    return pageName.charAt(0).toUpperCase() + pageName.slice(1);
  };

  return (
    <Layout currentPageName={getPageName()}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;