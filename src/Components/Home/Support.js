import React from "react";

const Support = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 gap-y-15">
      <div class="card card-side">
        <img className="w-40 h-28"
          src="https://www.seekpng.com/png/detail/172-1720811_get-your-15-off-coupon-free-shipping-logo.png"
          alt="Movie"
        />
        <div class="card-body">
          <p>Free Shipping</p>
        </div>
      </div>
      <div class="card card-side">
        <img className="w-40 h-28"
          src="https://img.freepik.com/premium-vector/easy-returns-sign-label-delivery-service-vector-stock-illustration_100456-11337.jpg"
          alt="Movie"
        />
        <div class="card-body">
          <p>Easy Return</p>
        </div>
      </div>
      <div class="card card-side">
        <img className="w-40 h-28" src="https://img.freepik.com/premium-vector/secure-payment-with-mobile-banking-application_258153-435.jpg" alt="Movie" />
        <div class="card-body">
          <p>100% Secure Payment</p>
        </div>
      </div>
      <div class="card card-side">
        <img className="w-40 h-28" src="https://img.freepik.com/premium-vector/contact-us-customer-service-illustration_2175-309.jpg" alt="Movie" />
        <div class="card-body">
          <p>Customer Support</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
