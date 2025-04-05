// app/auth/login/page.tsx
'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button, Dropdown } from 'react-bootstrap'

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
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="container-fluid" style={{ 
      backgroundColor: 'var(--bg-main)',
      minHeight: '100vh',
      paddingRight: '30vh'
    }}>
      {/* Sidebar */}
      <div className="sidebar" style={{
        backgroundColor: 'var(--bg-sec)',
        width: '30vh',
        position: 'fixed',
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2vh 0'
      }}>
        <div className="Desktop-lg">
          <Dropdown className="language-switch mt-3">
            <Dropdown.Toggle variant="secondary">
              {language === 'en' ? 'EN' : 'AR'}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ backgroundColor: 'var(--misc)' }}>
              <Dropdown.Item 
                onClick={() => setLanguage('en')}
                style={{ color: 'white' }}
              >
                English
              </Dropdown.Item>
              <Dropdown.Item 
                onClick={() => setLanguage('ar')}
                style={{ color: 'white' }}
              >
                العربية
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/* Main Content */}
      <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="text-center mb-5">
          <Image
            src="/images/299214068_488961346562688_7481375062274533520_n__1_-removebg-preview.png"
            alt="School Logo"
            width={200}
            height={200}
            className="mb-4"
          />
          <h1 style={{ color: 'var(--misc)' }}>
            {language === 'en' ? 'Moulay Ismail High School' : 'ثانوية مولاي إسماعيل'}
          </h1>
        </div>

        <div className="card p-4" style={{ 
          backgroundColor: 'var(--bg-sec)',
          color: 'var(--text-sec)',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '10px'
        }}>
          <h2 className="text-center mb-4">
            {language === 'en' ? 'Login to Continue' : 'تسجيل الدخول'}
          </h2>
          
          <Button 
            variant="primary" 
            className="w-100 mb-3"
            onClick={() => signIn('google')}
            style={{
              backgroundColor: 'var(--misc)',
              border: 'none',
              padding: '12px',
              fontSize: '1.1rem'
            }}
          >
            {language === 'en' ? 'Continue with Google' : 'المتابعة مع جوجل'}
          </Button>

          <Button
            variant="secondary"
            className="w-100"
            onClick={() => signIn('credentials')}
            style={{
              backgroundColor: 'var(--misc-sec)',
              border: 'none',
              padding: '12px',
              fontSize: '1.1rem'
            }}
          >
            {language === 'en' ? 'School Credentials' : 'بيانات المدرسة'}
          </Button>
        </div>
      </div>
    </div>
  )
}