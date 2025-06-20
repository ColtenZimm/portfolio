
import React from "react";

const projects = [
  {
    title: "Brewery Finder",
    role: "Front-End Developer",
    description:
      "A responsive web and mobile app that allows users to search for breweries by location using the Open Brewery DB API.",
    technologies: ["JavaScript", "HTML", "CSS", "Bulma", "jQuery", "Open Brewery DB API"],
    github: "https://github.com/shawnbradyrobinson/brewery-finder",
  },
  {
    title: "PWA Text Editor",
    role: "Full-Stack Developer",
    description:
      "A progressive web application that allows users to create and edit text notes in the browser — even offline.",
    technologies: ["JavaScript", "Node.js", "Express.js", "Webpack", "IndexedDB"],
    github: "https://github.com/ColtenZimm/PWA-Text-Editor",
  },
];

const skills = [
  "JavaScript (ES6+)",
  "Python",
  "SQL",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "HTML5",
  "CSS3",
  "Webpack",
  "Git & GitHub",
  "RESTful APIs",
  "Bootstrap",
  "Bulma",
  "jQuery",
];

export default function Portfolio() {
  return (
    <main className="p-6 max-w-4xl mx-auto text-gray-800 bg-white rounded-2xl shadow-lg">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Colten Zimmerman</h1>
        <p className="text-lg text-gray-700">
          Recent graduate of the University of Kansas Full-Stack Web Development
          Bootcamp. Passionate about solving real-world problems through clean,
          scalable code.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block mb-6">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-2xl p-6 bg-gray-50 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-700 mb-1">{project.title}</h3>
              <p className="text-sm italic text-gray-500 mb-2">{project.role}</p>
              <p className="mb-3 text-gray-700">{project.description}</p>
              <p className="text-sm mb-3 text-gray-600">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block mb-6">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
          {skills.map((skill, index) => (
            <li key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-xl text-sm font-medium">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block mb-6">Resume</h2>
        <p className="mb-4 text-gray-700">
          You can download my resume using the link below:
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition"
        >
          Download Resume
        </a>
      </section>

      <footer className="mt-12 border-t pt-6 text-center text-sm text-gray-600">
        <p className="mb-2">
          Contact me: <a href="mailto:coltenz00@gmail.com" className="text-blue-600 hover:underline">coltenz00@gmail.com</a>
        </p>
        <p className="mb-2">
          GitHub: <a href="https://github.com/ColtenZimm" className="text-blue-600 hover:underline">@ColtenZimm</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/colten-zimmerman-a28295264/" className="text-blue-600 hover:underline">linkedin.com/in/Colten Zimmerman</a>
        </p>
      </footer>
    </main>
  );
}
