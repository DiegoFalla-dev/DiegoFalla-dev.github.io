import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { FiExternalLink, FiCode } from "react-icons/fi";
import sampleImg from "../assets/react.svg";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  href?: string;
};

const projects: Project[] = [
  {
    id: "cineplus-ecommerce",
    title: "E-Commerce Cineplus",
    description:
    "Plataforma web para la gestión de cines, incluyendo administración de películas, funciones, asientos, promociones, usuarios y órdenes. Ofrece autenticación, panel de usuario, integración de frontend en React y backend en Java Spring Boot, y una experiencia interactiva para clientes y administradores.",
    tags: ["React", "Java", "Spring Boot", "TypeScript", "Vite", "API", "MySQL", "REST"],
    image: sampleImg,
    href: "https://hdd-frontend-production.up.railway.app/"
    },
  {
    id: "medidesk",
    title: "Medidesk",
    description:
    "Plataforma web para gestión de citas médicas, pacientes, doctores, especialidades y horarios. Incluye autenticación, panel de usuario, y experiencia interactiva para clínicas y consultorios.",
    tags: ["React", "Django", "TypeScript", "Vite", "API", "Tailwind", "MySQL", "Django REST Framework"],
    image: sampleImg,
    href: "https://medidesk-frontend-production.up.railway.app/"
},
  {
    id: "portfolio",
    title: "Portafolio Personal",
    description:
    "Sitio web personal desarrollado con React, TypeScript y Tailwind CSS. Incluye secciones de sobre mí, experiencia, proyectos, tecnologías y contacto. Diseño responsive con animaciones suaves.",
    tags: ["React", "TypeScript", "Tailwind", "Vite", "GSAP"],
    image: sampleImg,
    href: "#"
}
];

export default function Projects() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [imgVariants, setImgVariants] = useState<Record<string, string[]>>(() =>
    projects.reduce((acc, p) => {
      acc[p.id] = p.image ? [p.image] : [];
      return acc;
    }, {} as Record<string, string[]>)
  );
  const [imgIndex, setImgIndex] = useState<Record<string, number>>(() =>
    projects.reduce((acc, p) => {
      acc[p.id] = 0;
      return acc;
    }, {} as Record<string, number>)
  );

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".project-card", { y: 16, opacity: 0, stagger: 0.12, duration: 0.55, ease: "power2.out" });
    }, containerRef);

    // prefetch numbered variants from public/img by id so they display immediately
    (async function prefetchAllVariants() {
      try {
        const all = await Promise.all(
          projects.map(async (p) => {
            const variants = await findVariantsById(p.id, 8);
            return [p.id, variants.length ? variants : p.image ? [p.image] : []] as const;
          })
        );
        const map = all.reduce((acc, [id, arr]) => {
          acc[id] = arr as string[];
          return acc;
        }, {} as Record<string, string[]>);
        setImgVariants((s) => ({ ...s, ...map }));
      } catch (e) {
        // ignore prefetch errors
      }
    })();

    return () => ctx.revert();
  }, []);

  // find numbered variants in /img/{id}{n}.{ext}, up to a max per project
  async function findVariantsById(id: string, maxVariants = 8) {
    const exts = ["png", "jpg", "svg", "webp"];
    const variants: string[] = [];
    for (let n = 1; n <= maxVariants; n++) {
      for (const ext of exts) {
        try {
          const url = `/img/${id}${n}.${ext}`;
          const res = await fetch(url, { method: "HEAD" });
          if (res.ok) {
            variants.push(url);
            break;
          }
        } catch (e) {
          // ignore and try next
        }
      }
    }

    // also check for base file without number (e.g. id.png) and append it
    // after numbered variants so the numbered variant (id1) remains the default
    for (const ext of exts) {
      try {
        const url = `/img/${id}.${ext}`;
        const res = await fetch(url, { method: "HEAD" });
        if (res.ok) {
          if (!variants.includes(url)) variants.push(url);
          break;
        }
      } catch (e) {
        // ignore
      }
    }

    return variants;
  }

  // rotate and advance to next image variant for the project
  function validateUrl(url: string) {
    return fetch(url, { method: "HEAD" })
      .then((r) => r.ok)
      .catch(() => false);
  }

  function cycleProjectImage(id: string) {
    if (!containerRef.current) return;
    const imgEl = containerRef.current.querySelector(`img[data-project='${id}']`);
    if (!imgEl) return;

    const variants = imgVariants[id] || [];
    if (variants.length <= 1) return; // nothing to cycle

    const current = imgIndex[id] || 0;
    const nextIndex = (current + 1) % variants.length;
    const nextUrl = variants[nextIndex];

    gsap.to(imgEl, {
      rotationY: 90,
      duration: 0.32,
      transformOrigin: "50% 50%",
      onComplete: () => {
        // Verify next exists; if not, go back to 0
        (async () => {
          const ok = nextUrl ? await validateUrl(nextUrl) : false;
          const newIndex = ok ? nextIndex : 0;
          setImgIndex((prev) => ({ ...prev, [id]: newIndex }));
          gsap.to(imgEl, { rotationY: 0, duration: 0.32 });
        })();
      }
    });
  }

  return (
    <section id="proyectos" ref={containerRef} className="max-w-6xl py-12 mx-auto">
      <h2 className="mb-6 text-2xl font-bold text-slate-100"><span style={{color: "#A52502"}}>P</span>royectos</h2>

      <div className="space-y-8">
        {projects.map((p) => (
          <article key={p.id} className="grid items-center grid-cols-1 gap-4 project-card md:grid-cols-12">
            <div className="glass p-4 rounded-lg md:col-span-7">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <FiCode className="text-brand-primary" />
                {p.title}
              </h3>
              <p className="mt-3 text-slate-300 max-w-prose">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-full bg-brand-mid/10 text-brand-primary hover-brand-primary-important">{t}</span>
                ))}
              </div>
            </div>

            <div className="flex justify-end md:col-span-5">
              <a
                href={p.href}
                onClick={(e) => {
                  e.preventDefault();
                  cycleProjectImage(p.id);
                }}
                className="block w-full md:w-[420px] rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-brand-primary to-brand-accent"
              >
                <div className="relative w-full h-56 md:h-48" style={{ perspective: 900 }}>
                  <img
                    src={(imgVariants[p.id] && imgVariants[p.id][imgIndex[p.id]]) || p.image}
                    data-project={p.id}
                    alt={p.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute p-2 text-white rounded-full top-3 right-3 bg-brand-deep/60">
                    <FiExternalLink />
                  </div>
                </div>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
