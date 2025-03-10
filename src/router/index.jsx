import { createHashRouter } from "react-router";

// Front Layout
import FrontLayout from "../layouts/FrontLayout";
import IndexPage from "../pages/IndexPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

const router = createHashRouter([
	{
		path: "/",
		element: <FrontLayout />,
		children: [
			{
				path: "",
				element: <IndexPage />,
			},
			{
				path: "products",
				element: <ProductsPage />,
			},
			{
				path: "products/:id",
				element: <ProductDetailsPage />,
			},
			{
				path: "about",
				element: <AboutPage />,
			},
			{
				path: "contact",
				element: <ContactPage />,
			},
		],
	},
]);

export default router;
