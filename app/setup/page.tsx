'use client'
import { useState } from "react"

export default function SetupPage() {
  const [club, setClub] = useState('')
  const [group, setGroup] = useState('')

  const clubs = ['世田谷クラブ', '砧クラブ', '駒沢クラブ', '市ヶ谷クラブ', '三崎町クラブ', '白山クラブ', '板橋クラブ', '多摩クラブ', '八王子クラブ', '日野クラブ', '白楽クラブ', '高崎クラブ', '酒田クラブ', '衣笠クラブ', '今出川クラブ', '上賀茂クラブ', '西院クラブ', '京田辺クラブ', '深草クラブ', '吹田クラブ', '茨木クラブ', '東大阪クラブ', '西宮クラブ', '草津クラブ', '瀬田クラブ', '佐世保クラブ']
  
  const clubGroups: Record<string, string[]> = {
    '世田谷クラブ': ['世田谷隼人班', '田中太郎班', '鈴木一郎班'],
    '砧クラブ': ['砧花子班', '山田太郎班', '高橋一郎班'],
    '駒沢クラブ': ['伊藤次郎班', '渡辺三郎班', '小林四郎班'],
    '市ヶ谷クラブ': ['加藤五郎班', '山本六郎班', '中村七郎班'],
    '三崎町クラブ': ['松本八郎班', '井上九郎班', '木村十郎班'],
    '白山クラブ': ['林十一郎班', '清水十二郎班', '山口十三郎班'],
    '板橋クラブ': ['石川十四郎班', '福田十五郎班', '佐々木十六郎班'],
    '多摩クラブ': ['山崎十七郎班', '中島十八郎班', '藤田十九郎班'],
    '八王子クラブ': ['小川二十郎班', '田村二十一郎班', '松田二十二郎班'],
    '日野クラブ': ['石井二十三郎班', '高木二十四郎班', '森二十五郎班'],     
    '白楽クラブ': ['世田谷隼人班', '田中太郎班', '鈴木一郎班'],
    '高崎クラブ': ['砧花子班', '山田太郎班', '高橋一郎班'],
    '酒田クラブ': ['伊藤次郎班', '渡辺三郎班', '小林四郎班'],
    '衣笠クラブ': ['加藤五郎班', '山本六郎班', '中村七郎班'],
    '今出川クラブ': ['松本八郎班', '井上九郎班', '木村十郎班'],
    '上賀茂クラブ': ['林十一郎班', '清水十二郎班', '山口十三郎班'],
    '西院クラブ': ['石川十四郎班', '福田十五郎班', '佐々木十六郎班'],
    '京田辺クラブ': ['山崎十七郎班', '中島十八郎班', '藤田十九郎班'],
    '深草クラブ': ['小川二十郎班', '田村二十一郎班', '松田二十二郎班'],
    '吹田クラブ': ['石井二十三郎班', '高木二十四郎班', '森二十五郎班'],     
    '茨木クラブ': ['堀江爽響班', '斎藤波音班', '園田桃優班','戸井裕菜班', '島田彰印班', '松田拓也班','足立百合菜班', '古野美香班', '内田希乃花班','田中大智班', '西田芽生班', '安部亮太郎班','勝見かなう班', '三代希藍班', '加藤遼真班','森愛奈班', '杉本悠一郎班', '西村衣莉奈班','波多野彩花班', '直井優成班', '伊保大樹班','中嶋凜班', '戸塚涼太班', '加藤和夏班'],
    '東大阪クラブ': ['小川二十郎班', '田村二十一郎班', '松田二十二郎班'],
    '西宮クラブ': ['石井二十三郎班', '高木二十四郎班', '森二十五郎班'],     
    '草津クラブ': ['山崎十七郎班', '中島十八郎班', '藤田十九郎班'],
    '瀬田クラブ': ['小川二十郎班', '田村二十一郎班', '松田二十二郎班'],
    '佐世保クラブ': ['石井二十三郎班', '高木二十四郎班', '森二十五郎班'],     
  }

  const groups = club ? clubGroups[club] ?? [] : []

  const handleSave = () => {
    localStorage.setItem('club', club)
    localStorage.setItem('group', group)
    alert('保存しました')
  }

  return (
    <main className="min-h-screen bg-[#FFFCF9]">
      <header className="bg-[#FFF1E3] h-[70px] flex items-center justify-center">
        <h1 className="text-[24px] font-bold text-[#2D2D2D]">所属班設定</h1>
      </header>
      <section className="px-4 pt-8">
        <h2 className="mb-8 text-[24px] font-bold text-[#2D2D2D]">所属するクラブと班を<br />選択してください</h2>

        <div className="mb-8">
          <label className="text-[20px] font-Regular text-[#787878]">
            クラブ
          </label>
          <div className="relative">
            <select 
              value = {club}
              onChange = {(e) => {
                setClub(e.target.value)
                setGroup('')
              }}
              className="w-full h-[48px] border border-[#D4D4D4] bg-white rounded-[8px] px-4 pr-12 text-[24px] font-Regular text-[#3B3B3B] appearance-none outline-none"
           >
              {clubs.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-[60%] w-3 h-3 border-r-2 border-b-2 border-[#3B3B3B] rotate-45"></span>
          </div>
        </div>
        
        <div className="mb-8">
          <label className="text-[20px] font-Regular text-[#787878]">
            班
          </label>
          <div className="relative">
            <select 
              value = {group}
              onChange = {(e) => 
                setGroup(e.target.value)
              }
              className="w-full h-[48px] border border-[#D4D4D4] bg-white rounded-[8px] px-4 pr-12 text-[24px] font-Regular text-[#3B3B3B] appearance-none outline-none"
           >
              {groups.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-[60%] w-3 h-3 border-r-2 border-b-2 border-[#3B3B3B] rotate-45"></span>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full h-[72px] bg-[#4E8CFF] rounded-[8px] border border-[#6FBCFF] text-[24px] font-bold text-white"
         >
          この設定を保存
        </button>
      </section>
    </main>
  )
}