import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ResponsiveNav ({ navLinks, background, hoverBackground, linkColor, logo }) {
  const [hoverIndex, setHoverIndex] = useState(-1)
  const [navOpen, setNavOpen] = useState(false)

  return (
    <nav
      className="responsive-nav"
      style={{ background: background || "#222" }}
    >
      <figure onClick={() => setNavOpen(!navOpen)}>
        <img src={logo} height="45px" width="45px" alt="Logo-Nav-Toggler" />
      </figure>
      <h1>Webpage</h1>
      <ul
        style={{ background: background || "#222" }}
        className={navOpen ? "active" : ""}
      >
        {navLinks.map((link) => (
          <li
            key={link.title}
            onMouseEnter={() => setHoverIndex(link.id)}
            onMouseLeave={() => setHoverIndex(-1)}
            style={{
              background:
                hoverIndex === link.id ? hoverBackground || "#999" : "",
            }}
          >
            <Link to={link.path} style={{ color: linkColor || "#eee" }} onClick={() => setNavOpen(false)}>
              {link.title}
              <i className={link.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ResponsiveNav;