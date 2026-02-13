const STORAGE_KEY = "support_tickets_v1";

/**
 * loadTickets()
 * Read the tickets from LocalStorage and returns an array.
 * 
 * Rules:
 * - If nothing is saved -> returns []
 * - Se something exists and it is an array -> returns an array
 * - Otherwise -> returns []
 */

export function loadTickets() {
    try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    // Ensures that it is actually an array (protection).
    return Array.isArray(parsed) ? parsed : [];
    } catch {
    return [];
    }
}

/**
 * saveTickets(tickets)
 * Saves the tickets array to localStorage.
 *
 * - JSON.stringify converts the array into a string
 * - localStorage only save text
 */
export function saveTickets(tickets) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
}
