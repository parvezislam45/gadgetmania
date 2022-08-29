import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-20 mt-10 gap-y-15">
        <div class="card w-96 bg-base-100">
          <figure class="px-10 pt-10">
            <img
              src="https://149367133.v2.pressablecdn.com/wp-content/uploads/2016/10/MacBook-Pro-thickness.gif"
              alt="Shoes"
              class="rounded-xl w-56 h-64"
            />
          </figure>
          <div class="card-body items-center text-center">
          <div class="space-y-2" bis_skin_checked="1">
              <h2 class="text-3xl font-semibold tracking-wide">Laptop</h2>
            </div>
            <Link to="/macbook">
              <button class="btn btn-outline btn-secondary">
                Explore More
              </button>
            </Link>
          </div>
        </div>
        <div class="card w-96 bg-base-100">
          <figure class="px-10 pt-10">
            <img
              src="https://c.tenor.com/hXAeoM2OMcIAAAAC/apple-apple-iphone.gif"
              alt="Shoes"
              class="rounded-xl w-56 h-64"
            />
          </figure>
          <div class="card-body items-center text-center">
          <div class="space-y-2" bis_skin_checked="1">
              <h2 class="text-3xl font-semibold tracking-wide">Iphone</h2>
            </div>
            <Link to="/iphone">
              <button class="btn btn-outline btn-secondary">
                Explore More
              </button>
            </Link>
          </div>
        </div>
        <div class="card w-96 bg-base-100">
          <figure class="px-10 pt-10">
            <img
              src="https://techcrunch.com/wp-content/uploads/2019/02/samsung-fold.gif?w=730&crop=1"
              alt="Shoes"
              class="rounded-xl w-56 h-64"
            />
          </figure>
          <div class="card-body items-center text-center">
          <div class="space-y-2" bis_skin_checked="1">
              <h2 class="text-3xl font-semibold tracking-wide">Samsung</h2>
            </div>
            <Link to="/samsung">
              <button class="btn btn-outline btn-secondary">
                Explore More
              </button>
            </Link>
          </div>
        </div>
        <div class="card w-96 bg-base-100">
          <figure class="px-10 pt-10">
            <img
              src="https://techring.in/wp-content/uploads/2022/06/oneplus-9-pro-thumb_800x448-600x400-1.gif"
              alt="Shoes"
              class="rounded-xl w-56 h-64"
            />
          </figure>
          <div class="card-body items-center text-center">
          <div class="space-y-2" bis_skin_checked="1">
              <h2 class="text-3xl font-semibold tracking-wide">OnePlus</h2>
            </div>
            <Link to="/oneplus">
              <button class="btn btn-outline btn-secondary">
                Explore More
              </button>
            </Link>
          </div>
        </div>
        <div class="card w-96 bg-base-100">
          <figure class="px-10 pt-10">
            <img
              src="https://i.gifer.com/JtyY.gif"
              alt="Shoes"
              class="rounded-xl w-56 h-64"
            />
          </figure>
          <div class="card-body items-center text-center">
          <div class="space-y-2" bis_skin_checked="1">
              <h2 class="text-3xl font-semibold tracking-wide">Smart Watch</h2>
            </div>
            <Link to="/watch">
              <button class="btn btn-outline btn-secondary">
                Explore More
              </button>
            </Link>
          </div>
        </div>
        <div class="card w-96 bg-base-100">
          <figure class="px-10 pt-10">
            <img
              src="https://thumbs.gfycat.com/HighMadCurlew-size_restricted.gif"
              alt="Shoes"
              class="rounded-xl w-56 h-64"
            />
          </figure>
          <div class="card-body items-center text-center">
          <div class="space-y-2" bis_skin_checked="1">
              <h2 class="text-3xl font-semibold tracking-wide">AirPods</h2>
            </div>
            <Link to="/airpods">
              <button class="btn btn-outline btn-secondary">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
