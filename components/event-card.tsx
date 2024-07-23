'use client';
import { EventHubItem } from '@/lib/types';
import { EventHub } from '@prisma/client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const MotionLink = motion(Link);
export default function EventCard({ event }: { event: EventHub }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref
    // offset: ['0 1']
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const eventDate = new Date(event.date);
  const date = eventDate.toLocaleString('en-Us', { day: '2-digit' });
  const month = eventDate.toLocaleString('en-Us', { month: 'short' });
  return (
    <MotionLink
      ref={ref}
      href={`/event/${event.slug}`}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      initial={{ opacity: 0, scale: 0.8 }}
    >
      <article className="bg-slate-800 rounded-lg overflow-hidden shadow-lg max-w-[500px] state-effects">
        <div className="pb-[75%] relative ">
          <Image
            className="h-full w-full object-cover absolute"
            src={event.imageUrl}
            alt={event.name}
            fill
          />
          <div className="absolute top-2 left-2 flex flex-col items-center h-11 w-11 bg-black/30 ">
            <p className="font-bold text-xl">{date}</p>
            <p className="text-orange-400 uppercase text-xs">{month}</p>
          </div>
        </div>
        <div className="py-4 px-6 flex flex-col  items-center">
          <h2 className="text-2xl font-bold">{event.name}</h2>
          <p className="text-gray-100 text-lg italic">
            By {event.organizerName}
          </p>
          <p className="text-gray-300 text-sm mt-4">{event.location}</p>
        </div>
      </article>
    </MotionLink>
  );
}
