'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Auto {
  id: string
  titulo: string
  marca: string
  modelo: string
  anio: number
  precio: number
  kilometros: number
  color: string
  transmision: string
  combustible: string
  descripcion: string
  imagenes: string[]
  caracteristicas: string[]
  disponibles: boolean
  destacado: boolean
}

export default function AutoDetalle() {
  const params = useParams()
  const id = params?.id as string | undefined
  const [auto, setAuto] = useState<Auto | null>(null)
  const [loading, setLoading] = useState(true)
  const [imagenActual, setImagenActual] = useState(0)

  useEffect(() => {
    if (!id) return

    fetch(`/api/autos/${id}`)
      .then(res => {
        if (!res.ok) return null
        return res.json()
      })
      .then(data => {
        setAuto(data)
        setLoading(false)
      })
      .catch(() => {
        setAuto(null)
        setLoading(false)
      })
  }, [id])

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(price)

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <p style={{ color: 'rgba(255,255,255,0.5)' }}>Cargando...</p>
      </div>
    )
  }

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
        <Link href="/galeria" style={{ color: '#00d9ff', textDecoration: 'none' }}>
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
        <Link href="/galeria" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Galería
        </Link>
      </div>

      {/* Main Content */}
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="auto-detalle-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
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
                src={auto.imagenes?.[imagenActual] || 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'}
                alt={auto.titulo}
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
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
            {auto.imagenes?.length > 1 && (
              <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
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
                    <img src={img} alt="" style={{ width: '80px', height: '60px', objectFit: 'cover', opacity: idx === imagenActual ? 1 : 0.5 }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div>
            <div style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(0,217,255,0.2)', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                  {auto.marca}
                </span>
                {auto.disponibles && (
                  <span style={{ background: 'rgba(0,255,136,0.2)', color: '#00ff88', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                    ✓ Disponible
                  </span>
                )}
              </div>

              <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                {auto.titulo}
              </h1>

              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#00d9ff', marginBottom: '1rem' }}>
                {formatPrice(auto.precio)}
              </div>

              {/* Specs */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
                marginBottom: '1.5rem',
              }}>
                {[
                  { icon: '📅', label: 'Año', value: auto.anio },
                  { icon: '⌛', label: 'Km', value: `${auto.kilometros?.toLocaleString('es-MX')} km` },
                  { icon: '⚙️', label: 'Transmisión', value: auto.transmision },
                  { icon: '⛽', label: 'Combustible', value: auto.combustible },
                ].map(spec => (
                  <div key={spec.label} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '0.2rem' }}>
                      {spec.icon} {spec.label}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{spec.value}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="cta-buttons" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link
                  href="/contacto"
                  style={{
                    flex: '1',
                    minWidth: '140px',
                    background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
                    color: '#0a0a14',
                    textDecoration: 'none',
                    padding: '0.9rem',
                    borderRadius: '10px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: '1rem',
                  }}
                >
                  Solicitar información →
                </Link>
                <button
                  style={{
                    flex: '1',
                    minWidth: '140px',
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid rgba(255,255,255,0.3)',
                    padding: '0.9rem',
                    borderRadius: '10px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '1rem',
                  }}
                >
                  📞 Llamar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Features */}
        <div style={{
          marginTop: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {/* Description */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
            borderRadius: '16px',
            padding: '1.5rem',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>📝 Descripción</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {auto.descripcion}
            </p>
          </div>

          {/* Features */}
          {auto.caracteristicas?.length > 0 && (
            <div style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>✨ Características</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '0.5rem' }}>
                {auto.caracteristicas.map((car, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                    <span style={{ color: '#00ff88' }}>✓</span>
                    {car}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Back Link */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/galeria" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem' }}>
            ← Ver todos los autos
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .auto-detalle-grid {
            grid-template-columns: 1fr !important;
          }
          .cta-buttons {
            flex-direction: column;
          }
          .cta-buttons a, .cta-buttons button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}