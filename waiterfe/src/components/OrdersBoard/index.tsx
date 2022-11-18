import { Order } from '../../types/Order';
import { Board, OrdersContainer } from './styles';

type OrdersBoardProps = {
    icon: string;
    title: string;
    orders: Order[];
}


export function OrdersBoard({ icon, title, orders }: OrdersBoardProps){
    return (
        <Board>
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>(1)</span>
            </header>
            {orders.length > 0 && (
                <OrdersContainer>
                    { orders.map(
                        (order) => (
                            <button type='button' key={order._id}>
                                <strong>Mesa {order.table}</strong>
                                <span>{order.products.length} itens</span>
                            </button>)
                    )}
                </OrdersContainer>

            )            }
        </Board>
    );
}