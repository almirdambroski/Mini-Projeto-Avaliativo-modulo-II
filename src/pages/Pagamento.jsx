import { useForm } from "react-hook-form";
import { zodResolver} from "@hookform/resolvers/zod";
import { z } from "zod";
import { usePagamento } from "../hooks/usePagamento";
import { produtos } from "../data/produtos";

//Sch de validação com zod
const pagamentoSchema = z.object({
  titular: z.string().min(1, "Informe o nome do titular"),
  numeroCartao: z
    .string()
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => val.length === 16, {
      message: "O cartão deve conter exatamente 16 digitos",
    }),
  validade: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Formato deve ser MM/AA"),
  cvv: z
    .string()
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => val.length === 3, {
      message: "O cvv deve ter 3 digitos",
    }),
});

export function Pagamento() {
  //const { processando, processandoPagamento } = usePagamento();
  const { processando, processarPagamento } = usePagamento();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pagamentoSchema),
  });

  const total = produtos.reduce(
    (acc, item) => acc + item.precoUnitario * item.quantidade,
    0,
  );
  return (
    <main
      style={{ maxWidth: "500px", margin: "20rem auto 0", padding: "20px" }}
    >
      <h2>Pagamento</h2>
      <p style={{ fontWeight: "bold" }}>Total a pagar: R$ {total.toFixed(2)}</p>

      {/* <form onSubmit={handleSubmit(processandoPagamento)}> */}
      <form onSubmit={handleSubmit(processarPagamento)}>
        <div style={{ marginBottom:"15px" }}>
          <label htmlFor="titular">Nome do Titular:</label>
          <input
            id="titular"
            type="text"
            {...register("titular")}
            style={{ width: "100%", padding:"8px", marginTop: "4px" }}
          />
          {errors.titular && (
            <span style={{ color:"red", fontSize:"0.85rem" }}>
              {errors.titular.message}
            </span>
          )}
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="numeroCartao">Número do cartão (16 dígitos)</label>
          <input
            id="numeroCartao"
            type="text"
            maxLength={19}
            placeholder="0000 0000 0000 0000"
            {...register("numeroCartao")}
            style={{ width:"100%", padding:"8px", marginTop:"4px" }}
          />
          {errors.numeroCartao && (
            <span style={{ color:"red", fontSize:"0.85rem" }}>
              {errors.numeroCartao.message}
            </span>
          )}
        </div>
        <div style={{ display:"flex", gap: "10px", marginBottom:"15px" }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="validade">Validade (MM/AA):</label>
            <input
              id="validade"
              type="text"
              placeholder="MM/AA"
              maxLength={5}
              {...register("validade")}
              style={{ width:"100%", padding: "8px", marginTop:"4px" }}
            />
            {errors.validade && (
              <span style={{ color:"red", fontSize:"0.85rem" }}>
                {errors.validade.message}
              </span>
            )}
          </div>
          <div style={{ flex:1 }}>
            <label htmlFor="cvv">CVV:</label>
            <input
              id="cvv"
              type="text"
              maxLength={3}
              placeholder="123"
              {...register("cvv")}
              style={{ width:"100%", padding:"8px", marginTop:"4px" }}
            />
            {errors.cvv && (
              <span style={{ color:"red", fontSize:"0.85rem" }}>
                {errors.cvv.message}
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={processando}
          style={{
            width:"100%",
            padding:"12px",
            fontSize:"1rem",
            backgroundColor: processando ? "#6c757d" : "#28a745",
            color:"#fff",
            border:"none",
            borderRadius:"6px",
            cursor: processando ? "not-allowed" : "pointer",
          }}
        >
          {processando ? "Processando compra..." : "Pagar Agora"}
        </button>
      </form>
    </main>
  );
}
