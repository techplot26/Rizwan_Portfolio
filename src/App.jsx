import "./index.css";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <nav className="flex justify-between items-center mb-20">
          <h1 className="text-2xl font-bold">Rizwan Mohammed</h1>

          <div className="space-x-5 text-slate-300">
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE - PHOTO CARD */}
          <div className="bg-slate-900 rounded-2xl p-8 shadow-xl text-center">
            <div className="w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-400">
             <img
  src="/profile.jpg"
  alt="Rizwan profile"
  className="w-full h-full object-cover object-top"
/>
            </div>

            <h3 className="text-2xl font-bold mb-2">Rizwan Mohammed</h3>

            <p className="text-cyan-400 font-semibold mb-4">
              Backend / Full Stack Developer
            </p>

            <p className="text-slate-300">
              Skilled in Java, .NET, React.js, Node.js, MongoDB, REST APIs,
              JWT authentication, GitHub, and CI/CD.
            </p>
          </div>

          {/* RIGHT SIDE - INTRO TEXT */}
          <div>
            <p className="text-cyan-400 font-semibold mb-3">
             Full Stack Developer
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Full Stack Developer building secure and scalable applications.
            </h2>

            <p className="text-slate-300 text-lg mb-8">
              Software Engineering across full stack and backend. Developed
              scalable and secure applications using C#, .NET and Java
              technologies. Experienced in designing and developing RESTful APIs
              with a strong focus on clean architecture, performance
              optimization, and maintainability with relational and
              non-relational databases.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-cyan-500 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400"
              >
                View Projects
              </a>

              <a
                href="/Rizwan-Resume.pdf"
                className="border border-slate-500 px-6 py-3 rounded-lg font-semibold hover:bg-slate-800"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <SkillCard
            title="Frontend"
            skills="React.js, JavaScript, HTML, CSS"
          />

          <SkillCard
            title="Backend"
            skills="Spring Boot, Spring MVC, Spring Data JPA, Hibernate, .NET, ASP.NET Core, Node.js, Express.js, RESTful APIs"
          />

          <SkillCard
            title="Database & Tools"
            skills="MySQL, Oracle, PL/SQL, MongoDB, SQL Server, Snowflake, AWS, Docker, Git, GitHub, Maven, IntelliJ IDEA, Postman, Jira, UML, Figma, Agile Methodologies"
          />
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Ajantha Yoga Session Booking System"
            description="A full-stack yoga booking platform with user registration, login, session browsing, bookings, admin dashboard, JWT authentication, role-based access, and MongoDB integration."
            tech="React.js, Node.js, Express.js, MongoDB, JWT, GitHub Actions"
            link="https://github.com/techplot26/AjanthaYogaSessionBookingSystem.git"
          />

          
          <ProjectCard
  title="Ajantha Watch Store"
  description="A Flask-based e-commerce watch store project with product browsing, basket functionality, checkout flow, form handling, Jinja templates, static assets, and SQLite database integration."
  tech="Python, Flask, HTML, CSS, SQLite, Jinja Templates"
  link="https://github.com/techplot26/Ajantha_watchstore"
/>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <div className="bg-slate-900 rounded-2xl p-8">
          <p className="text-slate-300 mb-3">
            Email:{" "}
            <a className="text-cyan-400" href="mailto:rizvaansmo@gmail.com">
              rizvaansmo@gmail.com
            </a>
          </p>

          <p className="text-slate-300 mb-3">
            GitHub:{" "}
            <a
              className="text-cyan-400"
              href="https://github.com/techplot26"
              target="_blank"
              rel="noreferrer"
            >
              github.com/techplot26
            </a>
          </p>

          <p className="text-slate-300">
            LinkedIn:{" "}
            <a
              className="text-cyan-400"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/rizwanmo
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-slate-500 py-8">
        © 2026 Rizwan Mohammed.
      </footer>
    </main>
  );
}

function SkillCard({ title, skills }) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-300">{skills}</p>
    </div>
  );
}

function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl">
      <h3 className="text-xl font-bold mb-3">{title}</h3>

      <p className="text-slate-300 mb-4">{description}</p>

      <p className="text-sm text-cyan-400 mb-4">{tech}</p>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="font-semibold hover:text-cyan-300"
      >
        View Project →
      </a>
    </div>
  );
}

export default App;