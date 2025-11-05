import Image from "next/image"
import Title from "./Title"
import Button from "./Button"

export default function Banner() {
  return (
    <div className="
      w-full h-[439px] md:h-[458px] lg:h-[720px] relative
      flex items-center justify-center
    ">
      <Image 
        src="/images/banner.jpg"
        alt="Banner"
        fill
        className="object-cover z-10"
      />

      <div className="absolute inset-0 bg-linear-to-b from-[#06100C] to-transparent z-20"/>

      <div 
        className="absolute bottom-0 w-full
          h-[74px] md:h-[106px] lg:h-[120px] z-20
          bg-linear-to-t from-background to-transparent
        "
      />

      <div className="relative z-30 flex flex-col items-center justify-center gap-6 px-5">
        <Title />
        <Button />
      </div>
    </div>
  )
}