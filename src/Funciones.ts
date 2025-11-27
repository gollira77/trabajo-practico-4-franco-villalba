
function updateStock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}

const newStock = updateStock(10, 5);

console.log("Nuevo stock:", newStock);
