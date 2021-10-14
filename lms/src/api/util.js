import axios from "../shared/axios";

export const getRequest = async (url) => {
  try {
    let response = await axios.get(url);

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};

export const putRequest = async (url, data) => {
  try {
    let response = await axios.put(url, data);

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};
