//import logo from './logo.png';
import './App.css';
import { NavBar } from './compoents/NavBar';
import { Skills } from './compoents/Skills';
import { Banner } from './compoents/Banner';
import { Projects } from './compoents/projects';
import { Footer } from './compoents/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
