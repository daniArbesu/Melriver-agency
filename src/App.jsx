import Cases from './components/Cases';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroOverlay from './components/IntroOverlay';

function App() {
  return (
    <div className="App">
      <IntroOverlay />
      <Header />
      <Hero />
      <Cases />
    </div>
  );
}

export default App;
