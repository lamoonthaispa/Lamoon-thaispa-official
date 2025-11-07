import Title from "./Title"
import Cards from "./Cards"

export default function SectionIntro() {
  return (
    <section
      className="relative w-full h-[556.67px] md:h-[756px] lg:h-[796px]"
      aria-labelledby="section-intro-heading"
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to bottom, #F6F1EA 0%, #F6F1EA 50%, #4F3921 50%, #4F3921 100%)",
          zIndex: 0,
        }}
        aria-hidden="true"
      ></div>

      <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6 lg:gap-12">
        <Title headingId="section-intro-heading" />
        <Cards />
      </div>
    </section>
  )
}