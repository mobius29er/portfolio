// pages/_app.js
import "../styles/globals.css";
import { SkillsProvider } from "../context/SkillsContext";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // If on the landing page (/), hide the sidebar
  if (router.pathname === "/") {
    return (
      <SkillsProvider>
        <Component {...pageProps} />
      </SkillsProvider>
    );
  }

  // Otherwise, show the sidebar + main content
  return (
    <SkillsProvider>
      <div className="flex min-h-screen bg-black">
        <Sidebar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
      </div>
    </SkillsProvider>
  );
}

export default MyApp;
