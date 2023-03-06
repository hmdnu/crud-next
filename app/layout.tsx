// app/layout.tsx
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
