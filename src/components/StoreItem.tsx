import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
};

// object-fit: contain the image keeps its aspect ratio, but is resized to fit within the given dimension
// align-items-baseline makes it so name and price 'sit' on the same line same level
// fs-2 = fontSize 2 (increasing it)
// ms-2 = marginStart 2 (margin on the left)
// text-muted to make price greyish color
// mt-auto will fill all available space in flex container (when there are + - remove buttons and height grows other items with addToCart btn will also have that height)

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
	const {
		getItemQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
		removeFromCart,
	} = useShoppingCart();
	const quantity = getItemQuantity(id);
	return (
		<Card>
			<Card.Img
				variant="top"
				src={imgUrl}
				height="200px"
				style={{ objectFit: "cover" }}
			/>
			<Card.Body className="d-flex flex-column">
				<Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
					<span className="fs-2">{name}</span>
					<span className="ms-2 text-muted">{formatCurrency(price)}</span>
				</Card.Title>
				<div className="mt-auto">
					{quantity === 0 ? (
						<Button className="w-100" onClick={() => increaseCartQuantity(id)}>
							+ Add To Cart
						</Button>
					) : (
						<div
							className="d-flex align-items-center flex-column"
							style={{ gap: ".5rem" }}
						>
							<div
								className="d-flex align-items-center justify-content-center"
								style={{ gap: ".5rem" }}
							>
								<Button onClick={() => decreaseCartQuantity(id)}>-</Button>
								<div>
									<span className="fs-3">{quantity}</span> in cart
								</div>
								<Button onClick={() => increaseCartQuantity(id)}>+</Button>
							</div>
							<Button
								variant="danger"
								size="sm"
								onClick={() => removeFromCart(id)}
							>
								Remove
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	);
}
