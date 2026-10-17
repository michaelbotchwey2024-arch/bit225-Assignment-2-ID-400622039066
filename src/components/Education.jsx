function Education({ education }) {
    return (
        <section id="education" className="section">
            <h2 className="section-title">Education</h2>
            <div className="education-list">
                {education.map((item) => (
                    <article key={item.school} className="card">
                        <h3>{item.school}</h3>
                        <p>{item.program}</p>
                        <span className="education-period">{item.period}</span>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Education;
