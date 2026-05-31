import Section from "../../Layout/Section/Section";
import Card from "../../molicules/Card/Card";

const skills: Record<string, string[]>[] = [
  {
    Frontend: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      " CSS3",
      "Responsive UI",
      "Redux Toolkit",
      "RTK Query",
      "Context API",
      "Module Federation",
      "Lazy Loading",
      "Code Splitting",
      "Protected Routing",
    ],
  },
  {
    Backend: [
      "FastAPI",
      "Python",
      "REST API Development",
      "API Versioning",
      " CSS3",
      "JWT Authentication",
      "HTTP‑only Cookies",
    ],
  },
  {
    "DevOps & Tooling": [
      "Nx Monorepo",
      "UV package manager",
      "Docker",
      "Docker Compose",
      "Gunicorn + Uvicorn",
      "Git",
      "GitHub Actions",
      "CI/CD basics",
      "Vite",
      "npm",
    ],
  },
  {
    "AI-Integration": [
      " Edge‑TTS library",
      "Text‑to‑Voice microservice design",
      "REST API integration for AI services",
    ],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Tools and technologies I leverage to transform complex ideas into robust digital products."
    >
      <div className="flex md:flex-row flex-col">
        {skills.map((skill: Record<string, string[]>) => {
          const [key, skills_list] = Object.entries(skill)[0] as [
            string,
            string[],
          ];

          return (
            <Card title={key}>
              <ul>
                {skills_list.map((s) => (
                  <li>{s}</li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
