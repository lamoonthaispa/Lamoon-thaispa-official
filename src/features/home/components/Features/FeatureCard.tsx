export default function FeatureCard({
  title,
  description,
  icon
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="flex flex-col items-center gap-2 lg:gap-3 text-center">
      <span aria-hidden="true">{icon}</span>

      <h3 className="text-landing-features-text-title font-medium text-2xl md:text-3xl lg:text-4xl">
        {title}
      </h3>

      <p className="text-landing-features-text-description font-normal text-sm md:text-lg lg:text-xl">
        {description}
      </p>
    </article>
  )
}