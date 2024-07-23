import Link from 'next/link';
import logo from '../assets/image/event-hub-logo.svg';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logo} width={30} height={30} alt="logo" />
    </Link>
  );
}
