import './App.css';
import HomePage from './pages/homepage.js'
import Women from './components/women'
import Men from './components/men'
import Avon from './components/avon'
import Tachen from './components/tachen';
import Footer from './components/footer'
import Copywrite from './components/copywrite';
import Navigation from './components/navigation'
function App() {
  return (
    <div>
      <Navigation />
      <HomePage />
      <Women />
      <Men />
      <Avon />
      <Tachen />
      <Footer />
      <Copywrite />
    </div>
  );
}

export default App;
