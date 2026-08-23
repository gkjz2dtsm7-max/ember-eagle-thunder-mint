create table if not exists community_events (
  id serial primary key,
  title text not null,
  category text not null,
  starts_on date not null,
  end_on date,
  start_time text,
  end_time text,
  location text not null,
  city text not null,
  description text not null,
  organizer text,
  created_at timestamptz not null default now()
);

create index if not exists community_events_starts_on_idx
  on community_events (starts_on);
