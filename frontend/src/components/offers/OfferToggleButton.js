import React, { useState } from "react";
import axios from "axios";

const OfferToggleButton = ({ offer }) => {
  const [isActive, setIsActive] = useState(offer.isActive);
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    setLoading(true);

    try {
      const response = await axios.patch(`/api/offer/toggleOffer/${offer._id}`);
      const { isActive } = response.data.data;

      setIsActive(isActive);
      alert(`Offer has been ${isActive ? "activated" : "deactivated"} successfully!`);
    } catch (error) {
      console.error("Error toggling offer status:", error);
      alert("Failed to toggle offer status. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <span className={`font-semibold ${isActive ? "text-green-600" : "text-red-600"}`}>
        {isActive ? "Active" : "Inactive"}
      </span>
      <button
        onClick={handleToggle}
        disabled={loading}
        className={`px-4 py-2 rounded-lg text-white font-medium ${
          isActive ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {loading ? "Processing..." : isActive ? "Deactivate" : "Activate"}
      </button>
    </div>
  );
};

export default OfferToggleButton;
