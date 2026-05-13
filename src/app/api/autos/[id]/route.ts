import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const auto = await prisma.auto.findUnique({
      where: { id: params.id },
    })
    if (!auto) {
      return NextResponse.json({ error: 'Auto not found' }, { status: 404 })
    }
    return NextResponse.json(auto)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching auto' }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const auto = await prisma.auto.update({
      where: { id: params.id },
      data: body,
    })
    return NextResponse.json(auto)
  } catch (error) {
    return NextResponse.json({ error: 'Error updating auto' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.auto.delete({
      where: { id: params.id },
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting auto' }, { status: 500 })
  }
}