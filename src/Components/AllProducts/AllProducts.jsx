// ========== Use infinite scrolling for seamless user experience in case of more data ===========
// const response = await fetch(`https://api.realworld.io/api/articles?limit=10&offset=${pageParam}`);
// here offset means large data scale er kotha theke data loading kora suru korbe ?
//  offset er value 0 hole first theke and 10 hole 11 no data theke load kora start korbe

import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";
import Skeleton from "../Skeleton/Skeleton";
const getAllProducts = async (pageParam) => {
  const response = await fetch(
    `http://localhost:5000/api/v1/user/allproducts?limit=10&page=${pageParam}`
  );
  const data = await response.json();
  return data;
};
const AllProducts = ({ searchText }) => {
  const { isPending, data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 1 }) => getAllProducts(pageParam),
    getNextPageParam: (lastPage, pages) => {
      return lastPage?.getAllProducts?.length == 10
        ? pages.length + 1
        : undefined;
    },
  });
  const products = data?.pages?.reduce((acc, page) => {
    return [...acc, ...page.getAllProducts];
  }, []);
  return (
    <>
      {isPending ? (
        <Loader></Loader>
      ) : products?.length > 0 ? (
        <div>
          <InfiniteScroll
            className="py-6"
            dataLength={products ? products.length : 0}
            next={() => fetchNextPage()}
            hasMore={hasNextPage}
            loader={
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 px-2 ">
              {products
                ?.filter((product) =>
                  product?.title?.toLowerCase().includes(searchText)
                )
                .map((product, idx) => (
                  <ProductCard
                    key={idx}
                    title={product.title}
                    description={product.description}
                    img={product.img}
                    price={product.price}
                    ratings={product.ratings}
                  ></ProductCard>
                ))}
            </div>
          </InfiniteScroll>
        </div>
      ) : products.length === 0 || !products ? (
        <div className="h-[50vh] w-full flex flex-col justify-center items-center">
          <h1 className="text-9xl font-extrabold text-black tracking-widest">
            404
          </h1>
          <div className="bg-gradient-to-tr from-[#58bfff]  to-[#01bea5] text-white px-2 text-sm rounded rotate-12 absolute">
            Data Not Found
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AllProducts;
AllProducts.propTypes = {
  searchText: PropTypes.string,
};
