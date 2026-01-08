import Title from "../Title"
import Description from "../Description"
import HeroImage from "./HeroImage"
import Button from "./Button"

export default function Hero({
  title,
  descriptions,
  buttonText,
  src,
  alt,
}: {
  title: string;
  descriptions: {
    type: 'text' | 'highlight';
    value: string;
  }[],
  buttonText: string;
  src: string;
  alt: string;
}) {
  return (
    <section
      className="flex flex-col gap-1 py-[25px] px-[60px] 
      md:flex-row md:gap-5 md:py-[30px] md:px-[45px]
      lg:flex-row-reverse lg:gap-[64px] lg:py-[75px] lg:px-[112px]
      items-center"
      aria-labelledby="service-hero-heading"
    >

      <div className="w-full md:w-1/2">
        <HeroImage src={src} alt={alt} />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-[15px] md:gap-[20px] lg:gap-[30px]">
        <Title title={title} id="service-hero-heading" />
        <Description descriptions={descriptions} />
      </div>
    </section>
  )
}