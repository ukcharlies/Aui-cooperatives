import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { UnverifiedUser } from "../pages/Management";
export const API_BASE_URL = "http://127.0.0.1:8000/api";

export interface regserializier {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  department: string;
  employment_number: string;
  address: string;
  password: string;
}

export interface logserializier {
  email: string;
  password: string;
}

export async function register({
  first_name,
  last_name,
  department,
  employment_number,
  address,
  phone,
  email,
  password,
}: regserializier) {
  try {
    const response = await axios.post(`${API_BASE_URL}/register/`, {
      first_name,
      last_name,
      department,
      employment_number,
      address,
      phone,
      email,
      password,
    });

    if (response.status === 201) {
      // Store only the access token in localStorage
      localStorage.setItem("accessToken", response.data.access);

      return response.data;
    } else {
      throw new Error("Signup failed: " + response.data.error);
    }
  } catch (error) {
    throw error;
  }
}

export async function login({ email, password }: logserializier) {
  try {
    const response = await axios.post(`${API_BASE_URL}/login/`, {
      email: email,
      password: password,
    });

    if (response.status === 200) {
      // Store only the access token in localStorage
      localStorage.setItem("accessToken", response.data.access);

      return response.data;
    } else {
      throw new Error("Login failed: " + response.data.error);
    }
  } catch (error) {
    throw error;
  }
}

export interface User {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  department: string | null;
  address: string;
  phone: string;
  employment_number: string;
  is_verified: boolean;
  is_superuser:boolean
}

// Define the getUser function
export async function getUser(): Promise<User | string> {
  try {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      window.location.href = "/";
      throw new Error("No access token found, Sign in");
    }

    const response = await axios.get(`${API_BASE_URL}/user/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.message === "awaiting verification") {
      return "awaiting verification";
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Handle known error responses
      if (error.response.status === 401) {
        throw new Error("Unauthorized access");
      } else if (error.response.status === 403) {
        throw new Error("Forbidden access");
      } else if (error.response.status === 404) {
        throw new Error("User not found");
      }
    }

    // Handle unknown errors
    throw new Error("An error occurred while fetching user data");
  }
}

// Define the get unverified function
export async function getUnVUser(): Promise<UnverifiedUser[] | string> {
  try {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      window.location.href = "/";
      throw new Error("No access token found, Sign in");
    }

    const response = await axios.get(`${API_BASE_URL}/unverified/users/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("An error occurred while fetching data");
  }
}

export interface Newss {
  title: string;
  thumbnail: string;
  href: string;
  desc: string;
}

export async function getNews(): Promise<Newss[] | string> {
  try {
    const response = await axios.get(`${API_BASE_URL}/news/`);
    return response.data;
  } catch (error) {
    throw new Error("An error occurred while fetching user data");
  }
}
