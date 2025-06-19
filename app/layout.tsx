import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pixora Labs",
  description:
    "Welcome to Pixora Labs!! Your one stop solution to creating digital products!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(GeistSans.variable, "antialiased")}
    >
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
