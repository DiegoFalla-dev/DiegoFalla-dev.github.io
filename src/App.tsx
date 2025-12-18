import './index.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
// import Contact from './components/Contact';
import { FiGithub, FiLinkedin, FiFolder } from 'react-icons/fi';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Header />
      <main className="mx-auto w-[90vw] md:w-[70vw] max-w-[1200px] px-4 py-10 space-y-8">
        <section className="glass p-6 h-screen flex items-center">
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-slate-100"><span className='text-brand-primary'>D</span>iego <span className='text-brand-primary'>F</span>alla <span className='text-brand-primary'>S</span>.</h2>
              <p className="mt-4 text-slate-300 text-lg">Desarrollador full-stack — React · TypeScript · Node</p>
              <p className="mt-4 text-slate-300 text-lg "></p>
            </div>

            {/* Right-side action buttons */}
            <div className="mt-6 md:mt-0 md:flex md:flex-col md:items-end md:gap-3">
              <a
                href="https://github.com/DiegoFalla-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md border border-brand-mid/20 text-slate-100 hover-bg-brand-mid-20-important transition-colors duration-150 hover-brand-primary-important"
              >
                <FiGithub /> <span className="hidden md:inline"></span>
              </a>

              <a
                href="https://www.linkedin.com/in/diego-falla-samaniego-249952309/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md border border-brand-mid/20 text-slate-100 hover-bg-brand-mid-20-important transition-colors duration-150 hover-brand-mid-important"
              >
                <FiLinkedin /> <span className="hidden md:inline"></span>
              </a>

              <a
                href="#experience"
                className="inline-flex items-center px-4 py-2 rounded-md border border-brand-mid/20 text-slate-100 hover-bg-brand-mid-20-important transition-colors duration-150 hover-brand-accent-important"
              >
                <FiFolder /> <span className="hidden md:inline"></span>
              </a>
            </div>
          </div>
        </section>

        {/* About (left) and Skills (right) side-by-side, not as cards */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <About />
          </div>
          <aside>
            <Skills />
          </aside>
        </div>

        <section>
          <Experience />
        </section>

        <section >
          <Education />
        </section>
      </main>
      <footer className="w-full py-6 mt-12 bg-brand-mid/30 border-t border-brand-mid/20 text-center text-slate-300 text-sm">
        <span className="font-semibold text-brand-primary">Diego Falla</span> &copy; {new Date().getFullYear()} — CV generado con React & Tailwind
      </footer>
    </div>
  );
}

export default App;