'use client'

import { useState } from 'react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular envío
    setSubmitted(true)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a14' }}>
      {/* Hero */}
      <section style={{
        padding: '8rem 2rem 4rem',
        background: 'linear-gradient(180deg, #12121f 0%, #0a0a14 100%)',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: '1rem',
        }}>
          <span style={{
            background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Contacto</span>
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.6)',
          maxWidth: '500px',
          margin: '0 auto',
        }}>
          ¿Tienes preguntas o quieres agendar una visita? Estamos para ayudarte
        </p>
      </section>

      {/* Content */}
      <section style={{
        padding: '3rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '3rem',
        }}>
          {/* Contact Form */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
            borderRadius: '20px',
            padding: '2.5rem',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            {!submitted ? (
              <>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '1.5rem',
                }}>
                  📩 Envíanos un mensaje
                </h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem',
                    }}>
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      minLength={3}
                      maxLength={100}
                      pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$"
                      title="Solo letras y espacios"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.9rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        background: 'rgba(255,255,255,0.05)',
                        color: 'white',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem',
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem',
                    }}>
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      pattern="[0-9\s()+ -]{10,20}"
                      title="Número de teléfono válido"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
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
                      placeholder="(55) 1234-5678"
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem',
                    }}>
                      Mensaje *
                    </label>
                    <textarea
                      required
                      minLength={10}
                      maxLength={1000}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '0.9rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        background: 'rgba(255,255,255,0.05)',
                        color: 'white',
                        fontSize: '1rem',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                      }}
                      placeholder="¿En qué podemos ayudarte?"
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
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      transition: 'transform 0.2s',
                    }}
                  >
                    Enviar mensaje →
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                }}>
                  ¡Mensaje enviado!
                </h2>
                <p style={{
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.6,
                }}>
                  Gracias por contactarnos, {formData.nombre}. Te responderemos a {formData.email} en menos de 24 horas.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })
                  }}
                  style={{
                    marginTop: '2rem',
                    background: 'transparent',
                    color: '#00d9ff',
                    border: '1px solid #00d9ff',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Info Cards */}
            <div style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
              }}>
                📍 Información de contacto
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { icon: '📍', label: 'Dirección', value: 'Av. Insurgentes Sur 1234, Col. Del Valle, CDMX, 03100' },
                  { icon: '📞', label: 'Teléfono', value: '(55) 1234-5678' },
                  { icon: '✉️', label: 'Email', value: 'contacto@autotopia.mx' },
                  { icon: '🕐', label: 'Horario', value: 'Lun-Sáb: 9am - 7pm\nDomingo: 10am - 5pm' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                    <div>
                      <div style={{
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '0.85rem',
                        marginBottom: '0.25rem',
                      }}>
                        {item.label}
                      </div>
                      <div style={{ color: 'white', lineHeight: 1.5 }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗺️</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                Encuéntranos
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.9rem',
              }}>
                Av. Insurgentes Sur 1234, CDMX
              </p>
              <a
                href="https://maps.google.com/?q=Insurgentes+Sur+1234+CDMX"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '1rem',
                  color: '#00d9ff',
                  textDecoration: 'none',
                }}
              >
                Abrir en Google Maps →
              </a>
            </div>

            {/* Social */}
            <div style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                📱 Síguenos en redes
              </h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['📘', '📸', '🐦', '💼'].map(social => (
                  <a
                    key={social}
                    href="#"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      background: 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.3rem',
                      textDecoration: 'none',
                      transition: 'background 0.2s',
                    }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}