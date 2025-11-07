export default function Title({
  title,
  id
}: {
  title: string
  id?: string
}) {
  return (
    <h1 id={id} className="text-service-detail-text-title font-medium text-2xl md:text-[32px] lg:text-[42px]">
      {title}
    </h1>
  )
}