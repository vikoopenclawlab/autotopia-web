'use client'

import Link from 'next/link'
import { autosDestacados } from '@/lib/data'

export default function Home() {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(price)

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0a14 0%, #1a1a3e 50%, #0a0a14 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0,217,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />

        <div style={{
          textAlign: 'center',
          zIndex: 1,
          padding: '0 2rem',
          maxWidth: '900px',
        }}>
          <p style={{
            color: '#00d9ff',
            fontSize: '1rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            marginBottom: '1rem',
            textTransform: 'uppercase',
          }}>
            🚗 Concesionaria Premium
          </p>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Tu próximo auto está aquí
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.6,
          }}>
            Más de 10 años ofreciendo autos nuevos y seminuevos seleccionados.
            Financiamiento flexible, garantía incluida y servicio postventa.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <Link
              href="/galeria"
              style={{
                background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
                color: '#0a0a14',
                textDecoration: 'none',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
            >
              Ver Galería →
            </Link>
            <Link
              href="/contacto"
              style={{
                background: 'transparent',
                color: 'white',
                textDecoration: 'none',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                border: '2px solid rgba(255,255,255,0.3)',
                transition: 'border-color 0.2s',
              }}
            >
              Contactar ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        background: 'linear-gradient(180deg, #0f0f1a 0%, #0a0a14 100%)',
        padding: '4rem 2rem',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '2rem',
          textAlign: 'center',
        }}>
          {[
            { value: '10+', label: 'Años de experiencia' },
            { value: '500+', label: 'Autos vendidos' },
            { value: '100%', label: 'Garantía' },
            { value: '4.9', label: 'Calificación Google' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 800,
                background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem',
              }}>
                {stat.value}
              </div>
              <div style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.9rem',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section style={{
        padding: '5rem 2rem',
        background: '#0a0a14',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem',
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '1rem',
            }}>
              Autos <span style={{
                background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Destacados
              </span>
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '500px',
              margin: '0 auto',
            }}>
              Selección de nuestros mejores vehículos disponibles ahora
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}>
            {autosDestacados.slice(0, 3).map(auto => (
              <Link
                key={auto.id}
                href={`/auto/${auto.id}`}
                style={{
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: 'inherit',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  display: 'block',
                }}
              >
                <div style={{
                  position: 'relative',
                  height: '200px',
                  overflow: 'hidden',
                }}>
                  <img
                    src={auto.imagenes[0]}
                    alt={auto.titulo}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: '#00ff88',
                    color: '#0a0a14',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                  }}>
                    DESTACADO
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                  }}>
                    {auto.titulo}
                  </h3>
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.85rem',
                    marginBottom: '1rem',
                  }}>
                    <span>{auto.anio}</span>
                    <span>•</span>
                    <span>{auto.kilometros.toLocaleString('es-MX')} km</span>
                  </div>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#00d9ff',
                  }}>
                    {formatPrice(auto.precio)}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '3rem',
          }}>
            <Link
              href="/galeria"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: 'white',
                textDecoration: 'none',
                padding: '0.8rem 2rem',
                borderRadius: '10px',
                border: '2px solid rgba(255,255,255,0.3)',
                fontWeight: 600,
                transition: 'border-color 0.2s',
              }}
            >
              Ver todos los autos →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(180deg, #0a0a14 0%, #12121f 100%)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem',
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '1rem',
            }}>
              Nuestros <span style={{
                background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Servicios
              </span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}>
            {[
              {
                icon: '🏆',
                title: 'Autos Certificados',
                desc: 'Todos nuestros autos pasan una inspección de 200 puntos',
              },
              {
                icon: '💰',
                title: 'Financiamiento Flexible',
                desc: 'Tasas competitivas y planes de pago adaptados a ti',
              },
              {
                icon: '🛡️',
                title: 'Garantía Incluida',
                desc: '1 año de garantía mecánica y cobertura de emergencia',
              },
              {
                icon: '🔧',
                title: 'Servicio Postventa',
                desc: 'Mantenimiento preventivo y correctivo con técnicos especializados',
              },
            ].map(service => (
              <div
                key={service.title}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '16px',
                  padding: '2rem',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                }}>
                  {service.icon}
                </div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.95rem',
                  lineHeight: 1.5,
                }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, #00d9ff 0%, #00ff88 100%)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#0a0a14',
            marginBottom: '1rem',
          }}>
            ¿Listo para encontrar tu próximo auto?
          </h2>
          <p style={{
            color: 'rgba(10,10,20,0.7)',
            fontSize: '1.1rem',
            marginBottom: '2rem',
          }}>
            Visítanos o agenda una cita con nuestros asesores
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contacto"
              style={{
                background: '#0a0a14',
                color: 'white',
                textDecoration: 'none',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
              }}
            >
              Agendar cita →
            </Link>
            <Link
              href="/galeria"
              style={{
                background: 'transparent',
                color: '#0a0a14',
                textDecoration: 'none',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                border: '2px solid #0a0a14',
              }}
            >
              Ver inventario
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}