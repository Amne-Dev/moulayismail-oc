'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Carousel from '@/components/Carousel'

export default function HomePage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [language, setLanguage] = useState<'en' | 'ar'>('en')

  if (!session) {
    router.push('/auth/login')
    return null
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header Section */}
      <header style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f5f5f5' }}>
        <img 
          src="/images/logo.png" 
          alt="Logo" 
          style={{ width: '150px', height: 'auto', marginBottom: '1rem' }}
        />
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Moulay Ismail High School</p>
        <h1 style={{ fontSize: '1.5rem', color: '#333' }}>
          {language === 'en' 
            ? 'Online Community of Teachers and Students'
            : 'مجتمع تعليمي للمعلمين والطلاب عبر الإنترنت'}
        </h1>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <Carousel />
      </main>

      {/* Sidebar */}
      <Sidebar
        session={session}
        language={language}
        onLanguageChange={setLanguage}
        onGoBack={router.back}
      />
    </div>
  )
}