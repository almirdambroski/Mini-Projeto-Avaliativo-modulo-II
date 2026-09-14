import { Link } from "react-router-dom";

export function Sucesso() {
  return (
    <main style={{ textAlign:"center", marginTop:"50px", padding:"20px" }}>
      <h1 style={{ color:'#28a745' }}>Compra aprovado</h1>
      <p>Obrigado por sua compra. Seu pedido esta sendo preparado.</p>
      <Link
        to="/"
        style={{
          display:"inline-block",
          marginTop:"20px",
          padding:"10px 20px",
          backgroundColor:"#67b1ac",
          color:"#3c3a3a",
          textDecoration: "none",
          borderRadius:"5px",
        }}
      >
        Voltar ao carrinho
      </Link>
    </main>
  );
}
