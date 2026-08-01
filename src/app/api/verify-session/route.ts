import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'
import { courseFiles } from '@/lib/courses'

export async function GET(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2026-07-29.dahlia' })
  const sessionId = req.nextUrl.searchParams.get('session_id')

  if (!sessionId) return NextResponse.json({ error: 'No session' }, { status: 400 })

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment not completed' }, { status: 400 })
    }
    const productName = session.metadata?.productName || ''
    const fileUrl = courseFiles[productName] || null
    return NextResponse.json({
      success: true,
      productName,
      customerEmail: session.customer_email,
      fileUrl,
    })
  } catch {
    return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  }
}
