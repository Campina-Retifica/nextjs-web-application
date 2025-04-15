"use server";
import { TLoginSchema } from "@/types/LoginSchema";
import dotenv from "dotenv";
import { setCookies } from "../Cookies";
dotenv.config();

const URI_API_REST_RETIFICA = process.env.URI_API_REST_RETIFICA;

export const authUser = async (payload: TLoginSchema) => {
  const response = await fetch(`${URI_API_REST_RETIFICA}/api/usuarios/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  console.log(response);

  const data = await response.json();
  if (data.token) {
    await setCookies("token", data.token);
    return true;
  }
  return false;
};
