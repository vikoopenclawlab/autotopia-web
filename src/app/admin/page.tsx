'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [activeTab, setActiveTab] = useState('dashboard')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular login (en producción usar auth real)
    if (loginForm.email && loginForm.password) {
      setLoggedIn(true)
    }
  }

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
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
            admin@autotopia.mx
          </span>
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
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: '0',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '0 2rem',
      }}>
        {['dashboard', 'autos', 'contactos', 'config'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '1rem 1.5rem',
              background: 'none',
              border: 'none',
              color: activeTab === tab ? '#00d9ff' : 'rgba(255,255,255,0.5)',
              borderBottom: activeTab === tab ? '2px solid #00d9ff' : '2px solid transparent',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: 500,
              textTransform: 'capitalize',
            }}
          >
            {tab === 'dashboard' && '📊 '}{tab === 'autos' && '🚗 '}{tab === 'contactos' && '📨 '}{tab === 'config' && '⚙️ '}
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {activeTab === 'dashboard' && (
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '2rem' }}>
              Dashboard
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}>
              {[
                { label: 'Autos en inventario', value: '6', icon: '🚗', color: '#00d9ff' },
                { label: 'Autos destacados', value: '3', icon: '⭐', color: '#00ff88' },
                { label: 'Contactos nuevos', value: '2', icon: '📨', color: '#ff9500' },
                { label: 'Visitas este mes', value: '847', icon: '👁️', color: '#a855f7' },
              ].map(stat => (
                <div
                  key={stat.label}
                  style={{
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: stat.color,
                    marginBottom: '0.25rem',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>
                Actividad reciente
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { time: 'Hace 10 min', action: 'Nuevo contacto de Laura G.', icon: '📨' },
                  { time: 'Hace 2 horas', action: 'Toyota Corolla marcado como destacado', icon: '⭐' },
                  { time: 'Ayer', action: 'Honda CR-V marcado como vendido', icon: '✅' },
                  { time: 'Hace 2 días', action: 'Contacto de Carlos R. respondido', icon: '💬' },
                ].map(item => (
                  <div
                    key={item.time}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.75rem',
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: '8px',
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: 'white', fontSize: '0.95rem' }}>{item.action}</div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

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
              <button
                style={{
                  background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
                  color: '#0a0a14',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                + Agregar auto
              </button>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              overflow: 'hidden',
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', fontWeight: 500 }}>Auto</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', fontWeight: 500 }}>Precio</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', fontWeight: 500 }}>Status</th>
                    <th style={{ padding: '1rem', textAlign: 'right', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', fontWeight: 500 }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { nombre: 'Toyota Corolla 2024 SE', precio: '$589,900', destacado: true, disp: true },
                    { nombre: 'Honda CR-V 2023 Touring', precio: '$789,900', destacado: true, disp: true },
                    { nombre: 'Mazda CX-5 2024 Grand Touring', precio: '$659,900', destacado: false, disp: true },
                  ].map((auto, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem', color: 'white' }}>{auto.nombre}</td>
                      <td style={{ padding: '1rem', color: '#00d9ff' }}>{auto.precio}</td>
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
                        <button style={{
                          background: 'rgba(0,217,255,0.2)',
                          color: '#00d9ff',
                          border: 'none',
                          padding: '0.4rem 0.8rem',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '0.85rem',
                          marginRight: '0.5rem',
                        }}>
                          Editar
                        </button>
                        <button style={{
                          background: 'rgba(255,59,48,0.2)',
                          color: '#ff3b30',
                          border: 'none',
                          padding: '0.4rem 0.8rem',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '0.85rem',
                        }}>
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'contactos' && (
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '2rem' }}>
              Contactos Recibidos
            </h2>
            <div style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              overflow: 'hidden',
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Nombre</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Email</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Teléfono</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Fecha</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Leído</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { nombre: 'Laura García', email: 'laura.g@email.com', telefono: '(55) 9876-5432', fecha: 'Hace 10 min', leido: false },
                    { nombre: 'Carlos Rodríguez', email: 'carlos.r@email.com', telefono: '(55) 8765-4321', fecha: 'Ayer', leido: true },
                  ].map((c, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem', color: 'white' }}>{c.nombre}</td>
                      <td style={{ padding: '1rem', color: 'rgba(255,255,255,0.6)' }}>{c.email}</td>
                      <td style={{ padding: '1rem', color: 'rgba(255,255,255,0.6)' }}>{c.telefono}</td>
                      <td style={{ padding: '1rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>{c.fecha}</td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{
                          background: c.leido ? 'rgba(0,255,136,0.2)' : 'rgba(255,149,0,0.2)',
                          color: c.leido ? '#00ff88' : '#ff9500',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                        }}>
                          {c.leido ? '✓ Leído' : 'Nuevo'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'config' && (
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '2rem' }}>
              Configuración
            </h2>
            <div style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.1)',
              maxWidth: '600px',
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                Información de la empresa
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Teléfono', value: '(55) 1234-5678' },
                  { label: 'Email', value: 'contacto@autotopia.mx' },
                  { label: 'Dirección', value: 'Av. Insurgentes Sur 1234, CDMX' },
                  { label: 'Horario', value: 'Lun-Sáb: 9am - 7pm' },
                ].map(field => (
                  <div key={field.label}>
                    <label style={{
                      display: 'block',
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: '0.85rem',
                      marginBottom: '0.4rem',
                    }}>
                      {field.label}
                    </label>
                    <input
                      type="text"
                      defaultValue={field.value}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        background: 'rgba(255,255,255,0.05)',
                        color: 'white',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                ))}
                <button
                  style={{
                    background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
                    color: '#0a0a14',
                    border: 'none',
                    padding: '1rem',
                    borderRadius: '10px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginTop: '0.5rem',
                  }}
                >
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}