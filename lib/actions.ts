'use server';
import { EventHub } from '@prisma/client';
import prisma from './db';
import { capitalize } from './utils';

export async function getEventsInCity(city: string): Promise<EventHub[]> {
  const events = await prisma.eventHub.findMany({
    where: {
      city: city === 'all' ? undefined : capitalize(city)
    },
    orderBy: {
      date: 'asc'
    }
  });
  return events;
}
export async function getSingleEvent(
  slug: string
): Promise<EventHub | null> {
  const event = await prisma.eventHub.findUnique({
    where: {
      slug: slug
    }
  });
  return event;
}
