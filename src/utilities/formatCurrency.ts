const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, { currency: 'USD', style: 'currency' }) // undefined makes it automatically determine how to print out number based on where u live

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number)
}