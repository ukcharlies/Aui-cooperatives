import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
export const API_BASE_URL = "http://127.0.0.1:8000";

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

export async function login({email, password}:regserializier) {
  try {
    const response = await axios.post(`${API_BASE_URL}/login/`, {
      email,
      password,
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