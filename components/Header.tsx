'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="border-bottom py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <Link href="/" className="text-decoration-none">
          <h1 className="m-0">Moulay Ismail High School</h1>
        </Link>
        {session && (
          <div className="d-flex align-items-center gap-3">
            <span>{session.user?.email}</span>
            <Link href="/auth/logout" className="btn btn-outline-danger">
              Logout
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}