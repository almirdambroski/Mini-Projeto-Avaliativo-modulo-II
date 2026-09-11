import { Link } from "react-router-dom";

export function Sucesso() {
  return (
    <main style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <h1 style={{ color: '#28a745' }}>Compra aprovado</h1>
      <p>Obrigado por sua compra. Seu pedido esta sendo preparado.</p>
      <Link
        to="/"
        tyle={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Voltar ao carrinho
      </Link>
    </main>
  );
}
