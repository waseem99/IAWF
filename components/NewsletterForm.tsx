"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    if (!email || !email.includes("@")) {
      setMessage("Enter a valid email address.");
      return;
    }
    setMessage("Concept demo: production subscription will connect to IAWF’s Constant Contact account.");
    form.reset();
  }

  return (
    <form className="newsletter-form" onSubmit={submit} noValidate>
      <label htmlFor="newsletter-email">Email address</label>
      <div className="newsletter-form__row">
        <input id="newsletter-email" name="email" type="email" inputMode="email" autoComplete="email" placeholder="you@example.org" required />
        <button className="button button--ember" type="submit">Subscribe</button>
      </div>
      <p className="form-note" aria-live="polite">{message || "Demo form — no personal data is submitted."}</p>
    </form>
  );
}
