import React from "react";

const Details = ({ laptop, setBuy }) => {
  const { name, img, price } = laptop;
  return (
    <div class="container">
      <div class="max-w-md w-full bg-gray-900 shadow-2xl rounded-xl p-6 border-solid border-2 border-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-700">
        <div class="flex flex-col ">
          <div class="relative h-62 w-full mb-3">
            <div class="absolute flex flex-col top-0 right-0 p-3">
              <button class="transition ease-in duration-300 bg-gray-800  hover:text-red-600 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            <img
              src={img}
              alt="Just a flower"
              class=" w-full   object-fill  rounded-2xl"
            />
          </div>
          <div class="flex-auto justify-evenly">
            <div class="flex flex-wrap ">
              <div class="w-full flex-none text-sm flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-red-500 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="text-red-400 whitespace-nowrap mr-3">4.60</span>
              </div>
              <div class="flex items-center w-full justify-between min-w-0 ">
                <h2 class="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                  {name}
                </h2>
              </div>
            </div>
            <div class="text-xl text-white font-semibold mt-3">${price}</div>
            <div class="flex space-x-2 text-sm font-medium justify-start">
              <label
                for="buyNow"
                class="text-white bg-fuchsia-900 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-600 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center mr-2 dark:bg-fuchsia-900 dark:hover:bg-fuchsia-900 dark:focus:ring-fuchsia-900 mt-3"
                onClick={() => setBuy(laptop)}
              >
                <svg
                  class="w-5 h-5 mr-2 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
                Buy
              </label>
              <button
                type="button"
                class="text-white bg-fuchsia-900 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-600 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center mr-2 dark:bg-fuchsia-900 dark:hover:bg-fuchsia-900 dark:focus:ring-fuchsia-900 mt-3"
              >
                <svg
                  class="w-5 h-5 mr-2 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
                Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
