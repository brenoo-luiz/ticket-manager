import Navbar from "../Navbar/Navbar.jsx";

/**
 * children:
 * - Everything you place inside <Layout>...</Layout> (in App.jsx)
 * - This is where the route pages are rendered
 */
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
