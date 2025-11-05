import messages from "@/content/messages.json"

export default function Title() {
  const section_intro = messages.landing.section_intro
  return (
    <div className="flex flex-col items-center gap-[10px] font-medium">

      <h1 className="text-lg md:text-4xl lg:text-6xl text-landing-section-intro-text-title">
        { section_intro.title }
      </h1>

      <h3 className="text-sm md:text-xl lg:text-2xl font-normal text-landing-section-intro-text-description">
        { section_intro.description }
      </h3>

    </div>
  )
}