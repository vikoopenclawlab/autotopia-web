import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const autos = await prisma.auto.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(autos)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching autos' }, { status: 500 })
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
    return NextResponse.json({ error: 'Error creating auto' }, { status: 500 })
  }
}