import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSql } from "@/lib/db";
import { CATEGORIES, type EventCategory } from "@/data/taxonomy";
import type { CalendarEvent } from "@/data/events";

const categoryIds = CATEGORIES.map((c) => c.id) as [EventCategory, ...EventCategory[]];

const submitSchema = z.object({
  title: z.string().trim().min(3).max(120),
  category: z.enum(categoryIds),
  startsOn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  endOn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  startTime: z.string().trim().max(24).optional(),
  location: z.string().trim().min(3).max(120),
  city: z.string().trim().min(2).max(60),
  description: z.string().trim().min(12).max(800),
  organizer: z.string().trim().max(80).optional(),
});

type EventRow = {
  id: number;
  title: string;
  category: string;
  starts_on: string;
  end_on: string | null;
  start_time: string | null;
  end_time: string | null;
  location: string;
  city: string;
  description: string;
  organizer: string | null;
};

function rowToEvent(row: EventRow): CalendarEvent {
  return {
    id: `community-${row.id}`,
    title: row.title,
    category: row.category as EventCategory,
    startsOn: String(row.starts_on).slice(0, 10),
    endOn: row.end_on ? String(row.end_on).slice(0, 10) : undefined,
    startTime: row.start_time ?? undefined,
    endTime: row.end_time ?? undefined,
    location: row.location,
    city: row.city,
    description: row.description,
    organizer: row.organizer ?? undefined,
    source: "community",
  };
}

export const listCommunityEvents = createServerFn({ method: "GET" }).handler(
  async () => {
    try {
      const sql = await getSql();
      const rows = await sql<EventRow>`
        select id, title, category, starts_on, end_on, start_time, end_time,
               location, city, description, organizer
        from community_events
        order by starts_on asc, id asc
      `;
      return rows.map(rowToEvent);
    } catch {
      return [] as CalendarEvent[];
    }
  },
);

export const submitCommunityEvent = createServerFn({ method: "POST" })
  .validator(submitSchema)
  .handler(async ({ data }) => {
    const sql = await getSql();
    const rows = await sql<{ id: number }>`
      insert into community_events (
        title, category, starts_on, end_on, start_time, location, city, description, organizer
      ) values (
        ${data.title},
        ${data.category},
        ${data.startsOn},
        ${data.endOn ? data.endOn : null},
        ${data.startTime || null},
        ${data.location},
        ${data.city},
        ${data.description},
        ${data.organizer || null}
      )
      returning id
    `;
    return { id: rows[0]?.id ?? 0 };
  });
