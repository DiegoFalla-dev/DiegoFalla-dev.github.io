import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark min-vh-100 py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Header />
            <div className="card shadow-lg mb-4">
              <div className="card-body">
                <About />
              </div>
            </div>
            <div className="card shadow-lg mb-4">
              <div className="card-body">
                <Experience />
              </div>
            </div>
            <div className="card shadow-lg mb-4">
              <div className="card-body">
                <Education />
              </div>
            </div>
            <div className="card shadow-lg mb-4">
              <div className="card-body">
                <Skills />
              </div>
            </div>
            <div className="card shadow-lg mb-4">
              <div className="card-body">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
