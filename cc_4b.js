// Step 2
let products = [
    {sku:'001', name:'apple', category:'fruit', price: 1, inventory: 10},
    {sku:'002', name:'banana', category:'fruit', price: 0.5, inventory: 50},
    {sku:'003', name:'lettuce', category:'vegetable', price: 2, inventory: 20},
    {sku:'004', name:'orange juice', category:'juice', price: 6, inventory: 25},
    {sku:'005', name:'soap', category:'soap', price: 10, inventory: 30},
]

//Step 3
for (let product of products) {

    switch (product.category) {
        case 'fruit':
            discount = .20; // 20% discount
            break;
        case 'vegetable':
            discount = 0.15;   // 15% discount
            break;
        case 'juice':
            discount = 0.1;    // 10% discount
            break;
        case 'soap':
            discount = 0.1;   // 10% discount
            break;
        default:
            discount = 1;  // no discount
            break;
    }
     // Place promoPrice integration here
     let promoPrice = product.price * (1 - discount);
     console.log(`The promo price for ${product.name} is $${promoPrice}`);
} 

console.log('----------------------------------');

// Add promoPrice to each product in the products array
products.forEach(product => product.promoPrice = product.price * (1 - discount));

// Display updated products array
console.log(products);

console.log('----------------------------------'); 

// Step 4
const customers = [
    {id: 1, customerType: 'regular', couponCode: 'SAVE10', orderTotal: 100},
    {id: 2, customerType: 'student', couponCode: 'FREESHIP', orderTotal: 50},
    {id: 3, customerType: 'senior', couponCode: null, orderTotal: 75},
    {id: 4, customerType: 'regular', couponCode: 'FREESHIP', orderTotal: 200},
    {id: 5, customerType: 'student', couponCode: null, orderTotal: 30},
]

for (let customer of customers) {

    if (customer.customerType === 'student') {
        typeDiscount = 0.05; // 5% discount
    } else if (customer.customerType === 'senior') {
        typeDiscount = 0.07;   // 7% discount
    } else {
        typeDiscount = 0;  // no discount
    }

    let orderTotal = customer.orderTotal * (1 - typeDiscount)
    console.log(`The final price for customer ${customer.id} is $${orderTotal}`);
}

console.log('----------------------------------');

customers.forEach(customer => customer.orderTotal = customer.orderTotal * (1 - typeDiscount));

// Display updated customers array
console.log(customers);

console.log('----------------------------------');

// Step 5
for (let customer of customers) {

    if (customer.couponCode === 'SAVE10') {
        codeDiscount = 10; // $10 off
    } else if (customer.couponCode === 'FREESHIP') {
        codeDiscount = 5;   // $5 off
    } else {
        codeDiscount = 0;  // no discount
    }

    let finalPrice = customer.orderTotal - codeDiscount
    console.log(`The final price for customer ${customer.id} is $${finalPrice}`);
}

// Step 6
