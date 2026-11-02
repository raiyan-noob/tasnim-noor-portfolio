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
    <html lang="en" data-theme="dark" data-palette="rose" className="scroll-smooth">
      <body className="min-h-screen antialiased selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
