export function formatPrice(price: number) {
    const priceFormated = new Intl.NumberFormat('es-ES', {
        style: "currency",
        currency: "EUR"
    })

    const finalPrice = priceFormated.format(price)

    return finalPrice
}