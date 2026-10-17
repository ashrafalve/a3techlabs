import Link from "next/link";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, isAuthed } from "@/lib/auth";
import { listLeads } from "@/lib/leads";
import type { LeadRow } from "@/lib/lead-types";
import { Logo } from "@/components/Logo";
import { LoginForm } from "@/components/admin/LoginForm";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { LeadsView } from "@/components/admin/LeadsView";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Dhaka",
});

export const instant = false;

export default async function AdminPage() {
  const store = await cookies();
  const authed = isAuthed(store.get(ADMIN_COOKIE)?.value);

  if (!authed) {
    return (
      <div className="flex flex-1 items-center justify-center px-6 py-20">
        <LoginForm />
      </div>
    );
  }

  let rows: LeadRow[] = [];
  let weekCount = 0;
  let error: string | null = null;

  try {
    const leads = await listLeads();
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    weekCount = leads.filter(
      (lead) => new Date(lead.created_at).getTime() >= weekAgo,
    ).length;
    rows = leads.map((lead) => ({
      ...lead,
      createdLabel: dateFormatter.format(new Date(lead.created_at)),
    }));
  } catch (err) {
    console.error("Failed to load leads:", err);
    error = "Could not load inquiries from the database.";
  }

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="hidden rounded-full border border-line px-2.5 py-1 text-[12px] font-medium text-muted sm:inline">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link className="btn btn-ghost hidden sm:inline-flex" href="/">
              View site
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        <div className="mb-8 flex flex-col gap-1">
          <span className="eyebrow">Project requests</span>
          <h1 className="text-[28px] font-semibold tracking-[-0.02em] text-fg">
            Contact form responses
          </h1>
        </div>

        {error ? (
          <div className="rounded-[22px] border border-line bg-surface p-8">
            <p className="text-[15px] font-medium text-fg">{error}</p>
            <p className="mt-1 text-[14px] text-muted">
              Check the DATABASE_URL value in .env.local and try again.
            </p>
          </div>
        ) : (
          <LeadsView rows={rows} weekCount={weekCount} />
        )}
      </main>
    </>
  );
}
