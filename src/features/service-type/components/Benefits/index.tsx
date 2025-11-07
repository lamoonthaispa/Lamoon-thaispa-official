import BenefitsRow from "./BenefitsRows"
import Title from "../Title"
import Description from "../Description"
import Divider from "./Divider"
import { BenefitIconName } from "./BenefitItem"


export default function Benefits({
  type,
  benefits,
  title,
  descriptions
}: {
  type: string;
  benefits: {
    icon: BenefitIconName;
    label: string
  }[],
  title: string;
  descriptions: {
    type: "text" | "highlight";
    value: string;
  }[]
}) {
  return (
    <section
      className={`flex flex-col
      ${type === "teinture" ? "" : "md:flex-row md:items-stretch"}
      gap-5 md:gap-8
      pt-5 pb-[10px] px-10
      md:py-5 md:pb-[35px] md:px-[45px]
      lg:py-[35px] lg:px-[112px]`}
      aria-labelledby="service-benefits-heading"
    >
      <div className="flex-1">
        <BenefitsRow
          benefits={benefits}
        />
      </div>

      <Divider type={type} className="my-6 md:hidden" />

      <Divider type={type} className="hidden md:block md:mx-6 lg:mx-10" />

      <div className="flex flex-col gap-[10px] flex-1 justify-start md:items-start min-w-0">
        <Title title={title} id="service-benefits-heading" />
        <Description descriptions={descriptions} />
      </div>
    </section>
  )
}