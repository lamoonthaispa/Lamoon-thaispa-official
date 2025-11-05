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
    <div className="w-full flex justify-between flex-col gap-2 md:gap-3">
      
      { durations.map((duration) => (
        <div className="w-full inline-flex justify-between items-center" key={duration.time}>
          <div className="inline-flex items-center gap-1 text-card-duration-text font-normal">
            <Clock size={10} />
            { duration.time }
          </div>

          <div className="text-card-price-text font-normal">
            { duration.price }
          </div>
        </div>
      ))}


    </div>
  )
}