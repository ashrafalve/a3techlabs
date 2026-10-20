"use client";

import { useMemo, useState, useTransition } from "react";
import type { LeadRow } from "@/lib/lead-types";
import { useRouter } from "next/navigation";

function contains(lead: LeadRow, query: string) {
  const haystack = [
    lead.name,
    lead.email,
    lead.phone ?? "",
    lead.company ?? "",
    lead.project_type ?? "",
    lead.message,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

export function LeadsView({
  rows,
  weekCount,
}: {
  rows: LeadRow[];
  weekCount: number;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();

  const filtered = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return rows;
    return rows.filter((lead) => contains(lead, trimmed));
  }, [query, rows]);

  async function handleDelete(id: number) {
    if (deletingId !== null) return;
    const confirmed = window.confirm("Delete this inquiry?");
    if (!confirmed) return;
    setDeletingId(id);
    try {
      const res = await fetch("/api/admin/leads/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error("Failed");
      startTransition(() => {
        router.refresh();
      });
    } catch {
      alert("Failed to delete inquiry.");
    } finally {
      setDeletingId(null);
    }
  }

  if (rows.length === 0) {
    return (
      <div className="rounded-[22px] border border-line bg-surface p-10 text-center">
        <p className="text-[15px] font-medium text-fg">No inquiries yet</p>
        <p className="mt-1 text-[14px] text-muted">
          Submissions from the contact form will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <Stat label="Total inquiries" value={rows.length} />
        <Stat label="Last 7 days" value={weekCount} />
        <Stat label="Showing" value={filtered.length} />
      </div>

      <label className="flex flex-col gap-2">
        <span className="field-label">Search</span>
        <input
          className="field"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by name, email, company or message…"
        />
      </label>

      <div className="overflow-hidden rounded-[22px] border border-line bg-surface">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line">
                <Th>Date</Th>
                <Th>Name</Th>
                <Th>Contact</Th>
                <Th>Project</Th>
                <Th>Message</Th>
                <Th>Action</Th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-line last:border-b-0 align-top"
                >
                  <td className="whitespace-nowrap px-5 py-4 text-[13px] text-muted">
                    {lead.createdLabel}
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-[14px] font-medium text-fg">{lead.name}</p>
                    {lead.company ? (
                      <p className="text-[13px] text-muted">{lead.company}</p>
                    ) : null}
                  </td>
                  <td className="px-5 py-4">
                    <a
                      className="block text-[14px] text-fg hover:text-brand"
                      href={`mailto:${lead.email}`}
                    >
                      {lead.email}
                    </a>
                    {lead.phone ? (
                      <a
                        className="block text-[13px] text-muted hover:text-brand"
                        href={`tel:${lead.phone}`}
                      >
                        {lead.phone}
                      </a>
                    ) : null}
                  </td>
                  <td className="px-5 py-4">
                    {lead.project_type ? (
                      <span className="chip">{lead.project_type}</span>
                    ) : (
                      <span className="text-[13px] text-muted">—</span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-[14px] text-muted">
                    <p className="max-w-[38ch] whitespace-pre-wrap">
                      {lead.message}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <button
                      type="button"
                      onClick={() => handleDelete(lead.id)}
                      disabled={deletingId === lead.id || isPending}
                      className="rounded-md border border-line px-3 py-1.5 text-[13px] text-muted transition-colors hover:border-[#e53935]/60 hover:text-[#e53935] disabled:opacity-50"
                    >
                      {deletingId === lead.id ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 ? (
          <p className="px-5 py-8 text-center text-[14px] text-muted">
            No inquiries match “{query}”.
          </p>
        ) : null}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-[18px] border border-line bg-surface px-5 py-4">
      <p className="text-[26px] font-semibold tracking-[-0.02em] text-fg">
        {value}
      </p>
      <p className="mt-1 text-[13px] text-muted">{label}</p>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
      {children}
    </th>
  );
}
