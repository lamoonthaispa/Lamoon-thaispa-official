import Title from "../Title";
import Description from "../Description";
import Cards from "./Cards";

export default function Formulas({
  title,
  descriptions,
  cardType
}: {
  title: string;
  descriptions: {
    type: 'text' | 'highlight';
    value: string;
  }[];
  cardType?: string;
}) {
  const headingId = "service-formulas-heading";

  return (
    <section
      className="flex flex-col pt-5 px-10 pb-[50px] md:pb-[95px] lg:px-[112px] lg:pb-[95px]"
      aria-labelledby={headingId}
    >
      <Title title={title} id={headingId} />
      <Description descriptions={descriptions} />
      {cardType && <Cards type={cardType} />}
    </section>
  )
}