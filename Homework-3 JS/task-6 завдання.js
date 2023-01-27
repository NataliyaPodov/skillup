const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
  ];
  
  const calculateTotalPrice = function (allProdcuts, productName) {
    
   products.filter(({name})=>name===productName);
   return products.reduce((total, {price, quantity}) =>total + price*quantity, 0);

    
  };


  console.log(calculateTotalPrice(products, 'Радар'));

console.log(calculateTotalPrice(products, 'Дроїд'));

