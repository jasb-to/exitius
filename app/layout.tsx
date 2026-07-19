import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exitius | Find Businesses Before They Go To Market",
  description:
    "Discover established businesses with succession opportunities before they reach the open market.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
