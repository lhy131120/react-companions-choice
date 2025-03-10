import { NavLink, Outlet } from "react-router";
import { Popover } from "bootstrap";
import Footer from "./FooterLayout";

export default function FrontLayout() {
	const routes = [
		{ path: "/", name: "Home" },
		{ path: "/products", name: "Products" },
		{ path: "/about", name: "About" },
		{ path: "/contact", name: "Contact" },
	];

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-primary">
				<div className="container">
					<a className="navbar-brand" href="#">
						Offcanvas navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasNavbar"
						aria-controls="offcanvasNavbar"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="offcanvas offcanvas-end"
						tabIndex="-1"
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel"
					>
						<div className="offcanvas-header">
							<h5 className="offcanvas-title" id="offcanvasNavbarLabel">
								Offcanvas 1231
							</h5>
							<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
						</div>
						<div className="offcanvas-body">
							<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
								{routes.map((route) => (
									<li key={route.path} className="nav-item">
										<NavLink className="nav-link mx-2" aria-current="page" to={route.path}>
											{route.name}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<Outlet />
			<Footer />
		</>
	);
}

