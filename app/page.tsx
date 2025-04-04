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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9 offset-md-0">
          <div className="text-center mt-5 logo">
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="mb-3"
              style={{ width: '20vh', height: 'auto' }}
            />
            <p>Moulay Ismail High School</p>
            <h1 style={{ color: '#854442' }}>
              {language === 'en' 
                ? 'Online Community of Teachers and Students'
                : 'مجتمع تعليمي للمعلمين والطلاب عبر الإنترنت'}
            </h1>
          </div>
          <Carousel />
        </div>
      </div>
      <Sidebar
        session={session}
        language={language}
        onLanguageChange={setLanguage}
        onGoBack={router.back}
      />
    </div>
  )
}