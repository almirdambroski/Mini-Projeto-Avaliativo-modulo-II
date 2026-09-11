export function ItemCarrinho({ produto }) {
  const subtotal = produto.precoUnitario * produto.quantidade;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div>
        <strong>{produto.nome}</strong>
        <p>
          Qtd: {produto.quantidade} x R$ {produto.precoUnitario.toFixed(2)}
        </p>
      </div>{" "}
      {/* Ou o conteúdo do elemento filho aqui */}
      <div>
        <strong>R$ {subtotal.toFixed(2)}</strong>
      </div>
    </div>
  );
}
