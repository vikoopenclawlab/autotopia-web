'use client'

import { useState } from 'react'
import Link from 'next/link'
import { autosEjemplo, marcas } from '@/lib/data'

export default function Galeria() {
  const [filtroMarca, setFiltroMarca] = useState<string>('')
  const [ordenarPor, setOrdenarPor] = useState<string>('destacado')

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(price)

  const autosFiltrados = autosEjemplo
    .filter(auto => !filtroMarca || auto.marca === filtroMarca)
    .sort((a, b) => {
      if (ordenarPor === 'destacado') return b.destacado ? 1 : -1
      if (ordenarPor === 'precio-alto') return b.precio - a.precio
      if (ordenarPor === 'precio-bajo') return a.precio - b.precio
      if (ordenarPor === 'anio') return b.anio - a.anio
      return 0
    })

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a14' }}>
      {/* Header */}
      <section style={{
        padding: '4rem 2rem 2rem',
        background: 'linear-gradient(180deg, #12121f 0%, #0a0a14 100%)',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: '1rem',
        }}>
          Nuestra <span style={{
            background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Galería</span>
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.6)',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          Descubre nuestra selección de autos nuevos y seminuevos certificados
        </p>
      </section>

      {/* Filters */}
      <section style={{
        padding: '1.5rem 2rem',
        background: '#0f0f1a',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        position: 'sticky',
        top: '70px',
        zIndex: 50,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Marcas */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setFiltroMarca('')}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                border: filtroMarca === '' ? 'none' : '1px solid rgba(255,255,255,0.2)',
                background: filtroMarca === '' ? 'linear-gradient(90deg, #00d9ff, #00ff88)' : 'transparent',
                color: filtroMarca === '' ? '#0a0a14' : 'white',
                cursor: 'pointer',
                fontWeight: 500,
                fontSize: '0.9rem',
              }}
            >
              Todos
            </button>
            {marcas.map(marca => (
              <button
                key={marca}
                onClick={() => setFiltroMarca(marca)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  border: filtroMarca === marca ? 'none' : '1px solid rgba(255,255,255,0.2)',
                  background: filtroMarca === marca ? 'linear-gradient(90deg, #00d9ff, #00ff88)' : 'transparent',
                  color: filtroMarca === marca ? '#0a0a14' : 'white',
                  cursor: 'pointer',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                }}
              >
                {marca}
              </button>
            ))}
          </div>

          {/* Ordenar */}
          <select
            value={ordenarPor}
            onChange={(e) => setOrdenarPor(e.target.value)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.2)',
              background: '#1a1a2e',
              color: 'white',
              cursor: 'pointer',
              fontSize: '0.9rem',
            }}
          >
            <option value="destacado">Destacados primero</option>
            <option value="precio-alto">Precio: Mayor a menor</option>
            <option value="precio-bajo">Precio: Menor a mayor</option>
            <option value="anio">Año: Más reciente</option>
          </select>
        </div>
      </section>

      {/* Grid */}
      <section style={{
        padding: '3rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.5)',
          marginBottom: '2rem',
          fontSize: '0.9rem',
        }}>
          {autosFiltrados.length} vehículos disponibles
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {autosFiltrados.map(auto => (
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
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                  src={auto.imagenes[0]}
                  alt={auto.titulo}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s',
                  }}
                />
                {auto.destacado && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: '#00ff88',
                    color: '#0a0a14',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                  }}>
                    DESTACADO
                  </div>
                )}
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  padding: '1rem',
                }}>
                  <span style={{
                    background: 'rgba(255,255,255,0.2)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                  }}>
                    {auto.marca}
                  </span>
                </div>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                }}>
                  {auto.titulo}
                </h3>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.5)',
                }}>
                  <span>📅 {auto.anio}</span>
                  <span>⌛ {auto.kilometros.toLocaleString('es-MX')} km</span>
                  <span>⚙️ {auto.transmision}</span>
                  <span>⛽ {auto.combustible}</span>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <div style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#00d9ff',
                  }}>
                    {formatPrice(auto.precio)}
                  </div>
                  <span style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.85rem',
                  }}>
                    Ver más →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {autosFiltrados.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            color: 'rgba(255,255,255,0.5)',
          }}>
            <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</p>
            <p>No hay autos que coincidan con el filtro</p>
            <button
              onClick={() => setFiltroMarca('')}
              style={{
                marginTop: '1rem',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
                border: 'none',
                borderRadius: '8px',
                color: '#0a0a14',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </section>
    </div>
  )
}