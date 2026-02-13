export default function TicketTable({ tickets, onDelete }) {
    if (!tickets?.length) {
    return <p>No tickets yet.</p>;
    }

    return (
    <div className="card tableWrap">
        <table className="table">
        <thead>
            <tr>
            {[
                "First name",
                "Last name",
                "Company",
                "Email",
                "Description",
                "Created",
                "Actions",
            ].map((h) => (
                <th key={h}>{h}</th>
            ))}
            </tr>
        </thead>

        <tbody>
            {tickets.map((t) => (
            <tr key={t.id}>
                <td>{t.firstName}</td>
                <td>{t.lastName}</td>
                <td>{t.company}</td>
                <td>{t.email}</td>
                <td>{t.description}</td>
                <td>{new Date(t.createdAt).toLocaleString()}</td>
                <td>
                <button
                    className="btnSecondary"
                    onClick={() => onDelete?.(t.id)}
                >
                    Delete
                </button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
}
