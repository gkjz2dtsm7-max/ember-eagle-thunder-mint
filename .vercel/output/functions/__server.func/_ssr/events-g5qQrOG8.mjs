import { t as CATEGORIES } from "./taxonomy-D6hCXNBX.mjs";
import { n as createServerFn } from "./ssr.mjs";
import { a as string, i as object, t as _enum } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-g5qQrOG8.js
var _0002_community_events_default = "create table if not exists community_events (\n  id serial primary key,\n  title text not null,\n  category text not null,\n  starts_on date not null,\n  end_on date,\n  start_time text,\n  end_time text,\n  location text not null,\n  city text not null,\n  description text not null,\n  organizer text,\n  created_at timestamptz not null default now()\n);\n\ncreate index if not exists community_events_starts_on_idx\n  on community_events (starts_on);\n";
/**
* Migration bookkeeping shared by the two appliers — `scripts/migrate.mjs`
* (deploy, `readdir`) and `src/lib/db.ts` (PGLite preview, `import.meta.glob`).
*
* Applied files are keyed by BASENAME, so the same file applies once no matter
* which directory it is globbed from. That is what makes the auth schema safe to
* copy from `migrations/auth/` into `migrations/` when an app turns sign-in on:
* a database that already has `0001_auth.sql` will not re-run it.
*
* Neither applier descends into subdirectories, so `migrations/auth/*.sql` is
* out of scope for both until it is copied up.
*/
/**
* The `_migrations` key for a migration path (or bare filename).
* @param {string} path
* @returns {string}
*/
function migrationName(path) {
	return path.split("/").pop() ?? path;
}
/**
* @param {string} path
* @returns {boolean}
*/
function isMigrationFile(path) {
	return path.endsWith(".sql");
}
/**
* Migrations in `paths` that are not yet in `applied`, in apply order.
* Non-`.sql` entries (a `readdir` also yields `migrations/auth/`) are dropped.
* @param {Iterable<string>} paths
* @param {Iterable<string>} applied
* @returns {Array<{ name: string, path: string }>}
*/
function pendingMigrations(paths, applied) {
	const done = new Set(applied);
	return [...paths].filter(isMigrationFile).map((path) => ({
		name: migrationName(path),
		path
	})).sort((a, b) => a.name.localeCompare(b.name)).filter(({ name }) => !done.has(name));
}
var rawDatabaseUrl = typeof process !== "undefined" ? process.env.DATABASE_URL : void 0;
var databaseUrl = rawDatabaseUrl && rawDatabaseUrl.trim() ? rawDatabaseUrl : void 0;
/**
* Active backend: real **Neon** when `DATABASE_URL` is set (deployed / configured
* sandbox), otherwise a local embedded **PGLite** (Postgres compiled to WASM) so
* the app has a working database even with nothing configured — the live preview
* included. Swap in Neon later by just setting `DATABASE_URL`; no code changes.
*/
var dbSource = databaseUrl ? "neon" : "pglite";
/**
* Init state lives on globalThis as promises: dev HMR creates new instances of
* this module, and two instances racing module-level state would open a second
* pool or run two concurrent PGLite migration passes (whose duplicate
* `_migrations` insert rejects — and would get memoized, poisoning every later
* `getSql()`). A failed init clears its slot so the next call retries.
*/
var globalRef = globalThis;
/**
* Result-type parity: Postgres sends every value as text plus a type OID — the
* JS value is the DRIVER's parsing choice, and pg and PGLite disagree (pg:
* int8 -> string, date -> local-midnight Date; PGLite: int8 -> BigInt, which
* JSON.stringify rejects, date -> UTC Date). Normalize both so preview and
* production return identical, JSON-safe shapes:
*   int8/bigint (incl. count(*)) -> number (past 2^53 loses precision — cast
*                                   `::text` if you ever need huge integers)
*   date                         -> 'YYYY-MM-DD' string
*   interval                     -> Postgres interval text
* numeric already comes back as a string on both (arbitrary precision).
*/
var OID_INT8 = 20;
var OID_DATE = 1082;
var OID_INTERVAL = 1186;
var identity = (v) => v;
/** Wrap a query runner in the tagged-template + `.query()` `Sql` surface. */
function toSql(run) {
	const sql = (async (strings, ...values) => {
		let text = strings[0];
		for (let i = 0; i < values.length; i += 1) text += `$${i + 1}${strings[i + 1]}`;
		return run(text, values);
	});
	sql.query = (text, params = []) => run(text, params);
	return sql;
}
function createNeonSql() {
	globalRef.__pgSqlPromise__ ??= (async () => {
		const { Pool, types } = await import("../_libs/pg.mjs").then((n) => n.t);
		types.setTypeParser(OID_INT8, Number);
		types.setTypeParser(OID_DATE, identity);
		types.setTypeParser(OID_INTERVAL, identity);
		const pool = new Pool({ connectionString: databaseUrl });
		return toSql(async (text, params) => {
			return (await pool.query(text, params)).rows;
		});
	})().catch((err) => {
		globalRef.__pgSqlPromise__ = void 0;
		throw err;
	});
	return globalRef.__pgSqlPromise__;
}
async function createPgliteSql() {
	globalRef.__pgliteInstance__ ??= (async () => {
		const { PGlite } = await import("../_libs/electric-sql__pglite.mjs").then((n) => n.t);
		const pg = new PGlite({ parsers: {
			[OID_INT8]: Number,
			[OID_DATE]: identity,
			[OID_INTERVAL]: identity
		} });
		await pg.waitReady;
		await pg.exec("create table if not exists _migrations (name text primary key, applied_at timestamptz not null default now())");
		return pg;
	})().catch((err) => {
		globalRef.__pgliteInstance__ = void 0;
		throw err;
	});
	const pg = await globalRef.__pgliteInstance__;
	const migrate = async () => {
		const migrations = /* #__PURE__ */ Object.assign({ "/migrations/0002_community_events.sql": _0002_community_events_default });
		const done = (await pg.query("select name from _migrations")).rows.map((r) => r.name);
		for (const { name, path } of pendingMigrations(Object.keys(migrations), done)) await pg.transaction(async (tx) => {
			await tx.exec(migrations[path]);
			await tx.query("insert into _migrations (name) values ($1)", [name]);
		});
	};
	const pass = (globalRef.__pgliteMigrateChain__ ?? Promise.resolve()).catch(() => void 0).then(migrate);
	globalRef.__pgliteMigrateChain__ = pass;
	await pass;
	return toSql(async (text, params) => {
		return (await pg.query(text, params)).rows;
	});
}
var sqlPromise = null;
async function createSql() {
	if (typeof window !== "undefined") throw new Error("@/lib/db is server-only — call getSql() from a createServerFn handler or a server route loader, never from client code.");
	return dbSource === "neon" ? createNeonSql() : createPgliteSql();
}
/**
* Get the shared, **server-only** SQL client. Neon when `DATABASE_URL` is set,
* otherwise the local PGLite fallback. Memoized — safe to call per request.
*
* Schema comes from `migrations/*.sql`, auto-applied before the first query on
* both backends — define tables there, never inline in server functions.
*/
function getSql() {
	sqlPromise ??= createSql().catch((err) => {
		sqlPromise = null;
		throw err;
	});
	return sqlPromise;
}
/**
* Finish DB bootstrap before the server handles traffic.
*
* - **PGLite** (preview / no `DATABASE_URL`): open the in-memory DB and apply
*   `migrations/*.sql`. Idempotent — concurrent callers share one promise.
* - **Neon**: no-op (pool is created lazily on first query).
*
* Vite `configureServer` awaits this at dev startup; production imports of this
* module kick it off immediately (see bottom of file).
*/
function ensureDbReady() {
	if (dbSource !== "pglite") return Promise.resolve();
	return getSql().then(() => void 0);
}
var globalBoot = globalThis;
if (typeof window === "undefined" && dbSource === "pglite") globalBoot.__pgBootstrapPromise__ ??= ensureDbReady().catch((err) => {
	globalBoot.__pgBootstrapPromise__ = void 0;
	console.error("[db] PGLite bootstrap failed:", err);
	throw err;
});
var categoryIds = CATEGORIES.map((c) => c.id);
var submitSchema = object({
	title: string().trim().min(3).max(120),
	category: _enum(categoryIds),
	startsOn: string().regex(/^\d{4}-\d{2}-\d{2}$/),
	endOn: string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
	startTime: string().trim().max(24).optional(),
	location: string().trim().min(3).max(120),
	city: string().trim().min(2).max(60),
	description: string().trim().min(12).max(800),
	organizer: string().trim().max(80).optional()
});
function rowToEvent(row) {
	return {
		id: `community-${row.id}`,
		title: row.title,
		category: row.category,
		startsOn: String(row.starts_on).slice(0, 10),
		endOn: row.end_on ? String(row.end_on).slice(0, 10) : void 0,
		startTime: row.start_time ?? void 0,
		endTime: row.end_time ?? void 0,
		location: row.location,
		city: row.city,
		description: row.description,
		organizer: row.organizer ?? void 0,
		source: "community"
	};
}
var listCommunityEvents_createServerFn_handler = createServerRpc({
	id: "1dd2f4d5c37d91cd9d0b81052caf3bbce1446ffb9ee3769f7a1954442e0f8758",
	name: "listCommunityEvents",
	filename: "src/lib/events.ts"
}, (opts) => listCommunityEvents.__executeServer(opts));
var listCommunityEvents = createServerFn({ method: "GET" }).handler(listCommunityEvents_createServerFn_handler, async () => {
	try {
		return (await (await getSql())`
        select id, title, category, starts_on, end_on, start_time, end_time,
               location, city, description, organizer
        from community_events
        order by starts_on asc, id asc
      `).map(rowToEvent);
	} catch {
		return [];
	}
});
var submitCommunityEvent_createServerFn_handler = createServerRpc({
	id: "40f6467cdef40b1bb8cf71f9978d2cda98f2239e6a97db915c85469f18c7fe14",
	name: "submitCommunityEvent",
	filename: "src/lib/events.ts"
}, (opts) => submitCommunityEvent.__executeServer(opts));
var submitCommunityEvent = createServerFn({ method: "POST" }).validator(submitSchema).handler(submitCommunityEvent_createServerFn_handler, async ({ data }) => {
	return { id: (await (await getSql())`
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
    `)[0]?.id ?? 0 };
});
//#endregion
export { listCommunityEvents_createServerFn_handler, submitCommunityEvent_createServerFn_handler };
