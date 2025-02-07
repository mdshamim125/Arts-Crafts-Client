import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const CraftItemDetails = () => {
  const { id } = useParams();
  const [craftItem, setCraftItem] = useState(null);

  useEffect(() => {
    fetch(`https://art-craft-server-zeta.vercel.app/craft/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCraftItem(data);
      })
      .catch((error) => {
        console.error("Error fetching craft item details:", error);
      });
  }, [id]);

  if (!craftItem) {
    return (
      <ScaleLoader
        color="#36d7b7"
        height={100}
        width={49}
        className="text-center mt-10"
      />
    );
  }

  return (
    <div className="container mx-auto p-6 mt-16">
      <div className="">
        <div className="lg:flex justify-center gap-6">
          <div className="lg:w-3/4">
            <img
              src={craftItem.image}
              alt={craftItem.itemName}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">{craftItem.itemName}</h2>
            <p className="text-gray-600 mb-4">{craftItem.shortDescription}</p>
            <div className="mb-4">
              <span className="font-semibold">Price:</span>{" "}
              <span>{craftItem.price}</span>
            </div>
            <div className="mb-4">
              <span className="font-semibold">Rating:</span>{" "}
              <span>{craftItem.rating}</span>
            </div>
            <div className="mb-4">
              <span className="font-semibold">Customization:</span>{" "}
              <span>{craftItem.customization}</span>
            </div>
            <div className="mb-4">
              <span className="font-semibold">Processing Time:</span>{" "}
              <span>{craftItem.processingTime}</span>
            </div>
            <div className="mb-4">
              <span className="font-semibold">Stock Status:</span>{" "}
              <span>{craftItem.stockStatus}</span>
            </div>
            <div>
              <button className="btn btn-secondary mt-8">Order Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItemDetails;
