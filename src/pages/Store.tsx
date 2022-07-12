import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
	return (
		// applying grid system on row via bs classes, g-3 = gap 3
		// StoreItem takes as a prop all diff item properties
		<>
			<h1>Store</h1>
			<Row md={2} xs={1} lg={3} className="g-3">
				{storeItems.map((item) => (
					<Col key={item.id}>
						<StoreItem {...item} />
					</Col>
				))}
			</Row>
		</>
	);
}
