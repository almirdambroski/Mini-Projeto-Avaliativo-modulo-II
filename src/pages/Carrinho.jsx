import { useNavigate } from "react-router-dom";
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
