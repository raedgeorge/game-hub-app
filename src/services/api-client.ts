import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "622bc2cfa75740fd930457c843314793",
  },
});
