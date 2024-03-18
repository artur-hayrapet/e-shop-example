type User = {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  email: string;
}
type Product = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  count: number;
  price: number;
}
type CartItem = {
  product: Product;
  count: number;
}
type Order = {
  product: Product;
  userId: number;
}
