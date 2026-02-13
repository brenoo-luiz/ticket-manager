import TicketTable from "../../components/TicketTable/TicketTable";
import { useTickets } from "../../hooks/useTickets";

/**
 * Page /tickets
 *
 * Responsability:
 * - Display the list of tickets
 * - Allow deleting a ticket
 * - Allow clearing all tickets
 */
export default function TicketListPage() {
    const { tickets, clearTickets, removeTicket } = useTickets();

    return (
    <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <div>
            <h1>Ticket List</h1>
            <p>
            Total tickets: <b>{tickets.length}</b>
            </p>
        </div>

        <button className="btnSecondary" onClick={clearTickets}>
            Clear all
        </button>
        </div>

        <TicketTable tickets={tickets} onDelete={removeTicket} />
    </section>
    );
}
