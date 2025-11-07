import messages from '@/content/messages.json'
export default function Title() {
  const hero = messages.landing.hero
  return (
    <div className='flex flex-col items-center gap-10'>
      <h1 className='text-landing-hero-text-title font-bold text-2xl md:text-4xl lg:text-6xl'>
        {hero.title}
      </h1>

      <p className='text-landing-hero-text-description text-lg md:text-xl lg:text-3xl flex flex-col items-center text-center'>
        {hero.description.map((item, index) => {
          if (item.type === 'highlight') {
            return (
              <span key={index} className='font-bold'>
                {item.value}
              </span>
            )
          }
          return (
            <span key={index}>
              {item.value}
            </span>
          )
        })}
      </p>
    </div>
  )
}