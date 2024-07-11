import { PropsInputs } from "@/common/interfaces/propsInputs.interface";
import { TextField } from "@mui/material";
import React, { useState } from "react";

export const InputCpf = ({ onChange, ...props }: PropsInputs) => {
  const [valueCpf, setValueCpf] = useState<string>("");
  const formatCPF = (input: React.ChangeEvent<HTMLInputElement>) => {
    // Remova qualquer caractere que não seja números
    let cpf = input.target.value.replace(/\D/g, "");

    // Não permitir escrever mais números após a conclusão do cpf
    if (cpf.length === 12) return;

    if (!!onChange) {
      onChange(cpf);
    }
    // Adicione os pontos e o traço
    if (cpf.length <= 11) {
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    // Atualizar valor de entrada
    setValueCpf(cpf);
  };
  return (
    <TextField
      id="outlined-basic"
      label="CPF"
      variant="outlined"
      value={valueCpf}
      onChange={formatCPF}
      {...props}
    />
  );
};
