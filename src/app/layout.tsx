import "./globals.css";
import "./theme.css"; // tema stilleri
import "./responsive.css"; // responsive stiller

export const metadata = {
  title: "c-dersleri — IGÜ C Projesi Tanıtım",
  description:
    "İGÜ Yazılım Mühendisliği öğrencileri için C dili ortak çalışma projesi. Kurallar, yapı, katkı rehberi ve bağlantılar.",
  openGraph: {
    title: "c-dersleri — IGÜ C Projesi",
    description:
      "C dili öğrenme ve katkı projesi: yapı, kurallar, katkı akışı.",
    url: "https://cdws.vercel.app",
    siteName: "c-dersleri",
    locale: "tr_TR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

/* FOUC engelleme: ilk boya öncesi temayı belirle */
const themeInit = `
(function() {
  try {
    const key = 'cdersleri-theme';
    const stored = localStorage.getItem(key);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.body.classList.add('dark-theme');
    window.addEventListener('DOMContentLoaded', () => {
      document.documentElement.classList.add('theme-ready');
    });
  } catch (_) {}
})();
`;


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head><script dangerouslySetInnerHTML={{ __html: themeInit }} /></head>
      <body>{children}</body>
    </html>
  );
}