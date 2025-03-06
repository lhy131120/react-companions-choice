
import { useState } from "react";
// import axios from "axios";
import "../assets/scss/_index.scss";

// load banner image
import banner1 from "../assets/images/banner-1.jpg";
import banner2 from "../assets/images/banner-2.jpg";
import banner3 from "../assets/images/banner-3.jpg";

// Import Swiper
import { Navigation, Pagination, A11y, EffectFade, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';

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
  const [bannerSwiper, setBannerSwiper] = useState(null);
	const [prodcutsSwiper, setProductsSwiper] = useState(null);
	return (
		<>
			<main>
				<section className="bannerWrap position-relative">
					<Swiper
						// install Swiper modules
						modules={[Navigation, Pagination, EffectFade, Controller]}
            controller={{control: bannerSwiper}}
						spaceBetween={0}
						slidesPerView={1}
						navigation
						pagination={{ clickable: true }}
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
						<h2 className="px-3 text-center">精選優質用品，寵愛毛孩每一天</h2>
						<div className="row"></div>
					</div>
				</section>
			</main>
		</>
	);
};

export default IndexPage;
