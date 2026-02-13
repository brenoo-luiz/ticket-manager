import TicketForm from "../../components/TicketForm/TicketForm";
import { useTickets } from "../../hooks/useTickets";

export default function NewTicketPage() {
    const { addTicket, tickets } = useTickets();

    return (
    <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div className="card">
        <h1>New Ticket</h1>
        <p>
            Total tickets: <b>{tickets.length}</b>
        </p>
        </div>

        <TicketForm onSubmit={addTicket} />
    </section>
    );
}
