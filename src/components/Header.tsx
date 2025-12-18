// import React from "react";
import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40  backdrop-blur-sm">
      <div className="mx-auto w-[90vw] md:w-[70vw] max-w-[1200px] px-6 py-3 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-3"
        >
        </motion.div>

        <nav className="flex items-center gap-4 text-sm text-slate-200">
          <motion.a
            whileHover={{ y: -2 }}
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover-brand-primary-important"
          >
            Inicio
          </motion.a>
          <motion.a whileHover={{ y: -2 }} href="#about" className="hover-brand-primary-important">Sobre mi</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#experience" className="hover-brand-primary-important">Experiencia</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#education" className="hover-brand-primary-important">Educación</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#skills" className="hover-brand-primary-important">Skills</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#contact" className="flex items-center gap-2 px-3 py-1 rounded-md bg-brand-mid/10 hover-bg-brand-mid-20-important">
            CV
          </motion.a>
        </nav>
      </div>
    </header>
  );
}
