import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

const getArticles = async ({ pageParams = 0 }) => {
  const response = await fetch(
    `https://api.realworld.io/api/articles?limit=12&offset=${pageParams}`
  );
  const data = await response.json();
  return { ...data, prevOffset: pageParams };
};
const InfiniteScrolling = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 10 > lastPage.articleCount) {
        return false;
      }
      return lastPage.prevOffset + 10;
    },
  });
  const articles = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.articles];
  }, []);

  return (
    <>
      <InfiniteScroll
        dataLength={articles ? articles.length : 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<h2>Loading.........</h2>}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {articles?.map((article, idx) => (
            <div className="bg-slate-300 rounded-lg grid place-items-center" key={idx}>
              <h2 className="text-2xl">{idx + 1}</h2>
              <p>{article.title}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default InfiniteScrolling;
