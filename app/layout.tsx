import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Today's your art",
  description: `check your favorite art!`,
};

// ここでpage.jsの外側の部分を定義している
// export default じゃないとnext.jsに怒られる
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header>
          <h1>{metadata.title as string}</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
