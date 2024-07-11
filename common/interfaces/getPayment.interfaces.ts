
  
  export interface GetPayment {
    amount: number
    valuePix: ValuePix
  }
  
  export interface ValuePix {
    pixCashback: number
    PixParcelado: PixParcelado[]
  }
  
  export interface PixParcelado {
    numberParcela: number
    total: number
    parcelaAmount: number
  }
  