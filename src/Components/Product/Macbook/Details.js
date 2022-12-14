import React from "react";
import { Link } from 'react-router-dom'

const Details = ({ product, handleDelate }) => {
  const { _id, name, img, price, quantity } = product;
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
            <div class="text-xl text-white font-semibold mt-3">Price :${price}</div>
            <div class="text-xl text-white font-semibold mt-3">Quantity :${quantity}</div>

          </div>
          <div className="mb-3">
            <button onClick={() => handleDelate(_id)} type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center  dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">delete</button>


          </div>
          <Link to={`/update/${_id}`}><button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Manage-Quantity</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
