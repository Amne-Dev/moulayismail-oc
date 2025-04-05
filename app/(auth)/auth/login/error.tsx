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
    <div className="container text-center mt-5">
      <h2 className="text-danger mb-4">Authentication Error</h2>
      <p className="lead">
        {error === 'OAuthAccountNotLinked' && 
          'Please sign in with the same account you used originally.'}
        {error === 'AccessDenied' && 
          'You do not have permission to access this resource.'}
        {error === 'OAuthCallback' && 
          'Error during authentication. Please try again.'}
      </p>
      <button 
        onClick={() => router.push('/auth/login')}
        className="btn btn-primary mt-3"
      >
        Return to Login
      </button>
    </div>
  )
}