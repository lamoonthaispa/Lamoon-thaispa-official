import { Clock } from "lucide-react"

export default function Duration({
  durations
}: {
  durations: {
    time: string;
    price: string;
  }[]
}) {
  
  return (
    <ul className="w-full flex justify-between flex-col gap-2 md:gap-3">
      {durations.map((duration) => (
        <li className="w-full inline-flex justify-between items-center" key={duration.time}>
          <span className="inline-flex items-center gap-1 text-card-duration-text font-normal">
            <Clock size={10} aria-hidden="true" />
            <span>{duration.time}</span>
          </span>

          <span className="text-card-price-text font-normal">
            {duration.price}
          </span>
        </li>
      ))}
    </ul>
  )
}