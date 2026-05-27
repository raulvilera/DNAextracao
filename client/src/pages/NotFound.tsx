import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        background: "var(--background)",
      }}
    >
      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🧬</div>
      <h1
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "5rem",
          fontWeight: 800,
          color: "oklch(0.65 0.22 165)",
          margin: "0 0 0.5rem",
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: "1.1rem",
          color: "oklch(0.65 0.015 240)",
          marginBottom: "2rem",
        }}
      >
        Página não encontrada
      </p>
      <button
        onClick={() => setLocation("/")}
        style={{
          background: "linear-gradient(135deg, oklch(0.65 0.22 165), oklch(0.55 0.18 200))",
          color: "oklch(0.1 0.01 240)",
          border: "none",
          borderRadius: "0.75rem",
          padding: "0.75rem 1.75rem",
          fontSize: "0.95rem",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Voltar ao Início
      </button>
    </div>
  );
}
