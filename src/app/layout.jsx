// https://github.com/adrianhajdin/nike_landing_page/blob/main/src/constants/index.js
import { Inter } from "next/font/google";
import "@/styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nike-Clone",
  description: "A Nike clone developed by Muhammad Yasir Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/vnd.icon" href="/assets/favicon.ico"></link>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
