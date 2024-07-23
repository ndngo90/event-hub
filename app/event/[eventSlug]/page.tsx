import H1 from '@/components/h1';
import { getSingleEvent } from '@/lib/actions';
import Image from 'next/image';

type SingleEventProps = {
  params: {
    eventSlug: string;
  };
};
export async function generateMetadata({ params }: SingleEventProps) {
  const event = await getSingleEvent(params.eventSlug);
  return {
    title: event.name,
    description: event.description
  };
}
export default async function SingleEvent({ params }: SingleEventProps) {
  const event = await getSingleEvent(params.eventSlug);
  return (
    <main>
      <section className="relative py-[5rem] overflow-hidden flex justify-center items-center">
        <Image
          src={event.imageUrl}
          alt={event.name}
          fill
          className="object-cover blur-3xl z-0"
          sizes="(max-width:1280px) 100vw, 1280px"
        />
        <div className="flex flex-col md:flex-row gap-6 lg:gap-x-8 relative z-1 justify-center lg:h-full">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={200}
            className="mx-auto rounded-md border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col md:text-left text-center">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <H1 className="font-bold whitespace-nowrap lg:text-5xl mt-1 mb-2">
              {event.name}
            </H1>
            <p className="text-white/90">
              Organized by {event.organizerName}
            </p>
            <button className="text-white/90 w-[95vw] mt-5 md:mt-auto sm:w-full py-2 rounded-lg bg-white/50 whitespace-nowrap state-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="py-[5rem] min-h-[75vh]">
        <section className="mb-8">
          <h2 className="text-2xl text-center font-semibold mb-4">
            About this event
          </h2>
          <p className="max-w-4xl w-[95vw] text-center text-white/50 mx-auto">
            {event.description}
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-center font-semibold mb-4">
            Location
          </h2>
          <p className="max-w-4xl w-[95vw] text-center text-white/50 mx-auto">
            {event.location}
          </p>
        </section>
      </div>
    </main>
  );
}
