import React from "react";

const Modal = ({ buy }) => {
  const { name, img, price } = buy;
  return (
    <div>
      <input type="checkbox" id="buyNow" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div className="w-44 ">
        <div class="modal-box flex justify-center items-center">
          <div class="card w-28 bg-base-100 shadow-xl">
          <label
            for="buyNow"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
            <figure class="px-10 pt-10">
              <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">{name}</h2>
              <p>{price}</p>
              <div class="modal-action">
                <label for="buyNow" class="btn btn-xs">
                  Buy now
                </label>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Modal;
