import messages from '@/content/messages.json'
import { ArrowRight } from 'lucide-react'
export default function Button() {
  const hero = messages.landing.hero
  return (
    <button className='inline-flex justify-center items-center gap-3 py-3 px-12
      bg-landing-hero-button-background text-landing-hero-button-text rounded-md
      text-lg md:text-2xl
    '>
      { hero.button }
      <ArrowRight size={20} />
    </button>
  )
}