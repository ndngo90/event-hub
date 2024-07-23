import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { EventsListSkeleton, Skeleton } from '@/components/skeleton';
import { Suspense } from 'react';
type AllEventsInCityPageProps = {
  params: { city: string };
};
export function generateMetadata({ params }: AllEventsInCityPageProps) {
  const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  return {
    title: params.city === 'all' ? 'All events' : `All events in ${city}`
  };
}
export default async function AllEventsInCityPage({
  params
}: AllEventsInCityPageProps) {
  const city = params.city;

  return (
    <main className="flex flex-col items-center py-24 min-h-[110vh] px-[1.25rem] gap-y-8">
      {city === 'all' ? (
        <H1>All events</H1>
      ) : (
        <H1>
          All events in{' '}
          <span className="text-orange-500 capitalize">{city}</span>
        </H1>
      )}
      <Suspense fallback={<EventsListSkeleton />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
