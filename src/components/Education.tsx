// import React from "react";

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
    <section id="education" className="max-w-6xl mx-auto py-12">
      <h2 className="text-2xl font-bold text-slate-100 mb-6"><span style={{color: "#A52502"}}>E</span>ducación</h2>
      <div className="space-y-6">
        {schools.map((s) => (
          <article key={s.school} className="p-6 border border-brand-mid/12 rounded-lg bg-brand-mid/10">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-100">{s.degree}</h3>
                  <p className="text-xs text-brand-primary font-medium mb-1">{s.type}</p>
                <p className="text-sm text-slate-200 mt-1">{s.school}</p>
                {Array.isArray(s.details) && s.details.length > 0 && (
                  <ul className="mt-3 text-sm text-slate-300 list-disc list-inside">
                    {s.details.map((d: string, i: number) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="shrink-0 text-sm text-slate-300">{s.period}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
