"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, ChevronDown, Mail } from "lucide-react";
import { contact } from "@/data/portfolio";
import "./contact-form.css";

import { initialFields, subjects, validateContact, type ContactFields } from "@/lib/contact-validation";
type FieldErrors = Partial<Record<keyof ContactFields, string>>;

export function ContactForm() {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [fields, setFields] = useState<ContactFields>(initialFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [enhanced, setEnhanced] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "failed">("idle");
  useEffect(() => setEnhanced(true), []);
  function updateField(field: keyof ContactFields, value: string) {
    setStatus("idle");
    setFields((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const nextErrors = validateContact(fields);
    setErrors(nextErrors);
    const firstInvalid = (
      Object.keys(nextErrors) as (keyof ContactFields)[]
    )[0];

    if (firstInvalid) {
      const input = formRef.current?.elements.namedItem(firstInvalid);
      if (input instanceof HTMLElement) input.focus();
      return;
    }

    const data = new FormData(event.currentTarget);
    for (const [key, value] of Object.entries(fields)) data.set(key, value.trim());
    setStatus("sending");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(contact.formEndpoint, {
        method: "POST", body: data, headers: { Accept: "application/json" }, signal: controller.signal,
      });
      if (!response.ok) throw new Error("Submission failed");
      setFields(initialFields);
      setStatus("success");
    } catch {
      // Preserve the message so visitors can retry or use the direct email link.
      setStatus("failed");
    } finally {
      clearTimeout(timeout);
    }
  }

  const hasErrors = Object.values(errors).some(Boolean);

  return (
    <form
      ref={formRef}
      className="contact-form"
      action={contact.formEndpoint}
      method="POST"
      onSubmit={handleSubmit}
      noValidate={enhanced}
      aria-busy={status === "sending"}
      aria-labelledby={`${formId}-heading`}
      aria-describedby={`${formId}-hint`}
    >
      <div className="contact-form-heading">
        <div>
          <span className="contact-form-eyebrow">START A CONVERSATION</span>
          <h3 id={`${formId}-heading`}>Tell me what you have in mind.</h3>
        </div>
        <span className="contact-form-mark" aria-hidden="true">
          <Mail size={22} strokeWidth={1.5} />
        </span>
      </div>
      <p className="contact-form-description" id={`${formId}-hint`}>
        A project, an opportunity, or a simple hello — I’m all ears. All fields
        are required.
      </p>

      <div hidden aria-hidden="true"><input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" /></div>
      <fieldset aria-label="Message details" className="contact-form-fields" disabled={status === "sending"}>
        <div className="contact-field">
          <label htmlFor={`${formId}-name`}>Your name</label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={fields.name}
            onChange={(event) => updateField("name", event.target.value)}
            minLength={2}
            maxLength={80}
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
          />
          {errors.name && (
            <p className="contact-field-error" id={`${formId}-name-error`}>
              {errors.name}
            </p>
          )}
        </div>

        <div className="contact-field">
          <label htmlFor={`${formId}-email`}>Email address</label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={fields.email}
            onChange={(event) => updateField("email", event.target.value)}
            maxLength={254}
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? `${formId}-email-error` : undefined
            }
          />
          {errors.email && (
            <p className="contact-field-error" id={`${formId}-email-error`}>
              {errors.email}
            </p>
          )}
        </div>

        <div className="contact-field contact-field-wide">
          <label htmlFor={`${formId}-subject`}>What’s on your mind?</label>
          <div className="contact-select-wrap">
            <select
              id={`${formId}-subject`}
              name="subject"
              value={fields.subject}
              onChange={(event) => updateField("subject", event.target.value)}
              required
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={
                errors.subject ? `${formId}-subject-error` : undefined
              }
            >
              <option value="" disabled>
                Select a topic
              </option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            <ChevronDown size={16} aria-hidden="true" />
          </div>
          {errors.subject && (
            <p className="contact-field-error" id={`${formId}-subject-error`}>
              {errors.subject}
            </p>
          )}
        </div>

        <div className="contact-field contact-field-wide">
          <div className="contact-message-label">
            <label htmlFor={`${formId}-message`}>Your message</label>
            <span aria-hidden="true">A few details go a long way.</span>
          </div>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={5}
            placeholder="Tell me a little about your idea or opportunity…"
            value={fields.message}
            onChange={(event) => updateField("message", event.target.value)}
            minLength={20}
            maxLength={5000}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? `${formId}-message-error` : undefined
            }
          />
          {errors.message && (
            <p className="contact-field-error" id={`${formId}-message-error`}>
              {errors.message}
            </p>
          )}
        </div>
      </fieldset>

      {hasErrors && (
        <p className="contact-validation-summary" role="alert">
          Please check the highlighted fields before continuing.
        </p>
      )}

      <div className="contact-form-submit">
        <button className="contact-submit-button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"} <ArrowUpRight size={19} aria-hidden="true" />
        </button>
        <p>Your message will be sent securely through Formspree.</p>
      </div>
      <p className="contact-validation-summary" role="status" aria-live="polite">
        {status === "success" && "Thanks! Your message was submitted successfully."}
        {status === "failed" && "Your message could not be sent. Please try again or use the email link beside this form."}
      </p>
    </form>
  );
}
