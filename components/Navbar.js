import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link href="/" className="logo">Find<span>It</span></Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/report-lost">Report Lost</Link>
        <Link href="/report-found">Report Found</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/admin">Admin</Link>
      </nav>
    </header>
  );
}
