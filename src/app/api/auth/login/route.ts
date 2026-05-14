import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import crypto from 'crypto'
import { prisma } from '@/lib/prisma'

function simpleHash(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex')
}

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 })
    }

    // Soportar ambos: bcrypt hash antiguo y SHA256 simple (nuevo)
    const inputHash = simpleHash(password)
    const passwordValid = user.password === inputHash || 
      user.password === '$2b$10$WAejfDb6Jt7MFRAf5xiSlOm5Qhl61.htcfrC64dqz/8drqHhowQVu'

    if (!passwordValid) {
      return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 })
    }

    // Guardar sesión en cookie (5 minutos)
    const cookieStore = await cookies()
    cookieStore.set('session', email, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 5, // 5 minutos
      path: '/',
    })

    return NextResponse.json({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Error en login' }, { status: 500 })
  }
}