/**
 * isNonEmptyString(value)
 * Retorns true if:
 * - value is a string
 * - after trim() (removing espaces at the beginning and end) there is still text remaining
 */
export function isNonEmptyString(value) {
    return typeof value === "string" && value.trim().length > 0;
}


/**
 * isValidEmail(email)
 * 
 * Flow:
 * 1) ensures it is a non-empty string
 * 2) uses a simple regex: “algo@algo.algo”
 *
 * Obs:
 * - It is not 100% RFC compliant (that would be much more complex),
 */
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
