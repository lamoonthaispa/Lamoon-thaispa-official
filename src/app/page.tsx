import type { Metadata } from "next";
import HomePage from "@/features/home/pages/Home";
import {
  HOME_PAGE_DESCRIPTION,
  HOME_PAGE_KEYWORDS,
  HOME_PAGE_TITLE,
  OPEN_GRAPH_IMAGE,
  SITE_URL
} from "@/lib/seo";

export const metadata: Metadata = {
  title: HOME_PAGE_TITLE,
  description: HOME_PAGE_DESCRIPTION,
  keywords: HOME_PAGE_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: HOME_PAGE_TITLE,
    description: HOME_PAGE_DESCRIPTION,
    url: SITE_URL,
    images: [OPEN_GRAPH_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_PAGE_TITLE,
    description: HOME_PAGE_DESCRIPTION,
    images: [OPEN_GRAPH_IMAGE],
  },
};

export default function Home() {
  return <HomePage />;
}