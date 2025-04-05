'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [language, setLanguage] = useState<'en' | 'ar'>('en')

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="loading-screen">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="login-page">
      {/* Main Card */}
      <div className="login-card">
        {/* Logo */}
        <div className="logo-container">
          <Image
            src="/images/299214068_488961346562688_7481375062274533520_n__1_-removebg-preview.png"
            alt="School Logo"
            width={120}
            height={120}
          />
        </div>

        {/* Title */}
        <h1 className="login-title">
          {language === 'en' ? 'Moulay Ismail High School' : 'ثانوية مولاي إسماعيل'}
        </h1>

        {/* Buttons */}
        <div className="login-buttons">
          <button className="btn btn-google" onClick={() => signIn('google')}>
            {language === 'en' ? 'Continue with Google' : 'المتابعة مع جوجل'}
          </button>
          <button className="btn btn-credentials" onClick={() => signIn('credentials')}>
            {language === 'en' ? 'School Credentials' : 'بيانات المدرسة'}
          </button>
        </div>
      </div>

      {/* Language Selector */}
      <div className="language-selector">
        <button
          className={`language-btn ${language === 'en' ? 'active' : ''}`}
          onClick={() => setLanguage('en')}
        >
          EN
        </button>
        <button
          className={`language-btn ${language === 'ar' ? 'active' : ''}`}
          onClick={() => setLanguage('ar')}
        >
          AR
        </button>
      </div>
    </div>
  )
}