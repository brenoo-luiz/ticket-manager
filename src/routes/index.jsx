import { Routes, Route, Navigate } from "react-router-dom";
import NewTicketPage from "../pages/NewTicket/NewTicket.page.jsx";
import TicketListPage from "../pages/TicketList/TicketList.page.jsx";

export default function AppRoutes() {
    return (
    <Routes>
        {/* When opening the base URL ("/"), it redirects to "/new" */}
        <Route path="/" element={<Navigate to="/new" replace />} />
        {/* Ticket creation form */}
        <Route path="/new" element={<NewTicketPage />} />
        {/* Ticket list */}
        <Route path="/tickets" element={<TicketListPage />} />
        {/* Any invalid URL falls here */}
        <Route path="*" element={<Navigate to="/new" replace />} />
    </Routes>
    );
}
