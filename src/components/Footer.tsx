import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/galeria', label: 'Galería' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer style={{
      background: '#0a0a14',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '3rem 2rem 2rem',
      marginTop: '4rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem',
      }}>
        {/* Logo & Description */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem',
          }}>
            <span style={{ fontSize: '1.5rem' }}>🚗</span>
            <span style={{
              fontSize: '1.3rem',
              fontWeight: 'bold',
              color: 'white',
            }}>
              AutoTopía
            </span>
          </div>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.9rem',
            lineHeight: 1.6,
          }}>
            Tu próximo auto está aquí. Más de 10 años vendiendo autos nuevos y seminuevos en México.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{
            color: 'white',
            fontSize: '1rem',
            marginBottom: '1rem',
          }}>
            Enlaces
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {footerLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{
            color: 'white',
            fontSize: '1rem',
            marginBottom: '1rem',
          }}>
           Contacto
          </h4>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.9rem',
          }}>
            <p>📞 (55) 1234-5678</p>
            <p>✉️ contacto@autotopia.mx</p>
            <p>📍 Av. Insurgentes Sur 1234, CDMX</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 style={{
            color: 'white',
            fontSize: '1rem',
            marginBottom: '1rem',
          }}>
            Síguenos
          </h4>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href="#"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.2rem',
              }}
            >
              📘
            </a>
            <a
              href="#"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.2rem',
              }}
            >
              📸
            </a>
            <a
              href="#"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.2rem',
              }}
            >
              🐦
            </a>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '1.5rem',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.4)',
        fontSize: '0.85rem',
      }}>
        © 2024 AutoTopía. Todos los derechos reservados.
      </div>
    </footer>
  )
}