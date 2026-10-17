import { db } from "@/lib/db";
import type { Lead, NewLead } from "@/lib/lead-types";

let schemaReady: Promise<void> | null = null;

export function ensureSchema() {
  if (!schemaReady) {
    schemaReady = (async () => {
      const sql = db();
      await sql`
        create table if not exists leads (
          id bigserial primary key,
          name text not null,
          email text not null,
          phone text,
          company text,
          project_type text,
          message text not null,
          created_at timestamptz not null default now()
        )
      `;
    })().catch((error) => {
      schemaReady = null;
      throw error;
    });
  }

  return schemaReady;
}

export async function createLead(lead: NewLead) {
  await ensureSchema();
  const sql = db();
  await sql`
    insert into leads (name, email, phone, company, project_type, message)
    values (
      ${lead.name},
      ${lead.email},
      ${lead.phone},
      ${lead.company},
      ${lead.projectType},
      ${lead.message}
    )
  `;
}

export async function listLeads(): Promise<Lead[]> {
  await ensureSchema();
  const sql = db();
  const rows = await sql`
    select id, name, email, phone, company, project_type, message, created_at
    from leads
    order by created_at desc
    limit 500
  `;

  return rows as unknown as Lead[];
}
