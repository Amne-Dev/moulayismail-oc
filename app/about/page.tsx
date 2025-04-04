'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'

export default function AboutPage() {
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
          {language === 'en' ? 'About Us' : 'من نحن'}
        </h1>
        <div className="overview">
          <h2>{language === 'en' ? 'Info' : 'معلومات'}</h2>
          <p>
            {language === 'en'
              ? 'This website is the work of Boumazoued Amine...'
              : 'هذا الموقع هو عمل بومزواد أمين...'}
          </p>
        </div>
        <div className="contact-info mt-5">
          <h2>{language === 'en' ? 'Contact Information' : 'معلومات الاتصال'}</h2>
          <p><strong>{language === 'en' ? 'Email:' : 'البريد الإلكتروني:'}</strong> amdev@null.net</p>
          <p>
            <strong>
              {language === 'en'
                ? 'In collaboration with teacher Mohamed Fettah:'
                : 'بشراكة مع المعلم محمد فتاح:'}
            </strong> mohamed-fettah@hotmail.fr
          </p>
        </div>
      </div>
    </div>
  )
}