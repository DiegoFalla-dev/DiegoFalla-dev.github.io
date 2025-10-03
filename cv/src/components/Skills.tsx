import React from "react";

const Skills: React.FC = () => (
  <section>
    <h2 className="mb-3 text-primary">Habilidades Blandas</h2>
    <div className="d-flex flex-wrap gap-2 mb-3">
      <span className="badge rounded-pill bg-secondary fs-6 px-3 py-2">Compañerismo</span>
      <span className="badge rounded-pill bg-secondary fs-6 px-3 py-2">Comunicación efectiva</span>
      <span className="badge rounded-pill bg-secondary fs-6 px-3 py-2">Adaptabilidad</span>
      <span className="badge rounded-pill bg-secondary fs-6 px-3 py-2">Resolución de problemas</span>
      <span className="badge rounded-pill bg-secondary fs-6 px-3 py-2">Trabajo en equipo</span>
    </div>
    <h2 className="mb-3 text-primary">Habilidades Técnicas</h2>
    <div className="d-flex flex-wrap gap-2">
      <span className="badge rounded-pill bg-info fs-6 px-3 py-2">Java</span>
      <span className="badge rounded-pill bg-info fs-6 px-3 py-2">Spring</span>
      <span className="badge rounded-pill bg-info fs-6 px-3 py-2">React</span>
      <span className="badge rounded-pill bg-info fs-6 px-3 py-2">Python</span>
      <span className="badge rounded-pill bg-info fs-6 px-3 py-2">HTML</span>
      <span className="badge rounded-pill bg-info fs-6 px-3 py-2">CSS</span>
      <span className="badge rounded-pill bg-info fs-6 px-3 py-2">JavaScript</span>
      <span className="badge rounded-pill bg-info fs-6 px-3 py-2">SQL Server Management Studio</span>
      <span className="badge rounded-pill bg-info fs-6 px-3 py-2">MySQL</span>
      <span className="badge rounded-pill bg-info fs-6 px-3 py-2">Excel Intermedio</span>
      <span className="badge rounded-pill bg-info fs-6 px-3 py-2">Inglés Básico</span>
      <span className="badge rounded-pill bg-info fs-6 px-3 py-2">Técnico en reparación de computadoras</span>
    </div>
  </section>
);

export default Skills;
