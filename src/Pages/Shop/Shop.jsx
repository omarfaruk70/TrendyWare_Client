import { useState } from "react";
import AllProducts from "../../Components/AllProducts/AllProducts";

const categories = ["All" ,"man", "women", "kids"];
const prices = ["All", "Low to High", "High to Low"];
const colors = ["All", "Red", "Green", "Blue"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputSearch = e.target.search.value.toLowerCase();
    setSearchText(inputSearch);
  };


  return (
    <div>
      <div className="grid grid-cols-6 gap-4 relative">
        {/* side bar */}
        <section className="hidden lg:block col-span-1 shadow-2xl">
          <div className="flex flex-col justify-center gap-5 px-8 py-4 sticky top-5 left-0">
            <div>
              <h2 className="text-2xl font-primaryFont mb-4">Category</h2>
              {categories.map((category, index) => (
                <div key={index} className="capitalize my-2 space-x-2">
                  <input
                    type="radio"
                    id={category}
                    name="category"
                    value={category}
                    onChange={() => setSelectedCategory(category)}
                    checked={category === selectedCategory}
                  />
                  <label htmlFor={category}>{category}</label>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-2xl font-primaryFont mb-4">Price</h2>
              {prices.map((price, index) => (
                <div key={index} className="capitalize my-2 space-x-2">
                  <input
                    type="radio"
                    id={price}
                    name="price"
                    value={price}
                    onChange={() => setSelectedPrice(price)}
                    checked={price === selectedPrice}
                  />
                  <label htmlFor={price}>{price}</label>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-2xl font-primaryFont mb-4">Color</h2>
              {colors.map((color, index) => (
                <div key={index} className="capitalize my-2 space-x-2">
                  <input
                    type="radio"
                    name="color"
                    id={color}
                    value={color}
                    onChange={() => setSelectedColor(color)}
                    checked={color === selectedColor}
                  />
                  <label htmlFor={color}>{color}</label>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* content section */}
        <section className="col-span-6 lg:col-span-5 bg-slate-100 overflow-hidden">
          {/* search component */}
          <div className="px-4 max-w-xl mx-auto m-3">
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  name="search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value.toLowerCase())}
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search product name"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-yellow-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          {/* Display products Data */}
          <AllProducts searchText={searchText}></AllProducts>
        </section>
      </div>
    </div>
  );
};

export default Shop;