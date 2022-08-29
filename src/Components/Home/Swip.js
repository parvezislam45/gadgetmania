import React from "react";
import { Carousel } from "3d-react-carousal";

const Swip = () => {
  let slides = [
    <div class="max-w-sm bg-gray-900 shadow-md rounded-lg p-6 border-dashed border-2 border-gray-700">
      <img
        src="https://i.pinimg.com/originals/d3/87/88/d38788a9e333e6490d5c00759c92aa79.png"
        alt="Just a flower"
        class="p-8 rounded-t-lg"
      />
      <div class="px-5 pb-5">
        <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Headphone
        </h2>
      </div>
    </div>,
    <div class="max-w-sm bg-gray-900 shadow-md rounded-lg p-6 border-dashed border-2 border-gray-700">
      <img
        src="https://cdn.mos.cms.futurecdn.net/Tx4Lq9p7VAZAgNaQddK25Z-1200-80.jpg"
        alt="Just a flower"
        class="p-8 rounded-t-lg"
      />
      <div class="px-5 pb-5">
        <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Airpods
        </h2>
      </div>
    </div>,
    <div class="max-w-sm bg-gray-900 shadow-md rounded-lg p-6 border-dashed border-2 border-gray-700">
      <img
        src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Orange_Green_Waterproof.jpg"
        alt="Just a flower"
        class="p-8 rounded-t-lg"
      />
      <div class="px-5 pb-5">
        <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Smart-band
        </h2>
      </div>
    </div>,
    <div class="max-w-sm bg-gray-900 shadow-md rounded-lg p-6 border-dashed border-2 border-gray-700">
      <img
        src="https://i.pinimg.com/736x/dc/48/52/dc48528f4210da5c7fbbc84afba9faf5.jpg"
        alt="Just a flower"
        class="p-8 rounded-t-lg"
      />
      <div class="px-5 pb-5">
        <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Galaxy
        </h2>
      </div>
    </div>,
    <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        class="p-8 rounded-t-lg"
        src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/photo_1517336714731_489689fd1ca8_9.jpeg"
        alt="product"
      />

      <div class="px-5 pb-5">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Laptop
        </h5>
      </div>
    </div>,
    <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        class="p-8 rounded-t-lg"
        src="https://media.wired.com/photos/5d803f5dc891950008ce3447/master/pass/iphone-11_6175-Edit.jpg"
        alt="product"
      />

      <div class="px-5 pb-5">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Iphone
        </h5>
      </div>
    </div>,
    <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        class="p-8 rounded-t-lg"
        src="https://imagenes.elpais.com/resizer/CNl1htjSXpywuPpEw7T5udClYb4=/414x311/ep01.epimg.net/tecnologia/imagenes/2018/10/01/actualidad/1538392017_190991_1539598582_noticia_fotograma.jpg"
        alt="product"
      />

      <div class="px-5 pb-5">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Watch
        </h5>
      </div>
    </div>,
    <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        class="p-8 rounded-t-lg"
        src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/kv/10r/Pickle_s-2022.5.11.jpg"
        alt="product"
      />

      <div class="px-5 pb-5">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          One-Plus
        </h5>
      </div>
    </div>,
    <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        class="p-8 rounded-t-lg"
        src="https://cdn.vox-cdn.com/thumbor/UqobydeA_4esmiIccKpQ9wlFTCE=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/70489855/vpavic_220201_5008_0023_Edit.0.jpg"
        alt="product"
      />

      <div class="px-5 pb-5">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Samsung
        </h5>
      </div>
    </div>,
  ];
  return (
    <div>
      <Carousel slides={slides} autoplay={true} interval={3000} />
    </div>
  );
};

export default Swip;
