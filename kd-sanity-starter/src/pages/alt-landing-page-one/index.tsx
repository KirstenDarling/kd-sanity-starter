import AltOnestyles from '../../styles/altLandingPageOne.module.css';

export default function Home() {
  return (
    <div className={AltOnestyles.app}>
      <header className={AltOnestyles.AppHeader}>
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and experience</p>
        <a
          className={AltOnestyles.AppLink}
          href='#projects'
          target='_blank'
          rel='noopener noreferrer'
        >
          View Projects
        </a>
      </header>
      <section id='projects' className={AltOnestyles.ProjectsSection}>
        <h2>Projects</h2>
        <div className={AltOnestyles.Project}>
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </div>
        <div className={AltOnestyles.Project}>
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
        {/* Add more projects as needed */}
      </section>
      <footer className={AltOnestyles.AppFooter}>
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
}
