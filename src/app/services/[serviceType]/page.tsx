import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceTypePage from "@/features/service-type/pages/ServiceType";
import { ServiceType } from "@/types/serviceType";
import {
  DEFAULT_DESCRIPTION,
  SERVICE_PAGE_METADATA,
  SITE_URL
} from "@/lib/seo";

type ParamsPromise = Promise<{ serviceType: string }>;

const isServiceType = (value: string): value is ServiceType =>
  value in SERVICE_PAGE_METADATA;

export async function generateMetadata({ params }: { params: ParamsPromise }): Promise<Metadata> {
  const { serviceType } = await params;

  if (!isServiceType(serviceType)) {
    return {
      title: "Service Lamoon Thaï Spa",
      description: DEFAULT_DESCRIPTION,
    };
  }

  const metadata = SERVICE_PAGE_METADATA[serviceType];
  const pageUrl = `${SITE_URL}/services/${serviceType}`;
  const imageUrl = `${SITE_URL}${metadata.imagePath}`;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: `/services/${serviceType}`,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: pageUrl,
      type: "article",
      images: [imageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [imageUrl],
    },
  };
}

export default async function ServiceDetail({ params }: { params: ParamsPromise }) {
  const { serviceType } = await params;

  if (!isServiceType(serviceType)) {
    notFound();
  }

  return <ServiceTypePage serviceType={serviceType} />;
}

