"use strict";
//* Task 1: The "Optional" Shopping Cart
Object.defineProperty(exports, "__esModule", { value: true });
//* Example-1
const calculateTotal = ({ price, quantity = 1 }) => price * quantity;
console.log(calculateTotal({ name: "suzan", price: 10, quantity: 10 }));
console.log(calculateTotal({ name: "suzan", price: 20 }));
//* Example-2
function calculateTotal2(item) {
    const { price, quantity = 1 } = item;
    return price * quantity;
}
console.log(calculateTotal2({ name: 'suzan', price: 10, }));
//# sourceMappingURL=task.js.map