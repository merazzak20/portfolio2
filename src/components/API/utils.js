import axios from "axios";

const imagebb_api = import.meta.env.VITE_IMAGEBB_API_KEY;
const hosting_key = `https://api.imgbb.com/1/upload?key=${imagebb_api}`;

export const uploadImage = async (imageData) => {
  const formData = new FormData();
  formData.append("image", imageData);

  const { data } = await axios.post(hosting_key, formData);
  return data.data.display_url;
};
