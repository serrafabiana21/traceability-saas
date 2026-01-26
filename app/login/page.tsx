"use client";

import { useRouter } from "next/navigation";

import { setAuth } from "@/lib/auth";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = (role: "restaurant" | "supplier") => {
    setAuth(role);
    router.push(role === "restaurant" ? "/restaurant" : "/supplier");
  };

  return (
    <div className="page">
      <div className="container section">
        <div className="sectionHeader">
          <p className="eyebrow">Authentication</p>
          <h2>Log in to Traceability</h2>
          <p className="muted">
            Use the temporary dev buttons to sign in as a restaurant or supplier.
          </p>
        </div>

        <div className="card authCard">
          <label className="formField">
            Email address
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="textInput"
            />
          </label>
          <label className="formField">
            Password
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="textInput"
            />
          </label>
          <div className="authActions">
            <button
              type="button"
              className="button"
              onClick={() => handleLogin("restaurant")}
            >
              Login as Restaurant
            </button>
            <button
              type="button"
              className="buttonSecondary"
              onClick={() => handleLogin("supplier")}
            >
              Login as Supplier
            </button>
          </div>
          <p className="muted">
            This is a placeholder login form. Auth is stored in a cookie for now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
