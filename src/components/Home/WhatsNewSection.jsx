import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import axiosInstance from "../../utils/axiosInstance";

function WhatsNewSection() {
  const [productArray, setProductArray] = useState([]);

  const getNewProducts = async () => {
    try {
      const response = await axiosInstance.get("/product?limit=6");
      console.log("Response from API:", response); // เพิ่มการ console.log เพื่อตรวจสอบข้อมูลที่ได้รับ
      if (response.data && response.data.products) {
        // ตรวจสอบว่า response มีข้อมูล products
        setProductArray(response.data.products);
        console.log("Products:", response.data.products); // เพิ่มการ console.log เพื่อตรวจสอบข้อมูลที่ได้รับ
      }
    } catch (err) {
      console.log("get product : ", err);
    }
  };

  useEffect(() => {
    getNewProducts(); // เรียกใช้ฟังก์ชันอย่างถูกต้อง
  }, []);

  return (
    <div className="flex justify-center w-screen md:ml-0 md:w-auto ">
      <div className="w-screen md:w-[1024px] mx-5 lg:mx-0">
        <h3 className="text-2xl md:text-3xl font-bold ml-4 md:ml-0">
          What's New
        </h3>
        <div className="flex md:justify-center">
          <div className="carousel carousel-center gap-5 p-4 md:grid md:grid-cols-3 md:grid-row-2 md:mx-6 w-auto">
            {productArray.map((card, index) => (
              <div
                key={index}
                className="carousel-item md:flex md:justify-center"
              >
                <ProductCard
                  name={card.name}
                  img={card.img.url}
                  price={card.price}
                  describe={card.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsNewSection;
