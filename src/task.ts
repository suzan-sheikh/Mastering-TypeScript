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

//* Example-2
function calculateTotal2(item: CartItem): number {
  const { price, quantity = 1 } = item;
  return price * quantity;
}
console.log(calculateTotal2({ name: "suzan", price: 10, quantity: 10 }));

//* Task 2: Merging User Profiles

type Person = {name: string; age: number};
type JobDetails = {role: string; salary: number};

type Employee = Person & JobDetails;

const getProfile = (inputEmp: Employee):string => {
  return `Name: [${inputEmp.name}], Role: [${inputEmp.role}]`
};

console.log(getProfile({name: 'suzan', age: 30, role: 'admin', salary: 40}));
