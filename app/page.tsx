'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()
  const [club, setClub] = useState('')
  const [group, setGroup] = useState('')
  
  useEffect(() => {
    const savedClub = localStorage.getItem('club')
    const savedGroup = localStorage.getItem('group')

    if (!savedClub || !savedGroup) {
      router.push('/setup')
      return
    }

    setClub(savedClub)
    setGroup(savedGroup)
  }, [router])
  
  return (
    <main className="min-h-screen bg-[#FFFCF9]">
      <header className="bg-[#FFF1E3] h-[70px] flex items-center justify-center">
        <h1 className="text-[24px] font-bold text-[#2D2D2D]">ホーム</h1>
      </header>
      <section className="px-4 pt-8">
        <div className="bg-white border border-[#D4D4D4] rounded-[8px] p-20">
          <p className="text-[20px] font-bold text-[#2D2D2D]">あなたの登録先</p>
          <button
           onClick={() => router.push('/setup')}
           className="w-full h-[72px] bg-[#4E8CFF] rounded-[8px] border border-[#6FBCFF] text-[24px] font-bold text-white"
           >
           所属を変更する
          </button>
        </div>
      </section>
    </main>
  )