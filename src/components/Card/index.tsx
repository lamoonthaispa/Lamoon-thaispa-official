import TypeTag from "./TypeTag";
import Durations from "./Durations";
import Button from "./Button";
import Image from "next/image";
export default function Card({
  type,
  image,
  title,
  description,
  durations
}: {
  type: string;
  title: string;
  description: string;
  image: string;
  durations: {
    time: string;
    price: string;
  }[]
}) {
  return (
    <article className="w-[270px] md:w-[332px] lg:w-[360px] bg-card-background flex flex-col items-center gap-3 p-3 rounded-xl">
      <figure className="w-full h-[140px] md:h-[185px] lg:h-[201px] relative rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          loading="lazy"
          className="object-cover rounded-xl"
        />
        <TypeTag type={type} />
      </figure>

      <header className="flex flex-col items-start gap-2 w-full">
        <h3 className="text-card-text-title font-medium text-lg md:text-xl">{title}</h3>

        <p className="text-card-text-description font-normal text-xs md:text-sm">{description}</p>
      </header>

      <Durations durations={durations} />

      <Button />
    </article>
  )
}