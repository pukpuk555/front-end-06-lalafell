import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function OrderHistory() {
  return (
    <div>
      <div className="w-[700px]">
        <h2 className="text-4xl font-bold pb-3">Your Order</h2>
        <div className="w-[700px] h-[450px] px-4  border-[1px] border-black rounded-xl overflow-auto flex flex-col items-center">
          <Tabs defaultValue="yourOrder" className="w-full">
            <TabsList className="flex justify-between bg-white ">
              <TabsTrigger value="yourOrder" className="w-1/4 text-xl">
                Your Order
              </TabsTrigger>
              <TabsTrigger value="pending" className="w-1/4 text-xl">
                Pending
              </TabsTrigger>
              <TabsTrigger value="toShip" className="w-1/4 text-xl">
                To Ship
              </TabsTrigger>
              <TabsTrigger value="toRecive" className="w-1/4 text-xl">
                To Recive
              </TabsTrigger>
            </TabsList>
            <TabsContent value="yourOrder">
              <h2>Tab 1</h2>
            </TabsContent>
            <TabsContent value="pending">
              <h2>Tab 2</h2>
            </TabsContent>
            <TabsContent value="toShip">
              <h2>Tab 3</h2>
            </TabsContent>
            <TabsContent value="toRecive">
              <h2>Tab 4</h2>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
