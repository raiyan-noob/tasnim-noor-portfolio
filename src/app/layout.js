import "./globals.css";

export const metadata = {
  title: "Tasnim Binte Noor | BBA Portfolio & Strategy Showcase | BRAC University",
  description: "Portfolio of Tasnim Binte Noor (Nabila), BBA Undergraduate at BRAC Business School (6th Semester Complete). Open for Internships, Campus Ambassador roles & Management Trainee opportunities.",
  keywords: [
    "Tasnim Binte Noor",
    "Tasnim Noor",
    "Tasnim Binte Noor Nabila",
    "BRAC University",
    "BRAC Business School",
    "BBA Portfolio",
    "Marketing Intern",
    "Campus Ambassador",
    "Management Trainee",
    "Dhaka Bangladesh"
  ],
  authors: [{ name: "Tasnim Binte Noor" }],
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
