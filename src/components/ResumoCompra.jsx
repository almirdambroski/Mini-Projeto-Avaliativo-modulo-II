export function ResumoCompra({ total }) {
  return (
    <div
      style={{
        marginTop:"20px",
        padding:"15px",
        backgroundColor:"#f5f5f5",
        borderRadius: "8px",
      }}
    >
      <h3>Resumo do Pedido</h3>
      <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        Total: R$ {total.toFixed(2)}
      </p>
    </div>
  );
}
