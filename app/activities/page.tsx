'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'

export default function ActivitiesPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [language, setLanguage] = useState<'en' | 'ar'>('en')

  if (!session) {
    router.push('/auth/login')
    return null
  }

  return (
    <div className="container-fluid" style={{ paddingRight: '30vh' }}>
      <Sidebar
        session={session}
        language={language}
        onLanguageChange={setLanguage}
        onGoBack={router.back}
      />
      <div className="container mt-5">
        <h1 className="text-center mb-4">
          {language === 'en' 
            ? "School Activities" 
            : "الأنشطة المدرسية"}
        </h1>
        {/* Activities content */}
      </div>
    </div>
  )
}