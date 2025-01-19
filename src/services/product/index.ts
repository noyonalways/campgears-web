"use server";

import config from "@/config/environment";

export const getProducts = async () => {
  try {
    const res = await fetch(`${config.API_BASE_URL}/products`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  } catch (err) {
    return err;
  }
};
