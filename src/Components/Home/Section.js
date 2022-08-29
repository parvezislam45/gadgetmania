import React from "react";

const Section = () => {
  return (
    <div className="container mx-auto grid grid-cols-3 md:grid-cols-5 gap-10 mt-20 gap-y-15">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://c.tenor.com/lWjsx8SRECUAAAAC/apple-logo.gif"
          class="w-24 h-16 rounded-lg shadow-2xl"
          alt="David"
        />
      </div>
      <div class="hero-content flex-col lg:flex-row ">
        <img
          src="https://i.pinimg.com/originals/2f/2c/08/2f2c08966e531741d5a1e1fe465b6a4f.gif"
          class="w-24 rounded-lg shadow-2xl"
          alt="David"
        />
      </div>
      {/* <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://i.pinimg.com/originals/98/d6/09/98d609c7a0d673fa6ffe693fb41d44b3.gif"
          class="w-32 h=16 rounded-lg shadow-2xl"
          alt="David"
        />
      </div> */}
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://cdn.dribbble.com/users/1108603/screenshots/6725344/huawei-logo-intro.gif"
          class="w-24 rounded-lg shadow-2xl"
          alt="David"
        />
      </div>
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://download.appmifile.com/images/2019/05/16/dcae0394-bfa7-47a0-a43b-becd713eed41.GIF"
          class="w-24 h-16 rounded-lg shadow-2xl"
          alt="David"
        />
      </div>
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://c.tenor.com/1Uv5PD3T_mMAAAAC/sony-sony-sony.gif"
          class="w-24 rounded-lg shadow-2xl"
          alt="David"
        />
      </div>
    </div>
  );
};

export default Section;
