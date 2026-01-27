import API from "./axios";

export const sendForm1 = async (data) => {
  try {
    const response = await API.post("/form1", data);
    return response.data;
  } catch (err) {
    throw err.response?.data || { error: err.message };
  }
};
