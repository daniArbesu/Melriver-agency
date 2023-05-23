import { useEffect } from 'react';
import Header from './components/Header';
import { gsap } from 'gsap';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import Approach from './pages/Approach';
import Services from './pages/Services';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/case-studies', name: 'Case Studies', Component: CaseStudies },
  { path: '/approach', name: 'Approach', Component: Approach },
  { path: '/services', name: 'Services', Component: Services },
  { path: '/about-us', name: 'About Us', Component: About },
];

function App() {
  useEffect(() => {
    // solution to avoid double render in React Strictmode
    const ctx = gsap.context(() => {
      // to avoid flashing
      gsap.to('body', { css: { visibility: 'visible' }, duration: 0 });
    });

    return () => {
      ctx.revert(); // <- cleanup!
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="App">
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path} element={<Component />} />
          ))}
        </Routes>
      </div>
      <Navigation />
    </div>
  );
}

export default App;
