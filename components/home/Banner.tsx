// import { FaTruckMoving } from "react-icons/fa"

import { Delicious_Handrawn } from "next/font/google";
import { CiDeliveryTruck } from "react-icons/ci";

export const Banner = () => {
  return (
    <div className="bg-indigo-600 h-8 flex items-center ">
      <div className="flex gap-1 items-center">
        <div>
          <CiDeliveryTruck className="w-6 h-6 gap-x-2 mx-4 text-white" />
        </div>
        <p className="text-white text-center ">Free delivery on local orders</p>
      </div>
      {/* <div className="max-w-screen-xl  px-4 py-1 items-center justify-between text-white sm:flex md:px-8">
        <div className="flex gap-x-4">
          <div className="w-10 h-6 flex-none rounded-lg bg-indigo-800 flex items-center justify-center">
          
            <CiDeliveryTruck className="w-6 h-6" />
          </div>
          <p className="py-1 font-medium">
            Free shipping on orders across the nation
          </p>
        </div> */}
    </div>
  );
};