import axios from "axios";

const baseURL = "http://localhost:3001";
const token = localStorage.getItem("@rentalToken");
console.log(token)

export const api = axios.create({
  baseURL: baseURL,
  timeout: 5000,

  // headers: {
  //   "Content-Type": "application/json",
  //   Authorization: `Bearer ${token}`
  // }
});
