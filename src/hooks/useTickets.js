import { useEffect, useState } from "react";
import { loadTickets, saveTickets } from "../services/ticketsStorage";
import { validateTicketInput } from "../utils/validators";

/**
 * createId()
 * Generate an identifier:
 * - Date.now() provides a time-based number (ms)
 * - Math.random() add randomness to reduce collision
 */
function createId() {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function useTickets() {
    const [tickets, setTickets] = useState(() => loadTickets());

    /**
   * Automatic persistence:
   * Whenever "tickets" chances, it saves to localStorage.
   */
    useEffect(() => {
    saveTickets(tickets);
    }, [tickets]);

    /**
   * addTicket(input)
   * Creates a new ticket if the input is valid.
   */
    function addTicket(input) {
    const { ok, errors } = validateTicketInput(input);
    if (!ok) return { ok, errors };

    const newTicket = {
        id: createId(),
        firstName: input.firstName.trim(),
        lastName: input.lastName.trim(),
        company: input.company.trim(),
        email: input.email.trim(),
        description: input.description.trim(),
        createdAt: Date.now(),
    };

    // Updates the state: places it at the top (most recent first)
    setTickets((prev) => [newTicket, ...prev]);

    return { ok: true, ticket: newTicket };
    }

    function clearTickets() {
    setTickets([]);
    }

    function removeTicket(id) {
    setTickets((prev) => prev.filter((t) => t.id !== id));
    }

    return { tickets, addTicket, clearTickets, removeTicket };
}
