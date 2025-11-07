import ServicesDividerIcon from "@/components/icons/ServicesDividerIcon"

export default function Divider() {
  return (
    <div className="w-full relative h-px px-[70px] md:px-[70px] lg:px-[112px] py-10" aria-hidden="true">
      <hr className="w-full border-0 h-px bg-landing-services-divider" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <ServicesDividerIcon/>
      </div>
    </div>
  )
}