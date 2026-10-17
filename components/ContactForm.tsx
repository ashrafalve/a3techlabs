"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, IconCheck } from "@/components/icons";
import { projectTypes } from "@/lib/site";

type Status = "idle" | "sending" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? "Request failed");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("idle");
      setError(
        err instanceof Error && err.message !== "Request failed"
          ? err.message
          : "Something went wrong while sending your inquiry. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-[22px] border border-line bg-surface p-8 md:p-10"
      >
        <span className="grid h-11 w-11 place-items-center rounded-full border border-brand/50 text-brand">
          <IconCheck size={20} />
        </span>
        <h3 className="mt-6 text-xl font-medium tracking-[-0.015em] text-fg">
          Inquiry received
        </h3>
        <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-muted">
          Thanks for reaching out. We&apos;ll review your project details and
          get back to you shortly.
        </p>
        <button
          type="button"
          className="btn btn-ghost mt-7"
          onClick={() => setStatus("idle")}
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[22px] border border-line bg-surface p-6 md:p-8">
      {error && (
        <p role="alert" className="mb-6 rounded-r-xl border-l-2 border-brand bg-hover px-4 py-3 text-sm text-fg">
          {error}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className="field"
          />
        </div>

        <div>
          <label className="field-label" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className="field"
          />
        </div>

        <div>
          <label className="field-label" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+880 ..."
            className="field"
          />
        </div>

        <div>
          <label className="field-label" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company name"
            className="field"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="projectType">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            className="field"
            defaultValue=""
          >
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell us about your project, goals and timeline"
            className="field"
          />
        </div>
      </div>

      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Project Inquiry"}
          {status !== "sending" && (
            <ArrowRight size={16} className="btn-arrow" />
          )}
        </button>
        <p className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
          Response within one business day
        </p>
      </div>
    </form>
  );
}
