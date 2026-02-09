import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from 'sonner'
import { Analytics } from "@vercel/analytics/next"

const inter = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Rohit Yadav Developer - Portfolio",
    template: "%s | Rohit  Developer",
  },
  description: " AI based Full Stack  Developer & UI/UX Designer Portfolio of Rohit Yadav — building scalable, elegant web apps with React, Node.js, and design precision.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js",
    "Portfolio",
    "Web Developer",
    "UI/UX Designer",
  ],
  authors: [{ name: "Ps Parwez", url: "https://github.com/Rohiyadaop" }],
  creator: "Rohit Yadav",
  metadataBase: new URL("https://github.com/Rohiyadaop"),
  openGraph: {
    type: "website",
    url: "https://github.com/Rohiyadaop",
    title: "Rohit Yadav Developer - Portfolio",
    description:
      "Explore the portfolio of Rohit Yadav, a full stack developer focused on performance, scalability, and clean UI/UX.",
    siteName: "Rohit Yadav Developer Portfolio",
    images: [
      {
        url: "/og_bannerr.jpeg",
        width: 1200,
        height: 630,
        alt: "Rohit Developer Portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Yadav Developer - Portfolio",
    description:
      "Full Stack Developer & UI/UX Designer Portfolio of Rohit Yadav.",
    creator: "@psparwez",
    images: ["/og_bannerr.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="ydHSzattedGcB-5-HAZYQTflySCqIgWSVqZD8wgedEo" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
