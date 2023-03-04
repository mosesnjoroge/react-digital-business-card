import './App.css';
import About from './components/About';
import Info from './components/Info';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Footer />
    </div>
  );
}

export default App;
