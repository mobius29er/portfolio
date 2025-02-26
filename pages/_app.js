// pages/_app.js
import '../styles/globals.css';
import { SkillsProvider } from '../context/SkillsContext';

function MyApp({ Component, pageProps }) {
  return (
    <SkillsProvider>
      <Component {...pageProps} />
    </SkillsProvider>
  );
}

export default MyApp;
