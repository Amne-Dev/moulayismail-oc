'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

export default function ErrorPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  useEffect(() => {
    if (!error) {
      router.push('/auth/login')
    }
  }, [error, router])

  return (
    <div className="login-page">
      {/* Main Card */}
      <div className="login-card">
        {/* Title */}
        <h1 className="login-title">Authentication Error</h1>

        {/* Error Message */}
        <p className="lead" style={{ color: 'var(--text-sec)', marginBottom: '1.5rem' }}>
          {error === 'OAuthAccountNotLinked' &&
            'Please sign in with the same account you used originally.'}
          {error === 'AccessDenied' &&
            'You do not have permission to access this resource.'}
          {error === 'OAuthCallback' &&
            'Error during authentication. Please try again.'}
          {!error && 'An unknown error occurred. Please try again.'}
        </p>

        {/* Return to Login Button */}
        <button
          onClick={() => router.push('/auth/login')}
          className="btn btn-credentials"
        >
          Return to Login
        </button>
      </div>
    </div>
  )
}