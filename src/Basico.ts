// Tipos Fundamentales
let productName: string = "Laptop Lenovo";
let productPrice: number = 599.99;

// Tipo Unión
let productId: string | number;
productId = "ABC123";   
productId = 1001;       

// Interfaz Básica
interface Product {
    name: string;
    price: number;
}

let myProduct: Product = {
    name: "Mouse Gamer",
    price: 3500
};

console.log("Producto:", myProduct);
