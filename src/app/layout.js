import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Template Next.js | Devscale ID",
  description: "Template Next.js untuk Devscale ID",
  publishedTime: "28-01-2024",
  authors: ["Devscale ID Student"],
  icons: {
    icon: [
      { url: "/icon.png" },
      new URL("/icon.png", "https://devscale.id/public/devscalefav.svg"),
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
