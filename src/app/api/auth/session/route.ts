import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('session')

    if (!sessionCookie) {
      return NextResponse.json({ error: 'No session' }, { status: 401 })
    }

    return NextResponse.json({ email: sessionCookie.value })
  } catch {
    return NextResponse.json({ error: 'Error checking session' }, { status: 500 })
  }
}