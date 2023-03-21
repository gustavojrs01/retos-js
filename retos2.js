const products = [
    { name: "product1", price: 10, inStock: true },
    { name: "product2", price: 20, inStock: false },
    { name: "product3", price: 15, inStock: true },
    { name: "product4", price: 5, inStock: false },
  ]

function sortByAvailabilityAndPrice(products) {     
    return [...products].sort((a,b)=>a.price - b.price).sort((a,b)=>b.inStock - a.inStock)
}
// function sortByAvailabilityAndPrice(products) {
//     let newList = [...products]    
//     newList.sort((a,b)=>a.price - b.price)
//     newList.sort((a,b)=>b.inStock - a.inStock) 
//     return newList
// }




// function sortByAvailabilityAndPrice(products) {
//     // Tu código aquí 👈
//     const productsSorted = [...products];
//     productsSorted.sort((a, b) => a.price - b.price)
//     productsSorted.sort((a, b) => b.inStock - a.inStock)
//     return productsSorted;
//   }

  console.log(sortByAvailabilityAndPrice(products))