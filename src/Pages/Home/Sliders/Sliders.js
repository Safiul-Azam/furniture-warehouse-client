import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import slider1 from "../../../images/slider/slider1.jpg";
import slider2 from "../../../images/slider/slider2.jpg";
import slider3 from "../../../images/slider/slider3.jpg";
const banners = [
    { id: 1, img: slider1, title:'The Salamander is a sofa, bed, and discreet storage space in one.Whether you’re lounging with family during the weekends or accommodating guests overnight, the Salamander provides you with great convenience by virtue of its versatility.', subTitle:'Sofa Salamander-244' },
    { id: 2, img: slider2, title:'Made from Kiln-dried imported Beech veneered engineered wood High quality environment friendly Italian Ultra Violet (UV) and Polyurethane(PU) Imported fabric upholstery with soft and durable cushioning. Fabric can be selected from available options', subTitle:'Sofa Morris-287' },
    { id: 3, img: slider3, title:'Made from Kiln-dried imported Beech wood and veneered engineered wood and veneered MDF High quality environment friendly ItalianUltra Violet (UV) and Polyurethan(PU) Lacquer in antique finish Please refer to images for dimension details Imported fabric upholstery with soft and durable cushioning', subTitle:'Sofa Angelina-179' },
  ]

const Sliders = () => {
  return (
    <div>
      <Swiper
        centeredSlides={true}
        slidesPerView={1}
        slidesPerGroup={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-screen"
      >
        {banners.map((banner) => (
          <SwiperSlide
            key={banner.id}
            className="pt-6"
            style={{
              background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${banner.img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="text-white text-center mt-44 lg:mt-40">
              <p className="lg:text-lg md:text-lg text-sm uppercase mb-6 lg:tracking-[10px] tracking-[4px]">
                {banner.subTitle}
              </p>
              <h2 className="lg:text-6xl md:text-4xl text-3xl uppercase lg:w-3/4 w-11/12 mx-auto mb-7 lg:tracking-[20px] lg:leading-relaxed md:leading-relaxed sm:leading-relaxed tracking-[8px]">
                {banner.title}
              </h2>
              <button className="py-4 px-5 bg-transparent hover:bg-black rounded-none text-white hover:border-black hover:duration-500 lg:tracking-[5px] tracking-widest border hover:ease-in-out ease-in-out duration-500 uppercase">
                Rooms & Suites
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sliders;
