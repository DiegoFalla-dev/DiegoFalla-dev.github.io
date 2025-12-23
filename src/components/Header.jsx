// import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// import { FaGithub } from "react-icons/fa6";

export default function Header() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = ['about', 'experience', 'Tecnologias', 'education'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-50px 0px -50px 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('inicio');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-sm">
      <div className="mx-auto w-[90vw] md:w-[70vw] max-w-[1200px] px-6 py-3 flex items-center justify-center">
        <nav className="flex items-center gap-2 text-xs text-slate-200 sm:gap-4 sm:text-sm">
          <motion.a
            whileHover={{ y: -2 }}
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`hover-brand-primary-important ${activeSection === 'inicio' ? 'text-brand-primary' : ''}`}
          >
            Inicio
          </motion.a>
          <motion.a whileHover={{ y: -2 }} href="#about" className={`hover-brand-primary-important ${activeSection === 'about' ? 'text-brand-primary' : ''}`}>Sobre mi</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#experience" className={`hover-brand-primary-important ${activeSection === 'experience' ? 'text-brand-primary' : ''}`}>Experiencia</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#Tecnologias" className={`hover-brand-primary-important ${activeSection === 'Tecnologias' ? 'text-brand-primary' : ''}`}>Tecnologias</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#education" className={`hover-brand-primary-important ${activeSection === 'education' ? 'text-brand-primary' : ''}`}>Educación</motion.a>
        </nav>
      </div>
    </header>
  );
}
