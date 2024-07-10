import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailCard from '@/components/ProductPage/ProductDetailCard';
import YouMayAlsoLike from "@/components/ProductPage/YouMayAlsoLike";
import FooterSection from "@/components/FooterSection";
import NavbarSection from "@/components/NavbarSection";

function ProductPage({ whatNewArray, addToCart }) {
  const { productName } = useParams();
  const product = whatNewArray.find(item => item.name === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <NavbarSection />
      <ProductDetailCard 
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

