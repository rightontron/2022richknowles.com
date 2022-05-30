import React from 'react'
import { Link } from 'gatsby'

import moon from '../assets/moon.png'
import blog from '../assets/nav-blog.png'
import floppyLogo from '../assets/floppylogo.png'
import floppy from '../assets/nav-floppy.png'
import github from '../assets/nav-github.png'
import projects from '../assets/nav-projects.png'

const mainNavItems = [
  { url: '/me', icon: floppy, label: 'About me' },
  { url: '/blog', icon: blog, label: 'Writing' },
  { url: '/projects', icon: projects, label: 'Projects' },
]

const socialNavItems = [
  { url: 'https://github.com/taniarascia', icon: github, label: 'GitHub' },
]

export const Navigation = () => {
  return (
    <section className="navigation">
      <div className="container">
        <Link className="name" to="/">
          <img src={floppyLogo} className="logo" alt="Tania Rascia" />
          <div>
            <div>Tania Rascia</div>
            <div className="subtitle">I like making things</div>
          </div>
        </Link>
        <nav>
          {mainNavItems.map((item) => (
            <Link
              to={item.url}
              key={item.label}
              activeClassName="active"
              className="item"
            >
              <img src={item.icon} alt={item.label} />
              <span>{item.label}</span>
            </Link>
          ))}
          {socialNavItems.map((item) => (
            <a href={item.url} key={item.label} className="item">
              <img src={item.icon} alt={item.label} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}
