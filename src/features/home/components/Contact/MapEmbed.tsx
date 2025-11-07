import Image from "next/image"
export default function MapEmbed() {
  return (
    <div className="relative 
      w-[306px] h-[274px] md:w-[399.3px] md:h-[281.77px] lg:w-[496px] lg:h-[488px]
      z-20
    ">
      <Image 
        src="/images/map.png"
        alt="Emplacement de Lamoon Thaï Spa à Paris"
        fill
        loading="lazy"
        className="object-cover"
      />
    </div>
  )
}
