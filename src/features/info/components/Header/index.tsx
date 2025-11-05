import messages from '@/content/messages.json'
import SearchBox from './SearchBox'
export default function Header() {
  const info = messages.info
  return (
    <div className='flex justify-between items-center px-5 md:px-[35px] lg:py-5 lg:px-[58px]'>
      <h1 className='text-info-text-title font-medium text-[16px] md:text-4xl lg:text-[56px]'>
        { info.title }
      </h1>

      <SearchBox />

    </div>
  )
}