import "./globals.css";
import { ItemProvider } from "../context/ItemContext";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "FindIt - Lost & Found",
  description: "A simple community lost and found platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ItemProvider>
          <Navbar />
          <main className="main-container">{children}</main>
          <footer className="footer">FindIt · Helping people find what matters.</footer>
        </ItemProvider>
      </body>
    </html>
  );
}
