import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";
import "../assets/scss/_index.scss";

// load banner image
import banner1 from "../assets/images/banner-1.jpg";
import banner2 from "../assets/images/banner-2.jpg";
import banner3 from "../assets/images/banner-3.jpg";
import sectionImg1 from "../assets/images/section-dogs-cats.webp";

// Import Swiper
import { Navigation, Pagination, A11y, EffectFade, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const bannersData = [
	{
		id: 1,
		imagePath: banner1,
		title: "Title-1",
		subTitle: "SubTitle",
		buttonText: "立即寵愛",
		path: "/",
	},
	{
		id: 2,
		imagePath: banner2,
		title: "Title-2",
		subTitle: "SubTitle",
		buttonText: "立即寵愛",
		path: "/",
	},
	{
		id: 3,
		imagePath: banner3,
		title: "Title-3",
		subTitle: "SubTitle",
		buttonText: "立即寵愛",
		path: "/",
	},
];

const IndexPage = () => {
	const [userData, setUserData] = useState([]);
	const [bannerSwiper, setBannerSwiper] = useState(null);
	// const [prodcutsSwiper, setProductsSwiper] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get("https://jsonplaceholder.typicode.com/users");
				// console.log(res.data);
				setUserData(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		console.log(userData);
	}, [userData]);

	return (
		<>
			<main>
				<section className="bannerWrap position-relative">
					<Swiper
						// install Swiper modules
						modules={[Navigation, Pagination, EffectFade, Controller]}
						controller={{ control: bannerSwiper }}
						spaceBetween={0}
						slidesPerView={1}
						navigation
						pagination={{
							clickable: true,
							renderBullet: function (index, className) {
								return `<a class="${className}"><span class="d-block w-100 h-100 rounded-circle bg-warning fs-0">${index + 1}</span></a>`;
							},
						}}
						effect="fade"
						onSwiper={setBannerSwiper}
						onSlideChange={() => console.log("slide change")}
					>
						{bannersData.map((banner) => (
							<SwiperSlide key={banner.id}>
								<div
									className="banner"
									style={{
										backgroundImage: `url(${banner.imagePath})`,
									}}
								>
									<h1 className="fs-3 fs-md-1 position-relative z-2">{banner.title}</h1>
									<p className="fs-6 fs-md-5 rposition-relative z-2 mb-3">{banner.subTitle}</p>
									<a href="#" className="btn position-relative z-2">
										{banner.buttonText}
									</a>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</section>
				<section id="products" className="py-5 py-lg-6">
					<div className="container">
						<h2 className="px-3 text-center mb-4 mb-lg-6">精選優質用品，寵愛毛孩每一天</h2>
						<div className="row"></div>
					</div>
				</section>
				<section className="bg-primary py-5 py-lg-6">
					<div className="container">
						<div className="row row-cols-1 row-cols-lg-2 align-items-center justify-content-center gy-3 gy-lg-0">
							<div className="col">
								<div className="text-center">
									<img
										className="img-fluid"
										style={{
											width: "450px",
										}}
										src={sectionImg1}
										alt=""
									/>
								</div>
							</div>
							<div className="col">
								<div className="text-center text-white">
									<h2 className="mb-4">
										我們深知牠們不只是<span className="text-info">寵物</span>更是
										<span className="text-info">家人</span>
									</h2>
									<h3 className="fs-7 fs-lg-5 mb-4 lh-base">
										作為寵物愛好者，
										<br className="d-none d-lg-block" />
										夥伴之選致力於為您的愛寵提供優質用品，
										<br className="d-none d-lg-block" />
										讓每一天都充滿幸福。
									</h3>
									<Link to={"/products"} className="btn">
										了解更多
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="py-5 py-lg-6">
					<div className="container">
						<h2 className="text-primary text-center mb-4 mb-lg-6">聽聽其他寵物主人的心聲</h2>
						<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
							<div className="col">
								<div className="d-flex p-3 border border-2 rounded-3 h-100">
									<div>
										<img
											src="https://img.freepik.com/free-photo/happy-woman-beige-sweater_53876-111209.jpg?t=st=1741328146~exp=1741331746~hmac=b31a0ab421f3582b55dd72ce47756b059f233d542b89fca9655bd40c052b6435&w=1060"
											className="img-fluid rounded-circle overflow-hidden object-fit-cover"
											style={{ minWidth: "100px", maxWidth: "100px", height: "100px" }}
										/>
									</div>
									<div className="px-3">
										<div className="range d-flex mb-2">
											<span class="material-symbols-outlined">star</span>
											<span class="material-symbols-outlined">star</span>
											<span class="material-symbols-outlined">star</span>
											<span class="material-symbols-outlined">star</span>
											<span class="material-symbols-outlined">star</span>
										</div>
										<p className="mb-1">「產品很棒，我的狗超愛！」</p>
										<p className="">
											<small className="text-body-secondary">- Chrost Wong</small>
										</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="d-flex p-3 border border-2 rounded-3 h-100">
									<div>
										<img
											src="https://img.freepik.com/free-photo/happy-woman-beige-sweater_53876-111209.jpg?t=st=1741328146~exp=1741331746~hmac=b31a0ab421f3582b55dd72ce47756b059f233d542b89fca9655bd40c052b6435&w=1060"
											className="img-fluid rounded-circle overflow-hidden object-fit-cover"
											style={{ minWidth: "100px", maxWidth: "100px", height: "100px" }}
										/>
									</div>
									<div className="px-3">
										<div className="range d-flex mb-2">
											<span class="material-symbols-outlined">star</span>
											<span class="material-symbols-outlined">star</span>
											<span class="material-symbols-outlined">star</span>
											<span class="material-symbols-outlined">star</span>
											<span class="material-symbols-outlined">star</span>
										</div>
										<p className="mb-1">「產品很棒，我的狗超愛！」</p>
										<p className="">
											<small className="text-body-secondary">- Chrost Wong</small>
										</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="d-flex p-3 border border-2 rounded-3 h-100">
									<div>
										<img
											src="https://img.freepik.com/free-photo/happy-woman-beige-sweater_53876-111209.jpg?t=st=1741328146~exp=1741331746~hmac=b31a0ab421f3582b55dd72ce47756b059f233d542b89fca9655bd40c052b6435&w=1060"
											className="img-fluid rounded-circle overflow-hidden object-fit-cover"
											style={{ minWidth: "100px", maxWidth: "100px", height: "100px" }}
										/>
									</div>
									<div className="px-3">
										<div className="range d-flex mb-2">
											<span class="material-symbols-outlined">star</span>
											<span class="material-symbols-outlined">star</span>
											<span class="material-symbols-outlined">star</span>
											<span class="material-symbols-outlined">star</span>
											<span class="material-symbols-outlined">star</span>
										</div>
										<p className="mb-1">
											「產品很棒，我的狗超愛！產品很棒，我的狗超愛！夥伴之選致力於為您的愛寵提供優質用品」
										</p>
										<p className="">
											<small className="text-body-secondary">- Chrost Wong</small>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default IndexPage;
