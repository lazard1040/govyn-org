'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

interface SessionData {
  success: boolean
  productName: string
  customerEmail: string
  fileUrl: string | null
}

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<SessionData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!sessionId) {
      setError('No session ID provided.')
      setLoading(false)
      return
    }

    fetch(`/api/verify-session?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setData(json)
        } else {
          setError(json.error || 'Payment verification failed.')
        }
      })
      .catch(() => {
        setError('Unable to verify payment. Please try again.')
      })
      .finally(() => setLoading(false))
  }, [sessionId])

  if (loading) {
    return (
      <section className="bg-navy text-white min-h-[60vh] flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6 animate-pulse">⏳</div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-gold mb-4">
            Verifying your payment...
          </h1>
          <p className="text-gray-300">Please wait while we confirm your purchase.</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="bg-navy text-white min-h-[60vh] flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6">⚠️</div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-red-400 mb-4">
            Payment Not Found
          </h1>
          <p className="text-gray-300 mb-6">{error}</p>
          <p className="text-gray-400 mb-8">
            If you believe this is an error, please contact{' '}
            <a
              href="mailto:lazardlegacyent@govyn.org"
              className="text-gold hover:underline"
            >
              lazardlegacyent@govyn.org
            </a>
          </p>
          <Link
            href="/courses"
            className="inline-block bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
          >
            Back to Courses
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-navy text-white min-h-[60vh] flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="text-6xl mb-6">🎓</div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-4">
          Congratulations!
        </h1>
        <p className="text-xl text-gray-200 mb-2">
          Payment confirmed! Download your course below.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          <span className="text-gold font-semibold">{data?.productName}</span>
        </p>

        {data?.fileUrl ? (
          <a
            href={data.fileUrl}
            download
            className="inline-block bg-gold text-navy px-10 py-4 rounded-xl text-xl font-bold hover:bg-yellow-500 transition-colors duration-200 shadow-lg mb-8"
          >
            ⬇️ DOWNLOAD YOUR COURSE
          </a>
        ) : (
          <div className="bg-white/10 border border-gold/30 rounded-xl p-6 mb-8">
            <p className="text-gray-300">
              Your course file will be available shortly. Check your email or contact us.
            </p>
          </div>
        )}

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          {data?.customerEmail && (
            <p className="text-gray-300 mb-2">
              📧 Sent to: <span className="text-white font-medium">{data.customerEmail}</span>
            </p>
          )}
          <p className="text-gray-400 text-sm">
            Check your email — a copy will be sent shortly.
          </p>
        </div>

        <p className="text-gray-400 mb-6 text-sm">
          Questions?{' '}
          <a
            href="mailto:lazardlegacyent@govyn.org"
            className="text-gold hover:underline"
          >
            lazardlegacyent@govyn.org
          </a>
        </p>

        <Link
          href="/courses"
          className="inline-block border border-gold text-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy transition-colors duration-200"
        >
          Browse More Courses
        </Link>
      </div>
    </section>
  )
}

export default function CourseSuccessPage() {
  return (
    <Suspense
      fallback={
        <section className="bg-navy text-white min-h-[60vh] flex items-center justify-center py-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="text-5xl mb-6 animate-pulse">⏳</div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-gold mb-4">
              Loading...
            </h1>
          </div>
        </section>
      }
    >
      <SuccessContent />
    </Suspense>
  )
}
