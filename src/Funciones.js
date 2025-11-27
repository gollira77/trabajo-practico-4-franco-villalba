function updateStock(currentStock, quantityChange) {
    return currentStock + quantityChange;
}
var newStock = updateStock(10, 5);
console.log("Nuevo stock:", newStock);
