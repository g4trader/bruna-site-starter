
import * as React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string };
type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string };

export function Field({ label, error, ...props }: InputProps) {
  return (
    <label className="block space-y-1">
      <span className="text-sm font-medium text-brand-ink">{label}</span>
      <input
        {...props}
        className={`w-full rounded-xl border border-brand-light px-3 py-2 outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 ease-in-out ${
          props.className || ""
        }`}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}

export function TextArea({ label, error, ...props }: TextAreaProps) {
  return (
    <label className="block space-y-1">
      <span className="text-sm font-medium text-brand-ink">{label}</span>
      <textarea
        {...props}
        className={`w-full rounded-xl border border-brand-light px-3 py-2 h-28 outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-200 ease-in-out ${
          props.className || ""
        }`}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`rounded-xl px-4 py-2 font-semibold shadow-sm transition-all duration-200 ease-in-out hover:opacity-90 bg-brand-dark text-white disabled:opacity-50 disabled:cursor-not-allowed ${
        props.className || ""
      }`}
    />
  );
}
