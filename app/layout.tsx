import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lucas.piressimao.com.br"),
  title: "Lucas Pires Simão | DevOps Engineer, Cloud Architect & Infrastructure Specialist",
  description:
    "Senior DevOps Engineer and Cloud Architect building resilient cloud platforms, secure delivery systems, and high-availability infrastructure for critical environments.",
  keywords: [
    "Lucas Pires Simão",
    "DevOps Engineer",
    "Cloud Architect",
    "Infrastructure Specialist",
    "AWS",
    "Kubernetes",
    "Terraform",
    "Platform Engineering",
    "Cloud Security",
    "Observability",
  ],
  openGraph: {
    title: "Lucas Pires Simão | DevOps Engineer, Cloud Architect & Infrastructure Specialist",
    description:
      "Infrastructure, automation, security, observability, and platform engineering for high-scale and business-critical systems.",
    url: "https://lucas.piressimao.com.br",
    siteName: "Lucas Pires Simão",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Lucas Pires Simão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Pires Simão | DevOps Engineer, Cloud Architect & Infrastructure Specialist",
    description:
      "Building scalable cloud platforms with reliability, automation, security, and operational depth.",
    images: ["/images/profile.jpg"],
  },
  alternates: {
    canonical: "https://lucas.piressimao.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
