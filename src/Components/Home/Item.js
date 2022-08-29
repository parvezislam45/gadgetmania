import React from 'react';

const Item = () => {
    return (
        <div class="container mx-auto grid grid-cols-2 gap-10 mt-20 gap-y-15">
      <div class="card w-full shadow-xl image-full">
        <figure>
          <img
            src="https://img.freepik.com/premium-photo/online-shopping-icon-smart-phone-global-concept_117856-2469.jpg?w=2000"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <div class="">
            <div class="card lg:card-side bg-base-100 shadow-xl">
              <img
                src="https://cdn.mos.cms.futurecdn.net/KDLf9ksbVWHmoGCXp7jJKM-1200-80.jpg"
                class="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 class="text-2xl font-bold">Special Discount Offer</h1>
                <p className="text-md text-white">For 12-12</p>
                <div class="stat bg-red-700 w-28 h-12 mt-3 rounded-full">
                  <div class="stat-value text-sm text-white">30% Off</div>
                </div>
                <h1 class="py-6 text-2xl">Price : $ 4582</h1>
                <button
                  type="button"
                  class="text-black bg-amber-700 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-amber-700 dark:hover:bg-yellow-700 dark:focus:ring-yellow-700"
                >
                  <svg
                    aria-hidden="true"
                    class="mr-2 -ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="card w-full shadow-xl image-full">
        <figure>
          <img
            src="https://searchengineland.com/wp-content/seloads/2015/02/ecommerce-shopping-cart-keyboard-ss-1920.jpg"
            alt="Shoes"
          />
        </figure>
        <div class="card-body h-32">
          <div class="">
            <div class="hero-content flex-col lg:flex-row">
              <img
                src="https://cdn.vox-cdn.com/thumbor/DND15zKBC9GE0ZEI2FV88kYINe0=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/6687707/20160621-hp-spectre-hero.0.jpg"
                class="max-w-sm rounded-lg shadow-2xl mt-6 justify-center items-center" alt="David"
              />
              <div>
                <h1 class="text-2xl font-bold">Best Price & Great Quality</h1>
                <div class="stat bg-red-700 rounded-full w-28 h-12 mt-3">
                  <div class="stat-value text-sm text-white">50% Off</div>
                </div>
                <h1 class="py-6 text-2xl">Price : $ 4582</h1>
                <a class="link link-accent">View Product</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Item;