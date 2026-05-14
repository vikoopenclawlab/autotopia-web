'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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
  destacado: boolean
}

const marcas = ['Toyota', 'Honda', 'Mazda', 'Nissan', 'Volkswagen', 'Hyundai', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz']
const transmisiones = ['Automática', 'Manual', 'CVT']
const combustibles = ['Gasolina', 'Diiesel', 'Híbrido', 'Eléctrico']

export default function EditarAuto({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [formData, setFormData] = useState<FormData>({
    titulo: '',
    marca: '',
    modelo: '',
    anio: '',
    precio: '',
    kilometros: '',
    color: '',
    transmision: '',
    combustible: '',
    descripcion: '',
    imagenes: '',
    destacado: false,
  })

  interface FormData {
    titulo: string
    marca: string
    modelo: string
    anio: string
    precio: string
    kilometros: string
    color: string
    transmision: string
    combustible: string
    descripcion: string
    imagenes: string
    destacado: boolean
  }

  useEffect(() => {
    const fetchAuto = async () => {
      try {
        const res = await fetch(`/api/autos/${params.id}`)
        if (res.ok) {
          const auto: Auto = await res.json()
          setFormData({
            titulo: auto.titulo,
            marca: auto.marca,
            modelo: auto.modelo,
            anio: auto.anio.toString(),
            precio: auto.precio.toString(),
            kilometros: auto.kilometros.toString(),
            color: auto.color,
            transmision: auto.transmision,
            combustible: auto.combustible,
            descripcion: auto.descripcion || '',
            imagenes: auto.imagenes?.join(', ') || '',
            destacado: auto.destacado,
          })
        }
      } catch (error) {
        console.error('Error fetching auto:', error)
      }
      setFetching(false)
    }
    fetchAuto()
  }, [params.id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`/api/autos/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          titulo: formData.titulo,
          marca: formData.marca,
          modelo: formData.modelo,
          anio: parseInt(formData.anio),
          precio: parseFloat(formData.precio),
          kilometros: parseInt(formData.kilometros),
          color: formData.color,
          transmision: formData.transmision,
          combustible: formData.combustible,
          descripcion: formData.descripcion,
          imagenes: formData.imagenes.split(',').map((s: string) => s.trim()).filter(Boolean),
          destacado: formData.destacado,
        }),
      })

      if (response.ok) {
        router.push('/admin')
      } else {
        alert('Error al actualizar el auto')
      }
    } catch {
      alert('Error de conexión')
    }
    setLoading(false)
  }

  if (fetching) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a14',
      }}>
        <p style={{ color: 'rgba(255,255,255,0.5)' }}>Cargando...</p>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a14', color: 'white' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/admin" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🚗</span>
            <span style={{ fontWeight: 600, color: 'white' }}>AutoTopía Admin</span>
          </Link>
        </div>
        <Link
          href="/admin"
          style={{
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '0.85rem',
            textDecoration: 'none',
          }}
        >
          ← Volver
        </Link>
      </div>

      {/* Form */}
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '2rem' }}>
          ✏️ Editar Auto
        </h1>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>
              Información del Auto
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  Título *
                </label>
                <input
                  type="text"
                  required
                  value={formData.titulo}
                  onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
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
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  Marca *
                </label>
                <select
                  required
                  value={formData.marca}
                  onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: '#1a1a2e',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                  }}
                >
                  <option value="">Seleccionar marca</option>
                  {marcas.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  Modelo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.modelo}
                  onChange={(e) => setFormData({ ...formData, modelo: e.target.value })}
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
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  Año *
                </label>
                <input
                  type="number"
                  required
                  min="1990"
                  max="2026"
                  value={formData.anio}
                  onChange={(e) => setFormData({ ...formData, anio: e.target.value })}
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
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  Precio (MXN) *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.precio}
                  onChange={(e) => setFormData({ ...formData, precio: e.target.value })}
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
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  Kilómetros *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.kilometros}
                  onChange={(e) => setFormData({ ...formData, kilometros: e.target.value })}
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
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  Color *
                </label>
                <input
                  type="text"
                  required
                  value={formData.color}
                  onChange={(e) => setFormData({ ...formData, color: e.target.value })}
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
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  Transmisión *
                </label>
                <select
                  required
                  value={formData.transmision}
                  onChange={(e) => setFormData({ ...formData, transmision: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: '#1a1a2e',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                  }}
                >
                  <option value="">Seleccionar</option>
                  {transmisiones.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  Combustible *
                </label>
                <select
                  required
                  value={formData.combustible}
                  onChange={(e) => setFormData({ ...formData, combustible: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: '#1a1a2e',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                  }}
                >
                  <option value="">Seleccionar</option>
                  {combustibles.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  Destacado
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.destacado}
                    onChange={(e) => setFormData({ ...formData, destacado: e.target.checked })}
                    style={{ width: '20px', height: '20px' }}
                  />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                    Marcar como destacado
                  </span>
                </label>
              </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Descripción
              </label>
              <textarea
                value={formData.descripcion}
                onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
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
              />
            </div>

            <div style={{ marginTop: '1rem' }}>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                URLs de Imágenes (separadas por coma)
              </label>
              <input
                type="text"
                value={formData.imagenes}
                onChange={(e) => setFormData({ ...formData, imagenes: e.target.value })}
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
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <Link
              href="/admin"
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                textDecoration: 'none',
                padding: '1rem 2rem',
                borderRadius: '10px',
                fontWeight: 'bold',
              }}
            >
              Cancelar
            </Link>
            <button
              type="submit"
              disabled={loading}
              style={{
                background: loading ? 'rgba(0,217,255,0.5)' : 'linear-gradient(90deg, #00d9ff, #00ff88)',
                color: '#0a0a14',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Guardando...' : 'Guardar Cambios'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}