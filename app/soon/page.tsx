import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function SoonPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/auth/login')

  return (
    <div className="container text-center">
      <h1>Coming Soon</h1>
      <p>We are working hard to bring you something amazing!</p>
    </div>
  )
}