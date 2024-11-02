import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoBagCheck } from "react-icons/io5";
const Products = () => {
  return (
    <div className="card bg-white">
      {/*  Image */}
      <div className="card-image">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="Nike Air Monarch IV"
          className=" pt-10"
        />
      </div>
      {/*  Title */}
      <div className="pl-8 sm:p-0">
        <h3 className="card-title">Nike Air Monarch IV</h3>
        {/* Rating Stars */}
        <p className="flex pt-3">
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500 " />
        </p>
        {/* Review */}
        <p className="pt-2 text-xs">(123 reviews)</p>

        {/* Price Section*/}
        <div className="flex justify-evenly w-auto ">
          <p className="mr-2">
            200
            <span className="line-through text-xs"> $140,00</span>
          </p>
          {/* BagIcon */}
          <IoBagCheck className="mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Products;
