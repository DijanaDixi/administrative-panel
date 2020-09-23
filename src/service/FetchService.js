import axios from "axios";
import { getToken } from "../utilis/Common";

export const fetchData = (path) => {
  const baseUrl = "http://localhost:3333/api/";
  const token = getToken();
  const config = {
    headers: {
      Authorization: "Bearer" + token,
    },
  };
  return axios.get(`${baseUrl}${path}`, config).then(
    (response) => response.data,
    (err) => {
      console.log(err);
    }
  );
};
