import './index.scss';
import Landing from "./components/Landing"
import Skills from "./components/Skills"
import Training from "./components/Training"
import Navigation from "./components/layout/Navigation"
import Portfolio from "./components/Portfolio"
import Footer from "./components/layout/Footer"


function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
      <Skills />
      <Training />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
