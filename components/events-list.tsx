import { EventHubItem } from '@/lib/types';

import EventCard from './event-card';
import { getEventsInCity } from '@/lib/actions';
import { EventHub } from '@prisma/client';

export default async function EventsList({ city }: { city: string }) {
  const events: EventHub[] = await getEventsInCity(city);
  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-14 pb-96">
      {events.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </section>
  );
}
