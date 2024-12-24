"use server";

import config from "@/config/envConfig";
import { getAccessToken } from "@/services/auth";

type FetchOptions = RequestInit & {
  headers?: HeadersInit;
};

type FetchResponse<T> = T;

export const customFetch = async <T = unknown>(
  url: string,
  options: FetchOptions = {}
): Promise<FetchResponse<T>> => {
  try {
    // Get the access token
    const accessToken = await getAccessToken();

    const fullUrl = url.startsWith("http")
      ? url
      : `${config.API_BASE_URL}${url}`;

    // Normalize headers into a plain object
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...normalizeHeaders(options.headers),
    };

    // Add Authorization header only if accessToken is present
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }

    const response = await fetch(fullUrl, {
      ...options,
      headers, // Safe merged headers
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => null);
      throw new Error(
        `HTTP error! status: ${response.status}. ${
          errorBody?.message || "Unknown error"
        }`
      );
    }

    // Return typed response data
    return response.json() as Promise<FetchResponse<T>>;
  } catch (err) {
    console.error("Fetch Error: ", err);
    throw err;
  }
};

// Helper function to normalize headers
const normalizeHeaders = (headers?: HeadersInit): Record<string, string> => {
  if (!headers) return {};

  if (headers instanceof Headers) {
    const normalizedHeaders: Record<string, string> = {};
    headers.forEach((value, key) => {
      normalizedHeaders[key] = value;
    });
    return normalizedHeaders;
  }

  if (Array.isArray(headers)) {
    return Object.fromEntries(headers);
  }

  return headers;
};
