import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validarDigitosIguais } from "../utils/pagamento";

export function usePagamento() {
  const [processando, setProcessando] = useState(false);
  const navigate = useNavigate();

  const processarPagamento = (dadosCartão) => {
    setProcessando(true);

    //silular sincronização asincrona com setTimeout
    setTimeout(() => {
      setProcessando(false);

      //Aplica a egra de diístos todos iguais
      const eGolpe = validarDigitosIguais(dadosCartão.numeroCartao);

      if (eGolpe) {
        navigate("/falha");
      } else {
        navigate("/sucesso");
      }
    }, 2000); // segundo de simulação
  };
  return { processando, processarPagamento };
}
