import FacebookWhiteIcon from "@/components/icons/FacebookWhiteIcon"
import InstagramWhiteIcon from "@/components/icons/InstagramWhiteIcon"
import TiktokWhiteIcon from "@/components/icons/TiktokWhiteIcon"

export default function SocialLinks() {
  return (
    <div className="inline-flex gap-[26.67px] md:gap-[34.28px] lg:gap-[47.32px]">
      <FacebookWhiteIcon className='w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12'/>
      <InstagramWhiteIcon className='w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12'/>
      <TiktokWhiteIcon className='w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12'/>
    </div>
  ) 
}