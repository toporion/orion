import axios from 'axios';

const API_BASE_URL = 'https://backendp-rho.vercel.app/api/offer'; // Update if deployed

export const getUsersWithOffers = async (page = 1, limit = 10, search = '') => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/usersWithOffers?page=${page}&limit=${limit}&search=${search}`
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching users with offers:', error);
    return { totalUsers: [], pagination: {} };
  }
};
