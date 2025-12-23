import { FiBookOpen } from 'react-icons/fi';

const schools = [
  {
    type: "Universitario",
    school: "Universidad Tecnológica del Perú",
    degree: "Ingeniería en Software",
    period: "2022 - En curso",
    details: ["Cursos: Estructuras de datos, Bases de datos, Desarrollo web"]
  }
];

export default function Education() {
  return (
    <section id="education" className="max-w-6xl py-12 mx-auto">
      <h2 className="mb-6 text-2xl font-bold text-slate-100"><span style={{color: "#A52502"}}>F</span>ormación</h2>
      <div className="space-y-6">
        {schools.map((s) => (
          <article key={s.school} className="p-6 rounded-lg glass">
            <div className="flex items-start gap-4">
              <FiBookOpen className="mt-1 text-2xl text-brand-primary" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-100">{s.degree}</h3>
                <p className="mb-1 text-xs font-medium text-brand-primary">{s.type}</p>
                <p className="mt-1 text-sm text-slate-200">{s.school}</p>
                {Array.isArray(s.details) && s.details.length > 0 && (
                  <ul className="mt-3 text-sm list-disc list-inside text-slate-300">
                    {s.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="text-sm shrink-0 text-slate-300">{s.period}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
