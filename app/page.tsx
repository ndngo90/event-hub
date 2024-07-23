import H1 from '@/components/h1';
import SearchEventForm from '@/components/search-event-form';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="pt-[6rem] flex flex-col justify-center items-center">
        <H1>Find events around you</H1>
        <h2 className="font-medium text-2xl text-gray-300 mb-8">
          Browse more than{' '}
          <span className="italic text-orange-500 underline font-bold">
            10.000 events
          </span>{' '}
          worldwide
        </h2>
        <SearchEventForm />
        <footer className="text-gray-300 text-sm flex gap-x-2 items-center justify-center">
          <p className="">Popular:</p>
          <div className="space-x-2">
            <Link href="events/austin">Austin</Link>
            <Link href="events/seattle">Seattle</Link>
          </div>
        </footer>
      </section>
    </main>
  );
}
