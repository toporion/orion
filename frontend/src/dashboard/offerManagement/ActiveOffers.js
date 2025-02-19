import React, { useEffect, useState } from "react";
import axios from "axios";

const ActiveOffers = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get("https://backendp-rho.vercel.app/api/offer/allActiveOffers"); 
        console.log(response.data.data);
        if (response.data.success) {
          setOffers(response.data.data); // Ensure the correct key is used from API response
        } else {
          alert("Failed to fetch offers");
        }
      } catch (error) {
        console.error("Error fetching offers:", error);
        alert("An error occurred while fetching offers.");
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  // Function to toggle offer status
  const toggleOfferStatus = async (offerId, currentStatus) => {
    try {
      const response = await axios.patch(`https://backendp-rho.vercel.app/api/offer/toggleOffer/${offerId}`);
      if (response.data.success) {
        alert(`Offer has been ${currentStatus ? "deactivated" : "activated"} successfully.`);
        // Update the offer list with the new status
        setOffers((prevOffers) =>
          prevOffers.map((offer) =>
            offer._id === offerId ? { ...offer, isActive: !currentStatus } : offer
          )
        );
      } else {
        alert("Failed to toggle the offer status.");
      }
    } catch (error) {
      console.error("Error toggling offer status:", error);
      alert("An error occurred while toggling the offer status.");
    }
  };

  if (loading) {
    return <div>Loading offers...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Active Offers</h1>
      <ul className="space-y-4">
        {offers.length > 0 ? (
          offers.map((offer) => (
            <li key={offer._id} className="border p-4 rounded-md shadow">
              <h2 className="text-lg font-semibold">{offer.name}</h2>
              <p>Start Date: {new Date(offer.startDate).toLocaleDateString()}</p>
              <p>End Date: {new Date(offer.endDate).toLocaleDateString()}</p>
              <p>Discount Range: {offer.discountRange.join(" - ")}</p>
              <p>Status: {offer.isActive ? "Active" : "Inactive"}</p>
              <button
                onClick={() => toggleOfferStatus(offer._id, offer.isActive)}
                className={`mt-2 px-4 py-2 text-white rounded ${
                  offer.isActive ? "bg-red-500" : "bg-green-500"
                }`}
              >
                {offer.isActive ? "Deactivate" : "Activate"}
              </button>
            </li>
          ))
        ) : (
          <p>No active offers available.</p>
        )}
      </ul>
    </div>
  );
};

export default ActiveOffers;
