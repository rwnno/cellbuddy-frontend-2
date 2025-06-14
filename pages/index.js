export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#0f1c11",
      color: "#d4ffd1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Segoe UI, sans-serif",
      padding: "2rem",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Welcome to <span style={{ color: "#7ffb89" }}>CellBuddy</span>
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "500px" }}>
        Learn smarter. Grow cell by cell.
      </p>
    </main>
  );
}