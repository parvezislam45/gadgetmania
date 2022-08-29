import React from "react";

const Support = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 gap-y-15">
      <div class="card card-side">
        <img
          src="https://i.ibb.co/9v6KcJk/delivery-service-via-modern-technology-smart-phone-app-92801491.jpg"
          alt="Movie"
        />
        <div class="card-body">
          <p>Free Shipping</p>
        </div>
      </div>
      <div class="card card-side">
        <img
          src="https://i.ibb.co/f1KjQ6x/Featured-Image-Money-Back-Guarantee.jpg"
          alt="Movie"
        />
        <div class="card-body">
          <p>Easy Return</p>
        </div>
      </div>
      <div class="card card-side">
        <img src="https://i.ibb.co/rcjpbhG/secure-payments.png" alt="Movie" />
        <div class="card-body">
          <p>100% Secure Payment</p>
        </div>
      </div>
      <div class="card card-side">
        <img src="https://i.ibb.co/6FcPzzV/support.jpg" alt="Movie" />
        <div class="card-body">
          <p>Customer Support</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
