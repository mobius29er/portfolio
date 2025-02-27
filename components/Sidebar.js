// components/Sidebar.js
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="bg-black text-white w-64 min-h-screen p-6">
      <h2 className="text-2xl mb-6 font-artDeco">Jeremy Foxx</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/about" className="hover:text-gold transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-gold transition">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/certifications" className="hover:text-gold transition">
            Certifications
          </Link>
        </li>
        <li>
          <Link href="/testimonials" className="hover:text-gold transition">
            Testimonials
          </Link>
        </li>
      </ul>
    </nav>
  );
}
