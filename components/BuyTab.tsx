// interface Product {
//   id: string;
//   name: string;
//   price: BigNumber;
//   isActive: boolean;
// }
// const products: Product[] = [];
// for (let i = 0; ; i++) {
//   try {
//     const product = await contract.allProducts(i);
//     products.push({
//       id: product.productId,
//       name: product.name,
//       price: product.price,
//       isActive: product.isActive,
//     });
//   } catch (error) {
//     break;
//   }
// }
// console.log("products:");
// products.forEach((product) => console.log({ product }));
