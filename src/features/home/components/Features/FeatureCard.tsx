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
    <div className="flex flex-col items-center gap-2 lg:gap-3">
      { icon }

      <h2 className="text-landing-features-text-title font-medium text-2xl md:text-3xl lg:text-4xl">
        { title }
      </h2>

      <h3 className="text-landing-features-text-description font-normal text-sm md:text-lg lg:text-xl">
        { description }
      </h3>
    </div>
  )
}