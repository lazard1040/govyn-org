import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16' })

  const { productName, price, quantity, customerEmail, notes } = await req.json()

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
    success_url: `${req.headers.get('origin')}/business-development/success`,
    cancel_url: `${req.headers.get('origin')}/business-development`,
    customer_email: customerEmail || undefined,
  })

  return NextResponse.json({ url: session.url })
}
