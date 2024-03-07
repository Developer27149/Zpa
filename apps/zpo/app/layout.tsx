import "./globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zop - The easy way to manage your password",
  description:
    "Zop is a password manager that makes it easy to manage your passwords and keep them secure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
