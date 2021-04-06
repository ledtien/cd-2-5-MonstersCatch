// Assignment 1
const inventors = [
  "Albert Einstein",
  "Issac Newton",
  "Galileo Galilei",
  "Marie Curie",
  "Johannes Kepler",
  "Nicolaus Copernicus",
  "Max Planck",
  "Katherine Blodgett",
  "Ada Lovelace",
  "Sarah E. Goode",
  "Lise Meitner",
  "Hanna Hammarstrom",
];

const nameWithA = inventors.filter( function checkName(inventor) {
      return inventor.startsWith("A") }
);
console.log(nameWithA);

  const sameFirstAndLastName = inventors.filter(function (name) {
      return name.split(" ")[0][0] === name.split(" ")[1][0]
  })
console.log(sameFirstAndLastName);

  inventors.sort();
  console.log(inventors);

  inventors.sort((a, b) => a.length - b.length );
  console.log(inventors);

  const lenghtOfName = inventors.map((fullName) => fullName.length);
  console.log (lenghtOfName);

  const upperCaseName = inventors.map((upperCase) => upperCase.toUpperCase());
  console.log(upperCaseName);

  

  const firstName = inventors.reduce (
      (prev, current) =>  prev.split(" ")[0] + current.split(" ")[0] + " "
  );
  console.log(firstName)

    
    const sum = inventors
                  .map((name) => name.length) 
                  .reduce(
                      (accumulator, currentValue) => accumulator + currentValue
       ) 
        console.log(sum)
//Assignment 2
let startAmount = 1000;
let transactions = [
  { currency: "USD", amount: 12, type: "withdrawal" },
  { currency: "USD", amount: 104, type: "withdrawal" },
  { currency: "USD", amount: 150, type: "deposit" },
  { currency: "USD", amount: 150, type: "deposit" },
  { currency: "USD", amount: 250, type: "withdrawal" },
  { currency: "USD", amount: 500, type: "deposit" },
  { currency: "USD", amount: 447, type: "withdrawal" },
  { currency: "USD", amount: 120, type: "deposit" },
  { currency: "USD", amount: 58, type: "withdrawal" },
  { currency: "USD", amount: 90, type: "withdrawal" },
];
const usdToVND = 23000;

function transactionHistory() {
  console.log({Balance: startAmount});
  console.log("Transaction History: ")
  transactions.forEach((transaction) =>{
  if (transaction.type === "withdrawal") {
      startAmount = startAmount - transaction.amount;
      console.log(`"You withdrew" +${transaction.amount} "." + "The new balance is" + ${startAmount}`);
  } else {
      startAmount = startAmount + transaction.amount;
      console.log(`'You deposited' +${transaction.amount} '.' + 'The new balance is' + ${startAmount}`);
    }
  });
} 
transactionHistory()


const useReduceToCal = transactions.reduce((accumulator, transaction) => {
  if (transaction.type === 'withdrawal') {
    accumulator -= transaction.amount;
  } else {
    accumulator += transaction.amount;
  }
  return accumulator;
}, startAmount);

console.log(useReduceToCal);

let expense = transactions.filter((transaction) => transaction.type === "withdrawal");
let income = transactions.filter((transaction) => transaction.type === "deposit");

const sumOfExpense = expense.reduce((accumulate, transaction) =>  accumulate += transaction.amount, 0);
const sumOfIncome = income.reduce((accumulate, transaction) =>  accumulate += transaction.amount, 0);
console.log(sumOfExpense);
console.log(sumOfIncome);

const changeToVND = transactions.map((transaction) => ({
  currency: "VND",
  amount: transaction.amount * usdToVND,
  type: transaction.type
}));

console.log(changeToVND)

const sortByAmount = transactions.sort ((a, b) => a.amount - b.amount);
const sortByType = transactions.sort ((a, b) => {
  if (a.type > b.type) {
    return 1;
  } else if (a.type < b.type) {
    return -1;
  } else if (a.type === b.type) {
    return 0;
  }
});
console.log(sortByAmount)
console.log(sortByType)

const sortByAmountOfExpense = expense.sort ((a, b) => a.amount - b.amount);
const sortByAmountOfIncome = income.sort ((a, b) => a.amount - b.amount);

console.log(sortByAmountOfExpense)
console.log(sortByAmountOfIncome)


//Assignment 3

let shoppingCart = [
  { id: "A31", item: "T-shirt", price: 9.9, quantity: 5 },
  { id: "A32", item: "Jacket", price: 99.9, quantity: 1 },
  { id: "A33", item: "Skirt", price: 19.9, quantity: 2 },
  { id: "A34", item: "Ankle Pant", price: 39.9, quantity: 3 },
  { id: "A35", item: "Polo shirt", price: 14.9, quantity: 3 },
  { id: "A36", item: "Chino Short", price: 29.9, quantity: 2 },
  { id: "A37", item: "Easy Short", price: 19.9, quantity: 2 },
];


  const PriceOfItemInCart = shoppingCart.map((item) => item.price * item.quantity)
  console.log(PriceOfItemInCart)

  const totalPrice = PriceOfItemInCart.reduce((accumulate, item) => accumulate + item, 0);
  console.log(totalPrice)

  function removeItemsFromCart (productId, quantity) {
    const afterRemoveItems = shoppingCart.filter((item) => {
      if (item.id === productId) {
        item.quantity = item.quantity - quantity;
        if (item.quantity <= 0 ) return false;
      }
      return item;
    });
    console.log(afterRemoveItems)
  }
  removeItemsFromCart("A36", 1);

  function addItemToCart (product, quantity) {
    const afterRemoveItems = shoppingCart.filter((item) => {
      if (item.id === product) {
        item.quantity = item.quantity + quantity
      }
      else if (item.id !== product ) {
        shoppingCart.push(product)
      };
      return item;
      }
      
    );
    console.log(afterRemoveItems)
  }
  
  let product = {
    id: 'A17',
    item: 'Black Glass',
    price: 9.9,}

  addItemToCart(product, 6)