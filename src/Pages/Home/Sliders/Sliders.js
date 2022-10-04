import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import slider1 from "../../../images/slider/slider1.jpg";
import slider2 from "../../../images/slider/slider2.jpg";
import slider3 from "../../../images/slider/slider3.jpg";
import { Link } from "react-router-dom";
const banners = [
  {
    id: 1,
    img: slider1,
    title:
      "The Salamander is a sofa, bed, and discreet storage space in one.Whether you’re lounging with family during the weekends or accommodating guests overnight, the Salamander provides you with great convenience by virtue of its versatility.",
    subTitle: "Sofa Salamander-244",
  },
  {
    id: 2,
    img: slider2,
    title:
      "Made from Kiln-dried imported Beech veneered engineered wood High quality environment friendly Italian Ultra Violet (UV) and Polyurethane(PU) Imported fabric upholstery with soft and durable cushioning. Fabric can be selected from available options",
    subTitle: "Sofa Morris-287",
  },
  {
    id: 3,
    img: slider3,
    title:
      "Made from Kiln-dried imported Beech wood and veneered engineered wood and veneered MDF High quality environment friendly ItalianUltra Violet (UV) and Polyurethan(PU) Lacquer in antique finish Please refer to images for dimension details Imported fabric upholstery with soft and durable cushioning",
    subTitle: "Sofa Angelina-179",
  },
];

const Sliders = () => {
  return (
    <div>
      <Swiper
        centeredSlides={true}
        slidesPerView={1}
        slidesPerGroup={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination,]}
        className="mySwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide
            key={banner.id}
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.679),rgba(0, 0, 0, 0.647)),url(${banner.img})`,
              backgroundPosition: "center",
              backgroundRepeat:'no-repeat',
              paddingTop: "200px",
              backgroundSize: "cover",
              paddingBottom: "200px",
            }}
          >
            <div className="text-white w-75 mx-auto text-center">
              <p className="fs-6">
                {banner.subTitle}
              </p>
              <h2 className="fs-4 my-4">
                {banner.title}
              </h2>
              <div className="update-btn text-center">
                <Link to="/allInventory">All Inventories</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sliders;
