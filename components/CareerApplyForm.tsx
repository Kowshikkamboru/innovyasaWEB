"use client";
import React, { FormEvent, useState } from "react";

export default function CareerApplyForm({ jobId }: { jobId: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cover, setCover] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId, name, email, cover }),
      });
      if (res.ok) setSuccess(true);
      else setSuccess(false);
    } catch (err) {
      setSuccess(false);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      {success === true && (
        <div className="mb-4 p-3 rounded bg-emerald-50 border border-emerald-200 text-emerald-800">
          Application submitted — we'll reach out if you're shortlisted.
        </div>
      )}
      {success === false && (
        <div className="mb-4 p-3 rounded bg-rose-50 border border-rose-200 text-rose-800">
          Submission failed. Please try again.
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Full name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Cover letter</label>
        <textarea
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          required
          rows={6}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <button className="btn-primary" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
}
