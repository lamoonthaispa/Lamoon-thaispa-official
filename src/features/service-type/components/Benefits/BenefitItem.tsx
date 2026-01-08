import { ICONS, IconName } from "@/components/icons";

export type BenefitIconName = IconName | `${IconName}Icon`;

const normalizeIconName = (iconName: BenefitIconName): IconName | undefined => {
  if (iconName in ICONS) {
    return iconName as IconName;
  }

  if (iconName.endsWith("Icon")) {
    const trimmed = iconName.slice(0, -4) as IconName;
    if (trimmed in ICONS) {
      return trimmed;
    }
  }

  return undefined;
};

export default function BenefitItem({
  icon,
  label
}: {
  icon: BenefitIconName;
  label: string;
}) {
  const normalizedIcon = normalizeIconName(icon);
  const Icon = normalizedIcon ? ICONS[normalizedIcon] : undefined;
  
  return (
    <li className="w-full flex justify-start items-center
      gap-4 lg:gap-10
    ">
      {Icon && <Icon aria-hidden="true" />}
      <p className="text-service-detail-benefits-text text-[15px] md:text-[20px] lg:text-[26px]">{label}</p>
    </li>
  )
}