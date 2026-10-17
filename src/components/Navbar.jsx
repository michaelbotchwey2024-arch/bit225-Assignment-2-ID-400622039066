import { useState, useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';
const links = ['about', 'skills', 'projects', 'contact'];

function Navbar({ name, theme, onToggleTheme }) {
    const [open, setOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    // watch the sections and remember which one is on screen
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );

        ['home', ...links].forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header className="navbar">
            <a href="#home" className="logo">{name.split(' ')[0]}</a>
            <button className="menu-btn" onClick={() => setOpen(!open)}aria-label="Toggle menu">{open ? '✕' : '☰'} </button>
            <nav className={open ? 'nav-links open' : 'nav-links'}>
                {links.map((link) => (
                    <a
                        key={link}
                        href={`#${link}`}
                        className={activeLink === link ? 'active' : ''}
                        onClick={() => setOpen(false)}
                    >
                        {link.charAt(0).toUpperCase() + link.slice(1)}
                    </a>
                ))}
                <button
                    className="theme-toggle"
                    onClick={onToggleTheme}
                    aria-label="Toggle theme"
                >
                    <i className={theme === 'light' ? 'bx bx-moon' : 'bx bx-sun'}></i>
                </button>

            </nav>
        </header>
    );
}

export default Navbar;
