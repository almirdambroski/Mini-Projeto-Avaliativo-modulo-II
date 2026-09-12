import { useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { produtos } from "../data/produtos";
//import { produtos } from "../data/produtos.jsx";
import { ResumoCompra } from '../components/ResumoCompra';
import { ItemCarrinho } from "../components/ItemCarrinho";
//import ResumoCompra  from "../components/ResumoCompra";

export function Carrinho() {
  const navigate = useNavigate();

  const total = produtos.reduce(
    (acc, item) => acc + item.precoUnitario * item.quantidade,
    0,
  );

  return (
    <main
      style={{ maxWidth: "600px", margin: "20rem auto 0", padding: "20px" }}
    >
      <img 
        src={logoImg} 
        alt="Logo da Loja" 
        style={{ width: "350px", height: "auto", marginBottom: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }} 
      />
      <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        Sistema de pagamento
      </h2>
      <h1>Seu Carrinho</h1>

      {produtos.map((produto) => (
        <ItemCarrinho key={produto.id} produto={produto} />
      ))}

      <ResumoCompra total={total} />

      <button
        onClick={() => navigate("/pagamento")}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Ir para o pagamento
      </button>
    </main>
  );
}
