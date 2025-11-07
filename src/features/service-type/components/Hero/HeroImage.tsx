import Image from "next/image";

export default function HeroImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <figure
      className="
      relative
      rounded-xl
      w-full h-[289px]
      md:h-[482px]
      lg:h-[431px]
    "
    >
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        className="object-cover
          rounded-xl 
        "
        />
    </figure>
  )
}