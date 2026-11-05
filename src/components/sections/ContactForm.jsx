import { useState } from "react";
import courses from "../../data/courses.json";
import { Button } from "../ui/Button";

const initialForm = { name: "", organization: "", email: "", phone: "", requirement: "", delivery: "", participants: "", message: "" };

export function ContactForm({ compact = false }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = async (event) => {
    event.preventDefault();
    const next = {};
    Object.entries(form).forEach(([key, value]) => { if (!value.trim()) next[key] = "This field is required."; });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    setErrors(next);
    setSendError("");
    if (Object.keys(next).length > 0) return;

    setSending(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"}/api/enquiries/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your enquiry.");
      setSubmitted(true);
      setForm(initialForm);
    } catch (error) {
      setSendError(error instanceof Error ? error.message : "Unable to send your enquiry.");
    } finally {
      setSending(false);
    }
  };
  const field = (name, label, type = "text", options) => <label className={`field ${errors[name] ? "invalid" : ""}`}>{label}{options ? <select name={name} value={form[name]} onChange={update}><option value="">{options.placeholder}</option>{options.items.map((item) => <option key={item} value={item}>{item}</option>)}</select> : type === "textarea" ? <textarea name={name} value={form[name]} onChange={update} rows={compact ? 4 : 6} /> : <input name={name} value={form[name]} onChange={update} type={type} />}{errors[name] && <span className="field-error">{errors[name]}</span>}</label>;
  return <form className="border border-slate-200 bg-white p-7 shadow-lg sm:p-10" onSubmit={submit} noValidate><p className="eyebrow text-slate-500">{compact ? "Training enquiry" : "Contact us"}</p><h2 className="display mt-3 text-3xl text-navy">{compact ? "Start a training conversation" : "Send us your training requirement"}</h2>{compact && <p className="mt-2 text-sm text-slate-600">Share your organization, college, or learning goal and we will shape the right pathway.</p>}<div className="mt-7 grid gap-4 sm:grid-cols-2">{field("name", "Name")}{field("organization", "Organization/College Name")}{field("email", "Email", "email")}{field("phone", "Phone Number")}{field("requirement", "Training Requirement", "select", { placeholder: "Select training requirement", items: courses.map((course) => course.category) })}{field("delivery", "Preferred Delivery Mode", "select", { placeholder: "Select delivery mode", items: ["On-site training", "Live virtual training", "Blended delivery", "Lab-as-a-service"] })}{field("participants", "Number of Participants", "select", { placeholder: "Select participant count", items: ["1 - 3", "4 - 10", "11 - 25", "26 - 50", "50+"] })}<div className="sm:col-span-2">{field("message", "Message", "textarea")}</div></div><div className="mt-6 flex flex-wrap items-center gap-4"><Button type="submit" disabled={sending}>{sending ? "Sending..." : "Send Training Enquiry"} <span aria-hidden="true">→</span></Button><p className="text-xs text-slate-500">Your details are handled in confidence.</p></div>{submitted && <p className="mt-4 text-sm font-semibold text-emerald-700" role="status">Thank you. Your enquiry was sent successfully.</p>}{sendError && <p className="mt-4 text-sm font-semibold text-red-700" role="alert">{sendError}</p>}</form>;
}
