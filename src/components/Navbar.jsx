import React from "react";
import { Search } from './'
import { ShoppingCartIcon } from '@heroicons/react/24/outline';


const Navbar = () => {
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonClone bg-[#131921] text-white h-[60px]">
        <div className="flex items-center m-4">
          <img
            className="h-[35px] w-[100px]"
            src="../images/amazon.png"
            alt=""
          />
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Delivered to</div>
            <div className="test-sm xl:text-base font-bold">India</div>
          </div>
        </div>
        <div className="flex grow relative items-center">
            <Search />
        </div>
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="test-sm xl:text-base font-bold">Accounts & Lists</div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="test-sm xl:text-base font-bold">& Orders</div>
          </div>
          <div className="flex pr-3 pl-3">
            <ShoppingCartIcon className="h-[48px]" />
            <div className="mt-7 text-xs xl:text-sm font-bold">
                Cart
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-amazonClone-light_blue bg-[#232F3A] text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
          <div className="">Todays Deals</div>
          <div className="">Customer Service</div>
          <div className="">Registry</div>
          <div className="">Gift Cards</div>
          <div className="">Sell</div>
      </div>
    </header>
  );
};

export default Navbar;
