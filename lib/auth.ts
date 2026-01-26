export type UserRole = "restaurant" | "supplier";

const AUTH_COOKIE = "traceability_role";

export const getAuth = (): UserRole | null => {
  if (typeof document === "undefined") {
    return null;
  }

  const match = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${AUTH_COOKIE}=`));

  if (!match) {
    return null;
  }

  const value = decodeURIComponent(match.split("=")[1]);
  if (value === "restaurant" || value === "supplier") {
    return value;
  }

  return null;
};

export const setAuth = (role: UserRole) => {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${AUTH_COOKIE}=${encodeURIComponent(role)}; path=/; max-age=86400`;
};

export const clearAuth = () => {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${AUTH_COOKIE}=; path=/; max-age=0`;
};

export const authCookieName = AUTH_COOKIE;
