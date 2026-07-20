const API_URL = "http://localhost:5000/api";

export async function apiFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    credentials: "include",
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  if (!res.ok) throw new Error((await res.json()).message || "Request failed");
  return res.json();
}