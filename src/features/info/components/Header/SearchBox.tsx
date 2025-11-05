import { Search, SlidersHorizontal } from 'lucide-react'
import messages from '@/content/messages.json'

export default function SearchBox() {
  const searchPlaceholder = messages.info.search
  return (
    <div className='flex justify-between items-center bg-info-search-background gap-2 py-3 px-4 rounded-lg'>
      <Search size={24} className='text-info-search-text shrink-0'/>
      <input type="text" placeholder={searchPlaceholder} className='w-[60.47px] md:w-[129px] lg:w-[324px] text-info-search-text flex-1 outline-none bg-transparent'/>
      <SlidersHorizontal size={24} className='text-info-search-text shrink-0' />
    </div>
  )
}