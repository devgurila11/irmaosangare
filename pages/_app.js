// irmãosangare/pages/_app.js
import "../styles/Landing.css"; // ✅ Importa o CSS global aqui

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
