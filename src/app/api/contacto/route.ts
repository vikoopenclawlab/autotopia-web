import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { exec } from 'child_process'

async function sendWhatsAppNotification(nombre: string, email: string, telefono: string | null, mensaje: string) {
  try {
    const telefonoText = telefono ? `📱 Teléfono: ${telefono}\n` : ''
    const notificationText = `🔔 *Nuevo lead de AutoTopía*\n\n👤 *Nombre:* ${nombre}\n📧 *Email:* ${email}\n${telefonoText}\n💬 *Mensaje:* ${mensaje.slice(0, 100)}${mensaje.length > 100 ? '...' : ''}\n\n⏰ ${new Date().toLocaleString('es-MX')}`

    await new Promise((resolve, reject) => {
      const cmd = `openclaw agent --deliver whatsapp --to +5215517481381 --message "${notificationText.replace(/"/g, '\\"')}"`
      exec(cmd, { timeout: 30000 }, (error: Error | null, stdout: string, stderr: string) => {
        if (error) {
          console.error('WhatsApp notification error:', stderr)
          reject(error)
        } else {
          console.log('WhatsApp notification sent')
          resolve(stdout)
        }
      })
    })
  } catch (error) {
    console.error('Failed to send WhatsApp notification:', error)
  }
}

export async function POST(request: Request) {
  try {
    const { nombre, email, telefono, mensaje } = await request.json()

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

    sendWhatsAppNotification(nombre, email, telefono, mensaje).catch(console.error)

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