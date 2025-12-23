import {
  SiSpring,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiGit,
  SiMysql,
  SiTailwindcss
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const icons = [
  FaJava,
  SiSpring,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiGit,
  SiMysql,
  SiTailwindcss
];

export default function BackgroundIcons() {
  const numIcons = 20; // Number of falling icons

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: numIcons }, (_, i) => {
        const Icon = icons[Math.floor(Math.random() * icons.length)];
        const left = Math.random() * 100; // Random left position %
        const delay = Math.random() * 2; // Random delay 0-2s
        const duration = 5 + Math.random() * 5; // Duration 5-10s
        const size = 24 + Math.random() * 24; // Size 24-48px

        return (
          <div
            key={i}
            className="falling-icon text-slate-400"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              fontSize: `${size}px`,
            }}
          >
            <Icon />
          </div>
        );
      })}
    </div>
  );
}