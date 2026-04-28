//* Task 1: The "Optional" Shopping Cart
//? Scenario: You are building a checkout system. Users might buy one item by default, or specify a bulk quantity. 

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
//? Scenario: A user signs up as a basic Person, but when hired, they gain JobDetails. An Employee is a union of both.

type Person = {name: string; age: number};
type JobDetails = {role: string; salary: number};

type Employee = Person & JobDetails;

const getProfile = (inputEmp: Employee):string => {
  return `Name: [${inputEmp.name}], Role: [${inputEmp.role}]`
};

console.log(getProfile({name: 'suzan', age: 30, role: 'admin', salary: 40}));


//* Task 3: The "Safe" Data Fetcher

type UserResponse = {
  info?:{
    address?:{
      zipCode?: string;
    }  
  }
}

const getZipCode = (userResponse: UserResponse) => {
  return userResponse
}

