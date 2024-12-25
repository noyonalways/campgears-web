"use server";

import config from "@/config/envConfig";
import { TSocialLogin } from "@/types/user";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

// get current logged in user details
export const setUserToken = async (data: {
  accessToken: string;
  refreshToken: string;
}) => {
  const cookiesStore = await cookies();
  cookiesStore.set("cg_access_token", data.accessToken, {
    secure: config.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 60 * 365,
  });
  cookiesStore.set("cg_refresh_token", data.refreshToken, {
    secure: config.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 60 * 365,
  });
};

export const getAccessToken = async () => {
  const cookiesStore = await cookies();
  return cookiesStore.get("cg_access_token")?.value;
};

// get current logged in user details
export const getCurrentUser = async () => {
  const accessToken = await getAccessToken();
  let decodedToken = null;

  if (accessToken) {
    decodedToken = jwtDecode(accessToken);
  }

  return decodedToken;
};

// logout user
export const logOutUser = async () => {
  const cookiesStore = await cookies();
  cookiesStore.delete("cg_access_token");
  cookiesStore.delete("cg_refresh_token");
};

// get me
export const getMe = async () => {
  const accessToken = await getAccessToken();
  try {
    const res = await fetch(`${config.API_BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch user");
    }
    return await res.json();
  } catch (error) {
    return error;
  }
};

// social login
export const socialLogin = async (payload: TSocialLogin) => {
  try {
    const res = await fetch(`${config.API_BASE_URL}/auth/social-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error("Failed to authenticate user");
    }
    const data = await res.json();

    if (data?.success) {
      await setUserToken({
        accessToken: data?.data?.accessToken,
        refreshToken: data?.data?.refreshToken,
      });
    }

    return data;
  } catch (error) {
    return error;
  }
};
