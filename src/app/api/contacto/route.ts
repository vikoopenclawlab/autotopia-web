import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const { nombre, email, telefono, mensaje } = await request.json()

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    const contacto = await prisma.contacto.create({
      data: {
        nombre: nombre.trim(),
        email: email.trim().toLowerCase(),
        telefono: telefono?.trim() || null,
        mensaje: mensaje.trim(),
      },
    })

    return NextResponse.json({
      success: true,
      id: contacto.id,
      message: 'Mensaje recibido',
    })
  } catch (error) {
    console.error('Contacto error:', error)
    return NextResponse.json({ error: 'Error al guardar mensaje' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const contactos = await prisma.contacto.findMany({
      orderBy: { createdAt: 'desc' },
      where: { leido: false },
    })

    return NextResponse.json({
      total: contactos.length,
      sin_leer: contactos.length,
      contactos,
    })
  } catch (error) {
    console.error('Contacto list error:', error)
    return NextResponse.json({ error: 'Error al obtener contactos' }, { status: 500 })
  }
}