// Task 1: Object Properties - Customer Profile
let customer = {
    name: "Jeeny Tran",
    age: 35,
    email: "jennytran@email.com"
};
console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Age: ${customer.age}`);
console.log(`Customer Email: ${customer.email}`);

// Task 2: Object Methods - Order Details
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function() {
        console.log(`Order ID: ${this.orderId}, Total: $${this.totalAmount}, Status: ${this.status}`);
    }
};
order.displayOrder();

// Task 3: Array Manipulation - Shopping Cart
let cartItems = ["Laptop", "Mouse", "Keyboard"];
cartItems.push("Monitor");
cartItems.pop();
cartItems.unshift("Tablet");
cartItems.shift();
console.log("Final Cart Items:", cartItems);

// Task 4: Map Method - Price Adjustments
let prices = [100, 200, 300];
let discountedPrices = prices.map(price => price * 0.9);
console.log("Discounted Prices:", discountedPrices);

// Task 5: Filter Method - Product Availability
let inventory = [5, 0, 12, 8, 0];
let availableProducts = inventory.filter(stock => stock > 0);
console.log("Available Products:", availableProducts);

// Task 6: Reduce Method - Revenue Calculation
let sales = [500, 300, 200, 400];
let totalRevenue = sales.reduce((sum, sale) => sum + sale, 0);
console.log(`Total Revenue: $${totalRevenue}`);

// Task 7: Find Method - Customer Search
let customers = ["Jaden", "Krystal", "Bill", "Hazel"];
let foundCustomer = customers.find(customer => customer === "Bill");
console.log(`Customer Found: ${foundCustomer}`);

// Task 8: Function Declaration - Tax Calculation
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}
console.log(`Calculated Tax: $${calculateTax(200, 0.08)}`);

// Task 9: Function Expression - Discount Application
const applyDiscount = function(price, discount) {
    return price - (price * (discount / 100));
};
console.log(`Discounted Price: $${applyDiscount(100, 10)}`);

// Task 10: Arrow Function - Loyalty Points
const calculatePoints = purchaseAmount => Math.floor(purchaseAmount / 10);
console.log(`Loyalty Points Earned: ${calculatePoints(150)}`);