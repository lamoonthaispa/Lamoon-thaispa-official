type DividerProps = {
  type: string;
  className?: string;
};

const HORIZONTAL_CLASSES = "w-full h-px md:w-full md:h-px";
const VERTICAL_CLASSES = "h-px w-full md:w-px md:h-[280px] lg:h-[328px]";

export default function Divider({ type, className = "" }: DividerProps) {
  const orientationClasses = type === "teinture" ? HORIZONTAL_CLASSES : VERTICAL_CLASSES;

  return (
    <div
      className={`
        bg-service-detail-divider
        md:self-stretch md:shrink-0
        ${className}
        ${orientationClasses}
      `}
      aria-hidden="true"
    />
  );
}