import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'AutoTopía API is running',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0',
  })
}