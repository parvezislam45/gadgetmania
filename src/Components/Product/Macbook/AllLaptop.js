import React, { useEffect, useState } from "react";
import Modal from "../../Home/Modal";
import Details from "./Details";

const AllLaptop = () => {
  const [laptops, setLaptop] = useState([]);
  const [buy, setBuy] = useState(null);
  useEffect(() => {
    fetch("macbook.json")
      .then((response) => response.json())
      .then((data) => setLaptop(data));
  }, []);
  return (
    <div>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 gap-y-15">
        {laptops.map((laptop) => (<Details 
        key={laptop._id} 
        laptop={laptop} 
        setBuy={setBuy}>
        </Details>
        ))}
      </div>
      {buy && <Modal buy={buy}></Modal>}
    </div>
  );
};

export default AllLaptop;
