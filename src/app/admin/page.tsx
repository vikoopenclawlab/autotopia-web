'use client'

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
  disponible: boolean
  destacado: boolean
  imagenes: string[]
}

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [activeTab, setActiveTab] = useState('autos')
  const [autos, setAutos] = useState<Auto[]>([])
  const [loading, setLoading] = useState(false)
  const [editAuto, setEditAuto] = useState<Auto | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      })
      if (res.ok) {
        setLoggedIn(true)
        fetchAutos()
      } else {
        alert('Credenciales inválidas')
      }
    } catch {
      alert('Error de conexión')
    }
  }

  const fetchAutos = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/autos')
      const data = await res.json()
      setAutos(data)
    } catch (error) {
      console.error('Error fetching autos:', error)
    }
    setLoading(false)
  }

  const deleteAuto = async (id: string) => {
    if (!confirm('¿Eliminar este auto?')) return
    try {
      await fetch(`/api/autos/${id}`, { method: 'DELETE' })
      fetchAutos()
    } catch (error) {
      alert('Error al eliminar')
    }
  }

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(price)

  if (!loggedIn) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a14',
        padding: '2rem',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
          borderRadius: '20px',
          padding: '3rem',
          border: '1px solid rgba(255,255,255,0.1)',
          width: '100%',
          maxWidth: '400px',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔐</div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Panel Admin
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
              AutoTopía - Gestión de inventario
            </p>
          </div>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Email
              </label>
              <input
                type="email"
                required
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.9rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none',
                }}
                placeholder="admin@autotopia.mx"
              />
            </div>
            <div>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Contraseña
              </label>
              <input
                type="password"
                required
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.9rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none',
                }}
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              style={{
                background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
                color: '#0a0a14',
                border: 'none',
                padding: '1rem',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer',
                marginTop: '0.5rem',
              }}
            >
              Iniciar sesión →
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a14' }}>
      {/* Admin Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '1.5rem' }}>🚗</span>
          <span style={{ fontWeight: 600 }}>AutoTopía Admin</span>
        </div>
        <button
          onClick={() => setLoggedIn(false)}
          style={{
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '0.85rem',
          }}
        >
          Cerrar sesión
        </button>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '0 2rem',
      }}>
        <button
          onClick={() => setActiveTab('autos')}
          style={{
            padding: '1rem 1.5rem',
            background: 'none',
            border: 'none',
            color: activeTab === 'autos' ? '#00d9ff' : 'rgba(255,255,255,0.5)',
            borderBottom: activeTab === 'autos' ? '2px solid #00d9ff' : '2px solid transparent',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 500,
          }}
        >
          🚗 Autos ({autos.length})
        </button>
      </div>

      {/* Content */}
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {activeTab === 'autos' && (
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Gestión de Autos
              </h2>
              <a
                href="/admin/nuevo"
                style={{
                  background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
                  color: '#0a0a14',
                  textDecoration: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                }}
              >
                + Agregar auto
              </a>
            </div>

            {loading ? (
              <p style={{ color: 'rgba(255,255,255,0.5)' }}>Cargando...</p>
            ) : (
              <div style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                overflow: 'hidden',
              }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Auto</th>
                      <th style={{ padding: '1rem', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Precio</th>
                      <th style={{ padding: '1rem', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Status</th>
                      <th style={{ padding: '1rem', textAlign: 'right', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {autos.map((auto) => (
                      <tr key={auto.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '1rem', color: 'white' }}>{auto.titulo}</td>
                        <td style={{ padding: '1rem', color: '#00d9ff' }}>{formatPrice(auto.precio)}</td>
                        <td style={{ padding: '1rem' }}>
                          <span style={{
                            background: auto.destacado ? 'rgba(0,255,136,0.2)' : 'rgba(255,255,255,0.1)',
                            color: auto.destacado ? '#00ff88' : 'rgba(255,255,255,0.5)',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                          }}>
                            {auto.destacado ? '⭐ Destacado' : 'Normal'}
                          </span>
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'right' }}>
                          <a
                            href={`/admin/editar/${auto.id}`}
                            style={{
                              background: 'rgba(0,217,255,0.2)',
                              color: '#00d9ff',
                              border: 'none',
                              padding: '0.4rem 0.8rem',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              fontSize: '0.85rem',
                              marginRight: '0.5rem',
                              textDecoration: 'none',
                            }}
                          >
                            Editar
                          </a>
                          <button
                            onClick={() => deleteAuto(auto.id)}
                            style={{
                              background: 'rgba(255,59,48,0.2)',
                              color: '#ff3b30',
                              border: 'none',
                              padding: '0.4rem 0.8rem',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              fontSize: '0.85rem',
                            }}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                    {autos.length === 0 && (
                      <tr>
                        <td colSpan={4} style={{ padding: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>
                          No hay autos. ¡Agrega el primero!
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}