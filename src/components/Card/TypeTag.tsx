export default function TypeTag({
  type
}: {
  type: string;
}) {
  return (
    <span className="absolute top-2 left-2 py-1 px-2 bg-card-type-background/50 text-card-type-text rounded-md text-[8.72px] md:text-sm">
      {type}
    </span>
  )
}