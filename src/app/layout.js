import "./globals.css";

export const metadata = {
  title: "Tasnim Binte Noor Nabila | BBA in Finance & Creative Designer | BRAC University",
  description: "Official portfolio of Tasnim Binte Noor Nabila — BBA Student in Finance at BRAC University (completed 6 semesters) and Alumna of Viqarunnisa Noon School & College. Senior Executive at BUBEF & Graphic Designer at EDF. Open for corporate internships, campus ambassadorships, and finance roles.",
  keywords: [
    "Tasnim Binte Noor",
    "Tasnim Binte Noor Nabila",
    "Tasnim Noor",
    "BRAC University",
    "BRAC Business School",
    "Finance Major",
    "Viqarunnisa Noon School and College",
    "BUBEF",
    "EDF",
    "Mongol Tori",
    "Creative Designer",
    "Finance Intern",
    "Campus Ambassador",
    "Dhaka Bangladesh"
  ],
  authors: [{ name: "Tasnim Binte Noor Nabila" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" data-palette="rose" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('tasnim_theme') || 'light';
                const savedPalette = localStorage.getItem('tasnim_palette') || 'rose';
                document.documentElement.setAttribute('data-theme', savedTheme);
                document.documentElement.setAttribute('data-palette', savedPalette);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen antialiased selection:bg-[var(--accent-solid)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
