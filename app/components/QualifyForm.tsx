"use client";

import { useActionState } from "react";
import { submitQualify, type FormState } from "../actions/submitQualify";

const initialState: FormState = { status: "idle" };

export default function QualifyForm() {
  const [state, formAction, pending] = useActionState(submitQualify, initialState);

  if (state.status === "success") {
    return (
      <div className="qualify-success">
        <div className="qualify-success-icon">✓</div>
        <h2>You&apos;re on the list.</h2>
        <p>
          We&apos;ve received your details and will review them shortly. If you&apos;re a
          good fit, we&apos;ll be in touch within 1 business day.
        </p>
        <a href="/" className="btn-ghost" style={{ display: "inline-block", marginTop: "8px" }}>
          Back to home
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="qualify-form" noValidate>
      <div className="form-row">
        <div className="form-field">
          <label className="form-label" htmlFor="name">
            Full name <span className="form-required">*</span>
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Jane Smith"
            required
            autoComplete="name"
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="email">
            Work email <span className="form-required">*</span>
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            placeholder="jane@company.com"
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label className="form-label" htmlFor="company">
            Company / business name <span className="form-required">*</span>
          </label>
          <input
            className="form-input"
            type="text"
            id="company"
            name="company"
            placeholder="Acme Inc."
            required
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="businessType">
            Type of business <span className="form-required">*</span>
          </label>
          <select
            className="form-input form-select"
            id="businessType"
            name="businessType"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="Small or medium business">Small or medium business</option>
            <option value="Early-stage startup">Early-stage startup</option>
            <option value="Scaling startup (Series A+)">Scaling startup (Series A+)</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label className="form-label" htmlFor="teamSize">
            Team size <span className="form-required">*</span>
          </label>
          <select
            className="form-input form-select"
            id="teamSize"
            name="teamSize"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="Just me">Just me</option>
            <option value="2–5 people">2–5 people</option>
            <option value="6–20 people">6–20 people</option>
            <option value="21–50 people">21–50 people</option>
            <option value="50+ people">50+ people</option>
          </select>
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="hoursLost">
            Hours lost to manual tasks per week <span className="form-required">*</span>
          </label>
          <select
            className="form-input form-select"
            id="hoursLost"
            name="hoursLost"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="2–5 hours">2–5 hours</option>
            <option value="5–10 hours">5–10 hours</option>
            <option value="10–20 hours">10–20 hours</option>
            <option value="20+ hours">20+ hours</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="challenge">
          What&apos;s the biggest thing eating your team&apos;s time right now?{" "}
          <span className="form-required">*</span>
        </label>
        <textarea
          className="form-input form-textarea"
          id="challenge"
          name="challenge"
          placeholder="e.g. We manually copy client info into 3 different systems every time we get a new customer..."
          rows={4}
          required
        />
      </div>

      {state.status === "error" && (
        <p className="form-error" role="alert">
          {state.error}
        </p>
      )}

      <div className="form-submit-row">
        <button type="submit" className="btn-primary" disabled={pending}>
          {pending ? "Sending…" : "See if I qualify →"}
        </button>
        <span className="form-submit-note">
          No commitment. We&apos;ll review and get back to you within 1 business day.
        </span>
      </div>
    </form>
  );
}
