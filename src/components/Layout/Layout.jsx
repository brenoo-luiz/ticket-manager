import Navbar from "../Navbar/Navbar.jsx";

export default function Layout({ children }) {
    return (
    <>
        <Navbar />
        <main
        style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
        }}
        >
        {children}
        </main>
    </>
    );
}
