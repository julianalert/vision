"use client";

import { useActionState } from "react";
import { submitQualify, type FormState } from "../actions/submitQualify";
import type { Dictionary } from "../[lang]/dictionaries";

type Props = {
  dict: Dictionary["qualify"]["form"];
  lang: string;
};

const initialState: FormState = { status: "idle" };

export default function QualifyForm({ dict, lang }: Props) {
  const [state, formAction, pending] = useActionState(submitQualify, initialState);

  if (state.status === "success") {
    return (
      <div className="qualify-success">
        <div className="qualify-success-icon">✓</div>
        <h2>{dict.successTitle}</h2>
        <p>{dict.successText}</p>
        <a
          href={`/${lang}`}
          className="btn-ghost"
          style={{ display: "inline-block", marginTop: "8px" }}
        >
          {dict.successBackBtn}
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="qualify-form" noValidate>
      <div className="form-row">
        <div className="form-field">
          <label className="form-label" htmlFor="name">
            {dict.nameLabel} <span className="form-required">*</span>
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder={dict.namePlaceholder}
            required
            autoComplete="name"
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="email">
            {dict.emailLabel} <span className="form-required">*</span>
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            placeholder={dict.emailPlaceholder}
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label className="form-label" htmlFor="company">
            {dict.companyLabel} <span className="form-required">*</span>
          </label>
          <input
            className="form-input"
            type="text"
            id="company"
            name="company"
            placeholder={dict.companyPlaceholder}
            required
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="businessType">
            {dict.businessTypeLabel} <span className="form-required">*</span>
          </label>
          <select
            className="form-input form-select"
            id="businessType"
            name="businessType"
            required
            defaultValue=""
          >
            <option value="" disabled>
              {dict.businessTypeDefault}
            </option>
            {dict.businessTypeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label className="form-label" htmlFor="teamSize">
            {dict.teamSizeLabel} <span className="form-required">*</span>
          </label>
          <select
            className="form-input form-select"
            id="teamSize"
            name="teamSize"
            required
            defaultValue=""
          >
            <option value="" disabled>
              {dict.teamSizeDefault}
            </option>
            {dict.teamSizeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="hoursLost">
            {dict.hoursLostLabel} <span className="form-required">*</span>
          </label>
          <select
            className="form-input form-select"
            id="hoursLost"
            name="hoursLost"
            required
            defaultValue=""
          >
            <option value="" disabled>
              {dict.hoursLostDefault}
            </option>
            {dict.hoursLostOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="challenge">
          {dict.challengeLabel} <span className="form-required">*</span>
        </label>
        <textarea
          className="form-input form-textarea"
          id="challenge"
          name="challenge"
          placeholder={dict.challengePlaceholder}
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
          {pending ? dict.submittingBtn : dict.submitBtn}
        </button>
        <span className="form-submit-note">{dict.submitNote}</span>
      </div>
    </form>
  );
}
