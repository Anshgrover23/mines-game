import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Change this if your backend is hosted elsewhere

export const startGame = async (betAmount, mineCount) => {
  try {
    const response = await axios.post(`${BASE_URL}/start`, { betAmount, mineCount });
    return response.data;
  } catch (error) {
    console.error('Error starting game:', error);
    throw error;
  }
};

export const revealCell = async (index) => {
  try {
    const response = await axios.post(`${BASE_URL}/reveal`, { index });
    return response.data;
  } catch (error) {
    console.error('Error revealing cell:', error);
    throw error;
  }
};

export const cashOut = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/cashout`);
    return response.data;
  } catch (error) {
    console.error('Error cashing out:', error);
    throw error;
  }
};
