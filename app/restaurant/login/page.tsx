"use client";

import type { FormEvent } from "react";

export default function RestaurantLoginPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Restaurant login submitted");
  };

  return (
    <main>
      <h1>Restaurant Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
