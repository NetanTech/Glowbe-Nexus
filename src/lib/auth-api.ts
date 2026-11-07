const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3003";

const ACCESS_KEY = "glowbe_access_token";
const REFRESH_KEY = "glowbe_refresh_token";
const RESET_CODE_KEY = "glowbe_reset_code";

export type AuthResponse<T = unknown> = {
  success: boolean;
  message?: string;
  data?: T;
};

export class AuthApiError extends Error {
  status: number;
  payload: AuthResponse;

  constructor(status: number, payload: AuthResponse) {
    super(payload.message || "Request failed");
    this.status = status;
    this.payload = payload;
  }
}

export async function authRequest<T>(path: string, body?: unknown) {
  const response = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body ?? {}),
  });

  const payload = (await response.json()) as AuthResponse<T>;
  if (!response.ok || payload.success === false) {
    throw new AuthApiError(response.status, payload);
  }
  return payload;
}

export function saveSession(accessToken: string, refreshToken: string) {
  localStorage.setItem(ACCESS_KEY, accessToken);
  localStorage.setItem(REFRESH_KEY, refreshToken);
}

export function saveResetCode(code: string) {
  sessionStorage.setItem(RESET_CODE_KEY, code);
}

export function readResetCode() {
  return sessionStorage.getItem(RESET_CODE_KEY) || "";
}

export function clearResetCode() {
  sessionStorage.removeItem(RESET_CODE_KEY);
}

export function readAccessToken() {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(ACCESS_KEY) || "";
}

export function clearSession() {
  localStorage.removeItem(ACCESS_KEY);
  localStorage.removeItem(REFRESH_KEY);
}

export async function fetchCurrentUser() {
  const token = readAccessToken();
  if (!token) return null;

  const response = await fetch(`${API_URL}/api/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) return null;

  const payload = (await response.json()) as AuthResponse<{
    user?: { name?: string; email?: string };
  }>;
  return payload.data?.user ?? null;
}
