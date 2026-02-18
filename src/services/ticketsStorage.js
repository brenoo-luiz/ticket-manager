const STORAGE_KEY = "support_tickets_v1";

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

export function saveTickets(tickets) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
}
