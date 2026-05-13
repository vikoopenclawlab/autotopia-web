import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const autos = await prisma.auto.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(autos)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error('DB Error in GET /api/autos:', errorMessage)
    return NextResponse.json({ 
      error: 'Database connection failed', 
      detail: errorMessage,
      code: (error as any)?.code,
      severity: (error as any)?.severity
    }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      titulo, marca, modelo, anio, precio, kilometros,
      color, transmision, combustible, descripcion,
      imagenes, caracteristicas, disponibles, destacado
    } = body

    const auto = await prisma.auto.create({
      data: {
        titulo,
        marca,
        modelo,
        anio: parseInt(anio),
        precio: parseFloat(precio),
        kilometros: parseInt(kilometros),
        color,
        transmision,
        combustible,
        descripcion,
        imagenes: imagenes || [],
        caracteristicas: caracteristicas || [],
        disponibles: disponibles ?? true,
        destacado: destacado ?? false,
      },
    })
    return NextResponse.json(auto)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error('DB Error in POST /api/autos:', errorMessage)
    return NextResponse.json({ error: 'Error creating auto', detail: errorMessage }, { status: 500 })
  }
}