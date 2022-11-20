import { Order } from "../types/Order";

const orders: Order[] = [
  {
    _id: "637a261ea5e0791f2a4df2d4",
    table: "2",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Suco de laranja",

          imagePath: "1668876604429-suco-de-laranja.png",
          price: 5,
        },
        quantity: 1,
        _id: "637a261ea5e0791f2a4df2d5",
      },
      {
        product: {
          name: "Pizza Frango c/ Catupity",
          imagePath: "1668876529030-frango-catupiry.png",
          price: 40,
        },
        quantity: 1,
        _id: "637a261ea5e0791f2a4df2d6",
      },
    ],
  },
];
