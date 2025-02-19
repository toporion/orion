import React, { useEffect, useState } from "react";
import axios from "axios";
import OfferToggleButton from "./OfferToggleButton";
import axiosInstance from "../../services/axiosConfig";

const OfferList = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance=axiosInstance()

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axiosInstance.get("/api/offer");
        setOffers(response.data.offers);
      } catch (error) {
        console.error("Error fetching offers:", error);
        alert("Failed to load offers.");
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Offers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {offers.map((offer) => (
          <div key={offer._id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{offer.name}</h2>
            <p className="text-sm text-gray-600">Discount: {offer.discountRange[0]}% - {offer.discountRange[1]}%</p>
            <p className="text-sm text-gray-600">Valid: {new Date(offer.startDate).toLocaleDateString()} - {new Date(offer.endDate).toLocaleDateString()}</p>
            <OfferToggleButton offer={offer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferList;
