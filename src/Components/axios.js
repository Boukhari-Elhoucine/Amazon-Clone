import axois from "axios";

const instance = axois.create({
  baseURL: "https://amazone-backend.herokuapp.com/",
});
export default instance;
