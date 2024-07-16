"use client";
import Cart from "@/components/Cart";
import DialogSuccess from "@/components/Dialog/DialogSuccess";
import ProductItem from "@/components/Product";
import { useState } from "react";
import ProductList from "@/data/products.json";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <main className="flex flex-wrap">
      <DialogSuccess isOpen={isOpen} onclose={handleOnCloseDialog} />
      <div className="w-full md:w-[65%] p-8">
        <h1 className="font-bold text-2xl mb-6">Desserts</h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-2">
            {ProductList.map((item, index) => {
              return (
                <ProductItem
                  key={index}
                  images={item.image}
                  name={item.name}
                  category={item.category}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full md:w-[35%] pt-12">
        <Cart
          onCheckout={() => {
            setIsOpen(true);
          }}
        />
      </div>
    </main>
  );
}
