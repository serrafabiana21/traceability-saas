import Link from "next/link";

const RestaurantLoginPage = () => {
  return (
    <div className="page">
      <div className="container section">
        <div className="sectionHeader">
          <h2>Restaurant Login</h2>
          <p className="muted">Access the restaurant portal to manage menus.</p>
        </div>
        <Link className="button" href="/restaurant/dashboard">
          Continue to restaurant dashboard
        </Link>
      </div>
    </div>
  );
};

export default RestaurantLoginPage;
