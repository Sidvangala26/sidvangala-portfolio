"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

  const isValid = useMemo(() => {
    const emailOk = /\S+@\S+\.\S+/.test(form.email);
    return form.name.trim().length > 1 && emailOk && form.message.trim().length > 10;
  }, [form]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    if (!isValid) {
      setStatus("Please complete all fields with valid details.");
      return;
    }

    if (!endpoint) {
      setStatus("Add NEXT_PUBLIC_CONTACT_ENDPOINT to enable submissions.");
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("Message sent successfully.");
      setForm(initialState);
    } catch (error) {
      console.error(error);
      setStatus("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Name"
          value={form.name}
          onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
          placeholder="Your name"
        />
        <Field
          label="Email"
          value={form.email}
          onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
          placeholder="you@example.com"
          type="email"
        />
      </div>

      <label className="block">
        <span className="mb-2 block text-sm text-neutral-300">Message</span>
        <textarea
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          placeholder="Tell me about the idea, product, or collaboration."
          rows={7}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-luxury-gold/50"
        />
      </label>

      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.985 }}
        type="submit"
        disabled={submitting}
        className="rounded-full border border-luxury-gold/40 bg-luxury-gold px-6 py-3 text-sm font-medium text-black transition disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Sending..." : "Send Message"}
      </motion.button>

      {status ? <p className="text-sm text-neutral-300">{status}</p> : null}
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-neutral-300">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-luxury-gold/50"
      />
    </label>
  );
}
