function calculateDiscount(price: number, discountRate: number): number {
    if (discountRate > 100) throw new Error("Invalid discount rate");
    let discountedPrice = price * (1 - discountRate / 100);
    return Math.round(discountedPrice.toFixed(2));
}

console.log(calculateDiscount(50, 30));
