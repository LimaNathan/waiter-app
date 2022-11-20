import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: "6377e15c64c1023b486aa310",
    table: "3",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Suco de laranja",
          imagePath: "1668876604429-suco-de-laranja.png",
          price: 5,
        },
        quantity: 2,
        _id: "6377e15c64c1023b486aa311",
      },
    ],
  },
];
export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕢" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="🧑🏽‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
}
