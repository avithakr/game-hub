import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0ca68a3fe0e34b49a0a320f8f503cd9c",
  },
});
