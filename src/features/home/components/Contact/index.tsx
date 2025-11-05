import ContactInfo from "./ContactInfo"
import SocialLinks from "./SocialLinks"
import MapEmbed from "./MapEmbed"
import Background from "./Background"

export default function Contact() {
  return (
    <div className="relative flex flex-col lg:flex-row-reverse lg:justify-center items-center gap-16 py-[67px] px-[44px] md:py-[69px] md:px-[60px] lg:py-[75px] lg:px-[112px]">
      <Background />
      <MapEmbed />

      <div className="flex flex-col gap-[24.15px] lg:gap-[30px] z-20 ">
        <ContactInfo />
        <div className="w-full border-t border-landing-contact-divider"/>
        <SocialLinks />
      </div>
    </div>
  )
}