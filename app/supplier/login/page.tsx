import Link from "next/link";

const SupplierLoginPage = () => {
  return (
    <div className="page">
      <div className="container section">
        <div className="sectionHeader">
          <h2>Supplier Login</h2>
          <p className="muted">Access the supplier portal to share documentation.</p>
        </div>
        <Link className="button" href="/supplier/dashboard">
          Continue to supplier dashboard
        </Link>
      </div>
    </div>
  );
};

export default SupplierLoginPage;
