type Product = {
    id: number;
    name: string;
    category: string;
};

const product: Product[] = [
    { id: 1, name: "laptop", category: "electronics" },
    { id: 2, name: "t-shirt", category: "clothing" },
    { id: 3, name: "phone", category: "electronics" },
    { id: 4, name: "jeans", category: "clothing" },
]

let selectedCategory: string = "electronics";

function getFilteredProducts(): Product[] {
    if (selectedCategory === "electronics") {
        return product;
    }
    return product.filter(item => item.category === selectedCategory)
}