import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand1 from "/brand 1.jpeg";
import brand2 from "/brand 2.jpeg";
import brand3 from "/brand 3.jpeg";
import brand4 from "/brand 4.jpeg";
import brand5 from "/brand 5.webp";
import brand6 from "/brand 6.webp";
import brand7 from "/brand 7.webp";
import brand8 from "/brand 8.jpeg";
import brand9 from "/brand 9.webp";
const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="px-10 py-4 my-7">
      <h2 className="text-3xl text-center font-primaryFont mb-8">
        TRUSTED BY THE MAJOR BRANDS
      </h2>
      <div className="slider-container pt-8 text-white">
        <Slider {...settings}>
          <div>
            <img
              src={brand1}
              className="object-cover hover:sepia hover:backdrop-blur-sm cursor-pointer hover:scale-105 duration-150"
              alt=""
            />
          </div>
          <div>
            <img
              src={brand2}
              className="object-cover hover:sepia hover:backdrop-blur-sm cursor-pointer hover:scale-105 duration-150"
              alt=""
            />
          </div>
          <div>
            <img
              src={brand3}
              className="object-cover hover:sepia hover:backdrop-blur-sm cursor-pointer hover:scale-105 duration-150"
              alt=""
            />
          </div>
          <div>
            <img
              src={brand4}
              className="object-cover hover:sepia hover:backdrop-blur-sm cursor-pointer hover:scale-105 duration-150"
              alt=""
            />
          </div>
          <div>
            <img
              src={brand5}
              className="object-cover hover:sepia hover:backdrop-blur-sm cursor-pointer hover:scale-105 duration-150"
              alt=""
            />
          </div>
          <div>
            <img
              src={brand6}
              className="object-cover hover:sepia hover:backdrop-blur-sm cursor-pointer hover:scale-105 duration-150"
              alt=""
            />
          </div>
          <div>
            <img
              src={brand7}
              className="object-cover hover:sepia hover:backdrop-blur-sm cursor-pointer hover:scale-105 duration-150"
              alt=""
            />
          </div>
          <div>
            <img
              src={brand8}
              className="object-cover hover:sepia hover:backdrop-blur-sm cursor-pointer hover:scale-105 duration-150"
              alt=""
            />
          </div>
          <div>
            <img
              src={brand9}
              className="object-cover hover:sepia hover:backdrop-blur-sm cursor-pointer hover:scale-105 duration-150"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
