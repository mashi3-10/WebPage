import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/team', label: 'Team' },
    { to: '/changelog', label: 'Changelog' },
  ];

  const isActive = (to) => {
    if (to === '/') return loc.pathname === '/';
    return loc.pathname.startsWith(to);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <h1 className="site-title">mashi3 の備忘録</h1>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="nav-toggle"
          id="nav-toggle"
        >
          ☰
        </button>

        <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          {navItems.map((it, idx) => (
            <Link
              key={idx}
              to={it.to}
              className={`nav-link ${isActive(it.to) ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
