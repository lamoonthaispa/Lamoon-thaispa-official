import ContactInfo from "./ContactInfo"
import SocialLinks from "./SocialLinks"
import MapEmbed from "./MapEmbed"
import Background from "./Background"

export default function Contact() {
  return (
    <section
      className="relative flex flex-col lg:flex-row-reverse lg:justify-center items-center gap-16 py-[67px] px-[44px] md:py-[69px] md:px-[60px] lg:py-[75px] lg:px-[112px]"
      aria-labelledby="contact-heading"
    >
      <Background />
      <MapEmbed />

      <div className="flex flex-col gap-[24.15px] lg:gap-[30px] z-20">
        <header>
          <h2 id="contact-heading" className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            Contactez Lamoon Thaï Spa
          </h2>
        </header>
        <ContactInfo />
        <div className="w-full border-t border-landing-contact-divider" aria-hidden="true" />
        <SocialLinks />
      </div>
    </section>
  )
}