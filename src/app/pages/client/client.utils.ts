export const dateFormatter = (date: Date) => date.toLocaleString()

const currencyBRL = { style: 'currency', currency: 'USD' }
export const currencyFormatter = (price: number) => price.toLocaleString('pt-BR', currencyBRL)