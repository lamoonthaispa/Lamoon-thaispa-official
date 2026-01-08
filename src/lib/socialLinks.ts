export type SocialPlatform = "facebook" | "instagram" | "tiktok";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

const BASE_URLS: Record<SocialPlatform, string> = {
  facebook: "https://www.facebook.com/share/1BqZpkU887",
  instagram: "https://www.instagram.com/lamoonthai_spa?igsh=MWNjbWhvMGl6NXk4bg%3D%3D",
  tiktok: "https://www.tiktok.com/@lamoonthaspa",
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

