'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { autosEjemplo } from '@/lib/data'

export default function AutoDetalle() {
  const params = useParams()
  const id = params.id as string
  const auto = autosEjemplo.find(a => a.id === id)
  const [imagenActual, setImagenActual] = useState(0)

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(price)

  if (!auto) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        <p style={{ fontSize: '4rem' }}>🚗</p>
        <h1 style={{ fontSize: '1.5rem' }}>Auto no encontrado</h1>
        <Link
          href="/galeria"
          style={{
            color: '#00d9ff',
            textDecoration: 'none',
          }}
        >
          ← Volver a la galería
        </Link>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a14' }}>
      {/* Breadcrumb */}
      <div style={{
        padding: '6rem 2rem 0',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <Link
          href="/galeria"
          style={{
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
            fontSize: '0.9rem',
          }}
        >
          ← Galería
        </Link>
      </div>

      {/* Main Content */}
      <div style={{
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
        }}>
          {/* Left: Images */}
          <div>
            <div style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '1rem',
            }}>
              <img
                src={auto.imagenes[imagenActual]}
                alt={auto.titulo}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                }}
              />
              {auto.destacado && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: '#00ff88',
                  color: '#0a0a14',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                }}>
                  ⭐ DESTACADO
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              overflowX: 'auto',
            }}>
              {auto.imagenes.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setImagenActual(idx)}
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: idx === imagenActual ? '2px solid #00d9ff' : '2px solid transparent',
                    padding: 0,
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    style={{
                      width: '80px',
                      height: '60px',
                      objectFit: 'cover',
                      opacity: idx === imagenActual ? 1 : 0.5,
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div>
            <div style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem',
              }}>
                <span style={{
                  background: 'rgba(0,217,255,0.2)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                }}>
                  {auto.marca}
                </span>
                {auto.disponibles && (
                  <span style={{
                    background: 'rgba(0,255,136,0.2)',
                    color: '#00ff88',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                  }}>
                    ✓ Disponible
                  </span>
                )}
              </div>

              <h1 style={{
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: '1rem',
              }}>
                {auto.titulo}
              </h1>

              <div style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#00d9ff',
                marginBottom: '1.5rem',
              }}>
                {formatPrice(auto.precio)}
              </div>

              {/* Specs */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginBottom: '2rem',
              }}>
                {[
                  { icon: '📅', label: 'Año', value: auto.anio },
                  { icon: '⌛', label: 'Kilómetros', value: `${auto.kilometros.toLocaleString('es-MX')} km` },
                  { icon: '⚙️', label: 'Transmisión', value: auto.transmision },
                  { icon: '⛽', label: 'Combustible', value: auto.combustible },
                  { icon: '🎨', label: 'Color', value: auto.color },
                  { icon: '🏷️', label: 'Modelo', value: auto.modelo },
                ].map(spec => (
                  <div
                    key={spec.label}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      padding: '1rem',
                      borderRadius: '10px',
                    }}
                  >
                    <div style={{
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: '0.8rem',
                      marginBottom: '0.3rem',
                    }}>
                      {spec.icon} {spec.label}
                    </div>
                    <div style={{ fontWeight: 600 }}>
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link
                  href="/contacto"
                  style={{
                    flex: 1,
                    background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
                    color: '#0a0a14',
                    textDecoration: 'none',
                    padding: '1rem',
                    borderRadius: '10px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: '1.1rem',
                  }}
                >
                  Solicitar información →
                </Link>
                <button
                  style={{
                    flex: 1,
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid rgba(255,255,255,0.3)',
                    padding: '1rem',
                    borderRadius: '10px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  📞 Llamar ahora
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Features */}
        <div style={{
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
        }}>
          {/* Description */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            <h2 style={{
              fontSize: '1.3rem',
              fontWeight: 600,
              marginBottom: '1rem',
            }}>
              📝 Descripción
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7,
            }}>
              {auto.descripcion}
            </p>
          </div>

          {/* Features */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            <h2 style={{
              fontSize: '1.3rem',
              fontWeight: 600,
              marginBottom: '1rem',
            }}>
              ✨ Características
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.75rem',
            }}>
              {auto.caracteristicas.map((car, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  <span style={{ color: '#00ff88' }}>✓</span>
                  {car}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            href="/galeria"
            style={{
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              fontSize: '0.9rem',
            }}
          >
            ← Ver todos los autos
          </Link>
        </div>
      </div>
    </div>
  )
}