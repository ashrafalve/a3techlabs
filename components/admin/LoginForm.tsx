"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? "Login failed.");
      }

      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
      setPending(false);
    }
  }

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-5 rounded-[22px] border border-line bg-surface p-7"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-1">
        <span className="eyebrow">Admin access</span>
        <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-fg">
          Sign in to view inquiries
        </h1>
      </div>

      <label className="flex flex-col gap-2">
        <span className="field-label">Password</span>
        <input
          className="field"
          type="password"
          autoFocus
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter admin password"
          required
        />
      </label>

      {error ? (
        <p className="text-[13px] font-medium text-[#e53935]" role="alert">
          {error}
        </p>
      ) : null}

      <button className="btn btn-primary w-full" type="submit" disabled={pending}>
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
