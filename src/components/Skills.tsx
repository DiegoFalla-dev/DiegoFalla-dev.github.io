// import React from "react";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiSass,
  SiLess,
  SiReact,
  SiNodedotjs,
  SiAngular,
  SiSpring,
  SiMysql,
  SiDocker,
  SiGit
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";

const skills = [
    { name: "Java", icon: FaJava },
    { name: "Python", icon: SiPython },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Sass", icon: SiSass },
    { name: "Less", icon: SiLess },
    { name: "Tailwind", icon: RiTailwindCssFill },
    { name: "React", icon: SiReact },
    { name: "Vite", icon: SiVite },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Angular", icon: SiAngular },
    { name: "Spring", icon: SiSpring },
    { name: "MySQL", icon: SiMysql },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full px-0 py-12">
      <h2 className="text-2xl font-bold text-slate-100 mb-4 text-right">Habilidades</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.name} className="flex items-center gap-3 p-2 rounded bg-brand-mid/6 hover-brand-primary-important">
              <Icon className="text-2xl text-slate-100" />
              <span className="text-slate-100">{s.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
