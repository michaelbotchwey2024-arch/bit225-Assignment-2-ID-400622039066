import { useState } from 'react';

function Projects({ projects }) {
    const [filter, setFilter] = useState('All');

    // build the button list from the tech used in the projects
    const filters = ['All', ...new Set(projects.flatMap((p) => p.tech))];

    const visibleProjects = projects.filter(
        (p) => filter === 'All' || p.tech.includes(filter)
    );

    return (
        <section id="projects" className="section">
            <h2 className="section-title">Projects</h2>
            <div className="filter-bar">
                {filters.map((f) => (
                    <button
                        key={f}
                        className={filter === f ? 'filter-btn active' : 'filter-btn'}
                        onClick={() => setFilter(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>
            <div className="projects-grid">
                {visibleProjects.map((project) => (
                    <article key={project.title} className="card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tags">
                            {project.tech.map((t) => (
                                <span key={t} className="tag">{t}</span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            View project →
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;

