import { useState } from "react";

/**
 * Initial state pf the form.
 */
const initial = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    description: "",
};

export default function TicketForm({ onSubmit }) {
    const [form, setForm] = useState(initial);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));

    setErrors((prev) => {
        if (!prev[key]) return prev;
        const copy = { ...prev };
        delete copy[key];
        return copy;
    });

    setSuccess("");
    }

    function handleSubmit(e) {
    e.preventDefault();
    setSuccess("");

    const result = onSubmit?.(form);

    if (!result?.ok) {
        setErrors(result?.errors || { general: "Invalid form" });
        return;
    }

    setErrors({});
    setForm(initial);
    setSuccess("Ticket created successfully");
    }

    return (
    <form onSubmit={handleSubmit} className="card form">
        <div>
        <label className="label">First name</label>
        <input
            className="input"
            value={form.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            placeholder="Breno"
        />
        {errors.firstName && (
            <small className="helpError">{errors.firstName}</small>
        )}
        </div>

        <div>
        <label className="label">Last name</label>
        <input
            className="input"
            value={form.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            placeholder="Nunes da Silva"
        />
        {errors.lastName && (
            <small className="helpError">{errors.lastName}</small>
        )}
        </div>

        <div>
        <label className="label">Company</label>
        <input
            className="input"
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
            placeholder="IconPro GmbH"
        />
        {errors.company && (
            <small className="helpError">{errors.company}</small>
        )}
        </div>

        <div>
        <label className="label">Email</label>
        <input
            className="input"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="you@email.com"
        />
        {errors.email && (
            <small className="helpError">{errors.email}</small>
        )}
        </div>

        <div>
        <label className="label">Description</label>
        <textarea
            className="input"
            value={form.description}
            onChange={(e) => updateField("description", e.target.value)}
            placeholder="Describe the issue..."
            rows={4}
        />
        {errors.description && (
            <small className="helpError">{errors.description}</small>
        )}
        </div>
        {/* General error (not related to a specific field) */}
        {errors.general && (
        <div className="helpError">{errors.general}</div>
        )}

        <button type="submit" className="btn">
        Submit
        </button>

        {success && <div className="helpSuccess">{success}</div>}
    </form>
    );
}
