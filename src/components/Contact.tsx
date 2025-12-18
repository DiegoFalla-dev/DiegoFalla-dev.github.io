import React from "react";

const Contact: React.FC = () => (
  <section>
    <h2 className="mb-3 text-primary">Contacto</h2>
    <div className="d-flex flex-column align-items-start">
      <p className="mb-1"><strong>Email:</strong> <a href="mailto:diego.falla.2004.10@gmail.com" className="text-info">diego.falla.2004.10@gmail.com</a></p>
      <p className="mb-1"><strong>Teléfono:</strong> <span className="text-info">(+51) 944 559 834</span></p>
      <p className="mb-1"><strong>LinkedIn:</strong> <a href="#" target="_blank" rel="noopener noreferrer" className="text-info">Perfil</a></p>
    </div>
  </section>
);

export default Contact;
