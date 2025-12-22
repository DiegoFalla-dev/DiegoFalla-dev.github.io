import { FiBriefcase } from 'react-icons/fi';

const trabajos = [
  {
    empresa: "SERVIMANEF E.I.R.L.",
    puesto: "Asistente de sistemas y Encargado de mantenimiento de equipos",
    periodo: "2024 - Actual",
    descripcion: "Responsable del mantenimiento preventivo y correctivo de equipos informáticos, gestión de inventarios y soporte técnico a usuarios. Implementación de soluciones tecnológicas para optimizar procesos internos."
  },
];

export default function Experiencia() {
  return (
    <section id="experience" className="px-4 py-8">
      <h2 className="mb-6 text-3xl font-bold"><span style={{color: "#A52502"}}>E</span>xperiencia</h2>
      <ul className="space-y-6">
        {trabajos.map((trabajo, idx) => (
          <li key={idx} className="p-6 rounded-lg glass">
            <div className="flex items-start gap-4">
              <FiBriefcase className="mt-1 text-2xl text-brand-primary" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-100">{trabajo.empresa}</h3>
                <p className="text-lg font-medium text-brand-primary">{trabajo.puesto} <span className="text-slate-300">({trabajo.periodo})</span></p>
                <p className="mt-2 text-slate-200">{trabajo.descripcion}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
