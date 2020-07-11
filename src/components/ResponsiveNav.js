import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ResponsiveNav ({ navLinks, background, hoverBackground, linkColor, logo }) {
  const [hoverIndex, setHoverIndex] = useState(-1)
  const [navOpen, setNavOpen] = useState(false)

  return (
    <nav class="responsive-nav" style={{ background: background || "#222" }}>
      <ul
        style={{ background: background || "#222" }}
        className={navOpen ? "active" : ""}
      >
        <figure onClick={() => setNavOpen(!navOpen)}>
          <img src={logo} height="40px" width="40px" alt="Logo-Nav-Toggler" />
        </figure>
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
            <Link to={link.path} style={{ color: linkColor || "#eee" }}>
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