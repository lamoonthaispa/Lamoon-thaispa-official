import FacebookBrownIcon from "../icons/FacebookBrownIcon"
import InstagramBrownIcon from "../icons/InstagramBrownIcon"
import TiktokBrownIcon from "../icons/TiktokBrownIcon"
import { SOCIAL_LINKS } from "@/lib/socialLinks"

const ICONS = {
  facebook: FacebookBrownIcon,
  instagram: InstagramBrownIcon,
  tiktok: TiktokBrownIcon,
} as const;

export default function SocialLinks() {
  return (
    <nav aria-label="Réseaux sociaux Lamoon Thaï Spa">
      <ul className="inline-flex items-center gap-8">
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
                <Icon aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}