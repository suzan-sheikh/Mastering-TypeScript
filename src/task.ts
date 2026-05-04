//* Task 1: The "Optional" Shopping Cart

type CartItem = {
  name: string;
  price: number;
  quantity?: number;
};

//* Example-1
const calculateTotal = ({ price, quantity = 1 }: CartItem): number =>
  price * quantity;

console.log(calculateTotal({ name: "suzan", price: 10, quantity: 10 }));
console.log(calculateTotal({ name: "suzan", price: 20 }));

//* Example-2
function calculateTotal2(item: CartItem): number{
    const {price, quantity = 1} = item;
    return price * quantity;
}

console.log(calculateTotal2({name: 'suzan' ,price: 10, }));
