import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
