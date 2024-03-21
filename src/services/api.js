import axios from "axios";

const clientId = "o_2r6sAVRTu_TAdRBswawRrxX-w6zVvb-K4Ds8ra04s";

export const requestImages = async () => {
  const { data } = await axios.get(
    `https://api.unsplash.com/photos/?client_id=${clientId}`
  );
  return data;
};

export const requestImagesByQuery = async (query, page, perPage) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${clientId}&query=${query}&per_page=${perPage}&page=${page}`
  );
  return data;
};

export const requestPagination = async (page, perPage) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/photos/?client_id=${clientId}&per_page=${perPage}&page=${page}`
  );
  return data;
};
