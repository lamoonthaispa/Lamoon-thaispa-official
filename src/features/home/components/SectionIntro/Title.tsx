import messages from "@/content/messages.json"

export default function Title({ headingId }: { headingId?: string }) {
  const section_intro = messages.landing.section_intro
  return (
    <div className="flex flex-col items-center gap-[10px] font-medium">

      <h2
        id={headingId}
        className="text-lg md:text-4xl lg:text-6xl text-landing-section-intro-text-title"
      >
        { section_intro.title }
      </h2>

      <p className="text-sm md:text-xl lg:text-2xl font-normal text-landing-section-intro-text-description text-center">
        { section_intro.description }
      </p>

    </div>
  )
}