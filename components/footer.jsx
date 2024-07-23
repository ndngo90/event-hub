import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-4 sm:px-8 flex-col sm:flex-row flex items-center justify-center gap-y-2 sm:justify-between text-xs text-white/50 h-[4rem] sm:h-[3rem]  border-t border-white/30 mt-auto">
      <p>&copy; 2028 notMine. All rights reserved.</p>
      <ul className="flex gap-x-4">
        <li>
          <Link href="/terms" className="hover:text-white transition">
            Terms & Conditions
          </Link>
        </li>
        <li>
          <Link href="/policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </footer>
  );
}
