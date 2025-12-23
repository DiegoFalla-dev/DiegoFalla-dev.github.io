import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiSpring,
  SiMysql,
  SiGit
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FiMonitor, FiServer, FiTool } from "react-icons/fi";

const frontendSkills = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: RiTailwindCssFill },
  { name: "React", icon: SiReact },
];

const backendSkills = [
  { name: "Java", icon: FaJava },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Spring", icon: SiSpring },
  { name: "MySQL", icon: SiMysql },
];

const devopsSkills = [
  { name: "Git", icon: SiGit },
];

export default function Skills() {
  return (
    <section id="Tecnologias" className="w-full px-0 py-12">
      <h2 className="mb-4 text-2xl font-bold text-right text-slate-100"><span style={{color: "#A52502"}}>T</span>ecnología</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="glass p-4 rounded-lg">
          <h3 className="mb-3 text-lg font-semibold text-slate-100 flex items-center gap-2">
            <FiMonitor className="text-brand-primary" />
            Frontend
          </h3>
          <div className="flex flex-col gap-3">
            {frontendSkills.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.name} className="flex items-center gap-3 p-2 rounded bg-brand-mid/6 hover-brand-primary-important">
                  <Icon className="text-2xl text-slate-100" />
                  <span className="text-slate-100">{s.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="glass p-4 rounded-lg">
          <h3 className="mb-3 text-lg font-semibold text-slate-100 flex items-center gap-2">
            <FiServer className="text-brand-primary" />
            Backend
          </h3>
          <div className="flex flex-col gap-3">
            {backendSkills.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.name} className="flex items-center gap-3 p-2 rounded bg-brand-mid/6 hover-brand-primary-important">
                  <Icon className="text-2xl text-slate-100" />
                  <span className="text-slate-100">{s.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="glass p-4 rounded-lg">
          <h3 className="mb-3 text-lg font-semibold text-slate-100 flex items-center gap-2">
            <FiTool className="text-brand-primary" />
            DevOps
          </h3>
          <div className="flex flex-col gap-3">
            {devopsSkills.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.name} className="flex items-center gap-3 p-2 rounded bg-brand-mid/6 hover-brand-primary-important">
                  <Icon className="text-2xl text-slate-100" />
                  <span className="text-slate-100">{s.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
