export type SocialPlatform = "facebook" | "instagram" | "tiktok";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

const BASE_URLS: Record<SocialPlatform, string> = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  tiktok: "https://www.tiktok.com/",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "facebook",
    label: "Facebook",
    href: BASE_URLS.facebook,
  },
  {
    platform: "instagram",
    label: "Instagram",
    href: BASE_URLS.instagram,
  },
  {
    platform: "tiktok",
    label: "TikTok",
    href: BASE_URLS.tiktok,
  },
];

