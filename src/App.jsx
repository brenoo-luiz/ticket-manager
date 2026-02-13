import Layout from "./components/Layout/Layout.jsx";
import AppRoutes from "./routes/index.jsx";

/**
 * App = main "shell" of the application.
 *
 * Here you build the general structure:
 * - Layout, AppRoutes
 */
export default function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}
