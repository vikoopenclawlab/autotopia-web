'use client'

export default function Nosotros() {
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
          Sobre <span style={{
            background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>AutoTopía</span>
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.6)',
          maxWidth: '600px',
          margin: '0 auto',
          fontSize: '1.1rem',
        }}>
          Más de una década conectando familias mexicanas con el auto de sus sueños
        </p>
      </section>

      {/* Story */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
          borderRadius: '20px',
          padding: '3rem',
          border: '1px solid rgba(255,255,255,0.1)',
          marginBottom: '3rem',
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            color: '#00d9ff',
          }}>
            📖 Nuestra Historia
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            lineHeight: 1.8,
            marginBottom: '1rem',
          }}>
            AutoTopía nació en 2013 en la Ciudad de México con una visión clara: hacer la compra de un auto algo accesible, transparente y sin complicaciones. Lo que comenzó como un pequeño展厅 en Insurgentes Sur, hoy es una de las agencias más recomendadas en la zona metropolitana.
          </p>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            lineHeight: 1.8,
          }}>
            Nuestro fundador, Jorge Villarreal, identificó una necesidad real: los compradores de auto en México enfrentaban传统文化 de distrust, precios inflados y procesos complicados. AutoTopía nació para cambiar eso — ofreciendo precios justos, diagnósticos transparent y un equipo que realmente se preocupa por encontrar el auto indicado para cada cliente.
          </p>
        </div>

        {/* Values */}
        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: 600,
          textAlign: 'center',
          marginBottom: '2rem',
        }}>
          Nuestros <span style={{
            background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Valores</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}>
          {[
            {
              icon: '🤝',
              title: 'Honestidad',
              desc: 'No vendemos humo. Si un auto tiene problemas, te lo decimos. Siempre.',
            },
            {
              icon: '💎',
              title: 'Calidad',
              desc: 'Cada auto pasa por 200 puntos de inspección antes de llegar a nuestro inventario.',
            },
            {
              icon: '⚡',
              title: 'Transparencia',
              desc: 'Precios claros, sin costos ocultos. Sepas exactamente qué estás pagando.',
            },
            {
              icon: '❤️',
              title: 'Vocación',
              desc: 'No es solo vender autos. Es encontrar la pieza correcta para cada familia.',
            },
          ].map(value => (
            <div
              key={value.title}
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid rgba(255,255,255,0.08)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{value.icon}</div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
              }}>
                {value.title}
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.95rem',
                lineHeight: 1.5,
              }}>
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(180deg, #0a0a14 0%, #12121f 100%)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 600,
            textAlign: 'center',
            marginBottom: '3rem',
          }}>
            Nuestro <span style={{
              background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Equipo</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            {[
              {
                name: 'Jorge Villarreal',
                role: 'Fundador y Director General',
                img: '👨‍💼',
                exp: '12 años en el sector automotriz',
              },
              {
                name: 'María Fernández',
                role: 'Gerente de Ventas',
                img: '👩‍💼',
                exp: 'Especialista en financiamiento y créditos',
              },
              {
                name: 'Carlos Mendoza',
                role: 'Director de Servicio',
                img: '👨‍🔧',
                exp: 'Ingeniero automotriz, 15 años de experiencia',
              },
              {
                name: 'Ana López',
                role: 'Asesora Senior',
                img: '👩‍💻',
                exp: 'más de 400 familias ayudadas a encontrar su auto',
              },
            ].map(member => (
              <div
                key={member.name}
                style={{
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
                  borderRadius: '16px',
                  padding: '2rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '1rem',
                }}>
                  {member.img}
                </div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  marginBottom: '0.25rem',
                }}>
                  {member.name}
                </h3>
                <p style={{
                  color: '#00d9ff',
                  fontSize: '0.9rem',
                  marginBottom: '0.75rem',
                }}>
                  {member.role}
                </p>
                <p style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.85rem',
                }}>
                  {member.exp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, #00d9ff 0%, #00ff88 100%)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#0a0a14',
            marginBottom: '1rem',
          }}>
            ¿Listo para conocernos?
          </h2>
          <p style={{
            color: 'rgba(10,10,20,0.7)',
            fontSize: '1.1rem',
            marginBottom: '2rem',
          }}>
            Visítanos en nuestro showroom o agenda una cita
          </p>
          <a
            href="/contacto"
            style={{
              display: 'inline-block',
              background: '#0a0a14',
              color: 'white',
              textDecoration: 'none',
              padding: '1rem 2.5rem',
              borderRadius: '12px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
            }}
          >
            Contactar ahora →
          </a>
        </div>
      </section>
    </div>
  )
}