import NavLink from './nav-link';
import Logo from './logo';
export default function Header() {
  return (
    <header className="h-[3rem]">
      <nav className="border-b border-white/30 px-4 py-6 sm:px-8 flex justify-between items-center h-full">
        <Logo />
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <ul className="gap-x-8 text-lg hidden lg:flex text-white/50">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/events/all">All Events</NavLink>
        </ul>
      </nav>
    </header>
  );
}
