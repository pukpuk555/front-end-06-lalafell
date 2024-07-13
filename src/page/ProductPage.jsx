import React, { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";
import ProductDetailCard from '@/components/ProductPage/ProductDetailCard';
import YouMayAlsoLike from "@/components/ProductPage/YouMayAlsoLike";
import FooterSection from "@/components/FooterSection";
import NavbarSection from "@/components/NavbarSection";
import { useParams } from "react-router-dom";

function ProductPage({ whatNewArray, addToCart }) {
  // const { productName } = useParams();
  // const product = whatNewArray.find(item => item.name === productName);

  const [product, setProduct] = useState({});
  const { id } = useParams()
  const handleLoad = async (id) => {
    try {
      const response = await axiosInstance.get(`/product/${id}`);
      console.log(response.data);
      const { error, product } = response.data;

      if (!response.data) {
        console.log("ต่อไมีติดนะ");
      }

      setProduct(product);
    }
    catch (err) {

    }

  }
  useEffect(() => {
    handleLoad(id);

  }, [])

  if (!product) {
    return <div>Product not found</div>;
  }


  return (
    <div>
      <NavbarSection />
      <ProductDetailCard
        productId={product._id}
        name={product.name}
        img={product.img}
        price={product.price}
        type={product.type}
        describe={product.description}
        spec={product.spec}
        addToCart={addToCart}  // ต้องแน่ใจว่า addToCart ถูกส่งไปยัง ProductDetailCard อย่างถูกต้อง
      />
      <YouMayAlsoLike whatNewArray={whatNewArray} excludeName={product.name} />
      <FooterSection />
    </div>
  );
}

export default ProductPage;

