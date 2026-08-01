import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2026-07-29.dahlia' })

  const { productName, price, quantity, customerEmail, notes, successUrl, cancelUrl } = await req.json()

  const origin = req.headers.get('origin')

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: productName,
          description: `Quantity: ${quantity}. ${notes || ''}`,
        },
        unit_amount: Math.round(price * 100),
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${origin}${successUrl || '/business-development/success'}`,
    cancel_url: `${origin}${cancelUrl || '/business-development'}`,
    customer_email: customerEmail || undefined,
  })

  return NextResponse.json({ url: session.url })
}
