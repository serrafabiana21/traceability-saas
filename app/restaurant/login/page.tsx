export default function RestaurantLoginPage() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        maxWidth: "420px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ marginBottom: "24px" }}>Restaurant login</h1>
      <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={{ fontSize: "14px" }}>Email</span>
          <input
            type="email"
            name="email"
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={{ fontSize: "14px" }}>Password</span>
          <input
            type="password"
            name="password"
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#111827",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
      <a
        href="/restaurant"
        style={{
          display: "inline-block",
          marginTop: "20px",
          color: "#2563eb",
          textDecoration: "none",
          fontSize: "14px",
        }}
      >
        Back to restaurant
      </a>
    </div>
  );
}
