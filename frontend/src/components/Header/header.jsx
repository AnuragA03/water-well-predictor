"use client"
import Link from "next/link"
import { useState, useEffect } from 'react';
import './header.css';
import { usePathname } from 'next/navigation';

function ActiveLink({ href, children }) {
  const pathname = usePathname()
  const isActive = pathname === href;
  return (
    <Link href={href} className={isActive ? 'active link' : 'link'}>{children}</Link>
  );
}

export default () => {
  // const savedTheme = localStorage.getItem('theme') || 'Light';
  const [showMenu, setShowMenu] = useState(false);
  const [Theme, setTheme] = useState('Light');
  useEffect(() => {
    if (Theme === 'Dark') {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'Dark')
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'Light')
    }
    return () => {
      document.body.classList.remove('dark-theme');
    };
  }, [Theme]);
  function toggleTheme() {
    if (Theme === 'Dark') {
      setTheme('Light')
    }
    else {
      setTheme('Dark')
    }
  }

  return (
    <header className="header">
      <nav className="nav max-md:mx-6">
        <Link href="/">
          <img src="image/logo.png" alt="logo" className="logo" />
        </Link>

        <div className={showMenu ? 'show menu' : 'menu'} id="nav-menu">
          <ul className="list">
            <ActiveLink href="/">
              <i className="uil uil-estate"></i> Home
            </ActiveLink>
            <ActiveLink href="/Dashboard">
              <i className="uil uil-search"></i> Predictor
            </ActiveLink>
            <ActiveLink href="/Insights">
              <i className="uil uil-graph-bar"></i> Insights
            </ActiveLink>
            <ActiveLink href="/Contact">
              <i className="uil uil-message"></i> Contact us
            </ActiveLink>
            <ActiveLink href="/FAQ">
              <i className="uil uil-comment-question"></i> FAQs
            </ActiveLink>
            <ActiveLink href="/About">
              <i className="uil uil-user"></i> About
            </ActiveLink>
          </ul>
          <i className="uil uil-times close" onClick={() => setShowMenu(false)} ></i>
        </div>
        <div className="flex items-center">
          <i className={`uil change-theme ${Theme === 'Dark' ? 'uil-sun' : 'uil-moon'}`} onClick={toggleTheme}></i>
          <div className="toggle" onClick={() => setShowMenu(true)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}