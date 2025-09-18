let products = [
    {sku:'001', name:'apple', category:'fruit', price: 1, inventory: 10},
    {sku:'002', name:'banana', category:'fruit', price: 0.5, inventory: 50},
    {sku:'003', name:'lettuce', category:'vegetable', price: 2, inventory: 20},
    {sku:'004', name:'orange juice', category:'juice', price: 6, inventory: 25},
    {sku:'005', name:'soap', category:'soap', price: 10, inventory: 30},
]

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

let customerType = ['regular', 'student', 'senior'];

for (let product of products) {

    if (customerType === 'student') {
            couponCode = 0.05; // 5% discount
    } else if (customerType === 'senior') {
            couponCode =  0.07;   // 7% discount
    }

    let finalPrice = promoPrice * (1 - couponCode);
    console.log(`The final price for ${product.name} is $${finalPrice}`);
}

let couponCode = ['SAVE10', 'FREESHIP'];

if (couponCode === 'SAVE10') {
        if (promoPrice >= 50) {
            promoPrice = promoPrice - 10; // $10 off for orders over $50
        }
} else if (couponCode === 'FREESHIP') {
        promoPrice = promoPrice - 5; // $5 off for free shipping
}
