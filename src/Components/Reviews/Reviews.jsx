import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { IoMdQuote } from "react-icons/io";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const axiosPublic = useAxiosPublic();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axiosPublic
      .get("/api/v1/user/reviews")
      .then((res) => {
        setReviews(res?.data);
      })
      .catch((err) => console.error(err));
  }, [axiosPublic]);
  return (
    <section className="mb-10  bg-[rgba(252,249,249,0.95)] ">
      <div>
        <h2 className="text-4xl text-center py-8 font-primaryFont">
          Our Happy Customar Says
        </h2>
      </div>
      <div className="md:px-12 lg:px-40 md:p-5">
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <p className="text-5xl flex justify-center items-center text-yellow-400">
                <IoMdQuote className="md:text-7xl" />
              </p>
              <div className="max-w-6xl mx-auto flex flex-col justify-center items-center md:space-y-2 py-20">
                <img
                  src={review.img}
                  className="h-14 w-14 rounded-full"
                  alt="user image"
                />
                <h2 className="text-2xl text-center">{review.name}</h2>
                <p className="font-primaryFont">{review.title}</p>
                <p className="flex justify-center">
                  <Rating
                    style={{ maxWidth: 100 }}
                    className="my-rating-class"
                    value={review.ratings}
                  />
                </p>
                <p className="py-4 text-xs md:text-xl text-center px-14">
                  {review.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
