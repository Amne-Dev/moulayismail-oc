'use client'

import { signIn } from 'next-auth/react'
import { Button } from 'react-bootstrap'

export default function SignIn() {
  return (
    <div className="text-center">
      <h2 className="mb-4">Login to Continue</h2>
      <Button 
        variant="primary" 
        className="w-100 mb-3"
        onClick={() => signIn('google')}
      >
        Continue with Google
      </Button>
      <Button
        variant="secondary"
        className="w-100"
        onClick={() => signIn('credentials')}
      >
        Use School Credentials
      </Button>
    </div>
  )
}