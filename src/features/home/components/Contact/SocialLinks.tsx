import FacebookWhiteIcon from "@/components/icons/FacebookWhiteIcon"
import InstagramWhiteIcon from "@/components/icons/InstagramWhiteIcon"
import TiktokWhiteIcon from "@/components/icons/TiktokWhiteIcon"
import { SOCIAL_LINKS } from "@/lib/socialLinks"

const ICONS = {
  facebook: FacebookWhiteIcon,
  instagram: InstagramWhiteIcon,
  tiktok: TiktokWhiteIcon,
} as const;

export default function SocialLinks() {
  return (
    <nav aria-label="social links" className="inline-flex">
      <ul className="flex gap-[26.67px] md:gap-[34.28px] lg:gap-[47.32px]">
        {SOCIAL_LINKS.map(({ label, href, platform }) => {
          const Icon = ICONS[platform];
          if (!Icon) return null;

          return (
            <li key={label}>
            <a
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center"
            >
              <Icon className='w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12' aria-hidden="true" />
            </a>
            </li>
          );
        })}
      </ul>
    </nav>
  ) 
}