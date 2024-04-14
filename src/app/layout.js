import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Template Next.js | Devscale ID",
  description: "Template Project Next.js for Devscale ID",
  publishedTime: "28-01-2024",
  authors: ["Devscale ID Student"],
  icons: {
    icon: [
      { url: "/icon.svg" },
      new URL("/icon.svg", "https://www.devscale.id/favicon.ico"),
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
