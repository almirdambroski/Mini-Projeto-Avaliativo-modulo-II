import { Link } from "react-router-dom";

export function Falha() {
  return (
    <main style={{ textAlign:"center", marginTop:"50px", padding:"20px" }}>
      <h1 style={{ color:"#dc3545" }}>Tentativa de golpe.</h1>
      <p>
        O pagamento não pôde ser processado devido a uma inconsistência nos
        dados do cartão.
      </p>
      <Link
        to="/pagamento"
        style={{
          display:"inline-block",
          marginTop:"20px",
          padding:"10px 20px",
          backgroundColor:"#dc3545",
          color:"#fff",
          textDecoration:"none",
          borderRadius:"5px",
        }}
      >
        Tentar novamente
      </Link>
    </main>
  );
}
