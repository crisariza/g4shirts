const {
  conn,
  Role,
  User,
  Category,
  Product,
  ProductPhotos,
  ProductCategories,
  ProductSizes,
  Review,
  Order,
  OrderDetails,
} = require("./src/db.js");

const { API_URL } = process.env;
async function bulkScript() {
  const roles = [
    {
      name: "admin",
      description: "admin",
    },
    {
      name: "user",
      description: "user",
    },
  ];
  await Role.bulkCreate(roles);
  console.log("roles table up");

  const users = [
    {
      email: "admin@gmail.com",
      password: "$2b$12$FoCwEyOzj52QtusIIu4RYOE.LypviWF6jXVRMYWHAkJyLwVDb3Nkq", // testinG1!
      name: "Admin",
      surname: "Seller",
      birthday: "2000-01-01",
      country: "Argentina",
      state: "Buenos Aires",
      city: "Lanus",
      postalcode: "1824",
      street: "9 de Julio",
      number: "1657",
      roleId: 1,
    },
    {
      email: "work@gmail.com",
      password: "$2b$12$FoCwEyOzj52QtusIIu4RYOE.LypviWF6jXVRMYWHAkJyLwVDb3Nkq", // testinG1!
      name: "Work",
      surname: "Home",
      birthday: "2000-01-01",
      country: "Argentina",
      state: "Buenos Aires",
      city: "Lanus",
      postalcode: "1824",
      street: "9 de Julio",
      number: "1657",
      roleId: 1,
    },
    {
      email: "user@gmail.com",
      password: "$2b$12$FoCwEyOzj52QtusIIu4RYOE.LypviWF6jXVRMYWHAkJyLwVDb3Nkq", // testinG1!
      name: "User",
      surname: "Customer",
      birthday: "2000-01-01",
      country: "Argentina",
      state: "Buenos Aires",
      city: "Lanus",
      postalcode: "1824",
      street: "9 de Julio",
      number: "1657",
      roleId: 2,
    },
    {
      email: "buyer@gmail.com",
      password: "$2b$12$FoCwEyOzj52QtusIIu4RYOE.LypviWF6jXVRMYWHAkJyLwVDb3Nkq", // testinG1!
      name: "Buyer",
      surname: "Customer",
      birthday: "2000-01-01",
      country: "Argentina",
      state: "Buenos Aires",
      city: "Lanus",
      postalcode: "1824",
      street: "9 de Julio",
      number: "1657",
      roleId: 2,
    },
  ];
  await User.bulkCreate(users);
  console.log("users table up");

  const categories = [
    {
      name: "Art",
      description: "Famous artists.",
    },
    {
      name: "Singers",
      description: "The greatest singers of all time.",
    },
    {
      name: "Bands",
      description: "Bands who changed the rock world.",
    },
  ];
  await Category.bulkCreate(categories);
  console.log("categories table up");

  const products = [
    {
      name: "Miguel Angel",
      description:
        "Italian sculptor, painter, architect and poet of the High Renaissance born in the Republic of Florence.",
      price: 10,
    },
    {
      name: "Freddie Mercury",
      description:
        "British singer, songwriter, record producer, and lead vocalist of the rock band Queen.",
      price: 15,
    },
    {
      name: "Axl Rose",
      description: "American musician, singer, songwriter and record producer.",
      price: 15,
    },
    {
      name: "Salvador Dali",
      description:
        "Spanish surrealist artist renowned for his technical skill and precise draftsmanship.",
      price: 20,
    },
    {
      name: "Jim Morrison",
      description:
        "Was an American singer, songwriter and poet, who was the lead vocalist of the rock band the Doors.",
      price: 30,
    },
    {
      name: "Slash",
      description:
        "He is best known as the lead guitarist of the American hard rock band Guns N' Roses.",
      price: 30,
    },
    {
      name: "Charly Garcia",
      description: "Argentine singer-songwriter, musician and record producer",
      price: 20,
    },
    {
      name: "Chuck Berry",
      description:
        "American singer, songwriter and guitarist, and one of the pioneers of rock and roll music.",
      price: 30,
    },
    {
      name: "Elvis",
      description:
        "He is regarded as one of the most significant cultural icons of the 20th century.",
      price: 50,
    },
    {
      name: "Fito Paez",
      description:
        "Paez was born in Rosario, Santa Fe Province; his real name is Rodolfo Paez, like his father.",
      price: 25,
    },
    {
      name: "Fito en Vivo",
      description:
        "Paez was born in Rosario, Santa Fe Province; his real name is Rodolfo Paez, like his father.",
      price: 30,
    },
    {
      name: "Mick Jagger",
      description:
        "Lead singer and one of the founder members of the Rolling Stones.",
      price: 20,
    },
    {
      name: "El pibe Mick",
      description:
        "Lead singer and one of the founder members of the Rolling Stones.",
      price: 55,
    },
    {
      name: "Kurt Cobain",
      description:
        "American singer-songwriter and musician, best known as the guitarist, primary songwriter and frontman of the rock band Nirvana.",
      price: 15,
    },
    {
      name: "Jagger",
      description:
        "Lead singer and one of the founder members of the Rolling Stones.",
      price: 30,
    },
    {
      name: "Morrisey",
      description:
        " He came to prominence as the frontman of rock band the Smiths.",
      price: 10,
    },
    {
      name: "Paul McCartney",
      description: "The coolest vegan. Also Beatles member..",
      price: 35,
    },
    {
      name: "Ringo Starr",
      description:
        "He occasionally sang lead vocals with the group, usually for one song on each album.",
      price: 40,
    },
    {
      name: "The Beatles",
      description: "Greatest band of all time.",
      price: 30,
    },
    {
      name: "John Lennon",
      description:
        "Who achieved worldwide fame as the founder, co-lead vocalist, and rhythm guitarist of the Beatles.",
      price: 30,
    },
  ];
  await Product.bulkCreate(products);
  console.log("products table up");

  const product_photos = [
    {
      url: `${API_URL}/products/photo/CARD1`,
      productId: 1,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL1`,
      productId: 1,
    },
    {
      url: `${API_URL}/products/photo/CARD2`,
      productId: 2,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL2`,
      productId: 2,
    },
    {
      url: `${API_URL}/products/photo/CARD3`,
      productId: 3,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL3`,
      productId: 3,
    },
    {
      url: `${API_URL}/products/photo/CARD4`,
      productId: 4,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL4`,
      productId: 4,
    },
    {
      url: `${API_URL}/products/photo/CARD5`,
      productId: 5,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL5`,
      productId: 5,
    },
    {
      url: `${API_URL}/products/photo/CARD6`,
      productId: 6,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL6`,
      productId: 6,
    },
    {
      url: `${API_URL}/products/photo/CARD7`,
      productId: 7,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL7`,
      productId: 7,
    },
    {
      url: `${API_URL}/products/photo/CARD8`,
      productId: 8,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL8`,
      productId: 8,
    },
    {
      url: `${API_URL}/products/photo/CARD9`,
      productId: 9,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL9`,
      productId: 9,
    },
    {
      url: `${API_URL}/products/photo/CARD10`,
      productId: 10,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL10`,
      productId: 10,
    },
    {
      url: `${API_URL}/products/photo/CARD11`,
      productId: 11,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL11`,
      productId: 11,
    },
    {
      url: `${API_URL}/products/photo/CARD12`,
      productId: 12,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL12`,
      productId: 12,
    },
    {
      url: `${API_URL}/products/photo/CARD13`,
      productId: 13,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL13`,
      productId: 13,
    },
    {
      url: `${API_URL}/products/photo/CARD14`,
      productId: 14,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL14`,
      productId: 14,
    },
    {
      url: `${API_URL}/products/photo/CARD15`,
      productId: 15,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL15`,
      productId: 15,
    },
    {
      url: `${API_URL}/products/photo/CARD16`,
      productId: 16,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL16`,
      productId: 16,
    },
    {
      url: `${API_URL}/products/photo/CARD17`,
      productId: 17,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL17`,
      productId: 17,
    },
    {
      url: `${API_URL}/products/photo/CARD18`,
      productId: 18,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL18`,
      productId: 18,
    },
    {
      url: `${API_URL}/products/photo/CARD19`,
      productId: 19,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL19`,
      productId: 19,
    },
    {
      url: `${API_URL}/products/photo/CARD20`,
      productId: 20,
    },
    {
      url: `${API_URL}/products/photo/PRODUCT-DETAIL20`,
      productId: 20,
    },
  ];
  await ProductPhotos.bulkCreate(product_photos);
  console.log("product_photos table_up");

  const product_categories = [
    { categoryId: 1, productId: 1 },
    { categoryId: 2, productId: 2 },
    { categoryId: 3, productId: 2 },
    { categoryId: 2, productId: 3 },
    { categoryId: 3, productId: 3 },
    { categoryId: 1, productId: 4 },
    { categoryId: 2, productId: 5 },
    { categoryId: 3, productId: 6 },
    { categoryId: 2, productId: 7 },
    { categoryId: 3, productId: 7 },
    { categoryId: 2, productId: 8 },
    { categoryId: 2, productId: 9 },
    { categoryId: 2, productId: 10 },
    { categoryId: 2, productId: 11 },
    { categoryId: 2, productId: 12 },
    { categoryId: 3, productId: 12 },
    { categoryId: 2, productId: 13 },
    { categoryId: 3, productId: 13 },
    { categoryId: 2, productId: 14 },
    { categoryId: 3, productId: 14 },
    { categoryId: 2, productId: 15 },
    { categoryId: 3, productId: 15 },
    { categoryId: 2, productId: 16 },
    { categoryId: 2, productId: 17 },
    { categoryId: 3, productId: 17 },
    { categoryId: 2, productId: 18 },
    { categoryId: 3, productId: 18 },
    { categoryId: 3, productId: 19 },
    { categoryId: 2, productId: 20 },
    { categoryId: 3, productId: 20 },
  ];
  await ProductCategories.bulkCreate(product_categories);
  console.log("products_categories table up");

  const product_sizes = [
    { size: "XS", stock: 1, productId: 1 },
    { size: "S", stock: 10, productId: 1 },
    { size: "M", stock: 15, productId: 1 },
    { size: "L", stock: 15, productId: 1 },
    { size: "XL", stock: 15, productId: 1 },
    { size: "XXL", stock: 5, productId: 1 },
    { size: "XS", stock: 5, productId: 2 },
    { size: "S", stock: 10, productId: 2 },
    { size: "M", stock: 15, productId: 2 },
    { size: "L", stock: 25, productId: 2 },
    { size: "XL", stock: 15, productId: 2 },
    { size: "XXL", stock: 5, productId: 2 },
    { size: "XS", stock: 30, productId: 3 },
    { size: "S", stock: 10, productId: 3 },
    { size: "M", stock: 5, productId: 3 },
    { size: "L", stock: 55, productId: 3 },
    { size: "XL", stock: 25, productId: 3 },
    { size: "XXL", stock: 0, productId: 3 },
    { size: "XS", stock: 45, productId: 4 },
    { size: "S", stock: 15, productId: 4 },
    { size: "M", stock: 0, productId: 4 },
    { size: "L", stock: 25, productId: 4 },
    { size: "XL", stock: 45, productId: 4 },
    { size: "XXL", stock: 15, productId: 4 },
    { size: "XS", stock: 65, productId: 5 },
    { size: "S", stock: 0, productId: 5 },
    { size: "M", stock: 45, productId: 5 },
    { size: "L", stock: 55, productId: 5 },
    { size: "XL", stock: 15, productId: 5 },
    { size: "XXL", stock: 25, productId: 5 },
    { size: "XS", stock: 15, productId: 6 },
    { size: "S", stock: 25, productId: 6 },
    { size: "M", stock: 35, productId: 6 },
    { size: "L", stock: 55, productId: 6 },
    { size: "XL", stock: 45, productId: 6 },
    { size: "XXL", stock: 0, productId: 6 },
    { size: "XS", stock: 1, productId: 7 },
    { size: "S", stock: 10, productId: 7 },
    { size: "M", stock: 15, productId: 7 },
    { size: "L", stock: 15, productId: 7 },
    { size: "XL", stock: 15, productId: 7 },
    { size: "XXL", stock: 5, productId: 7 },
    { size: "XS", stock: 20, productId: 8 },
    { size: "S", stock: 30, productId: 8 },
    { size: "M", stock: 50, productId: 8 },
    { size: "L", stock: 80, productId: 8 },
    { size: "XL", stock: 10, productId: 8 },
    { size: "XXL", stock: 55, productId: 8 },
    { size: "XS", stock: 12, productId: 9 },
    { size: "S", stock: 30, productId: 9 },
    { size: "M", stock: 18, productId: 9 },
    { size: "L", stock: 10, productId: 9 },
    { size: "XL", stock: 30, productId: 9 },
    { size: "XXL", stock: 35, productId: 9 },
    { size: "XS", stock: 20, productId: 10 },
    { size: "S", stock: 10, productId: 10 },
    { size: "M", stock: 15, productId: 10 },
    { size: "L", stock: 30, productId: 10 },
    { size: "XL", stock: 15, productId: 10 },
    { size: "XXL", stock: 5, productId: 10 },
    { size: "XS", stock: 1, productId: 11 },
    { size: "S", stock: 10, productId: 11 },
    { size: "M", stock: 15, productId: 11 },
    { size: "L", stock: 15, productId: 11 },
    { size: "XL", stock: 15, productId: 11 },
    { size: "XXL", stock: 55, productId: 11 },
    { size: "XS", stock: 1, productId: 12 },
    { size: "S", stock: 10, productId: 12 },
    { size: "M", stock: 15, productId: 12 },
    { size: "L", stock: 150, productId: 12 },
    { size: "XL", stock: 15, productId: 12 },
    { size: "XXL", stock: 85, productId: 12 },
    { size: "XS", stock: 15, productId: 13 },
    { size: "S", stock: 20, productId: 13 },
    { size: "M", stock: 15, productId: 13 },
    { size: "L", stock: 15, productId: 13 },
    { size: "XL", stock: 15, productId: 13 },
    { size: "XXL", stock: 5, productId: 13 },
    { size: "XS", stock: 25, productId: 14 },
    { size: "S", stock: 10, productId: 14 },
    { size: "M", stock: 15, productId: 14 },
    { size: "L", stock: 30, productId: 14 },
    { size: "XL", stock: 15, productId: 14 },
    { size: "XXL", stock: 5, productId: 14 },
    { size: "XS", stock: 10, productId: 15 },
    { size: "S", stock: 10, productId: 15 },
    { size: "M", stock: 50, productId: 15 },
    { size: "L", stock: 15, productId: 15 },
    { size: "XL", stock: 8, productId: 15 },
    { size: "XXL", stock: 5, productId: 15 },
    { size: "XS", stock: 1, productId: 16 },
    { size: "S", stock: 10, productId: 16 },
    { size: "M", stock: 15, productId: 16 },
    { size: "L", stock: 15, productId: 16 },
    { size: "XL", stock: 15, productId: 16 },
    { size: "XXL", stock: 5, productId: 16 },
    { size: "XS", stock: 17, productId: 17 },
    { size: "S", stock: 10, productId: 17 },
    { size: "M", stock: 15, productId: 17 },
    { size: "L", stock: 15, productId: 17 },
    { size: "XL", stock: 15, productId: 17 },
    { size: "XXL", stock: 55, productId: 17 },
    { size: "XS", stock: 20, productId: 18 },
    { size: "S", stock: 10, productId: 18 },
    { size: "M", stock: 30, productId: 18 },
    { size: "L", stock: 15, productId: 18 },
    { size: "XL", stock: 15, productId: 18 },
    { size: "XXL", stock: 45, productId: 18 },
    { size: "XS", stock: 40, productId: 19 },
    { size: "S", stock: 12, productId: 19 },
    { size: "M", stock: 15, productId: 19 },
    { size: "L", stock: 20, productId: 19 },
    { size: "XL", stock: 15, productId: 19 },
    { size: "XXL", stock: 85, productId: 19 },
    { size: "XS", stock: 40, productId: 20 },
    { size: "S", stock: 12, productId: 20 },
    { size: "M", stock: 15, productId: 20 },
    { size: "L", stock: 20, productId: 20 },
    { size: "XL", stock: 15, productId: 20 },
    { size: "XXL", stock: 85, productId: 20 },
  ];
  await ProductSizes.bulkCreate(product_sizes);
  console.log("product_sizes table up");

  const reviews = [
    {
      title: "Ddin't liked it",
      description: "The product is really bad.",
      stars: 1,
      userId: 3,
      productId: 1,
    },
    {
      title: "Meh",
      description: "It's not good..",
      stars: 2,
      userId: 3,
      productId: 2,
    },
    {
      title: "Excellent",
      description: "I love it.",
      stars: 5,
      userId: 3,
      productId: 3,
    },
    {
      title: "Nice",
      description: "I kinda like it.",
      stars: 4,
      userId: 3,
      productId: 4,
    },
    {
      title: "Good",
      description: "Loved the t-shirts!.",
      stars: 5,
      userId: 3,
      productId: 5,
    },
    {
      title: "Excellent",
      description: "So comfy!.",
      stars: 5,
      userId: 3,
      productId: 6,
    },
  ];
  await Review.bulkCreate(reviews);
  console.log("reviews table up");

  const orders = [
    { userId: 3, state: "Active" },
    { userId: 3, state: "Canceled" },
    { userId: 3, state: "Complete" },
  ];
  await Order.bulkCreate(orders);
  console.log("orders table up");

  const order_details = [
    {
      name: "Miguel Angel",
      url: `${API_URL}/products/photo/CARD1`,
      price: 10,
      amount: 1,
      size: "XS",
      productId: 1,
      orderId: 1,
    },
    {
      name: "Freddie Mercury",
      url: `${API_URL}/products/photo/CARD2`,
      price: 10,
      amount: 1,
      size: "S",
      productId: 2,
      orderId: 1,
    },
    {
      name: "Axl Rose",
      url: `${API_URL}/products/photo/CARD3`,
      price: 20,
      amount: 1,
      size: "M",
      productId: 3,
      orderId: 1,
    },
    {
      name: "Salvador Dali",
      url: `${API_URL}/products/photo/CARD4`,
      price: 20,
      amount: 1,
      size: "L",
      productId: 4,
      orderId: 1,
    },
    {
      name: "Jim Morrison",
      url: `${API_URL}/products/photo/CARD5`,
      price: 30,
      amount: 1,
      size: "XL",
      productId: 5,
      orderId: 2,
    },
    {
      name: "Slash",
      url: `${API_URL}/products/photo/CARD6`,
      price: 30,
      amount: 1,
      size: "XXL",
      productId: 6,
      orderId: 2,
    },
    {
      name: "Miguel Angel",
      url: `${API_URL}/products/photo/CARD1`,
      price: 10,
      amount: 1,
      size: "XS",
      productId: 1,
      orderId: 2,
    },
    {
      name: "Freddie Mercury",
      url: `${API_URL}/products/photo/CARD2`,
      price: 10,
      amount: 1,
      size: "S",
      productId: 2,
      orderId: 2,
    },
    {
      name: "Axl Rose",
      url: `${API_URL}/products/photo/CARD3`,
      price: 20,
      amount: 1,
      size: "M",
      productId: 3,
      orderId: 3,
    },
    {
      name: "Salvador Dali",
      url: `${API_URL}/products/photo/CARD4`,
      price: 20,
      amount: 1,
      size: "L",
      productId: 4,
      orderId: 3,
    },
    {
      name: "Jim Morrison",
      url: `${API_URL}/products/photo/CARD5`,
      price: 30,
      amount: 1,
      size: "XL",
      productId: 5,
      orderId: 3,
    },
    {
      name: "Slash",
      url: `${API_URL}/products/photo/CARD6`,
      price: 30,
      amount: 1,
      size: "XXL",
      productId: 6,
      orderId: 3,
    },
  ];
  await OrderDetails.bulkCreate(order_details);
  console.log("order_details table up");
}

module.exports = {
  bulkScript,
};
