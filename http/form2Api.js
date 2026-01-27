import API from "./axios";

export const sendForm2 = async (data) => {
  try {
    const formData = new FormData();

    formData.append("organizationName", data.organization_name);
    formData.append("organizationLocation", data.organization_location);
    formData.append("state", data.states);
    formData.append("organizationWebsite", data.organization_website);
    formData.append("firstName", data.first_name);
    formData.append("lastName", data.last_name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("preferredCommunication", data.preferred_communication);
    formData.append("specialty", data.user_specialty);
    formData.append("message", data.user_message);

    if (data.files?.length) {
      data.files.forEach((file) => {
        formData.append("files", file);
      });
    }

    const response = await API.post("/form2", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (err) {
    throw err.response?.data || { error: err.message };
  }
};
