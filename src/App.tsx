import './index.css';
import Header from './components/Header';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Formacion from './components/Formacion';
import Tecnologias from './components/Tecnologias';
import Experiencia from './components/Experiencia';
// import Contact from './components/Contact';
import { FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Header />
      <main className="mx-auto w-[90vw] md:w-[70vw] max-w-[1200px] px-4 py-10 space-y-8">
        <section className="flex items-center h-screen p-6 glass">
          <div className="flex flex-col w-full gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h2 className="text-6xl font-extrabold tracking-tight md:text-8xl lg:text-9xl text-slate-100"><span className='text-brand-primary'>D</span>iego <span className='text-brand-primary'>F</span>alla <span className='text-brand-primary'>S</span>amaniego</h2>
              <p className="mt-4 text-lg text-slate-300">Desarrollador full-stack — React · TypeScript · Node</p>
            </div>

            {/* Right-side action buttons */}
            <div className="mt-6 md:mt-0 md:flex md:flex-col md:items-end md:gap-3">
              <a
                href="https://github.com/DiegoFalla-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 transition-colors duration-150 border rounded-md w-35 border-brand-mid/20 text-slate-100 hover-bg-brand-mid-20-important hover-brand-primary-important"
              >
                <FiGithub /> <span className="hidden ml-2 md:inline">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/diego-falla-samaniego-249952309/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 transition-colors duration-150 border rounded-md w-35 border-brand-mid/20 text-slate-100 hover-bg-brand-mid-20-important hover-brand-mid-important"
              >
                <FiLinkedin /> <span className="hidden ml-2 md:inline">LinkedIn</span>
              </a>

              <a
                href="#experience"
                className="inline-flex items-center justify-center px-4 py-2 transition-colors duration-150 border rounded-md w-35 border-brand-mid/20 text-slate-100 hover-bg-brand-mid-20-important hover-brand-accent-important"
              >
                <FiFileText /> <span className="hidden ml-2 md:inline">CV</span>
              </a>
            </div>
          </div>
        </section>

        {/* About (left) and Skills (right) side-by-side, not as cards */}
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <SobreMi />
          </div>
          <aside>
            <Tecnologias />
          </aside>
        </div>
        <section>
          <Experiencia />
        </section>
        <section>
          <Proyectos />
        </section>
        <section>
          <Formacion />
        </section>

        
      </main>
      <footer className="w-full py-6 mt-12 text-sm text-center border-t bg-brand-mid/30 border-brand-mid/20 text-slate-300">
        &copy; {new Date().getFullYear()} — <span className="font-semibold text-brand-primary">Elmer Diego Falla Samaniego</span>
      </footer>
    </div>
  );
}

export default App;