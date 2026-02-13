import { Routes, Route, Navigate } from "react-router-dom";
import NewTicketPage from "../pages/NewTicket/NewTicket.page.jsx";
import TicketListPage from "../pages/TicketList/TicketList.page.jsx";

export default function AppRoutes() {
    return (
    <Routes>
        <Route path="/" element={<Navigate to="/new" replace />} />
        <Route path="/new" element={<NewTicketPage />} />
        <Route path="/tickets" element={<TicketListPage />} />
        <Route path="*" element={<Navigate to="/new" replace />} />
    </Routes>
    );
}
