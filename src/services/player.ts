import callAPI from "@/config/api";
import axios from "axios";
import { CheckoutTypes } from "./data-types";
const ROOT_PUBLIC_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";
export async function getFeatureGame() {
  const URL = "players/landingpage";
  const response = await axios.get(`${ROOT_PUBLIC_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}
export async function getDetailVoucher(id: string) {
  const URL = `players/${id}/detail`;
  const response = await axios.get(`${ROOT_PUBLIC_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}
export async function getGameCategory() {
  const URL = "players/category";
  const response = await axios.get(`${ROOT_PUBLIC_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}
export async function setCheckout(data: CheckoutTypes) {
  const url = `${ROOT_PUBLIC_API}/${API_VERSION}/players/checkout`;

  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
}
