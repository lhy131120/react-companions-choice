import { Link } from "react-router";

const footerNav = [
	{ path: "/", name: "首頁" },
	{ path: "/products", name: "產品" },
	{ path: "/about", name: "關於我們" },
	{ path: "/", name: "聯繫方式" },
	{ path: "/", name: "隱私政策" },
	{ path: "/", name: "服務條款" },
];

const Footer = () => {
	return (
		<>
			<footer className="bg-primary py-3">
				<div className="container">
					<div className="d-flex justify-content-center justify-content-lg-start">
						<ul className="nav">
							{footerNav.map((item) => (
								<li className="nav-item">
									<Link className="nav-link" to={`${item.path}`}>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<hr className="mt-2 mb-3" />
					<div className="d-flex justify-content-center justify-content-lg-between flex-wrap align-items-center w-100">
						<div className="w-100 w-lg-auto text-center mb-2 mb-lg-0">
							<small className="text-white">© 2024 夥伴之選</small>
						</div>
						<ul className="list-unstyled d-flex w-100 w-lg-auto justify-content-center align-items-center mb-0">
							<li className="mx-3 ms-0">
								<a className="" href="#">
									<i className="fs-6 bi bi-twitter-x">
										<span className="fs-0">Twitter</span>
									</i>
								</a>
							</li>
							<li className="mx-3 ">
								<a className="" href="#">
									<i className="fs-6 bi bi-line"></i>
								</a>
							</li>
							<li className="mx-3 me-0">
								<a className="" href="#">
									<i className="fs-6 bi bi-facebook"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
