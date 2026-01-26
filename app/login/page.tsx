import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="page">
      <div className="container section">
        <div className="sectionHeader">
          <h2>Log in to Traceability</h2>
          <p className="muted">Choose the portal that matches your role.</p>
        </div>
        <div className="card authCard">
          <div className="authActions">
            <Link className="button" href="/restaurant/login">
              Restaurant login
            </Link>
            <Link className="buttonSecondary" href="/supplier/login">
              Supplier login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
