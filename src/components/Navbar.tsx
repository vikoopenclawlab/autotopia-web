'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/galeria', label: 'Galería' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(10, 10, 20, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      padding: '0 2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          textDecoration: 'none',
          color: 'white',
        }}>
          <span style={{ fontSize: '1.8rem' }}>🚗</span>
          <span style={{
            fontSize: '1.4rem',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            AutoTopía
          </span>
        </Link>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
        }} className="desktop-menu">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 500,
                transition: 'color 0.2s',
                padding: '0.5rem 0',
                borderBottom: '2px solid transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admin"
            style={{
              background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
              color: '#0a0a14',
              textDecoration: 'none',
              padding: '0.6rem 1.2rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '0.9rem',
            }}
          >
            Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'none',
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(10, 10, 20, 0.98)',
          padding: '1rem 2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.1rem',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admin"
            onClick={() => setMenuOpen(false)}
            style={{
              background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
              color: '#0a0a14',
              textDecoration: 'none',
              padding: '0.75rem 1.2rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: '0.5rem',
            }}
          >
            Admin
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}