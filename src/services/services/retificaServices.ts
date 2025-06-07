"use server";
import dotenv from "dotenv";
import { getCookies } from "../Cookies";
import { tServicos } from "@/types/api_data";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { TNewServiceSchema } from "@/types/payloadSchemas";
dotenv.config();

const URI_API_REST_RETIFICA = process.env.API_ADDRESS;

export const getServices = async (quantidade: number): Promise<tServicos[]> => {
  const token: RequestCookie | undefined = await getCookies("token");
  const response = await fetch(
    `${URI_API_REST_RETIFICA}/services?size=${quantidade}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
      cache: "no-store",
      next: {
        tags: ["getServices"],
        revalidate: 5,
      },
    }
  );
  const data = await response.json();
  return data.content;
};

export const postNewService = async (
  payload: TNewServiceSchema
): Promise<tServicos> => {
  const token: RequestCookie | undefined = await getCookies("token");
  const response = await fetch(`${URI_API_REST_RETIFICA}/services`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token?.value}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    next: {
      tags: ["getServices"],
    },
  });
  const data = await response.json();
  return data;
};
