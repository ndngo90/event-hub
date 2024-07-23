'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
type NavLinkProps = {
  children: string;
  href: string;
};
export default function NavLink({ children, href }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <li
      className={cn(
        'hover:text-white transition leading-[3rem] flex items-center relative',
        { 'text-white': pathname === href }
      )}
    >
      <Link href={href}>{children}</Link>
      {pathname === href && (
        <motion.div
          layoutId="underline"
          className="absolute bottom-0  h-1 w-full bg-orange-400"
        />
      )}
    </li>
  );
}
