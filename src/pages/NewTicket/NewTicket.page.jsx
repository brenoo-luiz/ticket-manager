import TicketForm from "../../components/TicketForm/TicketForm";
import { useTickets } from "../../hooks/useTickets";

/**
 * Page /new
 *
 * Responsibility:
 * - Display the form
 * - Connect the form to the hook's addTicket logic
 */
export default function NewTicketPage() {
    // tickets: current state
    // addTicket: creates a new (validate + save)
    const { addTicket, tickets } = useTickets();

    return (
    <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div className="card">
        <h1>New Ticket</h1>
        <p>
            Total tickets: <b>{tickets.length}</b>
        </p>
        </div>

        {/* onSubmit points to the function that creates the ticket */}
        <TicketForm onSubmit={addTicket} />
    </section>
    );
}
