export interface GetPayment {
    result: Result
  }
  
  export interface Result {
    id: string
    amount: number
    name: string
    isPayment: boolean
    valuePix: ValuePix
  }
  
  export interface ValuePix {
    pixCashback: number
    PixParcelado: PixParcelado[]
  }
  
  export interface PixParcelado {
    total: number
    parcela: number
  }
  