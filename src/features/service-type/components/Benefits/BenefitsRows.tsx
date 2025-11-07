import BenefitItem, { BenefitIconName } from "./BenefitItem"
export default function BenefitsRow({
  benefits
}: {
  benefits: {
    icon: BenefitIconName;
    label: string;
  }[]
}) {
  return (
    <ul className="flex flex-col gap-8 lg:gap-10">
      {benefits.map((benefit) => (
        <BenefitItem
          key={benefit.label}
          icon={benefit.icon}
          label={benefit.label}
        />
      ))}
    </ul>
  )
}