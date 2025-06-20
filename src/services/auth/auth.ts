"use server";
import { loginSchema } from "@/types/payloadSchemas";
import dotenv from "dotenv";
import { setCookies } from "../Cookies";
dotenv.config();

const URI_API_REST_RETIFICA = process.env.API_ADDRESS;

export const authUser = async (payload: loginSchema) => {
  const response = await fetch(`${URI_API_REST_RETIFICA}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  if (data.token) {
    await setCookies("token", data.token);
    return true;
  }
  return false;
};
