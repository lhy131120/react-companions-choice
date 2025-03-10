import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
// loading Plug-in

const API_BASE = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

const ProductDetailsPage = () => {
	// Get Product
	const [product, setProduct] = useState({});
	const [qtySelect, setQtySelect] = useState(1);
	const { id: product_id } = useParams();

	useEffect(() => {
		const getProduct = async () => {
			// setIsScreenLoading(true);
			try {
				const res = await axios.get(`${API_BASE}/api/${API_PATH}/product/${product_id}`);
				setProduct(res.data.product);
				// console.log(res.data.product);
			} catch (error) {
				console.log(`Error Message: ${error}`);
			} finally {
				// setIsScreenLoading(false);
			}
		};
		getProduct();
	}, [product_id]);

	return (
		<>
			<div className="container">
				<h2 className=""></h2>
				<div className="row">
					<div className="col-lg-6">
						<h2>{product.title}</h2>
						<p>{product.id}</p>
						<img src={product.imageUrl} alt="" style={{ maxWidth: "200px" }} />
					</div>
					<div className="col-lg-6"></div>
				</div>
			</div>
		</>
	);
};

export default ProductDetailsPage;
