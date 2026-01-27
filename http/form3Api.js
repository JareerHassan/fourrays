import API from "./axios";

export const sendForm3 = async (formData) => {
  try {
    const response = await API.post("/form3", formData);
    return response.data;
  } catch (err) {
    throw err.response?.data || { message: err.message };
  }
};
