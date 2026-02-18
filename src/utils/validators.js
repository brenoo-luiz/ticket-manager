export function isNonEmptyString(value) {
    return typeof value === "string" && value.trim().length > 0;
}

export function isValidEmail(email) {
    if (!isNonEmptyString(email)) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function validateTicketInput(input) {
    const errors = {};

    if (!isNonEmptyString(input.firstName))
    errors.firstName = "First name is required";

    if (!isNonEmptyString(input.lastName))
    errors.lastName = "Last name is required";

    if (!isNonEmptyString(input.company))
    errors.company = "Company is required";

    if (!isValidEmail(input.email))
    errors.email = "Valid email is required";

    if (!isNonEmptyString(input.description))
    errors.description = "Description is required";

    return { ok: Object.keys(errors).length === 0, errors };
}
