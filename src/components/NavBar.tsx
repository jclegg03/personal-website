import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="bg-gray-800 text-white fixed w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or Name */}
        <div className="text-xl font-bold">
          Jay Clegg
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className='hover:text'>Home</Link>
          </li>
          <li>
            <Link href="/resume" className="hover:text">Resume</Link>
          </li>
          <li>
            <Link href="/about-me" className="hover:text">About me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
