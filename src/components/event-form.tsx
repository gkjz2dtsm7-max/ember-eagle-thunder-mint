import { useRouter } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { CATEGORIES, CITIES } from "@/data/taxonomy";
import { submitCommunityEvent } from "@/lib/events";
import { Button } from "@/components/ui/button";

const empty = {
  title: "",
  category: "community",
  startsOn: "",
  startTime: "",
  location: "",
  city: "Port St. Joe",
  description: "",
  organizer: "",
};

export function EventForm() {
  const router = useRouter();
  const [form, setForm] = useState(empty);
  const [busy, setBusy] = useState(false);

  function set<K extends keyof typeof empty>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      await submitCommunityEvent({
        data: {
          title: form.title,
          category: form.category as (typeof CATEGORIES)[number]["id"],
          startsOn: form.startsOn,
          startTime: form.startTime || undefined,
          location: form.location,
          city: form.city,
          description: form.description,
          organizer: form.organizer || undefined,
        },
      });
      toast.success("Event added to the shared calendar.");
      setForm(empty);
      await router.invalidate();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save the event. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 rounded-xl border border-line bg-cream-soft p-5 shadow-card">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-moss">Add an event</p>
        <h3 className="mt-1 text-xl font-bold text-ink">Share it with the county</h3>
        <p className="mt-1 text-sm text-muted">
          For organizers, churches, bands, markets, and civic groups. Public event details only. No emails or phone numbers stored here.
        </p>
      </div>
      <label className="grid gap-1 text-sm font-medium" htmlFor="event-title">
        Event title
        <input id="event-title" required minLength={3} value={form.title} onChange={(e) => set("title", e.target.value)} className="h-11 rounded-md border border-line bg-paper px-3 font-normal" />
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-sm font-medium">
          Category
          <select value={form.category} onChange={(e) => set("category", e.target.value)} className="h-11 rounded-md border border-line bg-paper px-3 font-normal">
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Town
          <select value={form.city} onChange={(e) => set("city", e.target.value)} className="h-11 rounded-md border border-line bg-paper px-3 font-normal">
            {CITIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-sm font-medium" htmlFor="event-date">
          Date
          <input id="event-date" required type="date" value={form.startsOn} onChange={(e) => set("startsOn", e.target.value)} className="h-11 rounded-md border border-line bg-paper px-3 font-normal" />
        </label>
        <label className="grid gap-1 text-sm font-medium" htmlFor="event-time">
          Start time
          <input id="event-time" value={form.startTime} onChange={(e) => set("startTime", e.target.value)} placeholder="9:00 AM" className="h-11 rounded-md border border-line bg-paper px-3 font-normal" />
        </label>
      </div>
      <label className="grid gap-1 text-sm font-medium" htmlFor="event-location">
        Location
        <input id="event-location" required minLength={3} value={form.location} onChange={(e) => set("location", e.target.value)} placeholder="George Core Park" className="h-11 rounded-md border border-line bg-paper px-3 font-normal" />
      </label>
      <label className="grid gap-1 text-sm font-medium" htmlFor="event-organizer">
        Organizer (business or group)
        <input id="event-organizer" value={form.organizer} onChange={(e) => set("organizer", e.target.value)} className="h-11 rounded-md border border-line bg-paper px-3 font-normal" />
      </label>
      <label className="grid gap-1 text-sm font-medium" htmlFor="event-desc">
        What is happening
        <textarea id="event-desc" required minLength={12} rows={4} value={form.description} onChange={(e) => set("description", e.target.value)} className="rounded-md border border-line bg-paper px-3 py-2 font-normal" />
      </label>
      <Button type="submit" disabled={busy} size="lg">
        {busy ? "Saving…" : "Add to calendar"}
      </Button>
    </form>
  );
}
