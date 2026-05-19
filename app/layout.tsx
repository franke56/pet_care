import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "泡泡爪宠物洗护店",
  description: "泡泡爪宠物洗护店的服务、环境、价格和预约信息。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
