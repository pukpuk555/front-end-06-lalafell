import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderCard from "./OrderCard";

function OrderHistory() {
  const [order, setOrder] = useState([
    {
      id: "o1",
      name: "Kimetsu no Yaiba Custom",
      description: "Reference from popular animation",
      img: "/kimetsu_no.png",
      price: "$10.99",
      status: "Recieved",
    },
    {
      id: "o2",
      name: "Lupan The 3rd Custom",
      description: "Reference from popular animation",
      img: "/lupin.png",
      price: "$10.99",
      status: "Pending",
    },
    {
      id: "o3",
      name: "Doreaman Custom",
      description: "Reference from popular animation",
      img: "/doremon.png",
      price: "$10.99",
      status: "Shiping",
    },
    {
      id: "o4",
      name: "Harry Poster Custom",
      description: "Reference from popular animation",
      img: "/harry.png",
      price: "$10.99",
      status: "To Ship",
    },
  ]);
  const pendingOrder = order.filter((order) => order.status === "Pending");
  const toShipOrder = order.filter((order) => order.status === "To Ship");
  const shipingOrder = order.filter((order) => order.status === "Shiping");
  const recievedOrder = order.filter((order) => order.status === "Recieved");

  return (
    <div>
      <div className="w-[700px]">
        <h2 className="text-4xl font-bold pb-3">Your Order</h2>
        <div className="w-[700px] h-[450px] px-4  border-[1px] border-black rounded-xl overflow-auto flex flex-col items-center ">
          <Tabs defaultValue="yourOrder" className="w-full ">
            <TabsList className="flex justify-between bg-white sticky top-0 border-b-[1px] border-black rounded-none">
              <TabsTrigger
                value="yourOrder"
                className="w-1/4 text-xl focus:border-x-[1px] border-black"
              >
                Your Order
              </TabsTrigger>
              <TabsTrigger
                value="pending"
                className="w-1/4 text-xl focus:border-x-[1px] border-black"
              >
                Pending
              </TabsTrigger>
              <TabsTrigger
                value="toShip"
                className="w-1/4 text-xl focus:border-x-[1px] border-black"
              >
                To Ship
              </TabsTrigger>
              <TabsTrigger
                value="shiping"
                className="w-1/4 text-xl focus:border-x-[1px] border-black"
              >
                Shiping
              </TabsTrigger>
              <TabsTrigger
                value="recived"
                className="w-1/4 text-xl focus:border-x-[1px] border-black"
              >
                Recived
              </TabsTrigger>
            </TabsList>
            <TabsContent value="yourOrder">
              {order.map((order) => (
                <OrderCard
                  key={order.id}
                  name={order.name}
                  des={order.description}
                  img={order.img}
                  price={order.price}
                  status={order.status}
                />
              ))}
            </TabsContent>
            <TabsContent value="pending">
              {pendingOrder.map((order) => (
                <OrderCard
                  key={order.id}
                  name={order.name}
                  des={order.description}
                  img={order.img}
                  price={order.price}
                  status={order.status}
                />
              ))}
            </TabsContent>
            <TabsContent value="toShip">
              {toShipOrder.map((order) => (
                <OrderCard
                  key={order.id}
                  name={order.name}
                  des={order.description}
                  img={order.img}
                  price={order.price}
                  status={order.status}
                />
              ))}
            </TabsContent>
            <TabsContent value="shiping">
              {shipingOrder.map((order) => (
                <OrderCard
                  key={order.id}
                  name={order.name}
                  des={order.description}
                  img={order.img}
                  price={order.price}
                  status={order.status}
                />
              ))}
            </TabsContent>
            <TabsContent value="recived">
              {recievedOrder.map((order) => (
                <OrderCard
                  key={order.id}
                  name={order.name}
                  des={order.description}
                  img={order.img}
                  price={order.price}
                  status={order.status}
                />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
